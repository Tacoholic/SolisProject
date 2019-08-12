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


class ScratchyGallery extends React.Component {
  static navigationOptions = {
    title: "Scratchy's Gallery",
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
      'https://i.pinimg.com/originals/5b/1b/46/5b1b46e0d5f44b003c0cebfcbc4a1f0b.png',
      'https://www.cgcreativeshop.com/cache/sj_maxshop/01a9332fa7b39c1fc4cb2bc08641a19c.jpeg'
    ]}/>)
  };
}

export default ScratchyGallery;

