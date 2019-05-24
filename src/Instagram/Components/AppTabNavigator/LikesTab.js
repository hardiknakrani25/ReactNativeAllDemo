import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  FlatList,
  Image
} from "react-native";
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

import { ButtonGroup, ListItem } from "react-native-elements";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "started following you"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "like your photo"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "left comment on your photo"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "mention you in comment"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "started following you"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "like your photo"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "left comment on your photo"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "mention you in comment"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "started following you"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "like your photo"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "left comment on your photo"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "mention you in comment"
  }
];

const followingList = [
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "liked photos",
    time: "12m",
    image_url1:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "liked photos",
    time: "17m",
    image_url1:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "liked photos",
    time: "48m",
    image_url1:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "liked photos",
    time: "1h",
    image_url1:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "liked photos",
    time: "12h",
    image_url1:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "liked photos",
    time: "3d",
    image_url1:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  }
];

export default class LikesTab extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedIndex: 1
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-heart" style={{ color: tintColor }} />
    )
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      topDivider={true}
      subtitleStyle={{ color: "#727272" }}
      subtitle={item.subtitle}
      bottomDivider={true}
      leftAvatar={{ source: { uri: item.avatar_url } }}
      rightAvatar={{ source: { uri: item.avatar_url } }}
    />
  );

  followingListRender = ({ item }) => (
    <ListItem
      leftElement={<Text>{item.time}</Text>}
      title={item.name}
      topDivider
      subtitleStyle={{ color: "#727272" }}
      subtitle={item.subtitle}
      bottomDivider
      leftAvatar={{ source: { uri: item.avatar_url } }}
      rightElement={
        <Image
          style={{ height: 50, width: 50 }}
          source={{ uri: item.image_url1 }}
        />
      }
    />
  );

  renderSelectedList() {
    if (this.state.selectedIndex == 1) {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
      );
    }
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={followingList}
        renderItem={this.followingListRender}
      />
    );
  }

  render() {
    const buttons = ["Following", "You"];
    const { selectedIndex } = this.state;
    return (
      <Container style={styles.container}>
        <Header style={[styles.androidHeader]}>
          <Left />
          <Body style={[styles.androidHeaderTitle]}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Activity</Text>
          </Body>
          <Right />
        </Header>
        <View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            // buttonStyle={{ borderRadius: 10 }}
            buttons={buttons}
            selectedButtonStyle={{ backgroundColor: "black" }}
            containerStyle={{ height: 30 }}
          />
          <View>{this.renderSelectedList()}</View>
        </View>

        <Content />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
