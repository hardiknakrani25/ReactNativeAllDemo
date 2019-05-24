import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Platform } from "react-native";

import {
  Header,
  Icon,
  Container,
  Content,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";

import CardComponent from "../CardComponent";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={[styles.androidHeader]}>
          <Left>
            <Icon name={"camera"} style={{ padding: 10 }} />
          </Left>
          <Body style={[styles.androidHeaderTitle]}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Instagram</Text>
          </Body>
          <Right>
            <Icon name={"send"} style={{ padding: 10 }} />
          </Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Stories</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: "bold" }}> Watch All</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/storiesHeaderThumbnails/1.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/storiesHeaderThumbnails/2.jpeg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/storiesHeaderThumbnails/3.jpeg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/storiesHeaderThumbnails/4.jpeg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/storiesHeaderThumbnails/5.jpeg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/storiesHeaderThumbnails/6.jpeg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/storiesHeaderThumbnails/7.jpeg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/storiesHeaderThumbnails/8.jpeg")}
                />
              </ScrollView>
            </View>
          </View>

          <CardComponent imageSource="1" likes="100" />

          <CardComponent imageSource="2" likes="200" />

          <CardComponent imageSource="3" likes="300" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        backgroundColor: "white"
      }
    })
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: "flex-end"
      }
    })
  }
});
