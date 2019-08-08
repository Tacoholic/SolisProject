import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Platform,
  Animated,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import { SearchBar } from "react-native-elements";

// import MaterialCommunications from 'react-native-vector-icons';

export default class SearchHeader extends React.Component {
  state = {
    search: ""
  };
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          inputStyle={{ backgroundColor: "white" }}
          placeholder="Search for a character"
          placeholderTextColor={"#g5g5g5"}
          onChangeText={this.updateSearch}
          value={search}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 415,
    justifyContent: "center",
    marginTop: -50
  }
});
