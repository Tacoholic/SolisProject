import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import t from "tcomb-form-native";
import { Button } from "react-native-elements";


const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  password: t.String,
  terms: t.Boolean
});

const options = {

    fields: {
        email: {
            error: "You need an email to sign up"
        },
        password: {
            error: "Doh! Pick a better password"
        },
        terms: {
            label: 'Agree to Terms',
        },
    },
};

export default class RegForm extends Component {
    static navigationOptions = {
        title: "Signup",
        headerStyle: {
          backgroundColor: "#53b4e6"
        },
        headerTintColor: "#f6c945",
        headerTitleStyle: {
          fontWeight: "bold"
        },
      };

      handleSubmit = () => {
          const value = this._form.getValue();
          console.log('value', value);
      }


  render() {
    return (
      <View style={styles.container}>
        <Form 
            ref={c => this._form = c}
            type={User}
            options={options}
            secureTextEntry
        />
        <Button 
            title="Sign up!"
            onPress={this.handleSubmit}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});
