import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  LayoutAnimation,
  UIManager
} from "react-native";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class BallBounce extends Component {
  static navigationOptions = {
    title: "Ball Bounce",
    headerStyle: {
      backgroundColor: "#82ccdd"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: "bold"    
  };
  constructor(props) {
    super(props);
    this.state = { position: "flex-start" };
  }

  changePosition = position => {
    LayoutAnimation.spring();
    this.setState({
      position
    });
  };

  render() {
    return (
      <View style={[styles.container, { justifyContent: this.state.position }]}>
        <Image
          source={{ uri: "https://img.pngio.com/football-png-images-images-of-soccer-balls-png-2400_2359.png" }}
          style={{ width: 75, height: 75 }}
        />
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.button}
            title="Top"
            onPress={() => this.changePosition("flex-start")}
          />
          <Button
            style={styles.button}
            title="Middle"
            onPress={() => this.changePosition("center")}
          />
          <Button
            style={styles.button}
            title="Bottom"
            onPress={() => this.changePosition("flex-end")}
          />
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
    backgroundColor: "#F5FCFF",
    paddingTop: 64,
    paddingBottom: 32,
    backgroundColor: "#82ccdd"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 14,
    width: "100%",
    backgroundColor: "#e55039"
  },
  button: {
    width: 100
  }
});
