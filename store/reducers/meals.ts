import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/meal";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";
import { ActionProps, SetFiltersProps } from "../interfaces/actionsInterfaces";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

type StateProps = {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
};

const mealsReducer = (
  state: StateProps = initialState,
  action: ActionProps
) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal: any = state.meals.find(
          (meal) => meal.id === action.payload.mealId
        );
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters: SetFiltersProps = action.payload.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (!meal.isGlutenFree && appliedFilters.glutenFree) {
          return false;
        }
        if (!meal.isLactoseFree && appliedFilters.lactoseFree) {
          return false;
        }
        if (!meal.isVegan && appliedFilters.vegan) {
          return false;
        }
        if (!meal.isVegetarian && appliedFilters.vegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
