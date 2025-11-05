import Header from "@/components/Header";
import BackgroundOrbit from "@/components/ui/BackgroundOrbit";

import AboutHeroSection from "@/components/About Us/aboutHero";
import MissionAndVision from "@/components/About Us/missionAndVision";
import FAQ from "@/components/About Us/FAQ";
import Footer from "@/components/Footer";
function About() {
  return (
    <div>
      <div className="absolute  inset-0  right-[-220px]  flex items-end justify-end overflow-hidden">
        <BackgroundOrbit />
      </div>

      <Header />
      <main>
        <AboutHeroSection />
        <MissionAndVision />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default About;
