import React from "react";
import Devices from "../../assets/AvetarImg/chkrabot.png";

function ContactHero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Side - Text */}
        <div className="px-2 sm:px-6 text-center lg:text-left font-black">
          <h1 className="mt-10 sm:mt-16 md:mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-[90px] mb-6 leading-tight">
            Let’s Build <br />
            Something <br />
            <span className="text-[hsl(var(--brand-purple))] transition-all duration-700 ease-in-out">
              Extraordinary
            </span>
            <br />
            <span className="mt-4 inline-block text-4xl sm:text-5xl md:text-6xl lg:text-[90px] leading-tight">
              Together
            </span>
          </h1>
          <p className="mt-8 font-medium text-base sm:text-lg md:text-xl text-[#111111] mb-8 max-w-xl mx-auto lg:mx-0 lg:text-[24px] leading-relaxed">
            We design, build, and deliver digital experiences that empower
            brands to grow, innovate, and lead in a fast changing world.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end order-first lg:order-last mt-10 sm:mt-16 md:mt-20 lg:mt-0">
          <img
            src={Devices}
            alt="Multiple digital devices"
            className="w-full max-w-[455px] h-auto md:w-[455px] md:h-[371px] lg:w-[455px] lg:h-[371px] object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
