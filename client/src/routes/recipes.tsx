import RecipesGrid from "@/components/recipe/recipes-grid";
import { SERVER_URL } from "@/utils";
import { createFileRoute } from "@tanstack/react-router";
import { RecipesResponse } from "shared";

export const Route = createFileRoute("/recipes")({
  component: RouteComponent,
  loader: ({ context }) => {
    return context.queryClient.ensureQueryData({
      queryKey: ["recipes"],
      queryFn: async () => {
        try {
          const req = await fetch(`${SERVER_URL}/recipes`);

          if (!req.ok) {
            throw new Error("Network response was not ok");
          }

          const res = (await req.json()) as RecipesResponse;
          return res;
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      },
    });
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();

  return (
    <div className="container-page flex flex-col gap-5 items-center pt-14 pb-14">
      <h2 className="text-5xl font-extrabold tracking-tight font-nunito">
        Explore our simple, healthy recipes
      </h2>
      <p className="font-nunito-sans text-lg leading-relaxed inline-block text-center max-w-2xl text-gray-600">
        Discover eight quick, whole-food dishes that fit real-life schedules and
        taste amazing. Use the search bar to find a recipe by name or
        ingredient, or simply scroll the list and let something delicious catch
        your eye.
      </p>
      {data && <RecipesGrid data={data} />}
    </div>
  );
}
