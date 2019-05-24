import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { SearchBar } from "react-native-elements";
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

export default class SearchTab extends Component {
  state = {
    search: "",
    showLoading: false
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  };

  images = [
    require("../../assets/feed/1.jpg"),
    require("../../assets/feed/2.jpg"),
    require("../../assets/feed/3.png"),
    require("../../assets/feed/4.jpg"),
    require("../../assets/feed/5.jpg"),
    require("../../assets/feed/6.jpg"),
    require("../../assets/feed/7.jpg"),
    require("../../assets/feed/8.png"),
    require("../../assets/feed/9.jpg"),
    require("../../assets/feed/10.jpg"),
    require("../../assets/feed/11.jpg"),
    require("../../assets/feed/12.jpg"),
    require("../../assets/feed/1.jpg"),
    require("../../assets/feed/2.jpg"),
    require("../../assets/feed/3.png"),
    require("../../assets/feed/4.jpg"),
    require("../../assets/feed/5.jpg"),
    require("../../assets/feed/6.jpg"),
    require("../../assets/feed/7.jpg"),
    require("../../assets/feed/8.png"),
    require("../../assets/feed/9.jpg"),
    require("../../assets/feed/10.jpg"),
    require("../../assets/feed/11.jpg"),
    require("../../assets/feed/12.jpg")
  ];

  height = Dimensions.get("window").height;
  width = Dimensions.get("window").width;

  renderSectionOne() {
    return this.images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            {
              width: this.width / 3,
              height: this.height / 6
            },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}
        >
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      );
    });
  }

  updateSearch = search => {
    this.setState({ search });
    if (search.length <= 0) {
      this.setState({ showLoading: false });
    } else {
      this.setState({ showLoading: true });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <SearchBar
            lightTheme
            round
            containerStyle={{
              backgroundColor: "#ffffff",
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
            inputContainerStyle={{ backgroundColor: "#E5E4EB" }}
            showLoading={this.state.showLoading}
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
        </View>
        <View>
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
        <ScrollView style={{ marginTop: 10 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {this.renderSectionOne()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
