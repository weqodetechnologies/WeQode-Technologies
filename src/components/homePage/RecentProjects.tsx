import Laptop from "../../assets/Recent Project/laptop.png";
import Mobile from "../../assets/Recent Project/mobile.png";
import Tab from "../../assets/Recent Project/tab.png";

const RecentProjects = () => {
  const projects = [
    {
      projectImages: Laptop,
      title: "Paws & Co.",
      description:
        "Welcome to Paws & Co., a modern pet store website crafted to make pet parenting effortless and joyful. With a warm color palette and intuitive layout, it offers everything from pet food and care essentials to expert services, all in one place.",
    },
    {
      projectImages: Mobile,
      title: "Trimly",
      description:
        "Trimly is a salon booking app designed to simplify self-care with a sleek UI, smooth navigation, and fast appointment booking.",
    },
    {
      projectImages: Tab,
      title: "Fox Jeans Dashboard",
      description:
        "A powerful admin dashboard providing real-time stats, product analytics, and performance tracking in a clean and efficient interface.Fox Jeans Dashboard ensures smooth management, improved visibility, and smarter workflow execution for growing fashion and retail businesses.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="text-[40px] sm:text-[80px] lg:text-[128px] font-bold text-[#E5E5E5] leading-none mb-[-20px] sm:mb-[-40px] lg:mb-[-60px]">
            RECENT
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[60px] font-bold"
            style={{ color: "hsl(var(--brand-orange))" }}
          >
            Recent Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-[24px] mt-6 max-w-2xl">
            Every project we create blends strategy, design, and technology for
            impactful digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="
    flex gap-6 overflow-x-auto sm:overflow-x-auto md:overflow-x-auto
    snap-x snap-mandatory
    lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible
    scrollbar-hide
  "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
        rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow 
        flex-shrink-0 w-[85%] sm:w-[70%] md:w-[60%]
        lg:w-auto lg:flex-shrink
        bg-[hsl(var(--brand-purple))]
        snap-center
      "
            >
              {/* Responsive Image Container */}
              <div
                className="
          bg-[hsl(var(--brand-beige))]
          flex items-center justify-center 
          p-6 sm:p-8 
          md:justify-center
          min-h-[260px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[360px]
        "
              >
                <img
                  src={project.projectImages}
                  alt={project.title}
                  className={`
            object-contain mx-auto
            ${
              project.title === "Trimly"
                ? "max-w-[100px] sm:max-w-[100px] md:max-w-[130px] lg:max-w-[150px]"
                : "w-full max-w-[350px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px]"
            }
          `}
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-[20px] leading-relaxed opacity-90">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
