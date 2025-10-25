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
    <section className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-6xl font-bold text-muted/20 mb-4">WHY</div>
          <h2 className="text-5xl font-bold text-secondary mb-6">Why Choose us?</h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            We bring together creativity, strategy, and technology to deliver results that matter. 
            Our team is dedicated to building solutions that elevate your business and your brand.
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-[#7EC8E3] text-white px-6 py-3 rounded-full inline-block mb-4">
            We don't just think — we create crazy cool stuff!
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
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
