import React, { Component } from "react";
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";

import { connect } from "react-redux";

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%"
          }}
        >
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Increment</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {this.props.counter}
          </Text>

          <TouchableOpacity onPress={() => this.props.decreseCounter()}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Decerement</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    decreseCounter: () => dispatch({ type: "DECREASE_COUNTER" })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "powderblue"
  }
});
