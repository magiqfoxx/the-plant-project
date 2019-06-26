import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function DaySchedule(props) {
  return (
    <View style={styles.container}>
      <Text>{props.day}</Text>
      <View style={styles.day}>
        {props.fertilise ? (
          <Image source={"../assets/dashboard/gardening-chart.svg"} />
        ) : null}
        {props.water ? (
          <Image source={"../assets/dashboard/sprinkling-can.svg"} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  day: {
    width: 30,
    height: 30,
    backgroundColor: "#AFDCF4",
    margin: 5
  }
});
