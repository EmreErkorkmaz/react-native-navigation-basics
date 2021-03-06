import Meal from "../../models/meal";

export interface MealsReducerState {
  meals: { meals: Meal[]; filteredMeals: Meal[]; favoriteMeals: Meal[] };
}