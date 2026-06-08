export type ApiResponse = {
  message: string;
  success: true;
};

export type RecipeImage = {
  large: string;
  small: string;
};

export type Recipe = {
  id: number;
  title: string;
  slug: string;
  image: RecipeImage;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
};

export type RecipesResponse = {
  recipes: Recipe[];
};
