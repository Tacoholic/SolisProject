import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import HomeScreen from "./Homescreen/Homescreen";
import DetailsScreen from "./Homescreen/DetailsScreen";
import SettingsScreen from "./Homescreen/SettingsScreen";
import ProfileScreen from "./Homescreen/ProfileScreen";
import BioScreen from "./Homescreen/BioScreen";
import EmployeeDirectory from "./Homescreen/EmployeeDirectory";
import HomerSimpson from "./Profiles/HomerSimpson";
import BartSimpson from "./Profiles/BartSimpson";
import Login from "./Homescreen/Login";

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: HomeScreen,
    Details: DetailsScreen,
    Bio: BioScreen,
    EmployeeDirectory: EmployeeDirectory,
    HomerSimpson: HomerSimpson,
    BartSimpson: BartSimpson
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);
