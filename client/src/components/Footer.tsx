import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="w-full max-w-5/6 mx-auto mt-20 mb-10 flex flex-col gap-10">
      <div className="flex flex-col items-center justify-center gap-5 bg-site-neutral-200 rounded-lg h-100 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 transform -translate-x-1/5 translate-y-6">
          <img src="assets/images/pattern-fork.svg" alt="Fork" />
        </div>
        <div className="absolute inset-y-0 right-0 transform translate-x-1/5 translate-y-5">
          <img src="assets/images/pattern-knife.svg" alt="Knife" />
        </div>
        <h3 className="text-5xl font-extrabold font-nunito tracking-tight">
          Ready to cook smarter?
        </h3>
        <span className="font-nunito-sans text-xl">
          Hit the button, pick a recipe, and get dinner on the table--fast.
        </span>
        <div className="mt-6">
          <Button className="font-semibold text-xl py-7 px-8 font-nunito-sans">
            Browse Recipes
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-nunito-sans text-xl font-semibold">
          Made with ❤️ and 🥑
        </span>
        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <img src="assets/images/icon-instagram.svg" alt="Instagram Icon" />
          </Button>
          <Button variant="ghost">
            <img src="assets/images/icon-bluesky.svg" alt="Bluesky Icon" />
          </Button>
          <Button variant="ghost">
            <img src="assets/images/icon-tiktok.svg" alt="tiktok Icon" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
