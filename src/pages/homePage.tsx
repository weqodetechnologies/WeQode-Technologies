import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import ProjectLifecycle from "@/components/ProjectLifecycle";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

const Index = () => {
  return (
    <div className="min-h-screen">
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
