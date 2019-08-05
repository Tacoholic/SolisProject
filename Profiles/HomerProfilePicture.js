import React, { Component } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0)
  };
  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };
  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1]
                })
              }
            ]
          },
          this.props.style
        ]}
      />
    );
  }
}

const App = () => (
  <View style={styles.container}>
    <ImageLoader
      style={{
          width: "100%",
          height: "100%",
          marginTop: -250,
          alignItems: "center"
      }}
      resizeMode="cover"
      source={{
        uri:
          "https://assets.fxnetworks.com/cms/prod/shows/the-simpsons/photos/simpsons-sidebar/character-facts/Homer/swsb_character_fact_homer_288x763.png"
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default ImageLoader;