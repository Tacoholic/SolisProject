import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Platform,
  Animated,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

class EmployeeDirectory extends React.Component {
  static navigationOptions = {
    title: "Character Directory",
    headerStyle: {
      backgroundColor: "#53b4e6"
    },
    headerTintColor: "#f6c945",
    headerTintStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <Button
        onPress={() =>
          alert("Don't forget to register on our app for prizes and surprises!")
        }
        title="INFO"
        color="#f6c945"
      />
    )
  };
  render() {

    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              "https://backgrounddownload.com/wp-content/uploads/2018/09/simpsons-clouds-background-5.jpg"
          }}
          style={{
            width: "100%",
            height: "100%",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Homer Simpson</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("BartSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Bart Simpson</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Marge Simpson</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Lisa Simpson</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Maggie Simpson</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Santa's Little Helper</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Barney Gumble</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Mr. Burns</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Ralph Wiggum</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Kent Brockman</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Otto Mann</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomerSimpson")}
            style={styles.button}
          >
            <Text style={styles.text}>Scratchy</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.text}>Home Screen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack("")}
            style={styles.button}
          >
            <Text style={styles.text}>Go to previous screen</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#f6c945",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#2d98da",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1.0,
    borderColor: "black",
    height: 30,
    width: 260
  }
});

export default EmployeeDirectory;
