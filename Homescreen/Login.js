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
  static navigationOptions = {
    title: "React Native App",
    headerStyle: {
      backgroundColor: "#ff793f"
    }
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} />
          <Text style={styles.title}>Welcome, please login!</Text>
        </View>

        <View style={styles.formContainer} />
        <LoginForm />
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
