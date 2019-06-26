import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as Font from "expo-font";

import Navigation from "./navigation";
import Tab from "./navigation/tab";

class App extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      "raleway-light": require("./assets/fonts/Raleway-Light.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <>
          <Tab />
        </>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
}

export default App;
