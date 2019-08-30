import React from "react";
import { View, Text, StyleSheet, Image, Button, ImageBackground } from "react-native";

class CharacterProfiles extends React.Component {
  static navigationOptions = {
    title: "The Simpsons",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View>
          <ImageBackground
          source={{
            uri:
              "https://backgrounddownload.com/wp-content/uploads/2018/09/simpsons-clouds-background-5.jpg"
          }}
          style={{ width: "100%", height: "100%" }}
        >
        <Text>Name: {item.name}</Text>
        <Text>Occupation: {item.occupation}</Text>
        <Button
          title="Character Directory"
          onPress={() => this.props.navigation.navigate("CharacterDirectory")}
        />
        <Button
          title="Homepage"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        </ImageBackground>
      </View>
    );
  }
}

export default CharacterProfiles;
