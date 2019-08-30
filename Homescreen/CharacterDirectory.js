import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground, Button, FlatList } from "react-native";
import { withNavigation } from "react-navigation";
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
  } from "react-navigation";

import characters from "../Data/Characters";





class CharacterDirectory extends React.Component {
    static navigationOptions = {
        title: "The Simpsons",
        headerStyle: {
          backgroundColor: "#53b4e6"
        },
        headerTintColor: "#f6c945",
        headerTitleStyle: {
          fontWeight: "bold"
        },
      };
  render() {
      const { navigation } = this.props;
      const type = navigation.getParam('itemID', 'NO-ID');
      const typeData = characters[type];
    

    return (
        <View style={styles.container}>

            {characters.map( (data,index) => (
                <Button 
                    key={data.name}
                    title={`${data.name}`}
                    onPress={() => {
                        this.props.navigation.navigate('CharacterProfiles', {item: data})}
                        } 
                        />
            ))}
        </View>
    )
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

