import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import PlantSchedule from "../components/PlantSchedule";

export default function App() {
  return (
    <View style={styles.container}>
      <PlantSchedule name="Ficus" img={require("../assets/plants/plant.png")} />
      <PlantSchedule
        name="Orchid"
        img={require("../assets/plants/flower.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
