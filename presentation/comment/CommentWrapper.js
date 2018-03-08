// Import React
import React from "react";
import {VelocityTransitionGroup} from 'velocity-react'
import {velocityHelpers} from 'velocity-react'
import './comment.css'
require('velocity-animate');
require('velocity-animate/velocity.ui');

var Animations = {
    // Register these with UI Pack so that we can use stagger later.
    In: velocityHelpers.registerEffect({
        calls: [
            [{
                transformPerspective: [ 800, 800 ],
                transformOriginX: [ '50%', '50%' ],
                transformOriginY: [ '100%', '100%' ],
                marginBottom: 0,
                opacity: 1,
                rotateX: [0, 0],
                translateX: '-=3000px',
            }, 1, {
                easing: 'ease-out',
                display: 'block',
            }]
        ],
    }),

    Out: velocityHelpers.registerEffect({
        calls: [
            [{
                transformPerspective: [ 800, 800 ],
                transformOriginX: [ '50%', '50%' ],
                transformOriginY: [ '0%', '0%' ],
                marginBottom: -30,
                opacity: 0,
                rotateX: -70,
            }, 1, {
                easing: 'ease-out',
                display: 'block',
            }]
        ],
    }),
};

export default class CommentWrapper extends React.Component {
    constructor(){
        super()

        this.state= {
            children: [],
            key: 0,
            // ws を定義する
            ws: null,
            open: false,
        }

    }
    componentDidMount() {
        var ws = new WebSocket("ws://157.65.168.239:8080");
        ws.onmessage = this.handleMessage.bind(this);
        this.setState({ws: ws});
    }

    componentWillUnmount() {
        this.state.ws.close();
    }


    send() {
        this.state.ws.send(this.refs.comment.value);
    }

    handleMessage(msg) {
        this.state.key = this.state.key + 1;
        this.state.children.push(<h2 className={'comment' + this.state.key%10} key={this.state.key}>{JSON.parse(msg.data)}</h2>)
        setTimeout(this.shift(this).bind(this), 9000);
        this.setState(this.state)
    }

    shift(data) {
        let it = this;
        return function () {
            it.state.children.shift();
            it.setState(it.state);
        }
    }



    render() {
        var enterAnimation = {
            animation: Animations.In,
            stagger: 3000,
            duration: 9000,
            backwards: true,
            display: 'block',
            style: {
                // Since we're staggering, we want to keep the display at "none" until Velocity runs
                // the display attribute at the start of the animation.
                display: 'none',
            },
        };

        var leaveAnimation = {
            animation: Animations.Out,
            stagger: 0,
            duration: 0,
            backwards: true,
        };

        return (
            <div id="test" style={{ color: "black", width: "100%", height: "100%", position: "absolute" }}>
                <VelocityTransitionGroup enter={enterAnimation} leave={leaveAnimation}>
                    {this.state.children}
                </VelocityTransitionGroup>
                <div style={{ bottom:"0px", position: "absolute", }}>
                    <input ref="comment" type="text"></input>
                    <button onClick={() => this.send()}
                    >send</button>
                </div>

            </div>
        );
    }
}