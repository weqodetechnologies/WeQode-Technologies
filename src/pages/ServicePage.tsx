import Footer from "@/components/Footer";
import Header from "@/components/Header";

import ServicesPageHero from "@/components/Services Page/Hero";
import ProjectCTA from "@/components/Services Page/letsTalk";
import Services from "@/components/Services Page/OurServices";
import TechnologiesSection from "@/components/Services Page/techStack";

const ServicePage = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="flex-grow">
        <ServicesPageHero />
        <Services />
        <ProjectCTA />
        <TechnologiesSection />
      </main>
      <Footer />
    </div>
  );
};
export default ServicePage;
