const AboutHeroSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-16">
      <div className="px-5 text-center lg:text-left font-black gap-6">
        <h1 className=" mt-[50px] text-[90px]  sm:text-4xl md:text-5xl lg:text-[90px] mb-4 sm:mb-6 leading-20 sm:leading-[1.1] lg:leading-[1.1] text-[#111111]">
          Empowering <br /> Startups with Simple,
          <br /> Smart and Affordable
          <span className="text-[hsl(var(--brand-purple))] transition-all duration-700 ease-in-out mx-4">
            Tech{" "}
          </span>
        </h1>
        <p className="mt-[80px] font-medium sm:text-lg text-[#111111] mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 lg:text-[24px]">
          We’re a team of creators helping startups build digital products that
          inspire, perform, and grow all without breaking the bank.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
