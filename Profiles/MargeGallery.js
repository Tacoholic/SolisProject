import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  List,
  ListItem,
  ImageBackground
} from "react-native";

import ImageSlider from 'react-native-image-slider';


class MargeGallery extends React.Component {
  static navigationOptions = {
    title: "Marge's Gallery",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    },
  };
  render() {
    return (<ImageSlider images={[
      'https://i.pinimg.com/564x/63/e4/7d/63e47d98e66622bbff5e4578ccffeffc.jpg',
      'https://i.pinimg.com/564x/04/48/60/044860ebcd5d6c14a1140b351cb620b1.jpg',
      'https://i.pinimg.com/564x/6d/99/26/6d9926fa54bc3650acf9295d997fc72c.jpg',
    ]}/>)
  };
}

export default MargeGallery;



