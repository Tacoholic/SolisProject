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
class HomerSimpson extends React.Component {
  static navigationOptions = {
    title: "Homer Simpson Profile",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <Button
        onPress={() => alert("Homer loves to swim in rivers")}
        title="Facts"
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
        <Text style={[styles.homer_text]}>Homer Simpson</Text>
        <Text>Hometown: Springfield</Text>
        <Text>Occupation: Nuclear Safety Inspector</Text>
        <Text>Social Media Handles</Text>
        <Button
          title="Go To Next Profile"
          onPress={() => this.props.navigation.navigate("BartSimpson")}
        />
        <Button
          title="Go to Character Directory"
          onPress={() => this.props.navigation.navigate("EmployeeDirectory")}
        />
        <Button
          title="Go back to the home page"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  homer_text: {
    fontSize: 30
  },
  item: {
    fontSize: 30,
    padding: 10,
    height: 20,
    color: "green"
  }
});
export default HomerSimpson;


