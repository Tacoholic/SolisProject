import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import DetailsScreen from "./DetailsScreen";
import { Header } from "react-native/Libraries/NewAppScreen";

class HomeScreen extends React.Component {
  static navigationOptions = {
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
        onPress={() => alert("You have 9 matches today!")}
        title="INFO"
        color="fff"
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
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png"
            }}
            style={{
              width: 380,
              height: 434,
              justifyContent: "center",
              alignContent: "center",
              marginTop: 20
            }}
            resizeMode="cover"
          />
          <Text style={styles.home_text}>Welcome</Text>
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
            title="Character Directory"
            onPress={() => this.props.navigation.navigate("EmployeeDirectory")}
          />
        </ImageBackground>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
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
      }
    }
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

const styles = StyleSheet.create({
  home_text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  }
});

const Tabs = createBottomTabNavigator({ Home });

export default HomeScreen;
