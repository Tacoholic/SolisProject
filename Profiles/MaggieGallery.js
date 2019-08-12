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


class MaggieGallery extends React.Component {
  static navigationOptions = {
    title: "Maggie's Gallery",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (<ImageSlider images={[
      'https://i.pinimg.com/474x/32/fe/a1/32fea13c894c1b1188c4f138e10eaaba.jpg',
      'https://i.pinimg.com/564x/13/48/d9/1348d940709d1ef5f852102f8702e272.jpg',
      'https://i.pinimg.com/564x/73/07/67/73076786a6abe2a169646b92ce99a190.jpg'
    ]}/>)
  };
}

export default MaggieGallery;


