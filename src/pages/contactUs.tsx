import Header from "@/components/Header";
import ContactHero from "@/components/contact Us/contactHero";
import ContactForm from "@/components/contact Us/ContactForm";
import Footer from "@/components/Footer";
import Map from "@/components/contact Us/Map";
function contactUs() {
  return (
    <div className="min-h-screen ">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default contactUs;
