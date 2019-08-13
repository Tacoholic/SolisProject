import React from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
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

export default ({ onPress, text, }) => {

    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    return(
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>        
    )

}