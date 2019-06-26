import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { fonts, colors } from "../constants/theme";
import { days } from "../constants/utilities";
import DaySchedule from "./DaySchedule";

export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20, color: colors.grey }}>{props.name}</Text>
        <Image style={styles.icon} source={props.img} />
      </View>
      <View style={styles.grid}>
        {days.map(day => {
          return <DaySchedule day={day} key={day} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  container: {
    width: "90%",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primaryLight,
    borderRadius: 5,
    flexDirection: "column",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  grid: {
    flexDirection: "row"
  },
  icon: {
    width: 50,
    height: 50
  }
});
