import { useQuery } from "@tanstack/react-query";
import { SERVER_URL } from "@/utils";
import { RecipesResponse } from "shared";
import RecipeCard from "./recipe-card";

export default function MoreRecipes() {
  const { data, isFetching } = useQuery({
    queryKey: ["recipes", 2, 3, 4],
    queryFn: async () => {
      const params = new URLSearchParams({
        ids: "2,3,4",
      });
      try {
        const req = await fetch(`${SERVER_URL}/recipes?${params.toString()}`);

        if (!req.ok) {
          throw new Error("Could not retrieve specific recipes");
        }
        const res = (await req.json()) as RecipesResponse;
        return res;
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    },
  });
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-preset-3">More recipes</h3>
      {!isFetching && (
        <div className="grid grid-cols-3 gap-8">
          {data?.recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
