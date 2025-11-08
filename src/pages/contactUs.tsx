import Header from "@/components/Header";
import ContactHero from "@/components/contact Us/contactHero";
import ContactForm from "@/components/contact Us/ContactForm";
import Footer from "@/components/Footer";
import Map from "@/components/contact Us/Map";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ContactUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form-section") {
      const element = document.querySelector(location.hash);
      if (element) {
        // 👇 smooth scroll directly to the form
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen ">
      <Header />
      <main>
        <ContactHero />
        <section id="contact-form-section">
          <ContactForm />
        </section>
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
