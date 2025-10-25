import { Lightbulb, ClipboardList, Palette, Code, TestTube, Rocket } from "lucide-react";

const ProjectLifecycle = () => {
  const stages = [
    { icon: Lightbulb, title: "Brainstorm", position: "top" },
    { icon: ClipboardList, title: "Plan", position: "top" },
    { icon: Palette, title: "Design", position: "top" },
    { icon: Code, title: "Development", position: "bottom" },
    { icon: TestTube, title: "Testing", position: "bottom" },
    { icon: Rocket, title: "Launch", position: "bottom" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <div className="text-[60px] sm:text-[80px] lg:text-[120px] font-bold text-muted/10 leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px]">PROJECT</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: "hsl(var(--brand-orange))" }}>Project Lifecycle</h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl">
            Our process is built to turn ideas into impactful digital experiences from research and strategy to design, development, and launch.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Top row */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {stages.slice(0, 3).map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-muted to-background flex items-center justify-center mb-6 shadow-lg">
                  <stage.icon className="w-20 h-20" style={{ color: "hsl(var(--brand-orange))" }} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold">{stage.title}</h3>
                {index < 2 && (
                  <div className="absolute top-24 text-6xl font-bold text-foreground" style={{ left: `${(index + 1) * 33.33 - 3}%` }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Arrow pointing down */}
          <div className="flex justify-end pr-[16.66%] mb-12">
            <div className="text-6xl font-bold text-foreground">↓</div>
          </div>

          {/* Bottom row (reversed) */}
          <div className="grid grid-cols-3 gap-8">
            {stages.slice(3, 6).reverse().map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-muted to-background flex items-center justify-center mb-6 shadow-lg">
                  <stage.icon className="w-20 h-20" style={{ color: "hsl(var(--brand-orange))" }} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold">{stage.title}</h3>
                {index < 2 && (
                  <div className="absolute bottom-24 text-6xl font-bold text-foreground" style={{ left: `${66.66 - (index + 1) * 33.33 - 3}%` }}>
                    ←
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {stages.map((stage, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-muted to-background flex items-center justify-center mb-4 shadow-lg">
                <stage.icon className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: "hsl(var(--brand-orange))" }} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center">{stage.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectLifecycle;
