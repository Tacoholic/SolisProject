import React from "react";
import { Button, View, Text } from "react-native";
class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Screen</Text>
          <Text>Whats up</Text>
          <Button
            title="Go to Details again"
            onPress={() => this.props.navigation.push("Details")}
          />
          <Button
            title="Go back to the home page"
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
  
  export default SettingsScreen;
  