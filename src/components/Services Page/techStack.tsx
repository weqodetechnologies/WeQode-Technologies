import React, { useState } from "react";
import techImg from "../../assets/techImg.png";
import FigmaIcon from "../../assets/Icons/figma.png";
import PhotoshopIcon from "../../assets/Icons/Photoshoop.png";
import IllustratorIcon from "../../assets/Icons/Illuasrtrator.png";
import CanvaIcon from "../../assets/Icons/canva.png";
import HTMLIcon from "../../assets/Icons/html.png";
import CSSIcon from "../../assets/Icons/css.png";
import JavaScriptIcon from "../../assets/Icons/js.png";
import ReactIcon from "../../assets/Icons/react.png";
import ReduxIcon from "../../assets/Icons/Redusx.png";
import BootstrapIcon from "../../assets/Icons/bootstrap.png";
import NodeIcon from "../../assets/Icons/Nodejs.png";
import ExpressIcon from "../../assets/Icons/Express.png";
import SpringBootIcon from "../../assets/Icons/springBoot.png";
import PythonIcon from "../../assets/Icons/python.png";
import GitHubIcon from "../../assets/Icons/gitHub.png";
import DjangoIcon from "../../assets/Icons/Django.png";
import FastAPIIcon from "../../assets/Icons/fastApi.png";
import MySQLIcon from "../../assets/Icons/MysQL.png";
import PostgreSQLIcon from "../../assets/Icons/Postgre.png";
import MongoDBIcon from "../../assets/Icons/mongoDb.png";
import CassandraIcon from "../../assets/Icons/cassendra.png";
import SnowflakeIcon from "../../assets/Icons/SnowFlake.png";
import RedisIcon from "../../assets/Icons/redies.png";
import ChatGPTIcon from "../../assets/Icons/gpt.png";
import GeminiIcon from "../../assets/Icons/Gemini.png";
import ClaudeIcon from "../../assets/Icons/cloude.png";
import MidjourneyIcon from "../../assets/Icons/Midjourny.png";
import ZapierIcon from "../../assets/Icons/Zapir.png";

const techStack = {
  Design: [
    { name: "Figma", icon: FigmaIcon },
    { name: "Photoshop", icon: PhotoshopIcon },
    { name: "Illustrator", icon: IllustratorIcon },
    { name: "Canva", icon: CanvaIcon },
  ],
  Frontend: [
    { name: "HTML", icon: HTMLIcon },
    { name: "CSS", icon: CSSIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "React.js", icon: ReactIcon },
    { name: "Redux", icon: ReduxIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
  ],
  Backend: [
    { name: "Node.js", icon: NodeIcon },
    { name: "Express.js", icon: ExpressIcon },
    { name: "Spring Boot", icon: SpringBootIcon },
    { name: "Python", icon: PythonIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "Django", icon: DjangoIcon },
    { name: "FastAPI", icon: FastAPIIcon },
  ],
  Database: [
    { name: "MySQL", icon: MySQLIcon },
    { name: "PostgreSQL", icon: PostgreSQLIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "Cassandra", icon: CassandraIcon },
    { name: "Snowflake", icon: SnowflakeIcon },
    { name: "Redis", icon: RedisIcon },
  ],
  "AI Technology": [
    { name: "ChatGPT", icon: ChatGPTIcon },
    { name: "Gemini", icon: GeminiIcon },
    { name: "Claude", icon: ClaudeIcon },
    { name: "Midjourney", icon: MidjourneyIcon },
    { name: "Zapier", icon: ZapierIcon },
  ],
};

const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("Design");

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden mb-[120px] ">
      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8">
        <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none">
          TECHNLOGIES
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6"
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Technologies and Tools we use
        </h2>
        <p className="text-base sm:text-lg text-regular lg:text-[24px] mb-10 max-w-[1080px] lg:mt-10 sm:mt-4  text-[#000000]">
          At WeQode Technologies, we believe that great digital solutions are
          built on the foundation of powerful technologies.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  items-center">
          <div className=" font-medium text-lg lg:text-[24px] space-y-4 text-[#656464] leading-6 lg:leading-8 ">
            <p>
              We believe the right technology stack is the backbone of every
              successful project. Our team leverages a wide range of modern
              frameworks, tools, and platforms to build scalable, secure, and
              high-performing digital solutions. From intuitive frontends to
              powerful backends and seamless integrations, we use the latest
              technologies to deliver exceptional results across web, mobile,
              and cloud environments.{" "}
            </p>
            <p>
              By combining cutting-edge development tools with industry best
              practices, we ensure faster delivery, smoother performance, and
              long-term scalability for every project. Our expertise spans
              across frontend and backend development, mobile app frameworks,
              cloud solutions, and creative design tools enabling us to turn
              ideas into impactful digital experiences.{" "}
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={techImg}
              alt="Technologies"
              className="rounded-full  w-[400px] lg:w-[480px]"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 mb-10">
          {Object.keys(techStack).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`rounded-full font-medium transition-all flex items-center justify-center 
  w-[120px] h-[44px] sm:w-[140px] sm:h-[50px] md:w-[160px] md:h-[60px] lg:w-[184px] lg:h-[72px] 
  text-sm sm:text-base md:text-lg
  ${
    activeCategory === key
      ? "bg-orange-500 text-white shadow-md"
      : "bg-[#ffffff] text-gray-700 hover:bg-gray-200"
  }`}
            >
              {key}
            </button>
          ))}
        </div>
        {/* Tech boxes */}
        <div className="flex flex-col items-center gap-5 sm:gap-6 md:gap-8 mt-6 mb-6">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6">
            {techStack[activeCategory].slice(0, 4).map((tech) => (
              <div
                key={tech.name}
                className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[184px] 
                   h-[60px] sm:h-[66px] md:h-[70px] lg:h-[74px]
                 rounded-2xl shadow-sm
                   flex items-center justify-center gap-2
                   text-gray-800 font-medium lg:shadow-xl transition-all"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px] object-contain"
                />
                <span className="text-xs sm:text-sm md:text-base truncate">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 - shifted slightly to align between boxes */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 ">
            {techStack[activeCategory].slice(4).map((tech) => (
              <div
                key={tech.name}
                className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[184px] 
                   h-[60px] sm:h-[66px] md:h-[70px] lg:h-[74px]
                    rounded-2xl shadow-sm
                   flex items-center justify-center gap-2
                   text-gray-800 font-medium  lg:shadow-xl transition-all"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px] object-contain"
                />
                <span className="text-xs sm:text-sm md:text-base truncate">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
