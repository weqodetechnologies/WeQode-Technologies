import {
  Globe,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  ShoppingBag,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Modern, fast, and user-centered websites that drive results.",
      tags: ["Business", "E-commerce", "Portfolio", "Landing Page"],
      variant: "purple" as const,
    },
    {
      icon: Monitor,
      title: "Web App Development",
      description:
        "Powerful, scalable web applications tailored to your business.",
      tags: ["Dashboard", "Cloud", "CMS", "Saas"],
      variant: "purple" as const,
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description:
        "Modern, fast, and user-centered websites that drive results.",
      tags: ["iOS", "Android", "React Native", "Flutter"],
      variant: "purple" as const,
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust and scalable backend systems for your applications.",
      tags: ["API", "Database", "Server", "Security"],
      variant: "purple" as const,
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Deploy and manage your applications in the cloud.",
      tags: ["AWS", "Azure", "DevOps", "CI/CD"],
      variant: "purple" as const,
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Solutions",
      description: "Complete online store solutions that drive sales.",
      tags: ["Shopify", "WooCommerce", "Custom", "Payment"],
      variant: "purple" as const,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <div className="text-[60px] sm:text-[80px] lg:text-[120px] font-bold text-muted/10 leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] text-[#E5E5E5] ">
            SERVICES
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[60px] font-bold"
            style={{ color: "hsl(var(--brand-orange))" }}
          >
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl">
            At WeQode, we blend creativity and technology to deliver
            custom-built digital experiences. Explore what we can create
            together.
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border-2 border-white transition-all duration-500 flex flex-col items-center justify-center text-center w-full sm:w-[360px] md:w-[380px] lg:w-[409px] h-auto sm:h-[520px] lg:h-[562px] p-6 sm:p-8 mx-auto"
              style={{
                backgroundColor:
                  service.variant === "purple"
                    ? "hsl(var(--brand-purple))"
                    : "hsl(var(--brand-orange))",
              }}
            >
              {/* Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundColor:
                    service.variant === "purple"
                      ? "hsl(var(--brand-orange))"
                      : "hsl(var(--brand-purple))",
                }}
              />

              <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                {/* ICON */}
                <service.icon
                  className="w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] md:w-[105px] md:h-[105px] lg:w-[113px] lg:h-[113px] text-white mb-4 sm:mb-6 transition-colors duration-500 group-hover:text-black"
                  strokeWidth={1.5}
                />

                {/* TITLE */}
                <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-medium text-white mb-2 sm:mb-4 transition-colors duration-500 group-hover:text-black px-2 leading-snug">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-normal text-white/90 mb-4 sm:mb-6 transition-colors duration-500 group-hover:text-black max-w-[340px] px-3 leading-relaxed">
                  {service.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap justify-center gap-2">
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
                        className="relative inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium border border-white transition-all duration-500"
                        style={{
                          backgroundColor: defaultBg,
                          color: defaultText,
                        }}
                      >
                        {tag}

                        {/* Hover overlay */}
                        <span
                          className="absolute inset-0 rounded-full flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100"
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
