import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: "Categories",
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : "black",
    },
  },
  "Category Meals": {
    screen: CategoryMealsScreen,
    navigationOptions: {
      headerTitle: "Meals Categories",
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : "black",
    },
  },
  "Meal Detail": {
    screen: MealDetailScreen,
    navigationOptions: {
      headerTitle: "Meal Detail",
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : "black",
    },
  },
});

export default createAppContainer(MealsNavigator);
