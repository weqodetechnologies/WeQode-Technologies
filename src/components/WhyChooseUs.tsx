import React from "react";
import personImage from "../assets/why Choose us images/image.png";
import teamImg from "../assets/why Choose us images/image2.png";
import customImg from "../assets/why Choose us images/image3.png";
import deliveryImg from "../assets/why Choose us images/image4.png";
import image5 from "../assets/why Choose us images/image5.png";
import arrowImg from "../assets/why Choose us images/arro.png";

const featureRows = [
  ["Creative Team", "Reliable Support"],
  ["Startup Friendly", "Custom Solutions"],
  ["High-Quality Designs", "On-Time Delivery"],
  ["Fast Communication", "Affordable Tech Solutions"],
];

const featureImages = [teamImg, customImg, image5, deliveryImg];

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-6 py-16 bg-[#FFF8F0]">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-[100px] font-extrabold text-[#E5E5E5] leading-none">
            WHY
          </h1>
          <h2 className="text-4xl font-bold text-orange-400 -mt-12 mb-4">
            Why Choose us?
          </h2>
          <p className="text-black text-lg font-medium leading-relaxed max-w-md">
            We bring together creativity, strategy, and technology to deliver
            results that matter. Our team is dedicated to building solutions
            that elevate your business and your brand.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center lg:items-start w-full">
          {/* Speech bubble + main image */}
          <div className="mb-1 flex flex-col items-center w-full">
            <div className="bg-[#49B3F9] text-[20px] text-white px-7 py-3 rounded-full shadow-md text-center w-[540px] mb-[-14px] z-20">
              We don’t just think — we create crazy cool stuff!
            </div>

            <div className="flex flex-col w-full items-center relative">
              {/* Arrow */}
              <div className="w-[520px] mt-5 flex justify-start">
                <img src={arrowImg} alt="Arrow" className="w-[72px] h-[63px]" />
              </div>

              {/* Main Image */}
              <div className="w-full flex justify-center mt-[-56px] ml-20">
                <div className="relative overflow-hidden shadow-lg rounded-[56px]">
                  <img
                    src={personImage}
                    alt="Creative Thinking"
                    className="w-[460px] h-[124px] object-cover"
                    style={{ borderRadius: "56px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT-SIDED PYRAMID */}
          <div className="flex flex-col items-end w-full mt-6 relative space-y-3">
            {featureRows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex items-center gap-5 justify-end transition-all duration-300"
                style={{ marginRight: `${rowIdx * 50}px` }} // Pyramid shift
              >
                {/* Feature boxes - auto width based on text */}
                {row.map((title, idx) => (
                  <div
                    key={idx}
                    className="bg-orange-400 text-white px-6 py-3 rounded-full font-bold text-[18px] shadow hover:scale-105 transition-transform whitespace-nowrap"
                  >
                    {title}
                  </div>
                ))}

                {/* Circular image same height as text boxes */}
                {featureImages[rowIdx] && (
                  <div className="flex items-center justify-center bg-orange-400 rounded-full shadow-md hover:scale-105 transition-transform">
                    <img
                      src={featureImages[rowIdx]}
                      alt="Feature visual"
                      className="w-[127px] h-[52px] rounded-full object-cover border-4 border-white"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
