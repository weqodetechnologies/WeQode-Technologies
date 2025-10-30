import React from "react";
import arrowImg from "../assets/lifeCycle imeges/Arrow.png";

const photos = [
  "/src/assets/lifeCycle imeges/brainstorm.png",
  "/src/assets/lifeCycle imeges/plan-.png",
  "/src/assets/lifeCycle imeges/Design.png",
  "/src/assets/lifeCycle imeges/Development.png",
  "/src/assets/lifeCycle imeges/Testing.png",
  "/src/assets/lifeCycle imeges/Launch.png",
];

const stages = [
  { title: "Brainstorm", position: "top" },
  { title: "Plan", position: "top" },
  { title: "Design", position: "top" },
  { title: "Development", position: "bottom" },
  { title: "Testing", position: "bottom" },
  { title: "Launch", position: "bottom" },
];

const ProjectLifecycle = () => (
  <section className="py-12 sm:py-16 lg:py-20">
    <div className="container mx-auto px-4 sm:px-6">
      {/* Title Section */}
      <div className="mb-12 sm:mb-16 text-center lg:text-left">
        <div className="text-[40px] sm:text-[80px] lg:text-[128px] font-bold text-[#E5E5E5] leading-none mb-[-28px] sm:mb-[-56px] lg:mb-[-68px]">
          PROJECT
        </div>
        <h2
          className="text-[20px] sm:text-[36px] lg:text-6xl font-bold"
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Project Lifecycle
        </h2>
        <p className="text-sm sm:text-lg md:text-2xl lg:text-[24px] text-[#141919] mt-6 max-w-2xl font-regular mx-auto lg:mx-0">
          Our process is built to turn ideas into impactful digital experiences
          from research and strategy to design, development, and launch.
        </p>
      </div>

      {/* Main Layout (Responsive for all devices) */}
      <div className="relative flex flex-col items-center gap-10 sm:gap-16">
        {/* Top Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 lg:gap-28 relative">
          {stages.slice(0, 3).map((stage, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <img
                src={photos[index]}
                alt={stage.title}
                className="w-[140px] sm:w-[200px] md:w-[260px] lg:w-[320px] h-auto object-contain"
              />
              <h3 className="text-sm sm:text-lg md:text-2xl lg:text-[28px] font-bold mt-3 sm:mt-4 lg:mt-5 text-center">
                {stage.title}
              </h3>

              {/* Right Arrow Between Boxes */}
              {index < 2 && (
                <img
                  src={arrowImg}
                  alt="arrow"
                  className="absolute top-1/2 right-[-45px] sm:right-[-70px] md:right-[-90px] lg:right-[-100px] -translate-y-1/2 w-[40px] sm:w-[55px] md:w-[65px] lg:w-[71px] rotate-0"
                />
              )}
            </div>
          ))}
        </div>

        {/* Downward Arrow Center */}
        <div className="flex justify-center ml-0 sm:ml-0 md:ml-0 lg:ml-[850px]">
          <img
            src={arrowImg}
            alt="down arrow"
            className="w-[40px] sm:w-[55px] md:w-[65px] lg:w-[71px] rotate-90 "
          />
        </div>

        {/* Bottom Row (reversed for flow continuity) */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 lg:gap-28 relative">
          {stages
            .slice(3, 6)
            .reverse()
            .map((stage, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <img
                  src={photos[5 - index]}
                  alt={stage.title}
                  className="w-[140px] sm:w-[200px] md:w-[260px] lg:w-[320px] h-auto object-contain"
                />
                <h3 className="text-sm sm:text-lg md:text-2xl lg:text-[28px] font-bold mt-3 sm:mt-4 lg:mt-5 text-center">
                  {stage.title}
                </h3>

                {/* Left Arrows Between Boxes */}
                {index < 2 && (
                  <img
                    src={arrowImg}
                    alt="arrow"
                    className="absolute top-1/2 right-[-45px] sm:right-[-70px] md:right-[-90px] lg:right-[-100px] -translate-y-1/2 w-[40px] sm:w-[55px] md:w-[65px] lg:w-[71px] rotate-180"
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectLifecycle;
