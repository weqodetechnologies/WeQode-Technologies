import aboutCompany from "../../assets/aboutImges/amoutCompany.png";

const AboutHeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-16">
        <div className="px-5 text-center lg:text-left font-black gap-6">
          <h1 className="mt-[50px] text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] mb-4 sm:mb-6 leading-tight text-[#111111]">
            Empowering <br /> Startups with Simple,
            <br /> Smart and Affordable
            <span className="text-[hsl(var(--brand-purple))] transition-all duration-700 ease-in-out mx-2  sm:mx-2 lg:mx-4">
              Tech{" "}
            </span>
          </h1>

          <p className="mt-[40px] sm:mt-[60px] font-medium text-base sm:text-lg md:text-xl text-[#111111] mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 lg:text-[24px]">
            We’re a team of creators helping startups build digital products
            that inspire, perform, and grow — all without breaking the bank.
          </p>
        </div>

        {/* About the company */}
        <div className="container mx-auto px-4 sm:px-6 mt-30 sm:mt-40 md:mt-50  ">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left side content */}
            <div>
              <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none">
                About
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6"
                style={{ color: "hsl(var(--brand-orange))" }}
              >
                About The Company
              </h2>

              <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[24px] text-[#000000] leading-7 lg:leading-8 mt-6 sm:mt-10">
                At WeQode Technologies, we combine creativity and technology to
                craft impactful digital solutions. Our team of designers,
                developers, and strategists builds intuitive, high-performing
                websites and applications that help businesses grow.
              </p>

              <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[24px] text-[#000000] leading-7 lg:leading-8 mt-6">
                Driven by innovation, collaboration, and precision, we turn
                ideas into digital experiences that make a lasting impact.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={aboutCompany}
                alt="Technologies"
                className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[570px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeroSection;
