import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ImageBackground
} from "react-native";
import ImageGallery from "./ImageGallery";

import { withNavigation } from "react-navigation";

class CharacterProfiles extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "The Simpsons",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <Button
        onPress={() =>
          navigation.navigate("ImageGallery", {
            item: navigation.state.params.item
          })
        }
        title="Gallery"
        color="#f6c945"
      />
    )
  });
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
          <Image
            source={{ uri: item.url }}
            style={{
              width: "100%",
              height: "90%",
              marginTop: -100,
              marginBottom: 10,
              alignItems: "center"
            }}
            resizeMode="cover"
          />
          <Text style={[styles.charactertext]}>Name: {item.name}</Text>
          <Text style={[styles.charactertext2]}>
            Occupation: {item.occupation}
          </Text>
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
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  charactertext: {
    marginTop: -50,
    fontSize: 25,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  charactertext2: {
    color: "black",
    fontSize: 20,
    textAlign: "center"
  }
});

export default CharacterProfiles;
