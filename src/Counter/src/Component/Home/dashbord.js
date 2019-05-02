import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";

export default class Dashbord extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "powderblue",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Dashbord</Text>
      </SafeAreaView>
    );
  }
}
