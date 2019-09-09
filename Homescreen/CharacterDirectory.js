import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { withNavigation } from "react-navigation";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Row from "../Components/Row";
import Button from "../Components/Button";
import SearchHeader from "./SearchHeader";
import characters from "../Data/Characters";
import { SearchBar } from "react-native-elements";

// const items = [
//   { name: "Homer Simpson", screen: "HomerSimpson" },
//   { name: "Marge Simpson", screen: "MargeSimpson" },
//   { name: "Bart Simpson", screen: "BartSimpson" },
//   { name: "Lisa Simpson", screen: "LisaSimpson" },
//   { name: "Maggie Simpson", screen: "MaggieSimpson" },
//   { name: "Barney Gumble", screen: "BarneyGumble" },
//   { name: "Kent Brockman", screen: "KentBrockman" },
//   { name: "Mr. Burns", screen: "MrBurns" },
//   { name: "Ralph Wiggum", screen: "RalphWiggum" },
//   { name: "Otto Man", screen: "OttoMann" },
//   { name: "Santa's Little Helper", screen: "SantasHelper" },
//   { name: "Scratchy", screen: "Scratchy" }
// ];

class CharacterDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  static navigationOptions = {
    title: "The Simpsons",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  componentDidMount() {
    this.setState({
      data: characters
    });
  }

  updateSearch(search) {
    var data = characters.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({ data });
  }
  render() {
    const { navigation } = this.props;
    const type = navigation.getParam("itemID", "NO-ID");
    const typeData = characters[type];

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
          {this.state.data.map((data, index) => (
            <Button
              text={data.name}
              key={data.name}
              title={`${data.name}`}
              onPress={() => {
                this.props.navigation.navigate("CharacterProfiles", {
                  item: data
                });
              }}
            />
          ))}
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
export default withNavigation(CharacterDirectory);


