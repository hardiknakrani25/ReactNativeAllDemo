import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { Avatar, Image, Card, Button, Text, Icon } from "react-native-elements";

export default class PropertyDetails extends Component {
  data;
  constructor(props) {
    super(props);
    this.data = this.props.navigation.getParam("data", "X");
    console.log(this.data);
  }
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#EEF7FC" }}>
        <Card title={this.data.title}>
          <Image
            style={{ width: 250, height: 250, alignSelf: "center" }}
            source={{
              uri: this.data.img_url
            }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 10
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {this.data.price_formatted}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Property type : {this.data.property_type}
            </Text>

            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Commission : {this.data.commission}
            </Text>

            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Number of Bathroom : {this.data.bathroom_number}
            </Text>

            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Number of Bedroom : {this.data.bedroom_number}
            </Text>

            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Car Spaces : {this.data.car_spaces}
            </Text>

            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              {this.data.keywords}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              {this.data.summary}
            </Text>
          </View>

          <Button
            icon={<Icon name="call" color="#ffffff" />}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="  CALL NOW"
          />
        </Card>
      </SafeAreaView>
    );
  }
}
