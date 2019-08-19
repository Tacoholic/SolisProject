import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import AsyncStorage from "@react-native-community/async-storage";

import navigation from "react-navigation";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email or username"
          placeholderTextColor="black"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this._signInAsync()}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("RegForm")}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
  _signInAsync() {

    this.props.navigation.navigate("Home");
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10,
    borderRadius: 25
  },
  buttonContainer: {
    backgroundColor: "#ffaf40",
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 100
  },
  buttonText: {
    textAlign: "center",
    color: "red",
    fontWeight: "700"
  },
  signupTextCont:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  },
  signupText: {
    color: "#f6c945",
    fontSize: 16,
    fontWeight: "bold"
  },
  signupButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "500"
  }
});


