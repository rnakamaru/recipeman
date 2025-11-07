export interface RecipeStep {
  step: number;
  instruction: string;
}

export interface MealData {
  title: string;
  ingredients: string[];
  description: string;
  cookingTime: string;
  steps: RecipeStep[];
}
