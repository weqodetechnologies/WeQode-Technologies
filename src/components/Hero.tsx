import mascot from "@/assets/sitrobo.png";
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
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-8">
      <div className="grid lg:grid-cols-[70%_30%] gap-6 items-center">
        {/* Left Side - Text */}
        <div className="px-5 text-center lg:text-left font-black">
          <h1 className=" mt-[50px] text-[90px]  sm:text-4xl md:text-5xl lg:text-[90px] mb-4 sm:mb-6 leading-tight">
            {keywords[keywordIndex] === "Redesign" ? (
              <>
                We{" "}
                <span className="text-primary transition-all duration-700 ease-in-out">
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
                <span className="text-primary transition-all duration-700 ease-in-out">
                  {keywords[keywordIndex]}
                </span>
                <br />
                for All Your Tech
                <br />
                Problems.
              </>
            )}
          </h1>
          <p className="mt-[100px] font-medium sm:text-lg text-[#000000] mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            We turn complex technology into seamless digital solutions that
            empower your business to grow. Every product we create is built with
            precision, innovation, and purpose.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end order-first lg:order-last">
          <img
            src={mascot}
            alt="WeQode Mascot - Robot with laptop"
            className="w-full max-w-[420px] h-auto animate-float rounded-2xl  mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
