import React, { useState } from "react";
import Icon from "../icon";
import work from "../ui/work";

const jobList = [
  {
    id: 1,
    category: "Design",
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full Time",
    description: `We’re looking for a UI/UX Designer to create intuitive, engaging, and user-focused digital experiences.
You’ll collaborate with cross-functional teams to turn ideas into elegant, functional designs.
A keen eye for detail and a passion for usability are essential.`,
  },
  {
    id: 2,
    category: "Design",
    title: "Front-end Developer",
    location: "Remote",
    type: "Full Time",
    description: `We’re looking for a Front-End Developer to build responsive, high-performing web interfaces.
You’ll work closely with designers and back-end teams to bring creative ideas to life.
Strong knowledge of modern frameworks and attention to detail are key.`,
  },
  {
    id: 3,
    category: "Sales",
    title: "Sales Executive",
    location: "Remote",
    type: "Full Time",
    description: `We’re seeking a Sales Executive to drive client acquisition and business growth.
You’ll identify opportunities, build relationships, and present tailored digital solutions.
Strong communication and negotiation skills are essential.`,
  },
];

const CareerGrowthGraph: React.FC = () => {
  const [openJob, setOpenJob] = useState(null);

  const handleToggle = (id) => {
    setOpenJob(openJob === id ? null : id);
  };
  const cards = [
    {
      icon: (
        <Icon
          type="rocket2"
          className="text-4xl transition-all duration-300 group-hover:text-[#E7CEFF]"
        />
      ),

      title: "Impact",
      desc: "Contribute to projects that make a real difference for global brands.",
    },
    {
      icon: (
        <Icon
          type="leaf"
          className="text-3xl transition-all duration-300 group-hover:text-[#E7CEFF]"
        />
      ),
      title: "Growth",
      desc: "Learn, experiment, and advance your career through real-world projects.",
    },
    {
      icon: (
        <Icon
          type="HandShake"
          className="text-4xl transition-all duration-300 group-hover:text-[#E7CEFF]"
        />
      ),
      title: "Collaborate",
      desc: "Work with talented teammates who inspire and support your growth.",
    },
    {
      icon: (
        <Icon
          type="bulf"
          className="text-4xl transition-all duration-300  group-hover:text-[#E7CEFF]"
        />
      ),
      title: "Creativity",
      desc: "Bring your ideas to life with the freedom to explore and innovate.",
    },
  ];
  return (
    <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-16 ">
      <div className="px-5 text-center lg:text-left font-black gap-6">
        <h1 className="mt-[50px] text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] mb-4 sm:mb-6 leading-tight text-[#111111]">
          Building Bright
          <span className="text-[hsl(var(--brand-purple))] transition-all duration-700 ease-in-out mx-4">
            Futures{" "}
          </span>
          <br />
          With Innovation and <br />
          Passion
        </h1>

        <p className="mt-[40px] sm:mt-[60px] font-medium text-base sm:text-lg md:text-xl text-[#111111] mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 lg:text-[24px]">
          We’re a team of creators helping startups build digital products that
          inspire, perform, and grow — all without breaking the bank.
        </p>
      </div>

      {/* JOin our team */}
      <div className="container mx-auto px-4 sm:px-6 mt-[150px]">
        <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none">
          JOIN
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6"
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Join our team!
        </h2>
        <p className="text-base sm:text-lg text-regular lg:text-[24px] mb-6 max-w-[1100px] lg:mt-10 sm:mt-4 ">
          Join WeQode Technologies and grow with a team that values innovation,
          collaboration, and excellence. Work on meaningful digital projects
          that challenge and inspire you.
          <br /> Here, your ideas make an impact.
        </p>
        <div className="max-w-10xl mx-auto px-4 py-10 space-y-6">
          {jobList.map((job) => (
            <div
              key={job.id}
              className="bg-[#FFF8F3] rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                <div>
                  <p className="text-[hsl(var(--brand-purple))] text-[20px] font-medium">
                    {job.category}
                  </p>
                  <h3 className="text-lg sm:text-[24px] font-bold text-[#1A1A1A]">
                    {job.title}
                  </h3>
                  <div className="flex gap-5 text-[#000000] text-sm mt-2">
                    <div className="flex items-center gap-1">
                      <Icon type="location" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon type="clock" />
                      {job.type}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleToggle(job.id)}
                  className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    openJob === job.id
                      ? "bg-[hsl(var(--brand-purple))] text-white"
                      : "bg-[hsl(var(--brand-orange))] text-white"
                  }`}
                >
                  {openJob === job.id ? "Close" : "Apply"}
                </button>
              </div>

              {/* Expanded content */}
              {openJob === job.id && (
                <div className="mt-4 text-[18px] text-[#000] font-medium leading-[20px]">
                  {job.description.split("\n").map((line, index) => (
                    <p key={index} className="mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* what set us apart */}
      <div className="container mx-auto px-4 sm:px-6 mt-[150px]">
        <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none ">
          WHY
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6 ml-1  lg:ml-[18px] md:ml-[15px] sm:ml-[10px]  "
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Why Join Us?
        </h2>
        <p className="text-base sm:text-lg  font-regular lg:text-[24px] mb-6 max-w-[1120px] lg:mt-10 sm:mt-4 ">
          Our process is built to turn ideas into impactful digital experiences
          from <br />
          research and strategy to design, development, and launch
        </p>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[120px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center 
                 bg-[#E7CEFF] hover:bg-[#533074] text-[#1A1A1A] hover:text-white 
                 rounded-2xl p-6 sm:p-8  transition-all duration-300 shadow-md
                 w-full sm:max-w-[280px] md:max-w-[280px] lg:w-[298px] lg:h-[318px] mx-auto"
            >
              <div className="bg-[#ffffff]/30 rounded-full p-4 mb-4 text-[#533074] group-hover:text-[#E7CEFF] transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="font-bold text-[24px] mb-2">{card.title}</h3>
              <p className="font-medium text-[18px] leading-relaxed text-[#000000] group-hover:text-white ">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 mt-[150px]">
        <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none ">
          LIFE
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6 ml-1  lg:ml-[8px] md:ml-[15px] sm:ml-[10px]  "
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Life At WeQode
        </h2>
        <p className="text-base sm:text-lg  font-regular lg:text-[24px] mb-6 max-w-[1120px] lg:mt-10 sm:mt-4 ">
          At WeQode, we blend creativity and technology to deliver custom-
          <br />
          built digital experiences. Explore what we can create together.
        </p>
        <div>
          <h2
            className="text-2xl sm:text-3xl lg:text-[32px] font-bold  mt-[120px] sm:mt-[150px] ml-1  lg:mt-[80px]  "
            style={{ color: "hsl(var(--brand-purple))" }}
          >
            Where Innovation Meets Growth
          </h2>

          <p className="font-regular text-base sm:text-lg md:text-xl lg:text-[24px]   text-[#000000] leading-7 lg:leading-8 mt-4 sm:mt-6">
            At WeQode, we foster a culture built on creativity, collaboration,
            and continuous learning.
            <br />
            Every idea is valued, every voice is heard, and every individual is
            empowered to grow with purpose.
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-[32px] font-bold  mt-[120px] sm:mt-[150px] ml-1  lg:mt-[80px]   "
            style={{ color: "hsl(var(--brand-purple))" }}
          >
            Our Work Ethos
          </h2>

          <p className="font-regular text-base sm:text-lg md:text-xl lg:text-[24px]   text-[#000000] leading-7 lg:leading-8 mt-4 sm:mt-6">
            We believe in working smarter, growing together, and delivering with
            excellence.
            <br />
            Our flexible, supportive environment allows you to perform at your
            best, while staying inspired every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerGrowthGraph;
