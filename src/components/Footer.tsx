import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";
import linkedinIcon from "@/assets/icons/Linkedin.png";
import TwitterIcon from "@/assets/icons/Xicon.png";
import instagramIcon from "@/assets/icons/InstaIcon.png";
const Footer = () => {
  return (
    <footer className="bg-[#512E78] text-white py-12 sm:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              <span className="text-[#F68C2D]">We</span>Qode{" "}
              <span className="text-white">Technologies</span>
            </h2>
            <p className="text-[#F68C2D] text-lg mb-8 font-medium">
              Tech Solutions made simple!
            </p>

            <p className="text-base mb-3">
              Have an idea or project in mind? <br />
              Let’s talk.
            </p>

            {/* Input and Button */}
            <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-[330px] shadow-md">
              <Input
                placeholder="Reach out to us"
                className="flex-1 border-none bg-transparent text-gray-600 placeholder:text-gray-400 text-base focus:ring-0 focus:outline-none px-5 py-3"
              />
              <Button className="bg-gradient-to-b from-[#F9A23B] to-[#E67A15] text-white font-semibold text-base rounded-full px-6 py-3 hover:opacity-90 transition-all">
                Let’s Talk
              </Button>
            </div>
            {/* Social Icons */}
            <div className="mt-8">
              <p className="text-lg font-medium mb-4">Follow us</p>
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-10 h-10 border-2  rounded-full flex items-center justify-center overflow-hidden  hover:text-[#512E78] transition-all"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </a>

                {/* X (Twitter) */}
                <a
                  href="#"
                  className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center overflow-hidden  hover:text-[#512E78] transition-all"
                >
                  <img
                    src={TwitterIcon}
                    alt="X"
                    className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center overflow-hidden hover:text-[#512E78] transition-all"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#F68C2D] transition-all font-bold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#F68C2D] transition-all"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#F68C2D] transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-[#F68C2D] transition-all"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F68C2D] transition-all"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>

            <div className="flex flex-col gap-5 text-lg">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <Phone className="text-[#F68C2D] w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+91 7678011969</p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center md:justify-start">
                <Mail className="text-[#F68C2D] w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@weqodetech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="text-[#F68C2D] w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Head Office</p>
                  <p>
                    WeQode Technologies, Jaiprakash Nagar, <br />
                    Nagpur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/70 text-sm">
          © 2025 WeQode Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
