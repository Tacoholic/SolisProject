import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import * as Animatable from "react-native-animatable";






export default class ExampleView extends Component {
  static navigationOptions = {
        title: "Bart's Gallery",
        headerStyle: {
          backgroundColor: "#53b4e6"
        },
        headerTintColor: "#f6c945",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      };
  handleTextRef = ref => this.text = ref;
  
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.text.transitionTo({ opacity: 0.2 })}>
        <Animatable.Text ref={this.handleTextRef}>Fade me!</Animatable.Text>
      </TouchableWithoutFeedback>
    );
  }
}

// export default class ExampleView extends Component {
//   static navigationOptions = {
//     title: "Bart's Gallery",
//     headerStyle: {
//       backgroundColor: "#53b4e6"
//     },
//     headerTintColor: "#f6c945",
//     headerTitleStyle: {
//       fontWeight: "bold"
//     }
//   };
 

//   render() {
//     return (
//       <TouchableWithoutFeedback onPress={this.bounce}>
//         <Animatable.View ref={this.handleViewRef}>
//           <Text>Bounce me!</Text>
//         </Animatable.View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }
