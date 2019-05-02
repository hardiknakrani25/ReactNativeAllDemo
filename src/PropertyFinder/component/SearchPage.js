"use strict";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image
} from "react-native";

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
    country: "uk",
    pretty: "1",
    encoding: "json",
    listing_type: "buy",
    action: "search_listings",
    page: pageNumber
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + "=" + encodeURIComponent(data[key]))
    .join("&");

  return "https://api.nestoria.co.uk/api?" + querystring;
}

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      searchString: "london",
      isLoading: false
    };
  }

  _onSearchTextChanged = event => {
    this.setState({ searchString: event.nativeEvent.text });
  };

  _handleResponse = response => {
    this.setState({ isLoading: false, message: "" });
    if (response.application_response_code.substr(0, 1) === "1") {
      console.log(response.listings);
      // this.props.navigation.navigate("SearchResults");
      this.props.navigation.navigate("SearchResults", {
        title: "Results",
        passProps: response.listings
      });
    } else {
      this.setState({ message: "Location not recognized; please try again." });
    }
  };

  _executeQuery = query => {
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: "Something bad happened " + error
        })
      );
  };

  _onSearchPressed = () => {
    const query = urlForQueryAndPage("place_name", this.state.searchString, 1);
    this._executeQuery(query);
  };

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    return (
      <SafeAreaView
        style={[styles.conatiner, { backgroundColor: "#E5F4E3", flex: 1 }]}
      >
        <Text style={styles.description}>Search house to buy!</Text>
        <Text style={styles.description}>Search by place-name Of UK</Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this._onSearchTextChanged}
            placeholder="Search via name or postcode"
          />
          <Button onPress={this._onSearchPressed} color="#48BBEC" title="Go" />
        </View>
        <View style={{ alignSelf: "center" }}>
          <Image
            source={require("../Resources/house.png")}
            style={styles.image}
          />
        </View>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 217,
    height: 138
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565"
  },
  flowRight: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch"
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginLeft: 10,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48BBEC",
    borderRadius: 8,
    color: "#48BBEC"
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  }
});
