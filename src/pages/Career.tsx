import CareerGrowthGraph from "@/components/Career page/CareerHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Graph from "@/components/ui/graph";

import React from "react";

function Career() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />

      <main className="relative">
        {/* ✅ Graph visible only on large screens and clipped */}
        <div className="hidden lg:flex absolute inset-0 items-end justify-center pointer-events-none">
          <div className="relative w-[200%] right-[-400px] overflow-hidden">
            <Graph />
          </div>
        </div>

        <CareerGrowthGraph />
      </main>

      <Footer />
    </div>
  );
}

export default Career;
