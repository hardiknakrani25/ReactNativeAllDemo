import React, { Component } from "react";

import {
  AsyncStorage,
  Image,
  View,
  Text,
  ImageBackground,
  ActivityIndicator
} from "react-native";

export default class Splash extends Component {
  constructor(props) {
    super();
    // this._storeData();

    // setTimeout(() => {
    //   // this._retrieveData();
    //   this.props.navigation.navigate("AuthStack");
    // }, 1000);

    this.authentication();
  }

  //functions
  async authentication() {
    try {
      const value = await AsyncStorage.getItem("@token");

      console.log("value", value);

      if (value !== null) {
        var url = "https://c566618d.ngrok.io/protected";
        var bearer = "Bearer " + value;
        fetch(url, {
          method: "GET",
          withCredentials: true,
          credentials: "include",
          headers: {
            Authorization: bearer,
            "X-FP-API-KEY": "iphone",
            "Content-Type": "application/json"
          }
        })
          .then(responseJson => {
            if (responseJson.status == 200) {
              this.props.navigation.navigate("AppStack");
            } else {
              this.props.navigation.navigate("AuthStack");
            }
          })
          .catch(
            error => console.warn(error)

            //    this.setState({
            //     isLoading: false,
            //     message: 'Something bad happened ' + error
            // })
          );
      } else {
        this.props.navigation.navigate("AuthStack");
      }
    } catch (error) {
      // Error retrieving data
      console.warn(error);
    }
  }

  // _storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem("token", "abc");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("token");
  //     if (value != null) {
  //       console.warn(value);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    return (
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/instaLogoWhiteHD.png")}
            style={{ height: 60, width: 200 }}
          />
          <ActivityIndicator
            style={{ marginTop: 20 }}
            size="large"
            color="white"
          />
        </View>
      </ImageBackground>
    );
  }
}
