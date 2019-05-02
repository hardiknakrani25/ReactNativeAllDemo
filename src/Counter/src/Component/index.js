import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home/home";
import Dashbord from "./Home/dashbord";
import Counter from "../../App";

const AppNavigator = createStackNavigator(
  {
    Home,
    Dashbord,
    Counter
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
