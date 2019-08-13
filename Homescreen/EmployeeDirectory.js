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

import SearchHeader from './SearchHeader';

import { withNavigation } from "react-navigation";

import Row from "../Components/Row";
import Button from "../Components/Button";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import { SearchBar } from "react-native-elements";

class EmployeeDirectory extends React.Component {
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

  updateSearch = search => {
  
  };

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
          
          <SearchHeader updateSearch={(search) => {
            this.updateSearch(search)
          }}/>

          <SafeAreaView>
            <Row>
              <Button
              text="Homer Simpson"
              onPress={() =>this.props.navigation.navigate("HomerSimpson")}
              />
            </Row>
            <Row>
              <Button
              text="Marge Simpson"
              onPress={() =>this.props.navigation.navigate("MargeSimpson")}
              />
            </Row>

            <Row>
              <Button
              text="Bart Simpson"
              onPress={() =>this.props.navigation.navigate("BartSimpson")}
              />
            </Row>
            <Row>
              <Button
              text="Lisa Simpson"
              onPress={() =>this.props.navigation.navigate("LisaSimpson")}
              />
            </Row>
            <Row>
              <Button
              text="Maggie Simpson"
              onPress={() =>this.props.navigation.navigate("MaggieSimpson")}
              />
            </Row>
            <Row>
              <Button
              text="Barney Gumble"
              onPress={() =>this.props.navigation.navigate("BarneyGumble")}
              />
            </Row>
            <Row>
              <Button
              text="Otto Man"
              onPress={() =>this.props.navigation.navigate("OttoMan")}
              />
            </Row>
            <Row>
              <Button
              text="Kent Brockman"
              onPress={() =>this.props.navigation.navigate("KentBrockman")}
              />
            </Row>
            <Row>
              <Button
              text="Mr. Burns"
              onPress={() =>this.props.navigation.navigate("MrBurns")}
              />
            </Row>
            <Row>
              <Button
              text="Santa's Little Helper"
              onPress={() =>this.props.navigation.navigate("SantasHelper")}
              />
            </Row>
            <Row>
              <Button
              text="Ralph Wiggum"
              onPress={() =>this.props.navigation.navigate("RalphWiggum")}
              />
            </Row>
            <Row>
              <Button
              text="Scratchy"
              onPress={() =>this.props.navigation.navigate("Scratchy")}
              />
            </Row>
            <Row>
              <Button
              text="Homepage"
              onPress={() =>this.props.navigation.navigate("Home")}
              />
            </Row>
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
  },
});
export default withNavigation(EmployeeDirectory)

