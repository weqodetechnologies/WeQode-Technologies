const RecentProjects = () => {
  const projects = [
    {
      title: "Paws & Co.",
      description: "Welcome to Paws & Co., a modern pet store website created to make pet parenting effortless and joyful. With a warm color palette and intuitive layout, it offers everything from pet food and care essentials to expert services, all in one place. The design focuses on trust, comfort, and community because every pet deserves the best.",
      color: "hsl(var(--brand-purple))"
    },
    {
      title: "Trimly",
      description: "Welcome to Trimly a modern salon booking app designed to simplify self-care and beauty management. With a sleek dark interface and smooth navigation, it allows users to explore salons, compare services, and book appointments effortlessly. This design blends elegance and usability, offering a seamless experience that feels professional and empowering.",
      color: "hsl(var(--brand-purple))"
    },
    {
      title: "Fox Jeans Dashboard",
      description: "The Fox Jeans Admin Dashboard provides a complete overview of business performance, showcasing product details, sales, profit margins, and key statistics in real time. It enables admins to track growth, monitor inventory, and analyse business trends effortlessly, all in one intuitive interface designed for clarity and efficiency. It helped to take crucial decisions.",
      color: "hsl(var(--brand-purple))"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <div className="text-[60px] sm:text-[80px] lg:text-[120px] font-bold text-muted/10 leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px]">PORTFOLIO</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: "hsl(var(--brand-orange))" }}>Recent Projects</h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl">
            Every project we create blends strategy, design, and technology to deliver impactful digital experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 sm:h-56 lg:h-64 bg-[hsl(var(--brand-beige))] flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Project Screenshot</div>
              </div>
              <div 
                className="p-6 sm:p-8 text-white"
                style={{ backgroundColor: project.color }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{project.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
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
