import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from "../screens/FiltersScreen";


const platformHandler = (type: string) => {
  if (type === "android") {
    return {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
      headerTitle: "A Screen",
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      }
    };
  } else {
    return {
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: Colors.primaryColor,
      headerTitle: "A Screen",
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      }
    };
  }
};

const platformStyles = platformHandler(Platform.OS);

const MealsNavigator = createStackNavigator(
  {
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
    },
  },
  {
    defaultNavigationOptions: platformStyles,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
    },
    "Meal Detail": {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: platformStyles,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondaryColor,
      tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites'
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.secondaryColor,
          activeBackgroundColor: Colors.primaryColor,
          inactiveTintColor: Colors.primaryColor,
          labelStyle: {
            fontFamily: 'open-sans-bold'
          },
          style: {
            justifyContent: "center",
            alignItems: "center",
          },
        },
      });

      const FiltersNavigator = createStackNavigator({
        Filters: {screen: FiltersScreen}
      }, {
        defaultNavigationOptions: platformStyles
      });

const MainNavigator = createDrawerNavigator({
  MealFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: "Meals"
    }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.secondaryColor,
    inactiveTintColor: Colors.primaryColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
})

export default createAppContainer(MainNavigator);
