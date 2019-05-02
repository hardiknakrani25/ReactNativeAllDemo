"use strict";
import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text
} from "react-native";

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  };

  render() {
    const item = this.props.item;
    const price = item.price_formatted.split(" ")[0];
    return (
      <TouchableHighlight onPress={this._onPress} underlayColor="#dddddd">
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: item.img_url }} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.title} numberOfLines={1}>
                {item.title}
              </Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
}

export default class SearchResults extends Component {
  data;
  constructor(props) {
    super(props);
    this.data = this.props.navigation.getParam("passProps", "X");
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item, index }) => (
    <ListItem item={item} index={index} onPressItem={this._onPressItem} />
  );

  _onPressItem = index => {
    this.props.navigation.navigate("PropertyDetails", {
      data: this.data[index]
    });
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    );
  }

  //   _keyExtractor = (item, index) => index;
  //   _renderItem = ({ item }) => {
  //     return (
  //       <TouchableHighlight underlayColor="#dddddd">
  //         <View>
  //           <Text>{item.title}</Text>
  //         </View>
  //       </TouchableHighlight>
  //     );
  //   };
  //   render() {
  //     return (
  //       <SafeAreaView>
  //         <FlatList
  //           data={this.data}
  //           keyExtractor={this._keyExtractor}
  //           renderItem={this._renderItem}
  //         />
  //       </SafeAreaView>
  //     );
  //   }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: "#dddddd"
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#48BBEC"
  },
  title: {
    fontSize: 20,
    color: "#656565"
  },
  rowContainer: {
    flexDirection: "row",
    padding: 10
  }
});
