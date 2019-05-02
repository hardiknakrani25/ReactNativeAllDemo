import React, { Component } from "react";
import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>
          We have {this.props.friends.current.length} friends!
        </Text>
        <Button
          title="Add Friends"
          onPress={() => this.props.navigation.navigate("Friend")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});

const mapStateToProps = state => {
  const { friends } = state;
  return { friends };
};

export default connect(mapStateToProps)(Home);
