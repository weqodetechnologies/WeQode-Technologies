import React from "react";
import personImage from "../assets/why Choose us images/image.png";
import teamImg from "../assets/why Choose us images/image2.png";
import customImg from "../assets/why Choose us images/image3.png";
import deliveryImg from "../assets/why Choose us images/image4.png";
import image5 from "../assets/why Choose us images/image5.png";
import arrowImg from "../assets/why Choose us images/arro.png";

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 bg-[#FFF8F0]">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SECTION */}
        <div className="text-center lg:text-left">
          <h1 className="text-[60px] sm:text-[80px] lg:text-[125px] font-black text-[#E5E5E5] leading-none">
            WHY
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-400 -mt-6 sm:-mt-8  lg:mt-[-52px] mb-4 sm:mb-8 lg:text-[44px]">
            Why Choose us?
          </h2>
          <p className="text-[#111111] text-base sm:text-lg lg:text-[24px] font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
            We bring together creativity, strategy, and technology to deliver
            results that matter. Our team is dedicated to building solutions
            that elevate your business and your brand.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center lg:items-end w-full relative">
          {/* SPEECH BUBBLE */}
          <div className="flex flex-col items-center lg:items-end mb-8 relative w-full">
            <div className="bg-[#49B3F9] text-[16px] sm:text-[18px] lg:text-[20px] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md text-center w-full sm:w-[540px] z-10">
              We don’t just think — we create crazy cool stuff!
            </div>

            {/* ARROW */}
            <img
              src={arrowImg}
              alt="Arrow"
              className="hidden sm:block absolute top-[55px] sm:top-[65px] right-[60%] lg:right-[490px] w-[50px] sm:w-[70px] h-[45px] sm:h-[60px] rotate-[15deg]"
            />

            {/* MAIN IMAGE */}
            <div className="mt-8 sm:mt-10 lg:mr-2 rounded-[36px] sm:rounded-[56px] overflow-hidden shadow-lg w-full sm:w-auto">
              <img
                src={personImage}
                alt="Creative Thinking"
                className="w-full sm:w-[500px] h-[120px] sm:h-[140px] object-cover rounded-[36px] sm:rounded-[56px]"
              />
            </div>
          </div>

          {/* FEATURE ROWS */}
          <div className="flex flex-col items-center lg:items-end gap-3 mt-4 ml-0 lg:ml-16 w-full">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 mr-0">
              <div className="bg-orange-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-[16px] sm:text-[18px] shadow whitespace-nowrap">
                Creative Team
              </div>
              <div className="bg-orange-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-[16px] sm:text-[18px] shadow whitespace-nowrap">
                Reliable Support
              </div>
              <img
                src={teamImg}
                alt=""
                className="w-[100px] sm:w-[120px] h-[45px] sm:h-[52px] rounded-full object-cover border-4 border-white"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
              <div className="bg-orange-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-[16px] sm:text-[18px] shadow whitespace-nowrap">
                Startup Friendly
              </div>
              <img
                src={customImg}
                alt=""
                className="w-[100px] sm:w-[120px] h-[45px] sm:h-[52px] rounded-full object-cover border-4 border-white"
              />
              <div className="bg-orange-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-[16px] sm:text-[18px] shadow whitespace-nowrap">
                Custom Solutions
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
              <div className="bg-orange-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-[16px] sm:text-[18px] shadow whitespace-nowrap">
                High-Quality Designs
              </div>
              <div className="bg-orange-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-[16px] sm:text-[18px] shadow whitespace-nowrap">
                On-Time Delivery
              </div>
              <img
                src={deliveryImg}
                alt=""
                className="w-[100px] sm:w-[120px] h-[45px] sm:h-[52px] rounded-full object-cover border-4 border-white"
              />
            </div>

            {/* Row 4 */}
            {/* Row 4 */}
            <div className="flex flex-nowrap justify-center lg:justify-end items-center gap-2 sm:gap-3 lg:gap-4 lg:mr-[40px] overflow-x-auto">
              <div className="bg-orange-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-[16px] sm:text-[18px] shadow whitespace-nowrap">
                Fast Communication
              </div>
              <img
                src={image5}
                alt=""
                className="w-[100px] sm:w-[120px] h-[45px] sm:h-[52px] rounded-full object-cover border-4 border-white shrink-0"
              />
              <div className="bg-orange-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-[16px] sm:text-[18px] shadow whitespace-nowrap">
                Affordable Tech Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
