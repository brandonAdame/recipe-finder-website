import { cn } from "@/lib/utils";
import { CircleUserRoundIcon, TimerIcon, BellRingIcon } from "lucide-react";

interface RecipeProps {
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
}

export default function RecipeOverview({ props }: { props: RecipeProps }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2 text-preset-9",
      )}
    >
      <div className="flex items-center gap-1">
        <CircleUserRoundIcon height={20} width={20} />
        <p>Servings: {props.servings}</p>
      </div>
      <div className="flex items-center gap-1">
        <TimerIcon height={20} width={20} />
        <p>Prep: {props.prepMinutes} mins</p>
      </div>
      <div className="flex items-center gap-1">
        <BellRingIcon height={20} width={20} />
        <p>
          Cook: {props.cookMinutes} {props.cookMinutes === 0 ? "min" : "mins"}
        </p>
      </div>
    </div>
  );
}
