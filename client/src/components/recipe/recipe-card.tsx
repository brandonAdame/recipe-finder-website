import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import RecipeOverview from "./recipe-overview";
import { Recipe } from "shared";

export default function RecipeCard(recipe: Recipe) {
  return (
    <Card key={recipe.id} className="p-2 max-w-94">
      <div className="flex flex-col gap-4">
        <img
          src={recipe.image.small}
          alt={recipe.title}
          height={300}
          className="w-full aspect-square object-cover rounded-lg"
        />
        <CardHeader className="px-2">
          <CardTitle className="text-preset-5 line-clamp-1">
            <h3>{recipe.title}</h3>
          </CardTitle>
          <CardDescription className="text-preset-9 flex flex-col gap-3 text-site-neutral-900">
            <p>{recipe.overview}</p>
            <RecipeOverview
              props={{
                servings: recipe.servings,
                cookMinutes: recipe.cookMinutes,
                prepMinutes: recipe.prepMinutes,
              }}
            />
          </CardDescription>
        </CardHeader>
      </div>
      <CardFooter className="pb-2 px-2">
        <Button
          className="font-semibold w-full font-nunito-sans rounded-full py-3 px-8"
          asChild
        >
          <Link to="/recipe/$slug" params={{ slug: recipe.slug }}>
            View Recipe
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
