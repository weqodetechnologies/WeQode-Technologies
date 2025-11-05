import ourMissionImage from "../../assets/aboutImges/mission.png";
import ourVisionImage from "../../assets/aboutImges/vision.png";

import Icon from "../icon";
const MissionAndVision = () => {
  const cards = [
    {
      icon: (
        <Icon
          type="puzzlePiece"
          className="text-4xl transition-all duration-300 group-hover:text-[#E7CEFF]"
        />
      ),

      title: "Tailored Strategies",
      desc: "Custom solutions aligned with your business goals.",
    },
    {
      icon: (
        <Icon
          type="GrowthGraph"
          className="text-4xl transition-all duration-300 group-hover:text-[#E7CEFF]"
        />
      ),
      title: "Proven Results",
      desc: "Success stories showcasing significant client growth.",
    },
    {
      icon: (
        <Icon
          type="HandShake"
          className="text-4xl transition-all duration-300 group-hover:text-[#E7CEFF]"
        />
      ),
      title: "Client Approach",
      desc: "Collaborative partnership for impactful strategies.",
    },
    {
      icon: (
        <Icon
          type="bulf"
          className="text-4xl transition-all duration-300  group-hover:text-[#E7CEFF]"
        />
      ),
      title: "Innovative Solutions",
      desc: "Cutting edge tactics that exceed industry standards.",
    },
  ];
  const industries = [
    "E-Commerce",
    "Healthcare",
    "Sports",
    "Travel Tech & Hospitality",
    "Retail & Service Industry",
    "Agritech",
    "Home Service & Lifestyle Apps",
    "Wellness & Mental Health",
    "HR Tech & Recruitment",
    "Green Tech & Clean Energy",
    "Logistics & Supply Chain",
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-background relative overflow-hidden mt-[250px] ">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none">
            OUR
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6"
            style={{ color: "hsl(var(--brand-orange))" }}
          >
            Our Vision & Mission
          </h2>
          <p className="text-base sm:text-lg text-regular lg:text-[24px] mb-6 max-w-2xl lg:mt-10 sm:mt-4 ">
            We combine creativity and technology to craft purposeful digital
            experiences. Our vision and mission drive us to deliver innovation
            that creates real impact.
          </p>
        </div>

        {/* Vision  */}
        <div className="container mx-auto px-4 sm:px-6 mt-30 sm:mt-40 md:mt-50  lg:mt-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2
                className="text-2xl sm:text-3xl lg:text-[44px] font-bold  "
                style={{ color: "hsl(var(--brand-purple))" }}
              >
                Our Vision
              </h2>

              <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[24px] text-[#000000] leading-7 lg:leading-8 mt-6 sm:mt-10">
                Our vision is to redefine digital innovation by building
                meaningful, human-centered experiences.We strive to be a trusted
                partner for businesses looking to grow through creativity,
                integrity, and technical excellence.By blending design,
                technology, and strategy, we envision a future where every
                digital interaction creates lasting value.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={ourVisionImage}
                alt="Technologies"
                className="
    w-[250px] h-auto 
    sm:w-[350px] sm:h-auto 
    md:w-[450px] md:h-auto 
    lg:w-[427px] lg:h-[377px] 
    object-contain
  "
              />
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="container mx-auto px-4 sm:px-6 mt-30 sm:mt-40 md:mt-50  lg:mt-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Right Side Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={ourMissionImage}
                alt="Technologies"
                className="
    w-[250px] h-auto 
    sm:w-[350px] sm:h-auto 
    md:w-[450px] md:h-auto 
    lg:w-[427px] lg:h-[377px] 
    object-contain
  "
              />
            </div>
            <div>
              <h2
                className="text-2xl sm:text-3xl lg:text-[44px] font-bold  "
                style={{ color: "hsl(var(--brand-purple))" }}
              >
                Our Mission
              </h2>

              <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[24px] text-[#000000] leading-7 lg:leading-8 mt-6 sm:mt-10">
                At WeQode Technologies, our mission is to empower businesses
                through design-driven digital innovation.We aim to deliver
                solutions that combine creativity, technology, and strategy,
                transforming ideas into impactful digital experiences. Through
                precision, collaboration, and excellence, we help brands evolve
                and thrive in an ever-changing digital world.
              </p>
            </div>
          </div>
        </div>

        {/* what set us apart */}
        <div className="container mx-auto px-4 sm:px-6 mt-[250px]">
          <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none ">
            What
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6 ml-1  lg:ml-[18px] md:ml-[15px] sm:ml-[10px]  "
            style={{ color: "hsl(var(--brand-orange))" }}
          >
            What Sets Us Apart
          </h2>
          <p className="text-base sm:text-lg  font-regular lg:text-[24px] mb-6 max-w-[1120px] lg:mt-10 sm:mt-4 ">
            At WeQode, we blend creativity, precision, and strategy to deliver
            digital solutions that truly make an impact. Our commitment to
            quality, innovation, and collaboration ensures every project exceeds
            expectations.
          </p>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center 
                 bg-[#E7CEFF] hover:bg-[#533074] text-[#1A1A1A] hover:text-white 
                 rounded-2xl p-6 sm:p-8  transition-all duration-300 shadow-md
                 w-full sm:max-w-[280px] md:max-w-[280px] lg:w-[298px] lg:h-[318px] mx-auto"
              >
                <div className="bg-[#ffffff]/30 rounded-full p-4 mb-4 text-[#533074] group-hover:text-[#E7CEFF] transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="font-bold text-[24px] mb-2">{card.title}</h3>
                <p className="font-medium text-[18px] leading-relaxed text-[#000000] group-hover:text-white ">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sector */}
        <div className="container mx-auto px-4 sm:px-6 mt-[250px]">
          <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-58px] select-none ">
            SECTOR
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6 ml-1  lg:ml-[18px] md:ml-[15px] sm:ml-[10px]  "
            style={{ color: "hsl(var(--brand-orange))" }}
          >
            Sectors we work in
          </h2>
          <p className="text-base sm:text-lg  font-regular lg:text-[24px] mb-6 max-w-[1120px] lg:mt-10 sm:mt-4 ">
            We partner with businesses across sectors to build transformative
            digital experiences.
            <br />
            Driven by design and innovation, we help brands evolve in a
            connected world.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
            {industries.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center 
                     text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium text-center 
                     bg-[hsl(var(--brand-purple))] 
                     hover:bg-[hsl(var(--brand-orange))] 
                     rounded-full 
                     px-4 sm:px-8 md:px-10 lg:px-12 
                     h-[60px] sm:h-[70px] md:h-[80px] 
                     cursor-pointer 
                     transition-all duration-300 ease-in-out 
                     shadow-sm hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionAndVision;
