import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Platform,
  Animated,
  ScrollView,
  ImageBackground
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

class EmployeeDirectory extends React.Component {
  static navigationOptions = {
    title: "Character Directory",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTintStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <Button
        onPress={() =>
          alert("Don't forget to register on our app for prizes and surprises!")
        }
        title="INFO"
        color="#f6c945"
      />
    )
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center"
        }}
      >
        <ImageBackground
          source={{
            uri:
              "https://backgrounddownload.com/wp-content/uploads/2018/09/simpsons-clouds-background-5.jpg"
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Button
            title="Homer Simpson"
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
          />
          <Button
            title="Bart Simpson"
            onPress={() => this.props.navigation.navigate("BartSimpson")}
          />
          <Button
            title="Lisa Simpson"
            onPress={() => this.props.navigation.navigate("")}
          />
          <Button
            title="Maggie Simpson"
            onPress={() => this.props.navigation.navigate("")}
          />
          <Button
            title="Marge Simpson"
            onPress={() => this.props.navigation.navigate("")}
          />
          <Button
            title="Moe"
            onPress={() => this.props.navigation.navigate("")}
          />
          <Button
            title="Chief Wiggum"
            onPress={() => this.props.navigation.navigate("")}
          />
          <Button
            title="Apu"
            onPress={() => this.props.navigation.navigate("")}
          />
          <Button
            title="Mr. Burns"
            onPress={() => this.props.navigation.navigate("")}
          />
          <Button
            title="Ned Flanders"
            onPress={() => this.props.navigation.navigate("")}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate("Home")}
            color="red"
          />
          <View style={styles.go_back}>
            <Button
              title="Go back"
              onPress={() => this.props.navigation.goBack()}
              color="red"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  employee_list: {
    color: "red",
    fontSize: 55,
    fontWeight: "bold",
    marginTop: -150
  },
  go_back: {
    color: "red"
  }
});

export default EmployeeDirectory;
