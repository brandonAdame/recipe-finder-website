export default function WhatYouGetSection() {
  return (
    <div className="flex flex-col w-full max-w-5/6 items-center gap-16 mt-14 pb-20 border-b border-gray-200">
      <h2 className="text-5xl font-extrabold font-nunito tracking-tight">
        What you'll get
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex w-fit border border-slate-100 rounded-lg p-3 shadow-sm">
            <img
              src="assets/images/icon-whole-food-recipes.svg"
              alt="Carrot Icon for Whole Food Recipes"
              className="size-10"
            />
          </div>
          <h3 className="font-bold font-nunito text-4xl tracking-tight">
            Whole-food recipes
          </h3>
          <p className="font-nunito-sans text-xl">
            Each dish uses everyday, unprocessed ingredients.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex w-fit border border-slate-100 rounded-lg p-3 shadow-sm">
            <img
              src="assets/images/icon-minimum-fuss.svg"
              alt="Icon for Minimum Fuss"
              className="size-10"
            />
          </div>
          <h3 className="font-bold font-nunito text-4xl tracking-tight">
            Minimum fuss
          </h3>
          <p className="font-nunito-sans text-xl">
            All recipes are designed to make eating healthy quick and easy.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex w-fit border border-slate-100 rounded-lg p-3 shadow-sm">
            <img
              src="assets/images/icon-search-in-seconds.svg"
              alt="Icon for Search in Seconds"
              className="size-10"
            />
          </div>
          <h3 className="font-bold font-nunito text-4xl tracking-tight">
            Search in seconds
          </h3>
          <p className="font-nunito-sans text-xl">
            Filter by name or ingredient and jump straight to the recipe you
            need.
          </p>
        </div>
      </div>
    </div>
  );
}
