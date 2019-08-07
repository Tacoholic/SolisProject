import React, { Component } from "react";
import { StyleSheet, Text, Animated, View, ImageBackground } from "react-native";

import SortableGrid from "react-native-sortable-grid";

export default class Rankings extends Component {
  static navigationOptions = {
    title: "Lets play a game.",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  constructor() {
    super();
    this.numbers = [
      "Homer",
      "Bart",
      "Lisa",
      "Maggie",
      "Marge",
      "Apu",
      "Moe",
      "Barney",
      "Flanders",
      "Mr. Burns",
      "Disco Stu",
      "Dr. Nick"
    ];
    this.state = {
      animation: new Animated.Value(0)
    };
  }
  getColor() {
    let r = this.randomRGB();
    let g = this.randomRGB();
    let b = this.randomRGB();
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  randomRGB = () => 160 + Math.random() * 85;

  startCustomAnimation = () => {
    console.log("Custom Animation started!");

    Animated.timing(this.state.animation, {
      toValue: 100,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500
      }).start();
    });
  };
  getDragStartAnimation = () => {
    return {
      transform: [
        {
          scaleX: this.state.animation.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 1.5]
          })
        },
        {
          scaleY: this.state.animation.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 1.5]
          })
        },
        {
          rotate: this.state.animation.interpolate({
            inputRange: [0, 100],
            outputRange: ["0 deg", "450 deg"]
          })
        }
      ]
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: "https://backgrounddownload.com/wp-content/uploads/2018/09/simpsons-clouds-background-5.jpg"}}
          style={{ width: "100%", height: "100%"}}
        >
        <Text
          style={{ alignSelf: "center", fontWeight: "bold", marginBottom: 10, fontSize: 25, justifyContent: "center", textAlign: "center" }}
        >
          Rank your favorite Simpsons characters
        </Text>
        <SortableGrid
          blockTransitionDuration={400}
          activeBlockCenteringDuration={200}
          itemsPerRow={3}
          dragActivationThreshold={200}
          dragStartAnimation={this.getDragStartAnimation()}
          onDragRelease={itemOrder => console.log("Drag was released")}
          onDragStart={this.startCustomAnimation}
          ref={"SortableGrid"}
        >
          {this.numbers.map((letter, index) => (
            <View
              ref={"itemref_" + index}
              key={index}
              style={[styles.block, { backgroundColor: this.getColor() }]}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  textShadowColor: "red",
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 7
                }}
              >
                {letter}
              </Text>
            </View>
          ))}
        </SortableGrid>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcccc"
  },
  block: {
    flex: 1,
    margin: 8,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});
