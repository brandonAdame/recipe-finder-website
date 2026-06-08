import { RecipesResponse } from "shared";
import { Button } from "./ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "@tanstack/react-router";
import { BellRingIcon, CircleUserRoundIcon, TimerIcon } from "lucide-react";

export default function RecipesGrid({ data }: { data: RecipesResponse }) {
  return (
    <div className="container-page flex flex-col gap-5">
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-50 font-nunito-sans font-bold text-lg">
              <SelectValue placeholder="Max Prep Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 minutes</SelectItem>
              <SelectItem value="10">10 minutes</SelectItem>
              <SelectItem value="15">15 minutes</SelectItem>
              <SelectItem value="30">30 minutes</SelectItem>
              <SelectItem value="45">45 minutes</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-50 font-nunito-sans font-bold text-lg ">
              <SelectValue placeholder="Max Cook Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectContent>
                <SelectItem value="5">5 minutes</SelectItem>
                <SelectItem value="10">10 minutes</SelectItem>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="45">45 minutes</SelectItem>
              </SelectContent>
            </SelectContent>
          </Select>
        </div>
        <div className="w-1/5">
          <InputGroup>
            <InputGroupInput
              className="text-lg font-semibold"
              placeholder="Search by name or ingredient..."
            />
            <InputGroupAddon align="inline-start">
              <img src="assets/images/icon-search.svg" alt="Search Icon" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {data.recipes.map((recipe) => (
          <Card key={recipe.id} className="p-1">
            <img
              src={recipe.image.large}
              alt={recipe.title}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <CardHeader>
              <CardTitle className="text-xl font-bold font-nunito line-clamp-1">
                <h3>{recipe.title}</h3>
              </CardTitle>
              <CardDescription className="font-nunito-sans text-md flex flex-col gap-3 text-site-neutral-900">
                <p>{recipe.overview}</p>
                <div className="flex items-center gap-4 font-bold">
                  <div className="flex items-center gap-1">
                    <CircleUserRoundIcon className="inline-block size-4" />
                    <span>Servings: {recipe.servings}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TimerIcon className="inline-block size-4" />
                    <span>Prep: {recipe.prepMinutes} mins</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 font-bold">
                  <BellRingIcon className="inline-block size-4" />
                  <span>
                    Cook: {recipe.cookMinutes}{" "}
                    {recipe.cookMinutes === 0 ? "min" : "mins"}
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardFooter className="pb-2">
              <Button
                className="font-semibold w-full font-nunito-sans rounded-full py-6"
                asChild
              >
                <Link to="/recipe/$slug" params={{ slug: recipe.slug }}>
                  View Recipe
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
