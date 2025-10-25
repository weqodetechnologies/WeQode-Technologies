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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="text-[120px] font-bold text-muted/10 leading-none mb-[-60px]">PROJECT</div>
          <h2 className="text-5xl font-bold text-secondary">Project Lifecycle</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Our process is built to turn ideas into impactful digital experiences from research and strategy to design, development, and launch.
          </p>
        </div>

        <div className="relative">
          {/* Top row */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {stages.slice(0, 3).map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-muted to-background flex items-center justify-center mb-6 shadow-lg">
                  <stage.icon className="w-20 h-20 text-secondary" strokeWidth={1.5} />
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
                  <stage.icon className="w-20 h-20 text-secondary" strokeWidth={1.5} />
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
      </div>
    </section>
  );
};

export default ProjectLifecycle;
