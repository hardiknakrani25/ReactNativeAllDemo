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
  Title
} from "native-base";

class MyHomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "red" }}>
          <Left style={{ flexDirection: "row" }}>
            <Icon
              onPress={() => this.props.navigation.openDrawer()}
              name="md-menu"
              style={{ color: "white", marginRight: 15 }}
            />
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ marginTop: 100, marginLeft: 100 }}>
          <Button
            onPress={() => this.props.navigation.navigate("Notifications")}
          >
            <Text>Go to notifications</Text>
          </Button>
        </View>
      </Container>
    );
  }
} // End of MyHomeScreen class

class MyNotificationsScreen extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 100, marginLeft: 100 }}>
        <Button onPress={() => this.props.navigation.goBack()}>
          <Text>Go back home</Text>
        </Button>
      </View>
    );
  }
} //End of MyNotificationsScreen class

const MyDrawerNavigator = createDrawerNavigator({
  MyHomeScreen,
  MyNotificationsScreen
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
} //End of App class

export default App;
