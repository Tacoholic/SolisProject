import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView
} from "react-native";
import LoginForm from "./LoginForm";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "React Native App",
    headerStyle: {
      backgroundColor: "#ff793f"
    }
  };
  render() {
    console.warn("hello", this.props);
    debugger;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: "http://clipart-library.com/images/8cAEnpM6i.png"
            }}
            style={{
              width: 200,
              height: 200,
              justifyContent: "center",
              alignContent: "center",
              marginTop: 20,
              marginBottom: 20
            }}
            resizeMode="cover"
          />
          <Text style={styles.title}>Welcome, please login!</Text>
        </View>

        <View style={styles.formContainer} />
        <LoginForm navigation={this.props.navigation} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff793f"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  title: {
    color: "black",
    fontWeight: "bold"
  }
});
