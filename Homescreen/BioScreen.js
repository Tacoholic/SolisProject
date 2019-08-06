import React, { Component } from "react";
import FlipComponent from "react-native-flip-component";
import {
  View,
  Button,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

function FrontView(props) {
  return (
    <View>
      <Image
        source={{
          uri:
            "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/40/906652-familyguy.png"
        }}
        style={{
          width: 380,
          height: 200,
          justifyContent: "center",
          alignContent: "center",
          marginTop: 20
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          textAlign: "center",
          color: "#fcfaf9",
          fontSize: 20
        }}
      >
        Are you a Family Guy type of person?
      </Text>
      <TouchableOpacity onPress={props.flip} style={styles.button}>
        <Text style={styles.text}>If not, press here.</Text>
      </TouchableOpacity>
    </View>
  );
}

function BackView(props) {
  return (
    <View>
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png"
        }}
        style={{
          width: 380,
          height: 434,
          justifyContent: "center",
          alignContent: "center",
          marginTop: 20
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          textAlign: "center",
          color: "#fcfaf9",
          fontSize: 20
        }}
      >
        Or are you a Simpsons type of person?
      </Text>
      <TouchableOpacity onPress={props.flip} style={styles.button}>
        <Text style={styles.text}>Naw, take me back to Family Guy.</Text>
      </TouchableOpacity>
    </View>
  );
}
export default class BioScreen extends React.Component {
  static navigationOptions = {
    title: "React Native App",
    headerStyle: {
      backgroundColor: "#ff793f"
    }
  };
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <FlipComponent
          isFlipped={this.state.isFlipped}
          frontView={<FrontView flip={this.flip} />}
          backView={<BackView flip={this.flip} />}
          frontStyles={styles.frontStyles}
          backStyles={styles.backStyles}
          rotateDuration={100}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff793f",
    alignItems: "center",
    justifyContent: "center"
  },
  frontStyles: {
    backgroundColor: "#ff793f",
    justifyContent: "center",
    height,
    width
  },
  backStyles: {
    backgroundColor: "#ff793f",
    justifyContent: "center",
    height,
    width
  },
  button: {
    backgroundColor: "#152c43",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
    alignSelf: "center",
    borderRadius: 25,
    marginTop: 10
  },
  text: {
    color: "#bddac8",
    fontSize: 10,
    textAlign: "center"
  }
});

// class BioScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isFlipped: false
//     };
//   }

//   render() {
//     return (
//       <View>
//         <FlipComponent
//           isFlipped={this.state.isFlipped}
//           frontView={
//             <View>
// <Image
//   source={{
//     uri:
//       "https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png"
//   }}
//   style={{
//     width: 380,
//     height: 434,
//     justifyContent: "center",
//     alignContent: "center",
//     marginTop: 20
//   }}
//   resizeMode="cover"
// />
//             </View>
//           }
//           backView={
//             <View>
//               <Image
//                 source={{
//                   uri:
//                   "http://clipart-library.com/images/8cAEnpM6i.png"
//                 }}
//                 style={{
//                   width: 380,
//                   height: 434,
//                   justifyContent: "center",
//                   alignContent: "center",
//                   marginTop: 20
//                 }}
//                 resizeMode="cover"
//               />
//             </View>
//           }
//         />
//         <Button
//           onPress={() => {
//             this.setState({ isFlipped: !this.state.isFlipped });
//           }}
//           title="Flip the image"
//         />
//       </View>
//     );
//   }
// }

// export default BioScreen;
