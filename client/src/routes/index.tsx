import { createFileRoute } from "@tanstack/react-router";
import BuiltForRealLifeSection from "@/components/built-for-real-life-section";
import Hero from "@/components/Hero";
import WhatYouGetSection from "@/components/what-you-get-section";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col items-center gap-6 pt-20">
      <Hero />
      <WhatYouGetSection />
      <BuiltForRealLifeSection />
      <Footer />
    </div>
  );
}

export default Index;
