import React from 'react';
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const platformHandler = (type: string) => {
  if(type === 'android'){
    return {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor:"white",
    }
  } else {
    return {
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: Colors.primaryColor,
    }
  }
}

const platformStyles = platformHandler(Platform.OS);

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: "Categories",
    },
  },
  "Category Meals": {
    screen: CategoryMealsScreen,
    navigationOptions: {
      ...CategoryMealsScreen.navigationOptions,
    },
  },
  "Meal Detail": {
    screen: MealDetailScreen,
    navigationOptions: {
      ...MealDetailScreen.navigationOptions,
    },
  }
}, {
  defaultNavigationOptions: platformStyles
});

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator
  },
  Favorites: { 
    screen: FavoritesScreen,
  }
}, {
  tabBarOptions: {
    activeTintColor: Colors.secondaryColor,
    activeBackgroundColor: Colors.primaryColor,
    inactiveTintColor: Colors.primaryColor,
    labelStyle: {
      paddingBottom: 15
    },
    style: {
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
});

export default createAppContainer(MealsFavTabNavigator);
