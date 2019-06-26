import React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Search from "../screens/Search";
import Guides from "../screens/Guides";
import Settings from "../screens/Settings";

const TabNavigator = createBottomTabNavigator(
  {
    Login: Login,
    Dashboard: Dashboard,
    Guides: Guides,
    Search: Search
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Login") {
          iconName = `login.png`;
          IconComponent = Login;
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              focused={focused}
              source={require('../assets/menu/login.png')}
              tintColor={tintColor}
            />
          ),
        } else if (routeName === "Dashboard") {
          iconName = `dashboard.svg`;
          IconComponent = Dashboard;
        } else if (routeName === "Guides") {
          iconName = `guides.svg`;
          IconComponent = Guides;
        } else if (routeName === "Search") {
          iconName = `search.svg`;
          IconComponent = Search;
        } else {
          iconName = "search.svg";
        }

        // You can return any component that you like here!
        return <Image source={require(`../assets/menu/search.svg`)} />; //style={{ width: "50", height: "50" }}
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);
export default createAppContainer(TabNavigator);
