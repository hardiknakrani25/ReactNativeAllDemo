import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import friendReducer from "./FriendReducer";

const store = createStore(friendReducer);

import AppNavigator from "./App/Navigation/navigation";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
