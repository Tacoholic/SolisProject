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


class WiggumGallery extends React.Component {
  static navigationOptions = {
    title: "Chief Wiggum's Gallery",
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLt9MIfE6597aNsEDLglOi8dUmym1YJ8hcuaJQEdgS8iTiHzp',
      'data:image/jpeg;base64,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',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlXQJZucxdIixsUwK1yWyIMwapHAmx2c2wDmPpS-nInTS-OA82w'
    ]}/>)
  };
}

export default WiggumGallery;

