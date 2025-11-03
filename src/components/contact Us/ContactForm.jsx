import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import RobotImg from "../../assets/AvetarImg/sitingonLaptop.png";
import linkedinIcon from "@/assets/icons/Linkedin.png";
import TwitterIcon from "@/assets/icons/Xicon.png";
import instagramIcon from "@/assets/icons/InstaIcon.png";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactForm = () => {
  return (
    <section className="max-w-7xl mx-auto my-12 p-6 lg:p-10 border rounded-2xl bg-white mb-12 lg:mb-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 ">
        {/* Left Section */}
        <div className="bg-[hsl(var(--brand-orange))] rounded-xl text-white flex flex-col justify-between ">
          <div className="p-6 lg:p-10">
            <h2 className="text-[30px] font-bold mb-3"> Contact Information</h2>

            <p className="text-[20px] font-medium leading-relaxed mb-6">
              Partner with WeQode Technologies to turn your vision into digital
              reality.
            </p>

            <div className="space-y-6">
              <div>
                <p className="flex items-center gap-2 text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px]">
                  <MdPhoneInTalk className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />{" "}
                  Phone
                </p>

                <p className="ml-6 sm:ml-8 md:ml-10 font-medium text-white text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px]">
                  +91 1234567890
                </p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px]">
                  <MdEmail className="w-4 h-4" /> Email
                </p>

                <p className="ml-6 sm:ml-8 md:ml-10 font-medium text-white text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px]">
                  [info@weqodetech.com](mailto:info@weqodetech.com)
                </p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-white font-bold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
                  <IoLocationSharp className="w-4 h-4" /> Head Office
                </p>

                <p className="ml-6 sm:ml-8 md:ml-10 font-medium text-white text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px]">
                  WeQode Technologies, Jaiprakash Nagar, Nagpur
                </p>
              </div>
            </div>
            {/* Social Icons */}
            <div className="  py-10 lg:p-10">
              <p className="text-[30px] font-bold mb-">Follow us</p>

              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="/"
                  className="w-10 h-10 border-2  rounded-full flex items-center justify-center overflow-hidden  hover:text-[#512E78] transition-all"
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
                  className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center overflow-hidden  hover:text-[#512E78] transition-all"
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
        </div>
        {/* Right Section */}
        <div className="relative">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border-b border-gray-400 focus:outline-none pb-2 text-sm"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border-b border-gray-400 focus:outline-none pb-2 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-400 focus:outline-none pb-2 text-sm"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border-b border-gray-400 focus:outline-none pb-2 text-sm"
              />
            </div>

            <textarea
              placeholder="Tell us about your project"
              className="border-b border-gray-400 focus:outline-none pb-2 w-full text-sm"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative">
              {/* Left - Services */}
              <div>
                <p className="font-semibold mb-3">Services you need?</p>

                <div className="gap-2 text-sm">
                  {[
                    "Website Development",
                    "Web App Development",
                    "Website + Application Development",
                    "Application Development",
                    "Redesigning and revamping",
                    "Customization and configuration",
                    "Resource Outcourse",
                    "Domain Service Management",
                  ].map((service, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="service"
                        className="text-[#FF914D] focus:ring-[#FF914D]"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Right - Robot Image */}
              <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
                <img
                  src={RobotImg}
                  alt="WeQode Robot"
                  className="w-[180px] h-[190px] sm:w-[210px] sm:h-[220px] md:w-[240px] md:h-[260px] lg:w-[265px] lg:h-[282px] object-contain"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#FF914D] text-white font-medium px-6 py-2 rounded-md hover:bg-[#ff7a26] transition"
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
