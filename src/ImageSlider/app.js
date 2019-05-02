import React, { Component } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground
} from "react-native";

const Images = [
  {
    uri: "https://cdn-images-1.medium.com/max/800/1*5LmPlq2XA8Lq7DXfcETP5w.png",
    label: "JavaScript"
  },
  {
    uri: "https://cdn-images-1.medium.com/max/800/1*QWonaeAXMWJkRiAUMejGPg.png",
    label: "Python"
  },
  {
    uri: "https://cdn-images-1.medium.com/max/800/1*7nBxisYFeHkKdnd70xRwrA.png",
    label: "Java"
  },
  {
    uri: "https://cdn-images-1.medium.com/max/800/1*YN_Efcu45xLg6hdssYD2Yw.png",
    label: "C#"
  },

  {
    uri: "https://cdn-images-1.medium.com/max/800/1*1-G-GB4SvCZG1cerX29MTg.png",
    label: "C++"
  }
];

export default class App extends Component {
  state = {
    index: 0,
    imageWidth: null
  };

  nextImage = event => {
    const { index, imageWidth } = this.state,
      X = event.nativeEvent.locationX,
      delta = X < imageWidth / 2 ? -1 : +1;

    let newIndex = (index + delta) % Images.length;

    if (newIndex < 0) {
      newIndex = Images.length - Math.abs(newIndex);
    }

    this.setState({
      index: newIndex
    });
  };

  onImageLayout = event => {
    this.setState({ imageWidth: event.nativeEvent.layout.width });
  };

  render() {
    const image = Images[this.state.index];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.empty} />
        <TouchableHighlight onPress={this.nextImage} style={styles.image}>
          <ImageBackground
            source={{ uri: image.uri }}
            style={styles.image}
            onLayout={this.onImageLayout}
          >
            <Text style={styles.imageLabel}>{image.label}</Text>
          </ImageBackground>
        </TouchableHighlight>
        <View style={styles.empty} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#abcdef"
  },
  image: {
    flex: 2,
    width: 320,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  imageLabel: {
    textAlign: "center",
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    color: "white",
    width: 320
  },
  empty: {
    flex: 1
  }
});
