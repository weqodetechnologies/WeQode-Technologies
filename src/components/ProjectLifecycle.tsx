import React from "react";
import arrowImg from "../assets/lifeCycle imeges/Arrow.png";
import brainstormImg from "../assets/lifeCycle imeges/brainstorm.png";
import planImg from "../assets/lifeCycle imeges/plan-.png";
import designImg from "../assets/lifeCycle imeges/Design.png";
import developmentImg from "../assets/lifeCycle imeges/Development.png";
import testingImg from "../assets/lifeCycle imeges/Testing.png";
import launchImg from "../assets/lifeCycle imeges/Launch.png";

const photos = [
  brainstormImg,
  planImg,
  designImg,
  developmentImg, // ✅ Will load now
  testingImg,
  launchImg,
];

const stages = [
  "Brainstorm",
  "Plan",
  "Design",
  "Development",
  "Testing",
  "Launch",
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

      {/* ✅ MOBILE LAYOUT (Vertical Flow) */}
      <div className="flex flex-col sm:hidden items-center gap-10">
        {stages.map((stage, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={photos[index]}
              alt={stage}
              className="w-[160px] h-auto object-contain"
            />
            <h3 className="text-lg font-bold mt-4">{stage}</h3>

            {/* Arrow except last */}
            {index < stages.length - 1 && (
              <img
                src={arrowImg}
                alt="arrow"
                className="w-[40px] rotate-90 my-3"
              />
            )}
          </div>
        ))}
      </div>

      {/* ✅ DESKTOP / TABLET LAYOUT (Original But Fixed) */}
      <div className="hidden sm:flex flex-col items-center gap-16">
        {/* TOP ROW */}
        <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-28 relative">
          {[0, 1, 2].map((index) => (
            <div key={index} className="relative flex flex-col items-center">
              <img
                src={photos[index]}
                alt={stages[index]}
                className="w-[150px] md:w-[220px] lg:w-[300px] h-auto object-contain"
              />
              <h3 className="text-lg md:text-2xl lg:text-[28px] font-bold mt-5">
                {stages[index]}
              </h3>

              {/* Arrow between items */}
              {index < 2 && (
                <img
                  src={arrowImg}
                  className="absolute top-1/2 right-[-60px] md:right-[-60px] lg:right-[-100px] -translate-y-1/2 w-[50px] md:w-[60px] lg:w-[70px]"
                />
              )}
            </div>
          ))}
        </div>
        <div className="w-full flex justify md:justify-end lg:justify-end md:pr-[70px] lg:pr-[230px]">
          {/* Down Arrow (Right Side) */}
          <img
            src={arrowImg}
            alt="down arrow"
            className="w-[20px] sm:w-[55px] md:w-[65px] lg:w-[71px] rotate-90"
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-28 relative">
          {[5, 4, 3].map((index, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <img
                src={photos[index]}
                alt={stages[index]}
                className="w-[150px] md:w-[220px] lg:w-[300px] h-auto object-contain"
              />
              <h3 className="text-lg md:text-2xl lg:text-[28px] font-bold mt-5">
                {stages[index]}
              </h3>

              {/* Left arrows */}
              {idx < 2 && (
                <img
                  src={arrowImg}
                  className="absolute top-1/2 right-[-60px] md:right-[-60px] lg:right-[-100px] -translate-y-1/2 rotate-180 w-[50px] md:w-[60px] lg:w-[70px]"
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
