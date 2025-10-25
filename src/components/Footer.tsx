import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";
import mascot from "@/assets/weqode-mascot.png";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* CTA Section */}
      <section className="bg-[hsl(var(--brand-beige))] py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Let's build something extraordinary!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From idea to launch, We're your team for bold, scalable digital products.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-xl px-8 py-6 text-lg">
                Start Your Project
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src={mascot} 
                alt="WeQode Mascot - Ready to build" 
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">WeQode Technologies</h3>
              <p className="text-secondary mb-6">Tech Solutions made simple!</p>
              <p className="mb-4">Have an idea or project in mind?<br />Let's talk.</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Reach out to us" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  Let's Talk
                </Button>
              </div>
              <div className="flex gap-4 mt-6">
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
            <div>
              <h4 className="text-xl font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-secondary transition-colors">About</a></li>
                <li><a href="#careers" className="hover:text-secondary transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-secondary transition-colors">Contact us</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div>+91 1234567890</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>info@weqodetech.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <div className="font-semibold">Head Office</div>
                    <div>WeQode Technologies, Jaiprakash Nagar, Nagpur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 WeQode Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
