import Laptop from "../assets/Recent Project/laptop.png";
import Mobile from "../assets/Recent Project/mobile.png";
import Tab from "../assets/Recent Project/tab.png";

const RecentProjects = () => {
  const projects = [
    {
      projectImages: Laptop,
      title: "Paws & Co.",
      description:
        "Welcome to Paws & Co., a modern pet store website crafted to make pet parenting effortless and joyful. With a warm color palette and intuitive layout, it offers everything from pet food and care essentials to expert services, all in one place. The design focuses on trust, comfort, and community because every pet deserves the best.",

      sizes: {
        sm: { width: 405, height: 295 },
        md: { width: 405, height: 275 },
        lg: { width: 405, height: 275 },
      },
    },
    {
      projectImages: Mobile,
      title: "Trimly",
      description:
        "Welcome to Trimly a modern salon booking app designed to simplify self-care and beauty management. With a sleek dark interface and smooth navigation, it allows users to explore salons, compare services, and book appointments effortlessly. This design blends elegance and usability, offering a seamless experience that feels professional and empowering.",
      color: "hsl(var(--brand-purple))",
      sizes: {
        sm: { width: 153, height: 295 },
        md: { width: 153, height: 295 },
        lg: { width: 153, height: 295 },
      },
    },
    {
      projectImages: Tab,
      title: "Fox Jeans Dashboard",
      description:
        "The Fox Jeans Admin Dashboard provides a complete overview of business performance, showcasing product details, sales, profit margins, and key statistics in real time. It enables admins to track growth, monitor inventory, and analyse business trends effortlessly, all in one intuitive interface designed for clarity and efficiency.",
      color: "hsl(var(--brand-purple))",
      sizes: {
        sm: { width: 379, height: 271 },
        md: { width: 379, height: 271 },
        lg: { width: 371, height: 479 },
      },
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-bold text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px]">
            RECENT
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[60px] font-bold"
            style={{ color: "hsl(var(--brand-orange))" }}
          >
            Recent Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-[24px] mt-6 max-w-2xl">
            Every project we create blends strategy, design, and technology to
            deliver impactful digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full bg-[hsl(var(--brand-purple))]"
            >
              <div className="h-48 sm:h-56 lg:h-[330px] bg-[hsl(var(--brand-beige))] flex items-center justify-center">
                <img
                  src={project.projectImages}
                  alt={project.title}
                  className="object-contain mx-auto"
                  style={{
                    width: `${project.sizes.sm.width}px`,
                    height: `${project.sizes.sm.height}px`,
                  }}
                />
              </div>

              <div
                className="p-6 sm:p-8 text-white"
                style={{ backgroundColor: "hsl(var(--brand-purple))" }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-[36px] font-bold mb-3 sm:mb-4">
                  {project.title}
                </h3>
                <p className="text-white text-regular sm:text-[20px]">
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
