import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "../home";
import Friend from "../friend";
const AppNavigator = createStackNavigator(
  {
    Home,
    Friend
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
