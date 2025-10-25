import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5.0,
      text: "Working with WeQode was a great experience. They handled our mobile app project from concept to deployment with total professionalism. Their designers understood our vision instantly, and the developers delivered beyond expectations both in performance and polish. I especially appreciated how transparent they were with timelines and progress.",
      author: "Arjun Mehta",
      role: "Co-Founder, FinVibe"
    },
    {
      rating: 5.0,
      text: "WeQode Technologies transformed our outdated website into a fast, modern, and user-friendly platform. The team was proactive from day one — clear in communication, flexible with feedback, and focused on real results. Their ability to blend clean design with technical precision made the entire process smooth and stress-free.",
      author: "Riya Sharma",
      role: "Marketing Lead, UrbanNest"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <div className="text-[120px] font-bold text-muted/10 leading-none mb-[-60px]">TESTIMONIALS</div>
            <h2 className="text-5xl font-bold text-secondary mb-6">Testimonials From Our Clients</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our clients' words reflect our passion for building meaningful digital experiences that are designed to inspire, built to perform.
            </p>
            
            <div className="mb-8">
              <div className="text-7xl font-bold text-primary mb-2">4.9</div>
              <p className="text-lg font-semibold">Client satisfaction drives everything we do at WeQode Technologies.</p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-secondary p-8 rounded-3xl text-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold">{testimonial.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                </div>
                
                <p className="text-white/95 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-xl font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-white/80">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
