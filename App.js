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

import Instagram from "./src/Instagram/App";

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
            <Button onPress={() => this.props.navigation.navigate("Instagram")}>
              <Text>Instagram</Text>
            </Button>

            <Button
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Instagram")}
            >
              <Text>Instagram</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

// class MyNotificationsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ marginTop: 100, marginLeft: 100 }}>
//         <Button onPress={() => this.props.navigation.goBack()}>
//           <Text>Go back home</Text>
//         </Button>
//       </View>
//     );
//   }
// }

const MyDrawerNavigator = createDrawerNavigator({
  Home: MyHomeScreen,
  Instagram
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
