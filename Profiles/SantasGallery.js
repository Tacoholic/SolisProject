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


class SantasGallery extends React.Component {
  static navigationOptions = {
    title: "Homer's Gallery",
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
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf956973-1f74-4115-8add-9e90c711b4d5/d340web-4f6a07c9-1e48-41a9-aab6-6d10d78ecf1b.png/v1/fill/w_807,h_991,q_70,strp/bart_and_santa_s_little_helper_by_thefightingmongooses_d340web-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEwNSIsInBhdGgiOiJcL2ZcL2JmOTU2OTczLTFmNzQtNDExNS04YWRkLTllOTBjNzExYjRkNVwvZDM0MHdlYi00ZjZhMDdjOS0xZTQ4LTQxYTktYWFiNi02ZDEwZDc4ZWNmMWIucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5aEEgaBLtjROGI7K53fZ98pSMrpcYK76dZ593hGsjk4',
      'https://i.pinimg.com/564x/f8/d8/20/f8d8204f50bd47a96617e2d7c5cb81ad.jpg'
    ]}/>)
  };
}

export default SantasGallery;
