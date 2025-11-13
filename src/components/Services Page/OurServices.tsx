import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

import devImage from "../../assets/Services Img/devImage.png";
import webAppImage from "../../assets/Services Img/webAppImage.jpg";
import appDevImage from "../../assets/Services Img/MobileApp.png";
import redesignImage from "../../assets/Services Img/Redesign.png";
import resourceImage from "../../assets/Services Img/Resource Outsourcing.png";
import domainImage from "../../assets/Services Img/Domain Service Management.png";

const serviceSections = [
  {
    key: "website",
    title: "Website Development",
    subtitle:
      "At WeQode Technologies, we specialize in creating high-performance, visually appealing, and user-centric websites that help businesses stand out online.",
    accordions: [
      {
        title: "Custom Website Development",
        content:
          "We build fully customized websites designed around your business goals and user needs. From concept to launch, every page is crafted to deliver a seamless user experience.",
      },
      {
        title: "Website Maintenance & Support",
        content:
          "We ensure your website remains fast, secure, and up-to-date through ongoing maintenance, monitoring, and performance optimization.",
      },
      {
        title: "E-Commerce Development",
        content:
          "We create scalable and secure e-commerce platforms tailored to your business needs, integrating smooth checkout processes and modern UI/UX.",
      },
    ],
    image: devImage,
  },
  {
    key: "web-app",
    title: "Web App Development",
    subtitle:
      "We craft powerful, interactive, and secure web applications tailored to your business needs. Our team combines innovative design with robust technology to deliver seamless digital experiences that drive efficiency, engagement, and growth.",
    accordions: [
      {
        title: "Custom Web Applications",
        content:
          "Bespoke web solutions designed to streamline workflows and engage users.",
      },
      {
        title: "Web Portal Development",
        content:
          "Secure and scalable portals that empower business operations and customer communication.",
      },
      {
        title: "Enterprise Web Applications",
        content:
          "Performance-optimized apps for complex enterprise needs, with robust security and support.",
      },
    ],
    image: webAppImage,
  },
  {
    key: "app-dev",
    title: "Application Development",
    subtitle:
      "We craft mobile applications that combine innovation, performance, and seamless user experiences.",
    accordions: [
      {
        title: "Android App Development",
        content:
          "We design and develop robust Android solutions with beautiful UI and smooth performance.",
      },
      {
        title: "iOS App Development",
        content:
          "Build stunning iOS apps to reach high-value users and expand your brand's reach.",
      },
      {
        title: "Cross-Platform App Development",
        content:
          "Get your app on multiple platforms with a single code base using cutting-edge cross-platform frameworks.",
      },
    ],
    image: appDevImage,
  },
  {
    key: "redesign",
    title: "Redesign & Revamping",
    subtitle:
      "Your website is often the first impression your audience gets of your brand and first impressions matter. We help businesses refresh, modernize, and optimize their existing websites to meet current design trends, performance standards, and user expectations.",
    accordions: [
      {
        title: "UI/UX Redesign",
        content:
          "Revamp your website with intuitive navigation, refined layouts, and appealing designs.",
      },
      {
        title: "Performance Optimization",
        content:
          "Boost loading speed, responsiveness, and accessibility for improved user retention.",
      },
      {
        title: "Brand Refresh Integration",
        content:
          "Integrate your newest branding into your digital presence for consistency and impact.",
      },
    ],
    image: redesignImage,
  },
  {
    key: "resource",
    title: "Resource Outsourcing",
    subtitle:
      "We craft powerful, interactive, and secure web applications tailored to your business needs. Our team combines innovative design with robust technology to deliver seamless digital experiences that drive efficiency, engagement, and growth.",
    accordions: [
      {
        title: "Dedicated Resource Hiring",
        content:
          "Hire expert developers and designers for short-term and long-term projects.",
      },
      {
        title: "Brand Refresh Integration",
        content:
          "Seamlessly refresh and modernize your team’s skillset to match current tech trends.",
      },
      {
        title: "Remote Team Augmentation",
        content:
          "Quickly scale project teams with skilled professionals from our remote pool.",
      },
    ],
    image: resourceImage,
  },
  {
    key: "domain",
    title: "Domain Service Management",
    subtitle:
      "We craft powerful, interactive, and secure web applications tailored to your business needs. Our team combines innovative design with robust technology to deliver seamless digital experiences that drive efficiency, engagement, and growth.",
    accordions: [
      {
        title: "Domain Registration & Renewal",
        content:
          "Register new domains, renew existing ones, and manage all your domain needs securely.",
      },
      {
        title: "DNS Management",
        content:
          "Configure DNS records for maximum reliability, performance, and uptime.",
      },
      {
        title: "Domain Privacy & Security",
        content:
          "Protect your domain information and brand against cyber threats with premium privacy and security services.",
      },
    ],
    image: domainImage,
  },
];

// Keys for image-left layout on desktop
const imageLeftSections = ["web-app", "redesign", "domain"];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (sectionIdx, accordionIdx) => {
    const index = sectionIdx * 10 + accordionIdx;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Header Section */}
      <section className="bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none">
            SERVICES
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6"
            style={{ color: "hsl(var(--brand-orange))" }}
          >
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-regular lg:text-[24px] mb-10 max-w-2xl lg:mt-10 sm:mt-4 ">
            At WeQode, we blend creativity and technology to deliver
            custom-built digital experiences. Explore what we can create
            together.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((section, sectionIdx) => {
        const imageLeft = imageLeftSections.includes(section.key);

        return (
          <section
            key={section.key}
            className="py-16 sm:py-20 bg-background relative overflow-hidden"
          >
            <div className="container mx-auto px-4 sm:px-6">
              <div
                className={
                  // Conditional layout: reverse order if imageLeft and desktop
                  `w-full lg:w-[1452px] lg:h-[438px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[76px] items-center px-4 sm:px-6 md:px-8 lg:px-14` +
                  (imageLeft ? " lg:[display:flex] lg:flex-row-reverse" : "")
                }
              >
                {/* Image */}
                <div
                  className={`flex justify-center ${
                    imageLeft ? "lg:justify-start" : "lg:justify-end"
                  } items-center h-full`}
                >
                  <img
                    src={section.image}
                    alt={`${section.title} illustration`}
                    className="rounded-xl shadow-md w-full max-w-[574px] lg:max-w-full lg:h-[438px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col justify-center h-full">
                  <h4 className="font-bold text-[#512E78] mb-6 text-2xl sm:text-3xl md:text-[32px] lg:text-[44px]">
                    {section.title}
                  </h4>
                  <p className="text-[#000000] mb-8 text-sm sm:text-base md:text-[18px] lg:text-[20px] max-w-xl">
                    {section.subtitle}
                  </p>
                  <div className="space-y-6 overflow-y-auto scrollbar-hide max-h-[200px] pr-2">
                    {section.accordions.map((item, accordionIdx) => {
                      const index = sectionIdx * 10 + accordionIdx;
                      return (
                        <div
                          key={accordionIdx}
                          className="border-b border-gray-300 pb-4 cursor-pointer transition-all duration-300 ease-in-out"
                        >
                          <div
                            className="flex justify-between items-center"
                            onClick={() =>
                              toggleAccordion(sectionIdx, accordionIdx)
                            }
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                toggleAccordion(sectionIdx, accordionIdx);
                              }
                            }}
                            role="button"
                            aria-expanded={openIndex === index}
                          >
                            <h5 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-[25px] text-gray-900">
                              {item.title}
                            </h5>
                            {openIndex === index ? (
                              <ChevronUp className="w-5 h-5 text-gray-700" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-700" />
                            )}
                          </div>
                          <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                              openIndex === index
                                ? "max-h-[150px] mt-2"
                                : "max-h-0"
                            }`}
                          >
                            <p className="text-gray-600 text-sm sm:text-base">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Services;
