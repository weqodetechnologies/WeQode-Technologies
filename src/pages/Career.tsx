import CareerGrowthGraph from "@/components/Career page/CareerHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Graph from "@/components/ui/graph";

import React from "react";

function Career() {
  return (
    <div className="min-h-screen ">
      <Header />

      <main>
        <div className="absolute  inset-0  right-[-800px]  flex items-end justify-center overflow-hidden">
          <Graph />
        </div>

        <CareerGrowthGraph />
      </main>

      <Footer />
    </div>
  );
}

export default Career;
