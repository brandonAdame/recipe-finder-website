import BeyondThePlate from "@/components/beyond-the-plate";
import DescriptionSection from "@/components/description-section";
import Footer from "@/components/Footer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

const whyWeExistContent = {
  sectionName: "Why we exist",
  sectionContent: [
    {
      headerText: "Cut through the noise.",
      bodyText:
        "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.",
    },
    {
      headerText: "Empower home kitchens.",
      bodyText:
        "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
    },
    {
      headerText: "Make healthy look good.",
      bodyText:
        "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.",
    },
  ],
};

const ourFoodPhilosophyContent = {
  sectionName: "Our food philosophy",
  sectionContent: [
    {
      headerText: "Whole ingredients first.",
      bodyText:
        "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
    },
    {
      headerText: "Flavor without compromise.",
      bodyText:
        "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
    },
    {
      headerText: "Respect for time.",
      bodyText:
        "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.",
    },
    {
      headerText: "Sustainable choices.",
      bodyText:
        "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
    },
  ],
};

function RouteComponent() {
  return (
    <div className="flex flex-col items-center mt-20 mx-auto max-w-5/6">
      <div className="flex w-full gap-16 items-center justify-between pb-24">
        <div className="flex flex-col gap-6 max-w-127.5">
          <div className="flex">
            <p className="text-preset-5 bg-orange-500 rounded-sm px-2 py-1">
              Our mission
            </p>
          </div>
          <h1 className="text-preset-2 text-left">
            Help more people cook nourishing meals,
            <br /> more often.
          </h1>
          <p className="text-preset-6">
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely <br /> delicious.
          </p>
          <p className="text-preset-6 solid-dash">
            We showcase quick, whole-food dishes that anyone can master--no
            fancy equipment, no ultra-processed shortcuts--just honest
            ingredients and straightforward steps.
          </p>
        </div>
        <img
          src="assets/images/image-about-our-mission-large.webp"
          alt="About our mission image"
          className="rounded-xl"
          width={618}
          height={600}
        />
      </div>
      <DescriptionSection {...whyWeExistContent} />
      <DescriptionSection {...ourFoodPhilosophyContent} />
      <BeyondThePlate />
      <Footer />
    </div>
  );
}
