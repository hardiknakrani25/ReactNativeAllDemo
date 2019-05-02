import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  Button,
  Alert
} from "react-native";
import styles from "./styles";

export default class Home extends Component {
  url = "http://localhost:3000/login";

  state = {
    username: "",
    Passsword: ""
  };

  onLogin = () => {
    const { username, Passsword } = this.state;

    fetch(this.url, {
      method: "POST",
      body: JSON.stringify(this.state), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => this.props.navigation.navigate("Counter"))
      .catch(error =>
        Alert.alert("Error", "Username or password mismatch", [
          {
            text: "OKAY"
          }
        ])
      );
  };

  render() {
    return (
      <SafeAreaView
        style={{
          justifyContent: "center",
          backgroundColor: "powderblue",
          flex: 1
        }}
      >
        <View>
          <Text style={styles.heading}>Login</Text>
          <View style={styles.view}>
            <TextInput
              onChangeText={text =>
                this.setState({
                  username: text
                })
              }
              style={[
                styles.input,
                {
                  marginTop: 20
                }
              ]}
              placeholder={"Enter name"}
            />
          </View>

          <View style={styles.view}>
            <TextInput
              onChangeText={pass =>
                this.setState({
                  Passsword: pass
                })
              }
              style={[
                styles.input,
                {
                  marginTop: 20
                }
              ]}
              secureTextEntry={true}
              placeholder={"Enter Passsword"}
            />
          </View>

          <Button title={"Login"} onPress={() => this.onLogin()} />
        </View>
      </SafeAreaView>
    );
  }
}
