import GlobeImg from "../../assets/servicesImg/Global.png";
import MonitorImg from "../../assets/servicesImg/development.png";
import SmartphoneImg from "../../assets/servicesImg/app.png";
import DatabaseImg from "../../assets/servicesImg/redesgin.png";
import CloudImg from "../../assets/servicesImg/team.png";
import ShoppingBagImg from "../../assets/servicesImg/domain.png";

const Services = () => {
  const services = [
    {
      iconImage: GlobeImg,
      title: "Website Development",
      description:
        "Modern, fast, and user-centered websites that drive results.",
      tags: ["Business", "E-commerce", "Portfolio", "Landing Page"],
      variant: "purple" as const,
    },
    {
      iconImage: MonitorImg,
      title: "Web App Development",
      description:
        "Powerful, scalable web applications tailored to your business.",
      tags: ["Dashboard", "Cloud", "CMS", "Saas"],
      variant: "purple" as const,
    },
    {
      iconImage: SmartphoneImg,
      title: "Application Development",
      description:
        "Modern, fast, and user-centered websites that drive results.",
      tags: ["iOS", "Android", "React Native", "Flutter"],
      variant: "purple" as const,
    },
    {
      iconImage: DatabaseImg,
      title: "Redesign & Revamping",
      description:
        "Refresh outdated products with designs, smoother UX, and optimized code.",
      tags: ["UI/UX", "Omptimization", "Modernization", "Branding Refresh"],
      variant: "purple" as const,
    },
    {
      iconImage: CloudImg,
      title: "Resource Outsourcing",
      description:
        "Flexible access to our designs and development experts when you need them.",
      tags: ["UI Designers", "Tech. team", "UX Professionals"],
      variant: "purple" as const,
    },
    {
      iconImage: ShoppingBagImg,
      title: "Domain Service Management",
      description:
        "From setup to renewals — complete care for your online presence.",
      tags: ["DNS", "Maintenance", "Hosting", "SSL"],
      variant: "purple" as const,
    },
  ];

  return (
    <section
      id="services"
      className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[#ffffff]"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-10 sm:mb-16 text-center lg:text-left">
          <div className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[120px] font-bold leading-none mb-[-30px] sm:mb-[-36px] md:mb-[-42px] lg:mb-[-56px] text-[#E5E5E5]">
            SERVICES
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-bold "
            style={{ color: "hsl(var(--brand-orange))" }}
          >
            Our Services
          </h2>
          <p className="text-regular sm:text-lg md:text-xl lg:text-[24px] text-[#141919] mt-6 max-w-2xl">
            At WeQode, we blend creativity and technology to deliver
            custom-built digital experiences. Explore what we can create
            together.
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="
            group relative overflow-hidden rounded-3xl border-2 border-white transition-all duration-500 
            flex flex-col items-center justify-center text-center 
            w-full sm:w-auto md:w-[340px] lg:w-[409px]
            h-auto sm:h-[420px] md:h-[480px] lg:h-[562px]
            p-4 sm:p-6 md:p-8 mx-auto
          "
              style={{
                backgroundColor:
                  service.variant === "purple"
                    ? "hsl(var(--brand-purple))"
                    : "hsl(var(--brand-orange))",
              }}
            >
              {/* Hover Overlay */}
              <div
                className="  absolute inset-0 opacity-0
    group-hover:opacity-100 
    active:opacity-100 
    transition-opacity duration-500"
                style={{
                  backgroundColor:
                    service.variant === "purple"
                      ? "hsl(var(--brand-orange))"
                      : "hsl(var(--brand-purple))",
                }}
              />

              <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                {/* ICON */}
                <img
                  src={service.iconImage}
                  alt={service.title}
                  className="h-[62px] sm:h-[75px] md:h-[90px] lg:h-[113px] mb-4 sm:mb-6 transition-colors duration-500 group-hover:brightness-105 object-contain"
                />
                {/* TITLE */}
                <h3
                  className="
              text-lg sm:text-xl md:text-2xl lg:text-[28px]
              font-medium text-white mb-2 sm:mb-4 transition-colors duration-500 group-hover:text-black px-2 leading-snug
            "
                >
                  {" "}
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
              text-base sm:text-lg md:text-[19px] lg:text-[20px]
              font-normal text-white/90 mb-4 sm:mb-6 transition-colors duration-500 group-hover:text-black max-w-[340px] px-3 leading-relaxed
            "
                >
                  {" "}
                  {service.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap justify-center gap-3">
                  {service.tags.map((tag, tagIndex) => {
                    const isPurpleCard = service.variant === "purple";

                    const defaultBg = isPurpleCard
                      ? tagIndex === 1 || tagIndex === 2
                        ? "hsl(var(--brand-orange))"
                        : "hsl(var(--brand-purple))"
                      : tagIndex === 1 || tagIndex === 2
                      ? "hsl(var(--brand-purple))"
                      : "hsl(var(--brand-orange))";

                    const defaultText = isPurpleCard
                      ? tagIndex === 1 || tagIndex === 2
                        ? "black"
                        : "white"
                      : tagIndex === 1 || tagIndex === 2
                      ? "white"
                      : "black";

                    const hoverBg = isPurpleCard
                      ? tagIndex === 1 || tagIndex === 2
                        ? "hsl(var(--brand-purple))"
                        : "hsl(var(--brand-orange))"
                      : tagIndex === 1 || tagIndex === 2
                      ? "hsl(var(--brand-orange))"
                      : "hsl(var(--brand-purple))";

                    const hoverText = isPurpleCard
                      ? tagIndex === 1 || tagIndex === 2
                        ? "white"
                        : "black"
                      : tagIndex === 1 || tagIndex === 2
                      ? "black"
                      : "white";

                    return (
                      <span
                        key={tagIndex}
                        className={`
    relative inline-flex items-center justify-center
    px-4
    h-[56px]
    rounded-full
    text-sm sm:text-base md:text-lg lg:text-[18px]
    font-medium
    transition-all duration-500
    border
    ${tagIndex === 1 || tagIndex === 2 ? "border-0" : ""}
    flex-grow-0 flex-shrink-0
    w-auto
    min-w-[100px]
    max-w-[46%]
    box-border
    leading-tight
    whitespace-nowrap
    line-clamp-2
  `}
                        style={{
                          backgroundColor: defaultBg,
                          color: defaultText,
                          borderColor: "white",
                        }}
                      >
                        {tag}

                        {/* Hover overlay */}
                        <span
                          className="absolute inset-0 rounded-full flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100 active:opacity-100
"
                          style={{
                            backgroundColor: hoverBg,
                            color: hoverText,
                          }}
                        >
                          {tag}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
