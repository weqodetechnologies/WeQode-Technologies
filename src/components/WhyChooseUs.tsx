import React from "react";
import personImage from "../assets/why Choose us images/image.png";
import teamImg from "../assets/why Choose us images/image2.png";
import customImg from "../assets/why Choose us images/image3.png";
import deliveryImg from "../assets/why Choose us images/image4.png";
import image5 from "../assets/why Choose us images/image5.png";
import arrowImg from "../assets/why Choose us images/arro.png";

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 bg-[#FFF8F0] overflow-x-hidden">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT SECTION */}
        <div className="text-center lg:text-left">
          <h1
            className="
    text-[45px] sm:text-[70px] md:text-[90px] lg:text-[125px]
    font-black text-[#E5E5E5] leading-none
  "
          >
            WHY
          </h1>

          <h2
            className="
    text-2xl sm:text-3xl md:text-4xl lg:text-[44px]
    font-bold text-orange-400
    -mt-[30px] sm:-mt-[10px] md:-mt-[45px] lg:mt-[-50px]
    mb-4 sm:mb-6 md:mb-8
  "
          >
            Why Choose us?
          </h2>

          <p className="text-[#111111] text-base sm:text-lg md:text-xl lg:text-[24px] font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
            We bring together creativity, strategy, and technology to deliver
            results that matter. Our team is dedicated to building solutions
            that elevate your business and your brand.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center lg:items-end w-full relative">
          {/* SPEECH BUBBLE */}
          <div className="flex flex-col items-center lg:items-end mb-8 relative w-full">
            <div className="bg-[#49B3F9] text-[14px] sm:text-[18px] md:text-[19px] lg:text-[20px] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full shadow-md text-center w-full sm:w-[500px] md:w-[540px] z-10">
              We don’t just think — we create crazy cool stuff!
            </div>

            {/* ARROW */}
            <img
              src={arrowImg}
              alt="Arrow"
              className="hidden sm:block absolute top-[55px] sm:top-[65px] md:top-[72px] right-[55%] md:right-[280px] lg:right-[480px] w-[45px] sm:w-[60px] md:w-[70px] h-[38px] sm:h-[50px] md:h-[60px] rotate-[15deg]"
            />

            {/* MAIN IMAGE */}
            <div className="mt-8 sm:mt-10 lg:mr-2 rounded-[30px] sm:rounded-[40px] md:rounded-[56px] overflow-hidden shadow-lg w-full sm:w-auto">
              <img
                src={personImage}
                alt="Creative Thinking"
                className="w-full sm:w-[450px] md:w-[500px] h-[120px] sm:h-[140px] md:h-[160px] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[56px]"
              />
            </div>
          </div>

          {/* FEATURE ROWS */}

          <div className="flex flex-col items-center lg:items-end gap-5 mt-6 ml-0 lg:ml-16 w-full">
            {/* ROW 1 */}
            <div className="flex items-center justify-center lg:justify-end gap-3 flex-wrap max-w-full">
              <div className="feature-pill">Creative Team</div>
              <div className="feature-pill">Reliable Support</div>
              <img src={teamImg} alt="" className="feature-img" />
            </div>

            {/* ROW 2 */}
            <div className="flex items-center justify-center lg:justify-end gap-3 flex-wrap max-w-full">
              <div className="feature-pill">Startup Friendly</div>
              <img src={customImg} alt="" className="feature-img" />
              <div className="feature-pill">Custom Solutions</div>
            </div>

            {/* ROW 3 */}
            <div className="flex items-center justify-center lg:justify-end gap-3 flex-wrap max-w-full">
              <div className="feature-pill">High-Quality Designs</div>
              <div className="feature-pill">On-Time Delivery</div>
              <img src={deliveryImg} alt="" className="feature-img" />
            </div>

            {/* ROW 4 */}
            <div className="flex items-center justify-center lg:justify-end gap-3 flex-wrap max-w-full">
              <div className="feature-pill">Fast Communication</div>
              <img src={image5} alt="" className="feature-img" />
              <div className="feature-pill">Affordable Tech Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
