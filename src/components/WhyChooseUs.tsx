const WhyChooseUs = () => {
  const features = [
    "Creative Team",
    "Reliable Support",
    "Startup Friendly",
    "Custom Solutions",
    "High-Quality Designs",
    "On-Time Delivery",
    "Fast Communication",
    "Affordable Tech Solutions"
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="text-center lg:text-left">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-muted/20 mb-2">WHY</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: "hsl(var(--brand-orange))" }}>
            Why Choose us?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            We bring together creativity, strategy, and technology to deliver results that matter. 
            Our team is dedicated to building solutions that elevate your business and your brand.
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-[#7EC8E3] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-block mb-6 sm:mb-8 text-sm sm:text-base">
            We don't just think — we create crazy cool stuff!
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
            {features.map((feature, index) => (
              <div
                key={index}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-white transition-all hover:scale-105 text-sm sm:text-base"
                style={{ backgroundColor: "hsl(var(--brand-orange))" }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
