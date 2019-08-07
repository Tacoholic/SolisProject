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
      backgroundColor: "#53b4e6"
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
          source={{ uri: "https://assets.fxnetworks.com/cms/prod/shows/the-simpsons/photos/swsb_character_fact_mrteeny_550x960.png" }}
          style={{ width: 100, height: 150 }}
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
    backgroundColor: "#53b4e6",
    paddingTop: 64,
    paddingBottom: 32,
    backgroundColor: "#53b4e6"
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
