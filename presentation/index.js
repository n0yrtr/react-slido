// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  overwhole: require('../assets/overwhole.png')
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Timin Team
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            DDD/React/TestCode(DBUnit)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Member
          </Heading>
          <List>
            <ListItem>西田 直矢：DDD React</ListItem>
            <ListItem>松本 陸　：DDD React</ListItem>
            <ListItem>田中 菫　：テストコード アイコン作成</ListItem>
            <ListItem>平井 望　：React CSS デザイン</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            目的
          </Heading>
          <List>
            <ListItem>DDDの理解</ListItem>
            <ListItem>DDDを用いて一つのプロジェクト(最小構成)を作る</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="tertiary" caps>tech</Heading>
          <Heading size={4} textColor="secondary">基盤</Heading>
          <List>
            <ListItem>SpringBoot</ListItem>
            <ListItem>Thymeleaf4</ListItem>
            <ListItem>Doma2</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="tertiary" caps>tech</Heading>
          <Heading size={4} textColor="secondary">DDD</Heading>
          <List>
            <ListItem>戦術的設計</ListItem>
            <ListItem>Service/Entity/ValueObject</ListItem>
            <ListItem>コレクションオブジェクト</ListItem>
            <ListItem>DB設計バイテンポラルモデル</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="tertiary" caps>tech</Heading>
          <List>
            <Image src={images.overwhole}/>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="tertiary" caps>tech</Heading>
          <Heading size={4} textColor="secondary">React</Heading>
          <List>
            <ListItem>webpack.js</ListItem>
            <ListItem>babel.js</ListItem>
            <ListItem>JSX</ListItem>
            <ListItem>ReactDnD(Drag and drop library)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="tertiary" caps>tech</Heading>
          <Heading size={4} textColor="secondary">TestCode</Heading>
          <List>
            <ListItem>JUnit4</ListItem>
            <ListItem>DBUnit</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>

      </Deck>
    );
  }
}
