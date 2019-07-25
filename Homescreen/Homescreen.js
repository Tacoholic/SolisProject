import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import DetailsScreen from "./DetailsScreen";
import { Header } from "react-native/Libraries/NewAppScreen";


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Blush Directory",
    headerStyle:{
      backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: 'bold',
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
        <Text>Home Screen</Text>
        {/* <Header
          image
          imageSource={{
            uri:
              "https://anotherangle.eu/wp-content/uploads/2014/06/C.H.I.C.A.G.O.-2048.jpg"
          }}
        /> */}
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here"
            });
          }}
        />
        <Button
          title="Your Bio"
          onPress={() => this.props.navigation.navigate("Bio")}
        />
        <Button
          title="Employees list"
          onPress={() => this.props.navigation.navigate("EmployeeDirectory")}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
    },
  }
);
const ExampleScreen = View;
const Home = createStackNavigator(
  {
    Feed: ExampleScreen,
    Profile: ExampleScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#000"
      }
    },
    navigationOptions: {
      tabBarLabel: "Home!"
    }
  }
);

const Tabs = createBottomTabNavigator({ Home });

export default HomeScreen;
