import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 py-7 px-15 relative font-nunito">
      <Link to="/">
        <img src="assets/images/logo.svg" alt="Logo" />
      </Link>
      {/* These links should be centered on the page and accounting for spacing between left logo and right button */}
      <div className="flex space-x-4 absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold">
        <Link
          to="/"
          activeProps={{ className: "border-b-3 border-orange-300" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          activeProps={{ className: "border-b-3 border-orange-300" }}
        >
          About
        </Link>
        <Link
          to="/recipes"
          activeProps={{ className: "border-b-3 border-orange-300" }}
        >
          Recipes
        </Link>
      </div>
      <Button className="font-semibold text-lg py-7" asChild>
        <Link to="/recipes">Browse Recipes</Link>
      </Button>
    </nav>
  );
}
