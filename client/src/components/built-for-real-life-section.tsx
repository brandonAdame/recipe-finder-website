export default function BuiltForRealLifeSection() {
  return (
    <div className="flex w-full max-w-5/6 items-center mt-20 space-x-15">
      <div className="flex flex-col gap-6 max-w-lg">
        <h2 className="text-5xl font-extrabold font-nunito tracking-tight">
          Built for real life
        </h2>
        <p className="font-nunito-sans text-xl">
          Cooking shouldn't be complicated. These recipes come in under 30
          minutes of active time, fit busy schedules, and taste good enough to
          repeat.
        </p>
        <p className="font-nunito-sans text-xl">
          Whether you're new to the kitchen or just need fresh ideas, we've got
          you covered.
        </p>
      </div>
      <div>
        <img
          src="assets/images/image-home-real-life-large.webp"
          alt="Built for real life lettuce chopping"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
