import Header from "@/components/Header";
import BackgroundOrbit from "@/components/ui/BackgroundOrbit";

import AboutHeroSection from "@/components/About Us/aboutHero";
function About() {
  return (
    <div>
      <div className="absolute inset-20 -z-20  right-[-150px]  flex items-end justify-end overflow-hidden">
        <BackgroundOrbit />
      </div>

      <Header />
      <main>
        <AboutHeroSection />
      </main>
    </div>
  );
}

export default About;
