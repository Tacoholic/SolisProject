import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  List,
  ListItem,
  ImageBackground
} from "react-native";

import TEMP_CHARACTERS from "../Data/Characters";
import LisaGallery from "./LisaGallery";

import { withNavigation } from "react-navigation";

class LisaSimpson extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Lisa Simpson's Profile",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: <Button onPress={() => navigation.navigate("LisaGallery")} title="Gallery" color="#f6c945" />
  });
  render() {
    const characters = TEMP_CHARACTERS;
    return (
      <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://backgrounddownload.com/wp-content/uploads/2018/09/simpsons-clouds-background-5.jpg"
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            marginTop: -250,
            alignItems: "center"
          }}
          resizeMode="cover"
          source={{
            uri:
              "https://assets.fxnetworks.com/cms/prod/shows/the-simpsons/photos/simpsons-character/Lisa/swsb_character_fact_lisa_550x960.png"
          }}
        />
    
    <Text style={[styles.homer_text]}>
            First name: {characters[3].name}
          </Text>
          <Text style={[styles.homer_text2]}>
            Occupation: {characters[3].occupation}
          </Text>

        <Button
          style={[styles.button]}
          title="Next Profile"
          onPress={() => this.props.navigation.navigate("MaggieSimpson")}
        />
        <Button
          title="Character Directory"
          onPress={() => this.props.navigation.navigate("EmployeeDirectory")}
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
homer_text: {
  fontSize: 35,
  color: "black",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
},
homer_text2: {
  color: "black",
  fontSize: 20,
  textAlign: "center"
},
item: {
  fontSize: 30,
  padding: 10,
  height: 20,
  color: "green"
},
button: {
  color: "red"
}
});
export default withNavigation(LisaSimpson)

