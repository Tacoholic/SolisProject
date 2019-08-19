import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Animated,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import SearchHeader from "./SearchHeader";

import { withNavigation } from "react-navigation";

import Row from "../Components/Row";
import Button from "../Components/Button";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import { SearchBar } from "react-native-elements";

const items = [
  { name: "Homer Simpson", screen: "HomerSimpson" },
  { name: "Marge Simpson", screen: "MargeSimpson" },
  { name: "Bart Simpson", screen: "BartSimpson" },
  { name: "Lisa Simpson", screen: "LisaSimpson" },
  { name: "Maggie Simpson", screen: "MaggieSimpson" },
  { name: "Barney Gumble", screen: "BarneyGumble" },
  { name: "Kent Brockman", screen: "KentBrockman" },
  { name: "Mr. Burns", screen: "MrBurns" },
  { name: "Ralph Wiggum", screen: "RalphWiggum" },
  { name: "Otto Man", screen: "OttoMann" },
  { name: "Kent Brockman", screen: "KentBrockman" },
  { name: "Santa's Little Helper", screen: "SantasHelper" },
  { name: "Scratchy", screen: "Scratchy" },
  { name: "Homepage", screen: "Home" }
];

class EmployeeDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Character Directory",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  });

  componentDidMount() {
    this.setState({
      data: items
    });
  }

  updateSearch(search) {
    var data = items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({ data });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              "https://backgrounddownload.com/wp-content/uploads/2018/09/simpsons-clouds-background-5.jpg"
          }}
          style={{
            width: "100%",
            height: "100%",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <SearchHeader
            updateSearch={search => {
              this.updateSearch(search);
            }}
          />

          <SafeAreaView>
            {this.state.data.map(item => {
              return (
                <Button
                  text={item.name}
                  onPress={() => this.props.navigation.navigate(item.screen)}
                />
              );
            })}
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  }
});
export default withNavigation(EmployeeDirectory);
