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

export default class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchText: ""
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(text) {
    this.setState({ searchText: text });
    this.props.updateSearch(text)
  }


  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          inputStyle={{ backgroundColor: "white" }}
          ref={(ref) => this.searchBar = ref }
          value={this.state.searchText}
          placeholder="Search for a character..."
          placeholderTextColor={"red"}
          onChangeText={(text) => this._handleResults(text)}
          results={search}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 390,
    justifyContent: "center",
    marginTop: -50
  }
});