import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { withNavigation } from "react-navigation";
import CharacterImages from "../Data/CharacterImages";

class ImageGallery extends React.Component {
  static navigationOptions = {
    title: "Character Gallery",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTitleStyle: "bold"
  };
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    let images = CharacterImages[this.props.navigation.state.params.item.id-1].images;
    this.setState({ images });
  }
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={900}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="yellow"
          inactiveDotColor="white"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default withNavigation(ImageGallery);
