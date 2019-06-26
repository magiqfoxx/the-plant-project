import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

import { fonts, sizes } from "../constants/theme";

export default function App({ img, text, color, bck }) {
  return (
    <ImageBackground source={bck} style={styles.guide}>
      <Image source={img} style={styles.icon} />
      <Text
        style={{
          color: color,
          marginRight: 10,
          fontSize: sizes.medium,
          fontFamily: fonts.main
        }}
      >
        {text}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  guide: {
    width: "100%",
    height: 100,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 3,
    borderColor: "white"
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 10
  },
  text: {
    marginRight: 10,
    fontSize: 15,
    fontFamily: fonts.main
  }
});
