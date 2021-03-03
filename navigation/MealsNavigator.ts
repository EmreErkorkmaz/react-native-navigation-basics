import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
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
      headerTitle: "Meal Detail",
    },
  }
}, {
  defaultNavigationOptions: platformStyles
});

export default createAppContainer(MealsNavigator);
