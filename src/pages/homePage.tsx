import Header from "@/components/Header";
import Hero from "@/components/homePage/Hero";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";
import Services from "@/components/homePage/Services";
import ProjectLifecycle from "@/components/homePage/ProjectLifecycle";
import RecentProjects from "@/components/homePage/RecentProjects";
import Testimonials from "@/components/homePage/Testimonials";
import Footer from "@/components/Footer";
import Cta from "@/components/homePage/Cta";

const Index = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <ProjectLifecycle />
        <RecentProjects />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
