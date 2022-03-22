import React from "react";
import { Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FactScreen from "../screens/FactScreen";
import QuoteScreen from "../screens/QuoteScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: "#7b5804",
    shadowColor: "transparent",
  },
  headerTitleStyle: {
    fontFamily: "eph-reg",
    fontSize: 36,
  },
  headerBackTitleStyle: {
    fontFamily: "eph-reg",
  },
  headerTintColor: Platform.OS === "android" ? "white" : "white",
  headerTitle: "Poop App",
};

const QuoteNavigator = createStackNavigator(
  {
    Quote: {
      screen: QuoteScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FactsNavigator = createStackNavigator(
  {
    Search: {
      screen: FactScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// tabScreenConfig is the configuration for the bottom navigator tab
// We have the Meals Tab and the Favorites Tab
const tabScreenConfig = {
  // navigationOptions only matters if the navigator is nested, like mealsnavigator is
  Quotes: {
    screen: QuoteNavigator,
    navigationOptions: {
      tabBarLabel: "Quotes",
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="emoticon-poop"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },

  Facts: {
    screen: FactsNavigator,
    navigationOptions: {
      tabBarLabel: "Facts",
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="emoticon-poop"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
};

const BottomTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        labeled: true,
        barStyle: {
          backgroundColor: "#7b5804",
          shadowColor: "transparent",
        },
      })
    : createMaterialBottomTabNavigator(tabScreenConfig, {
        labeled: true,
        barStyle: {
          shadowColor: "transparent",
          backgroundColor: "#7b5804",
          paddingBottom: 25,
        },
      });

// use the MainNavigator as the main navigator
export default createAppContainer(BottomTabNavigator);
