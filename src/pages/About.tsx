import Header from "@/components/Header";
import BackgroundOrbit from "@/components/ui/BackgroundOrbit";

import AboutHeroSection from "@/components/About Us/aboutHero";
import MissionAndVision from "@/components/About Us/missionAndVision";
import FAQ from "@/components/About Us/FAQ";
import Footer from "@/components/Footer";
function About() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <AboutHeroSection />
        <div className="absolute inset-0 right-0 overflow-hidden">
          <BackgroundOrbit />
        </div>
        <MissionAndVision />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default About;
