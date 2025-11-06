import mascot from "@/assets/AvetarImg/sitrobo.png";
import { useEffect, useState } from "react";

const keywords = ["Solutions", "Application", "Website", "Redesign"];
const intervalTime = 2000;

const Hero = () => {
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % keywords.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-20">
      <div className="grid lg:grid-cols-[60%_40%] gap-10 lg:gap-6 items-center">
        {/* Left Section */}
        <div className="px-2 sm:px-5 text-center lg:text-left font-black">
          <h1
            className="
            mt-8 sm:mt-10
            text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[90px]
            leading-tight md:leading-[1.15] 
            text-[#111111] 
            mb-4 sm:mb-6
          "
          >
            {keywords[keywordIndex] === "Redesign" ? (
              <>
                We{" "}
                <span className="text-[hsl(var(--brand-purple))] transition-all duration-700">
                  {keywords[keywordIndex]}
                </span>
                <br />
                for All Your Tech
                <br />
                Problems.
              </>
            ) : (
              <>
                We Build{" "}
                <span className="text-[hsl(var(--brand-purple))] transition-all duration-700">
                  {keywords[keywordIndex]}
                </span>
                <br />
                for All Your Tech
                <br />
                Problems.
              </>
            )}
          </h1>

          <p
            className="
            mt-8 sm:mt-10 
            font-medium 
            text-base sm:text-lg md:text-xl lg:text-[22px] 
            text-[#111111] 
            mb-6 sm:mb-8 
            max-w-xl mx-auto lg:mx-0
          "
          >
            We turn complex technology into seamless digital solutions that
            empower your business to grow. Every product we create is built with
            precision, innovation, and purpose.
          </p>
        </div>

        {/* Right Section - Mascot */}
        <div className="flex justify-center lg:justify-end order-first lg:order-last">
          <img
            src={mascot}
            alt="WeQode Mascot Robot"
            className="
              w-[70%] sm:w-[60%] md:w-[55%] lg:w-[420px] 
              max-w-full h-auto 
              animate-float 
              rounded-2xl 
              mx-auto lg:mx-0
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
