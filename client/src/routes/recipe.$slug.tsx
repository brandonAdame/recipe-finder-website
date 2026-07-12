import MoreRecipes from "@/components/recipe/more-recipes";
import RecipeOverview from "@/components/recipe/recipe-overview";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SERVER_URL } from "@/utils";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Recipe } from "shared";

export const Route = createFileRoute("/recipe/$slug")({
  component: RouteComponent,
  loader: ({ context, params }) => {
    return context.queryClient.ensureQueryData({
      queryKey: ["recipe", params.slug],
      queryFn: async () => {
        const resp = await fetch(`${SERVER_URL}/recipes/${params.slug}`);

        if (!resp.ok) {
          throw notFound();
        }

        return (await resp.json()) as Recipe;
      },
    });
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();

  return (
    <div className="container-page pt-12 pb-16 flex flex-col gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/recipes">Recipes</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{data.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {data && (
        <div className="grid grid-cols-2 gap-10">
          <img
            src={data.image.large}
            alt={data.title}
            className="w-full aspect-square object-cover rounded-lg"
          />
          <div className="flex flex-col gap-5 max-w-143">
            <h1 className="text-preset-2">{data.title}</h1>
            <p className="text-preset-6">{data.overview}</p>
            <RecipeOverview
              props={{
                servings: data.servings,
                prepMinutes: data.prepMinutes,
                cookMinutes: data.cookMinutes,
              }}
            />

            <div className="flex flex-col gap-4">
              <h3 className="text-preset-4">Ingredients:</h3>
              {data.ingredients.map((ingredient, idx) => (
                <div
                  key={`${ingredient}-${idx}`}
                  className="flex items-center gap-2"
                >
                  <img
                    src="/assets/images/icon-bullet-point.svg"
                    alt={`${ingredient}`}
                    height={24}
                    width={24}
                  />
                  <p className="text-preset-6">{ingredient}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-preset-4">Instructions:</h3>
              {data.instructions.map((instruction, idx) => (
                <div
                  key={`${instruction}-${idx}`}
                  className="flex items-center gap-2"
                >
                  <img
                    src="/assets/images/icon-bullet-point.svg"
                    alt={`${instruction}`}
                    height={24}
                    width={24}
                  />
                  <p className="text-preset-6">{instruction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <MoreRecipes />
    </div>
  );
}
