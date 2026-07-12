import { Hono } from "hono";
import { cors } from "hono/cors";
import type { ApiResponse, RecipesResponse } from "shared";
import { recipesData } from "./data";

const app = new Hono();

app.use(cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/hello", async (c) => {
  const data: ApiResponse = {
    message: "Hello BHVR!",
    success: true,
  };

  return c.json(data, { status: 200 });
});

app.get("/recipes", async (c) => {
  const idsParam = c.req.query("ids");

  let data: RecipesResponse = {
    recipes: recipesData,
  };

  if (idsParam) {
    const ids = idsParam.split(",").map((val) => Number.parseInt(val, 10));
    data = {
      recipes: data.recipes.filter((recipe) => ids.includes(recipe.id)),
    };
  }

  return c.json(data, { status: 200 });
});

app.get("/recipes/:slug", async (c) => {
  const { slug } = c.req.param();

  const found = recipesData.find((recipe) => recipe.slug === slug);

  if (!found) {
    return c.json([], { status: 200 });
  }

  return c.json(found, { status: 200 });
});

export default app;
