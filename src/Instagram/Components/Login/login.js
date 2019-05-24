import React, { Component } from "react";
import {
  AsyncStorage,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Content,
  Text,
  Input,
  Item,
  InputGroup,
  Icon,
  Button,
  View
} from "native-base";

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  async logIn() {
    object = {
      email: this.state.email,
      password: this.state.password
    };
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      try {
        let response = await fetch("https://c566618d.ngrok.io/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(object)
        });

        let responseJson = await response.json();
        if (responseJson.msg == "ok") {
          console.log("token : ", responseJson.token);
          (async () => {
            try {
              await AsyncStorage.setItem("@token", responseJson.token);
              this.props.navigation.navigate("AppStack");
            } catch (error) {
              console.warn(error);
            }
          })();
        } else {
          alert(responseJson.msg);
        }
      } catch (error) {
        console.warn(error);
      }
    } else {
      alert("Enter valid email");
    }
  }

  render() {
    return (
      <Container style={styles.Container}>
        <ImageBackground
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "cover"
          }}
          source={require("../../assets/bg.jpg")}
        >
          <Image
            source={require("../../assets/instaLogoWhiteHD.png")}
            style={styles.image}
          />
          <InputGroup style={styles.input} bordered>
            <Input
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={{ color: "white" }}
              placeholder="Email"
              placeholderTextColor="white"
            />
          </InputGroup>
          <InputGroup style={styles.input} bordered>
            <Input
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              style={{ color: "white" }}
              placeholderTextColor="white"
              secureTextEntry
              placeholder="Password"
            />
          </InputGroup>

          <Button
            onPress={() => this.logIn()}
            style={{ marginTop: 20, alignSelf: "center" }}
            bordered
            light
          >
            <Text> Log In </Text>
          </Button>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: 30
              //   position: "absolute",
              //   bottom: 70
            }}
          >
            <View>
              <Text style={{ color: "white" }}>Don't Have an account? </Text>
            </View>
            <View style={{ marginLeft: 3 }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("SignUp");
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    marginTop: 22,
    alignSelf: "center",
    marginBottom: 12,

    fontSize: 48,
    fontFamily: "Noteworthy-Bold"
  },
  input: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    alignSelf: "center"
  },
  image: {
    marginTop: 170,
    marginBottom: 20,
    alignSelf: "center",
    width: 200,
    height: 60
  }
});
