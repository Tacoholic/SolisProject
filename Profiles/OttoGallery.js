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


class OttoGallery extends React.Component {
  static navigationOptions = {
    title: "Otto's Gallery",
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
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Otto_from_the_Simpsons.gif/200px-Otto_from_the_Simpsons.gif',
      'https://www.pintsizedpeople.co.uk/ekmps/shops/pintsized/images/the-simpsons-mini-collectible-figure-otto-mann-[4]-22834-p.jpg'

    ]}/>)
  };
}

export default OttoGallery;

