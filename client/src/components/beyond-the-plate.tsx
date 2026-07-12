export default function BeyondThePlate() {
  const reasons = [
    "Encourage family dinners and social cooking.",
    "Reduce reliance on single-use packaging and delivery waste.",
    "Spark curiosity about seasonal produce and local agriculture.",
  ];
  return (
    <div className="flex items-center justify-between w-full pt-24 pb-24">
      <div className="flex flex-col gap-5 max-w-94">
        <h1 className="text-preset-2">Beyond the Plate</h1>
        <div className="flex flex-col gap-3 text-preset-6">
          <p>
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="list-disc list-inside pl-2">
            {reasons.map((reason, index) => (
              <li key={`${reason}-${index}`}>{reason}</li>
            ))}
          </ul>
        </div>
      </div>
      <img
        src="/assets/images/image-about-beyond-the-plate-large.webp"
        alt="Beyond the plate image"
        width={744}
        height={400}
        className="rounded-xl"
      />
    </div>
  );
}
