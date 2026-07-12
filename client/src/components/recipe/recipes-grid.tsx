import { RecipesResponse } from "shared";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import RecipeCard from "./recipe-card";

export default function RecipesGrid({ data }: { data: RecipesResponse }) {
  return (
    <div className="container-page flex flex-col gap-5">
      <div className="flex flex-col gap-6 max-w-298 mx-auto">
        <div className="w-full flex mx-auto items-center justify-between">
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
        <div className="flex mx-auto">
          <div className="grid grid-cols-3 gap-10">
            {data.recipes.map((recipe) => (
              <RecipeCard {...recipe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
