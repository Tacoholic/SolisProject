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


class HomerGallery extends React.Component {
  static navigationOptions = {
    title: "Homer's Gallery",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: <Button onPress={() => alert("Homer is the only child")} title="Facts" color="#f6c945" />
  };
  render() {
    return (<ImageSlider images={[
      'https://i.pinimg.com/474x/f1/36/ca/f136ca04817e60fa12f4a5680101ff8b.jpg',
      'https://i.pinimg.com/474x/b1/da/e2/b1dae2fe6ca1620e5d1949a2dcd33a0c.jpg',
      'https://i.pinimg.com/564x/7b/53/32/7b5332ef6a981b3c54e855495ea1c828.jpg',
      'https://i.pinimg.com/564x/f4/71/79/f471798aeeae427474f544691d572970.jpg',
      'https://i.pinimg.com/564x/32/3d/53/323d534f07de7d9ebeb58ede1f87d63e.jpg'
    ]}/>)
  };
}

export default HomerGallery;
