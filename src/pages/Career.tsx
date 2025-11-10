import CareerGrowthGraph from "@/components/Career page/CareerHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Graph from "@/components/ui/graph";

import React from "react";

function Career() {
  return (
    <div className="overflow-x-hidden w-full relative">
      <Header />

      <main className="relative">
        {/* ✅ Graph as background */}
        <div
          className="hidden lg:flex absolute inset-0 items-start justify-end overflow-hidden 
    pt-[100px] lg:pt-[120px] xl:pt-[140px]
    mr-10 lg:mr-20 xl:mr-24
    z-0 opacity-80 pointer-events-none"
        >
          <Graph />
        </div>

        {/* ✅ Foreground content */}
        <div className="relative z-10">
          <CareerGrowthGraph />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Career;
