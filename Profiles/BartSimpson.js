import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  List,
  ListItem
} from "react-native";
class BartSimpson extends React.Component {
  static navigationOptions = {
    title: "Bart Simpson's Profile",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: <Button onPress={() => alert("")} title="Facts" color="fff" />
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri:
              "https://img.huffingtonpost.com/asset/579f38881200007404a54711.jpeg?ops=crop_0_104_736_464,scalefit_720_noupscale"
          }}
        />
        <Text style={styles.bart_text}>Bart Simpson</Text>
        <Text>Hometown: Springfield</Text>
        <Text>Occupation: 40 yr-old student</Text>
        <Text>Social Media Handles</Text>
        <Button
          title="Go To Next Profile"
          onPress={() => this.props.navigation.navigate("BartSimpson")}
        />
        <Button
          title="Go back to the home page"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go to Character Directory"
          onPress={() => this.props.navigation.navigate("EmployeeDirectory")}
        />
        <Button
          title="Go to previous profile"
          onPress={() => this.props.navigation.navigate("HomerSimpson")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bart_text: {
    fontSize: 30
  },
  item: {
    fontSize: 30,
    padding: 10,
    height: 20,
    color: "green"
  }
});
export default BartSimpson;
