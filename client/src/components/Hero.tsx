import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 relative">
      <img
        src="assets/images/pattern-squiggle-1.svg"
        alt="Background squiggle pattern"
        className="absolute w-screen transform translate-y-1/3"
      />
      <div className="relative">
        <h1 className="text-8xl font-extrabold font-nunito tracking-tight">
          Healthy meals, zero fuss
        </h1>
        <div className="absolute transform -translate-y-13 -translate-x-2 -z-10 h-14 w-90 bg-orange-300 rounded-md"></div>
      </div>
      <div className="flex flex-col items-center gap-1 font-nunito-sans text-2xl tracking-tight">
        <p>
          Discover eight quick, whole-food recipes that you can cook tonight
        </p>
        <p>--no processed junk, no guesswork.</p>
      </div>
      <Button className="font-semibold text-xl py-7 px-8 font-nunito-sans mt-6">
        Start exploring
      </Button>
      <div className="w-full max-w-5/6 mt-14 rounded-2xl p-3 bg-white z-20">
        <img
          src="assets/images/image-home-hero-large.webp"
          alt="Hero image"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
