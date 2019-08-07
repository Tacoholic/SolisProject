import React, { Component } from "react";
import FlipComponent from "react-native-flip-component";
import {
  View,
  Button,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

function FrontView(props) {
  return (
    <View>
      <Image
        source={{
          uri:
            "https://assets.fxnetworks.com/cms/prod/shows/the-simpsons/photos/swsb_character_fact_disco_550x960.png"
        }}
        style={{
          width: 380,
          height: 600,
          justifyContent: "center",
          alignContent: "center",
          marginTop: -175
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          textAlign: "center",
          color: "#2c3e50",
          fontWeight: "bold",
          fontSize: 20
        }}
      >
        Are you a Disco Stu fan?
      </Text>
      <TouchableOpacity onPress={props.flip} style={styles.button}>
        <Text style={styles.text}>If not, press here.</Text>
      </TouchableOpacity>
    </View>
  );
}

function BackView(props) {
  return (
    <View>
      <Image
        source={{
          uri:
            "https://assets.fxnetworks.com/cms/prod/shows/the-simpsons/photos/simpsons-character/Krusty/swsb_character_fact_krusty_550x960.png"
        }}
        style={{
          width: 380,
          height: 610,
          justifyContent: "center",
          alignContent: "center",
          marginTop: -175
        }}
   
      />
      <Text
        style={{
          textAlign: "center",
          color: "#2c3e50",
          fontWeight: "bold",
          fontSize: 20
        }}
      >
        Or are you a Krusty fan?
      </Text>
      <TouchableOpacity onPress={props.flip} style={styles.button}>
        <Text style={styles.text}> Go back to Disco Stu.</Text>
      </TouchableOpacity>
    </View>
  );
}
export default class BioScreen extends React.Component {
  static navigationOptions = {
    title: "React Native App",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    },
  };
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              "https://backgrounddownload.com/wp-content/uploads/2018/09/simpsons-clouds-background-5.jpg"
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <FlipComponent
            isFlipped={this.state.isFlipped}
            frontView={<FrontView flip={this.flip} />}
            backView={<BackView flip={this.flip} />}
            frontStyles={styles.frontStyles}
            backStyles={styles.backStyles}
            rotateDuration={100}
          />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  frontStyles: {
    justifyContent: "center",
    height,
    width
  },
  backStyles: {
    justifyContent: "center",
    height,
    width
  },
  button: {
    backgroundColor: "#152c43",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
    alignSelf: "center",
    borderRadius: 100,
    marginTop: 10
  },
  text: {
    color: "#bddac8",
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "center"
  }
});

