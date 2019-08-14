import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CircleSizeSelector from "react-native-circle-size-selector";


const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D"
];

export default class CircleSize extends Component<void, State> {
    static navigationOptions = {
        title: "Question of the day",
        headerStyle: {
          backgroundColor: "#53b4e6"
        },
        headerTintColor: "#f6c945",
        headerTitleStyle: "bold"    
      };

state = {
  value: 1
};
  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const backgroundColor = colors[value -1];
    return (
      <View style={styles.container}>
          <View>
              <Text style={styles.question}>How do you rank Sunday's episode?</Text>
          </View>
        <View style={styles.parent}>
          <CircleSizeSelector
            minValue={1}
            maxValue={10}
            initialValue={this.state.value}
            onChange={this.onChange}
            currentValueCircleStyle = {{ backgroundColor: backgroundColor }}
          >
            <View>
              <Text>{this.state.value}</Text>
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
    alignItems: "center",
    backgroundColor: "#53b4e6"
  },
  parent: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#96C8C8"
  },
  question: {
      fontSize: 40,
      marginTop: -150,
      marginBottom: 30,
      marginLeft: 10,
      marginRight: 10,
      fontWeight: "bold"
  }
});
