import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";
import mascot from "@/assets/weqode-mascot.png";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* CTA Section */}
      <section className="bg-[hsl(var(--brand-beige))] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Let's build something extraordinary!
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                From idea to launch, We're your team for bold, scalable digital products.
              </p>
              <Button 
                className="text-white rounded-xl px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "hsl(var(--brand-orange))" }}
              >
                Start Your Project
              </Button>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <img 
                src={mascot} 
                alt="WeQode Mascot - Ready to build" 
                className="w-full max-w-xs sm:max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="bg-primary text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">WeQode Technologies</h3>
              <p className="mb-6 text-sm sm:text-base" style={{ color: "hsl(var(--brand-orange))" }}>Tech Solutions made simple!</p>
              <p className="mb-4 text-sm sm:text-base">Have an idea or project in mind?<br />Let's talk.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  placeholder="Reach out to us" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm sm:text-base"
                />
                <Button 
                  className="text-white hover:opacity-90 transition-opacity whitespace-nowrap text-sm sm:text-base"
                  style={{ backgroundColor: "hsl(var(--brand-orange))" }}
                >
                  Let's Talk
                </Button>
              </div>
              <div className="flex gap-4 mt-6 justify-center sm:justify-start">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="#home" className="hover:opacity-80 transition-opacity">Home</a></li>
                <li><a href="#services" className="hover:opacity-80 transition-opacity">Services</a></li>
                <li><a href="#about" className="hover:opacity-80 transition-opacity">About</a></li>
                <li><a href="#careers" className="hover:opacity-80 transition-opacity">Careers</a></li>
                <li><a href="#contact" className="hover:opacity-80 transition-opacity">Contact us</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "hsl(var(--brand-orange))" }} />
                  <div className="text-sm sm:text-base">
                    <div className="font-semibold">Phone</div>
                    <div>+91 1234567890</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "hsl(var(--brand-orange))" }} />
                  <div className="text-sm sm:text-base">
                    <div className="font-semibold">Email</div>
                    <div>info@weqodetech.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "hsl(var(--brand-orange))" }} />
                  <div className="text-sm sm:text-base">
                    <div className="font-semibold">Head Office</div>
                    <div>WeQode Technologies, Jaiprakash Nagar, Nagpur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-white/60 text-xs sm:text-sm">
            <p>&copy; 2025 WeQode Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
