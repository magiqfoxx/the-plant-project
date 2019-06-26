import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { colors } from "../constants/theme";
import Guide from "../components/Guide";

export default function App() {
  return (
    <View style={styles.container}>
      <Guide
        text="Watering 101"
        img={require("../assets/guides/watering-can.png")}
        bck={require("../assets/guides/erol-ahmed-wKTF65TcReY-unsplash.jpg")}
        color={colors.colorLight}
      />
      <Guide
        text="To fertilise or not to fertilise"
        img={require("../assets/guides/fertilizer.png")}
        bck={require("../assets/guides/mona-eendra-vC8wj_Kphak-unsplash.jpg")}
        color={colors.primaryDark}
      />
      <Guide
        text="Tips from our experts"
        img={require("../assets/guides/check-list.png")}
        bck={require("../assets/guides/erol-ahmed-aIYFR0vbADk-unsplash.jpg")}
        color={colors.colorLight}
      />
      <Guide
        text="Easy plants for beginners"
        img={require("../assets/guides/seed.png")}
        bck={require("../assets/guides/paul-talbot-pQDBGxtiDEo-unsplash.jpg")}
        color={colors.primaryDark}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
