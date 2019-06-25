import React from "react";
import { Image } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Landing from "../screens/Landing";
import Dashboard from "../screens/Dashboard";
import Search from "../screens/Search";
import Settings from "../screens/Settings";

import { theme } from "../constants/theme";

const screens = createStackNavigator(
  {
    Landing,
    Dashboard,
    Search,
    Settings
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {}
    }
  }
);

export default createAppContainer(screens);
