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
  const params = Route.useParams();
  return (
    <div className="container-page pt-12 flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl">{data.title}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
