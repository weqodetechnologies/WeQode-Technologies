import RobotImg from "../../assets/AvetarImg/sitingonLaptop.png";
import Icon from "../icon";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Checkbox from "../../components/ui/checkbox";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const services = [
    "Website Development",
    "Web App Development",
    "Website + Application Development",
    "Application Development",
    "Redesigning and revamping",
    "Customization and configuration",
    "Resource Outcourse",
    "Domain Service Management",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedServiceList =
      selectedServices.length > 0
        ? selectedServices.join(", ")
        : "No service selected";

    emailjs
      .send(
        "service_zb3z4um",
        "template_76szr2r",
        {
          to_email: "info@weqodetech.com",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          services: selectedServiceList,
        },
        "d8Bc3rrzINrO1MgeV"
      )
      .then(
        () => {
          alert("✅ Thank you! Your message has been sent successfully.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setSelectedServices([]);
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="max-w-7xl mx-auto my-12 p-6 lg:p-10 border rounded-2xl bg-[hsl(var(--brand-orange)) mb-12 lg:mb-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <aside
          className="
            lg:min-w-[350px] 
            bg-[hsl(var(--brand-orange))]
            rounded-xl
            text-white
            flex flex-col
            justify-between
            px-6 py-10
            lg:py-16
            lg:px-10
            mb-8 lg:mb-0
            min-h-[500px]
            shadow-md
          "
        >
          <div>
            <h2 className="text-xl md:text-2xl lg:text-[32px] font-bold mb-6 mt-1">
              Contact Information
            </h2>
            <p className="text-base md:text-lg lg:text-[20px] leading-relaxed mb-8 font-medium">
              Partner with WeQode Technologies to turn your vision into digital
              reality.
            </p>

            <div className="space-y-16 mb-6">
              <div className="space-y-8 ">
                {/* Phone */}
                <div>
                  <p
                    className="flex items-center gap-2 text-white font-bold 
  text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px]"
                  >
                    <MdPhoneInTalk className="w-[26px] h-[26px]" />
                    Phone
                  </p>
                  <p
                    className="ml-8 font-medium text-white
      text-[16px] sm:text-[18px] md:text[20px] lg:text-[20px]"
                  >
                    +91 1234567890
                  </p>
                </div>
                {/* Email */}
                <div>
                  <p
                    className="flex items-center gap-2 text-white font-bold 
  text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px]"
                  >
                    <MdEmail className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px]" />
                    Email
                  </p>
                  <p
                    className="ml-8 font-medium text-white
      text-[16px] sm:text-[18px] md:text[20px] lg:text-[20px]"
                  >
                    <a href="mailto:info@weqodetech.com" className="underline">
                      info@weqodetech.com
                    </a>
                  </p>
                </div>
                {/* Head Office */}
                <div>
                  <p
                    className="flex items-center gap-2 text-white font-bold 
  text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px]"
                  >
                    <IoLocationSharp className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px]" />
                    Head Office
                  </p>
                  <p
                    className="ml-8 font-medium text-white
      text-[16px] sm:text-[18px] md:text[20px] lg:text-[20px]"
                  >
                    WeQode Technologies, Jaiprakash Nagar, Nagpur
                  </p>
                </div>
              </div>
              <div className="py-10 lg:p-12">
                <p className="text-[30px] font-bold mt-4 mb-2 ">Follow us</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/weqode-technologies-747438395"
                    className="flex items-center justify-center hover:text-[#512E78] transition-all"
                  >
                    <Icon type="linkedin" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center hover:text-[#512E78] transition-all"
                  >
                    <Icon type="twitter" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center hover:text-[#512E78] transition-all"
                  >
                    <Icon type="instragram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Section */}
        <main>
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-2xl shadow-md p-5 sm:p-12 space-y-3"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="firstName" className="font-semibold mb-2 block">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border-b border-gray-700 focus:outline-none pb-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="font-semibold mb-2 block">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border-b border-gray-700 focus:outline-none pb-2 w-full"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="email" className="font-semibold mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-b border-gray-700 focus:outline-none pb-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="font-semibold mb-2 block">
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border-b border-gray-700 focus:outline-none pb-2 w-full"
                />
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="message" className="font-semibold mb-2 block">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder="Write your message here..."
                className="border border-gray-700 rounded-md focus:outline-none w-full p-3"
              />
            </div>

            {/* Services + Robot Image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {/* Left Side - Services */}
              <div>
                <p className="font-bold text-[20px] mb-3">Services you need?</p>
                <div className="space-y-3 font-medium text-[20px]  ">
                  {services.map((service, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        size={18}
                      />
                      <span className="text-[16px]">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Right Side - Robot Image */}
              <div className="flex justify-center sm:justify-end items-start min-w-[150px]">
                <img
                  src={RobotImg}
                  alt="WeQode Robot"
                  className="max-w-full w-[150px] sm:w-[180px] md:w-[230px] lg:w-[260px] h-auto object-contain"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center  sm:justify-center lg:justify-start   ">
              <Button
                type="submit"
                className="text-white font-semibold text-base rounded-md px-6 py-3 hover:opacity-90 transition-all"
                style={{ backgroundColor: "hsl(var(--brand-orange))" }}
              >
                Send a Message
              </Button>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
};

export default ContactForm;
