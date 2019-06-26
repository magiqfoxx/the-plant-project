import React from "react";
import { Image } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Search from "../screens/Search";
import Settings from "../screens/Settings";

import { theme } from "../constants/theme";

const screens = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Dashboard: {
      screen: Dashboard
    },
    Search: {
      screen: Search
    },
    Settings: {
      screen: Settings
    }
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
