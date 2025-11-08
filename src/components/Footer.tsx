import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Icon from "./icon";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // ✅ Helper function for active link
  const getLinkClass = (path: string) =>
    currentPath === path
      ? "text-[#F68C2D] font-semibold transition-all"
      : "hover:text-[#F68C2D] transition-all";

  const handleClick = () => {
    navigate("/contact#contact-form-section");
  };
  return (
    <footer className="bg-[#512E78] text-white py-12 sm:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              <span className="text-[#F68C2D]">We</span>Qode{" "}
              <span className="text-white">Technologies</span>
            </h2>

            <p className="text-[#F68C2D] text-base sm:text-lg mb-6 font-medium">
              Tech Solutions made simple!
            </p>

            <div>
              {" "}
              <p className="text-sm sm:text-base mb-4">
                Have an idea or project in mind? <br /> Let’s talk.
              </p>
              <div className="flex items-center justify-between bg-white rounded-full w-full max-w-[260px] mx-auto md:mx-0 px-1 py-1 shadow-[inset_0_-3px_5px_rgba(0,0,0,0.1),0_4px_10px_rgba(0,0,0,0.15)]">
                <span className="text-[#A19E9E] font-semibold text-sm sm:text-base px-4">
                  Reach out to us
                </span>

                <button
                  onClick={handleClick}
                  className="bg-gradient-to-b from-[#F9A23B] to-[#E67A15] text-white font-semibold text-sm sm:text-base rounded-full px-2 sm:px-4 py-1 sm:py-2 shadow-[0_3px_6px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-all duration-300"
                >
                  Let’s Talk
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 sm:mt-8">
              <p className="text-lg font-medium mb-3">Follow us</p>
              <div className="flex justify-center md:justify-start gap-4">
                <a className="w-9 h-9 sm:w-10 sm:h-10 border-2 rounded-full flex items-center justify-center hover:bg-white transition-all">
                  <Icon type="linkedin" className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
                <a className="w-9 h-9 sm:w-10 sm:h-10 border-2 rounded-full flex items-center justify-center hover:bg-white transition-all">
                  <Icon type="twitter" className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
                <a className="w-9 h-9 sm:w-10 sm:h-10 border-2 rounded-full flex items-center justify-center hover:bg-white transition-all">
                  <Icon type="instragram" className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul
              className="space-y-3 text-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <li>
                <Link to="/" className={getLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className={getLinkClass("/services")}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className={getLinkClass("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className={getLinkClass("/careers")}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className={getLinkClass("/contact")}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>

            <div className="flex flex-col gap-5 text-base sm:text-lg">
              {/* Phone */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="text-[#F68C2D] w-6 h-6 flex-shrink-0" />
                <div className="flex flex-wrap items-center gap-1">
                  <p className="font-semibold">Phone:</p>
                  <p className="font-normal">+91 7678011969</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="text-[#F68C2D] w-6 h-6 flex-shrink-0" />
                <div className="flex flex-wrap items-center gap-1">
                  <p className="font-semibold">Email:</p>
                  <p className="font-normal">info@weqodetech.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3 justify-center md:justify-start ">
                <MapPin className="text-[#F68C2D] w-6 h-6 flex-shrink-0 hidden sm:flex" />
                <div className="flex flex-col text-center sm:text-left md:text-left leading-tight">
                  {/* Mobile (sm) */}
                  <p className="font-semibold md:hidden">Head Office</p>

                  {/* Tablet + Desktop (md and above) */}
                  <p className="font-semibold hidden md:block">Head Office:</p>
                  <p className="font-normal">
                    WeQode Technologies, Jaiprakash Nagar, Nagpur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-10 pt-5 text-center text-white/70 text-sm">
          © 2025 WeQode Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
