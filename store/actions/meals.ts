import { SetFiltersProps } from "../interfaces/actionsInterfaces";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id: string) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: {
      mealId: id,
    },
  };
};

export const setFilters = (filterSettings: SetFiltersProps) => {
  return { type: SET_FILTERS, payload: {filters: filterSettings} }
}