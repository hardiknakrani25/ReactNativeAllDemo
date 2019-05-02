import React, { Component } from "react";
import { View } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import {
  Button,
  Container,
  Header,
  Left,
  Right,
  Icon,
  Text,
  Body,
  Title,
  Content
} from "native-base";

//import Apps
import Instagram from "./src/Instagram/App";
import Animation from "./src/Animation/App";
import PropertyFinder from "./src/PropertyFinder/navigator/navigator";
import Reg from "./src/LoginReg/navigator/navigation";
class MyHomeScreen extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header style={{ backgroundColor: "#0076ff" }}>
          <Left style={{ flexDirection: "row" }}>
            <Icon
              onPress={() => this.props.navigation.openDrawer()}
              name="md-menu"
              style={{ color: "white", marginRight: 15 }}
            />
          </Left>
          <Body>
            <Title style={{ color: "white" }}>Apps</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View
            style={{
              marginTop: 20,
              alignSelf: "center"
            }}
          >
            <Button
              style={{
                width: 150,

                justifyContent: "center"
              }}
              onPress={() => this.props.navigation.navigate("Instagram")}
            >
              <Text>Instagram</Text>
            </Button>

            <Button
              style={{ marginTop: 10, width: 150, justifyContent: "center" }}
              onPress={() => this.props.navigation.navigate("Property Finder")}
            >
              <Text>Property Finder</Text>
            </Button>

            <Button
              style={{ marginTop: 10, width: 150, justifyContent: "center" }}
              onPress={() => this.props.navigation.navigate("Animation")}
            >
              <Text>Animation</Text>
            </Button>

            <Button
              style={{ marginTop: 10, width: 150, justifyContent: "center" }}
              onPress={() => this.props.navigation.navigate("Reg")}
            >
              <Text>Reg</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: MyHomeScreen,
  Instagram,
  Animation,
  "Property Finder": PropertyFinder,
  Reg
});

const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component {
  render() {
    return (
      <Container>
        <MyApp />
      </Container>
    );
  }
}

export default App;
