import { Globe, Monitor, Smartphone, Database, Cloud, ShoppingBag } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, fast, and user-centered websites that drive results.",
      tags: ["Business", "E-commerce", "Portfolio", "Landing Page"],
      variant: "purple" as const
    },
    {
      icon: Monitor,
      title: "Web App Development",
      description: "Powerful, scalable web applications tailored to your business.",
      tags: ["Dashboard", "Cloud", "CMS", "Saas"],
      variant: "orange" as const
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description: "Modern, fast, and user-centered websites that drive results.",
      tags: ["iOS", "Android", "React Native", "Flutter"],
      variant: "purple" as const
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust and scalable backend systems for your applications.",
      tags: ["API", "Database", "Server", "Security"],
      variant: "purple" as const
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Deploy and manage your applications in the cloud.",
      tags: ["AWS", "Azure", "DevOps", "CI/CD"],
      variant: "purple" as const
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Solutions",
      description: "Complete online store solutions that drive sales.",
      tags: ["Shopify", "WooCommerce", "Custom", "Payment"],
      variant: "orange" as const
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <div className="text-[60px] sm:text-[80px] lg:text-[120px] font-bold text-muted/10 leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px]">SERVICES</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: "hsl(var(--brand-orange))" }}>Our Services</h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl">
            At WeQode, we blend creativity and technology to deliver custom-built digital experiences. 
            Explore what we can create together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-500"
              style={{
                backgroundColor: service.variant === "purple" ? "hsl(var(--brand-purple))" : "hsl(var(--brand-orange))"
              }}
            >
              {/* Hover overlay - changes card to orange on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: "hsl(var(--brand-orange))" }}
              />
              
              <div className="relative z-10">
                <service.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-4 sm:mb-6" strokeWidth={1.5} />
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white transition-colors"
                      style={{
                        backgroundColor: service.variant === "purple" 
                          ? "hsl(var(--brand-orange))" 
                          : "hsl(var(--brand-purple))"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
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
