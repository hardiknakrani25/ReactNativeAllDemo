// import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import SearchResults from "../component/SearchResults";
import SearchPage from "../component/SearchPage";
import PropertyDetails from "../component/propertyDetails";
const AppNavigator = createStackNavigator(
  {
    SearchPage,
    SearchResults,
    PropertyDetails
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
