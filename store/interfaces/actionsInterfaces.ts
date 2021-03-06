export interface ActionProps {
  type: string;
  payload?: any;
}

export interface SetFiltersProps {
  glutenFree: boolean;
  lactoseFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
}
