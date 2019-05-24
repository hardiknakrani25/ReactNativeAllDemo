import React, { Component } from "react";
import {
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
      fullname: "",
      username: "",
      password: ""
    };
  }

  signUp() {
    object = {
      email: this.state.email.toLowerCase(),
      fullname: this.state.fullname,
      username: this.state.username,
      password: this.state.password
    };

    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      if (
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(
          this.state.password
        )
      ) {
        this.onFetchSignUpRecords(object);
      } else {
        alert(
          "Password must be 7 to 15 characters which contain at least one numeric digit and a special character"
        );
      }
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }

  async onFetchSignUpRecords(object) {
    try {
      let response = await fetch("https://c566618d.ngrok.io/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
      });

      if (response.status >= 200 && response.status < 300) {
        this.props.navigation.goBack();
      } else if (response.status == 401) {
        alert("Email already exist");
      }
    } catch (errors) {
      alert(errors);
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
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              style={{ color: "white" }}
              placeholder="Email"
              placeholderTextColor="white"
            />
          </InputGroup>

          <InputGroup style={styles.input} bordered>
            <Input
              value={this.state.fullname}
              onChangeText={fullname => this.setState({ fullname })}
              style={{ color: "white" }}
              placeholder="Full Name"
              placeholderTextColor="white"
            />
          </InputGroup>

          <InputGroup style={styles.input} bordered>
            <Input
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              style={{ color: "white" }}
              placeholder="User Name"
              placeholderTextColor="white"
            />
          </InputGroup>

          <InputGroup style={styles.input} bordered>
            <Input
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={{ color: "white" }}
              placeholderTextColor="white"
              secureTextEntry
              placeholder="Password"
            />
          </InputGroup>

          <Button
            onPress={() => this.signUp()}
            style={{ marginTop: 20, alignSelf: "center" }}
            bordered
            light
          >
            <Text> Sign Up </Text>
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
              <Text style={{ color: "white" }}>Already Have an account? </Text>
            </View>
            <View style={{ marginLeft: 3 }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack(null);
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  Log In
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
    marginTop: 130,
    marginBottom: 20,
    alignSelf: "center",
    width: 200,
    height: 60
  }
});
