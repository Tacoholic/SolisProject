import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CircleSizeSelector from "react-native-circle-size-selector";
type State = {
  value: number
};
const InitialValue = 1;
export default class App extends Component<void, State> {
    static navigationOptions = {
        title: "Question of the day",
        headerStyle: {
          backgroundColor: "#53b4e6"
        },
        headerTintColor: "#f6c945",
        headerTitleStyle: "bold"    
      };
  state: State = {
    value: InitialValue
  };
  onChange = (value: number) => {
    this.setState({ value });
  };
  render() {
    return (
      <View style={styles.container}>
          <View>
              <Text style={styles.question}>On a scale from 1 to 10, how do you rank Sunday's episode?</Text>
          </View>
        <View style={styles.parent}>
          <CircleSizeSelector
            minValue={1}
            maxValue={10}
            initialValue={InitialValue}
            onChange={this.onChange}
          >
            <View>
              <Text style={styles.text}>{this.state.value}</Text>
            </View>
          </CircleSizeSelector>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  parent: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#96C8C8"
  },
  question: {
      fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 30
  }
});
