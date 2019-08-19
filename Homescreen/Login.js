import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  height
} from "react-native";
import LoginForm from "./LoginForm";
import Video from "react-native-video";
import SimpsonsIntro from "./SimpsonsIntro.mp4";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "The Simpsons App",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    },
   
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Video
            source={SimpsonsIntro}
            style={styles.backgroundVideo}
            muted={false}
            repeat={true}
            resizeMode={"cover"}
            rate={1.0}
            ignoreSilentSwitch={"obey"}
          />
        </View>
        <LoginForm navigation={this.props.navigation} />

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53b4e6"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 30
  },
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
    marginTop: -100
  }
});
