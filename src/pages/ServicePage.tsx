import Header from "@/components/Header";

import ServicesPageHero from "@/components/Services Page/Hero";
import ProjectCTA from "@/components/Services Page/letsTalk";
import Services from "@/components/Services Page/OurServices";

const ServicePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-grow">
        <ServicesPageHero />
        <Services />
        <ProjectCTA />
      </main>
    </div>
  );
};
export default ServicePage;
