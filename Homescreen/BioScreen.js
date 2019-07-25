import React from "react";
import { Button, View, Text, StyleSheet, Image, Animated } from "react-native";

class BioScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <Button
        onPress={() => alert("You have 9 matches today!")}
        title="INFO"
        color="fff"
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri:
              "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2011/08/23/23827615-simpson_homer_headshot.jpg?v=1314140241"
          }}
        />
        <Text>Name: Christian Solis</Text>
        <Text>Hometown: Chicago, IL</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
export default BioScreen;
