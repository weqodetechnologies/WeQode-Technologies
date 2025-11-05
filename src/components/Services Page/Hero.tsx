import Devices from "../../assets/Services Img/servicesDevices.png";

const ServicesPageHero = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div className="grid lg:grid-cols-[40%_60%] gap-6 items-center">
        {/* Left Side - Text */}
        <div className="px-4 sm:px-6 text-center lg:text-left font-black">
          <h1 className="mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-[90px] mb-6 leading-tight">
            Crafting Digital{" "}
            <span className="text-[hsl(var(--brand-purple))] transition-all duration-700 ease-in-out">
              Excellence
            </span>
          </h1>
          <p className="mt-8 font-medium text-base sm:text-lg md:text-xl text-[#111111] mb-8 max-w-xl mx-auto lg:mx-0 lg:text-[24px]">
            We design, build, and deliver digital experiences that empower
            brands to grow, innovate, and lead in a fast changing world.
          </p>
        </div>
        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end order-first lg:order-last">
          <img
            src={Devices}
            alt="Multiple digital devices"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[658px] h-auto rounded-2xl mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesPageHero;
