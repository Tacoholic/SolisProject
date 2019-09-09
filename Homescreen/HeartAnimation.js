import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import task from "./task.json";

class HeartAnimation extends React.Component {
  static navigationOptions = {
    title: "The Simpsons",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <LottieView
          style={{ width: 400, height: 400 }}
          source={require('./task.json')}
          autoPlay
          loop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
export default HeartAnimation;
