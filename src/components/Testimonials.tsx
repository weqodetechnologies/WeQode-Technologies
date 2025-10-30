import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    rating: 5.0,
    text: "Working with WeQode was a great experience. They handled our mobile app project from concept to deployment with total professionalism. Their designers understood our vision instantly, and the developers delivered beyond expectations both in performance and polish. I especially appreciated how transparent they were with timelines and progress.",
    author: "Arjun Mehta",
    role: "Co-Founder, FinVibe",
  },
  {
    rating: 5.0,
    text: "WeQode Technologies transformed our outdated website into a fast, modern, and user-friendly platform. The team was proactive from day one — clear in communication, flexible with feedback, and focused on real results. Their ability to blend clean design with technical precision made the entire process smooth and stress-free.",
    author: "Riya Sharma",
    role: "Marketing Lead, UrbanNest",
  },
  {
    rating: 5.0,
    text: "Fantastic support from WeQode. Our e-commerce launch went smoothly and the custom features were exactly as we imagined. Will happily recommend!",
    author: "Samir Patel",
    role: "Founder, ShopEasy",
  },
  {
    rating: 5.0,
    text: "Reliable team and quality-driven approach. Our SaaS platform needed upgrades and WeQode delivered every milestone ahead of time.",
    author: "Priya Verma",
    role: "CTO, CloudCore",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Scroll function
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 420;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Track scroll position
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setIsAtStart(scrollLeft <= 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    handleScroll(); // check initial state
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Background text */}
        <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none">
          TESTIMONIALS
        </div>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6"
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Testimonials From Our Clients
        </h2>
        <p className="text-base sm:text-lg text-regular lg:text-[24px] mb-10 max-w-2xl lg:mt-6 sm:mt-4 ">
          Our clients’ words reflect our passion for building meaningful digital
          experiences that are designed to inspire, built to perform.
        </p>

        {/* Left text + buttons + scroll cards */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
          {/* Left side */}
          <div>
            <h3
              className="text-6xl sm:text-[80px] font-bold mb-2"
              style={{ color: "hsl(var(--brand-purple))" }}
            >
              4.9
            </h3>
            <p className="text-[30px] font-bold leading-snug text-[#000000] mb-6">
              Client satisfaction drives everything we do at <br />
              <span style={{ color: "hsl(var(--brand-purple))" }}>WeQode</span>
              <span className="text-[30px] font-bold leading-snug text-[#000000] mb-6">
                {" "}
                Technologies.
              </span>
            </p>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full transition-opacity duration-300 ${
                  isAtStart ? "opacity-40 cursor-not-allowed" : "opacity-100"
                }`}
                onClick={() => scroll("left")}
                disabled={isAtStart}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={`rounded-full transition-opacity duration-300 ${
                  isAtEnd ? "opacity-40 cursor-not-allowed" : "opacity-100"
                }`}
                onClick={() => scroll("right")}
                disabled={isAtEnd}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right side scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-7 overflow-x-auto scroll-smooth no-scrollbar pb-4"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] sm:min-w-[360px] lg:min-w-[412px] h-auto lg:h-[564px] bg-[hsl(var(--brand-orange))] text-white p-9 rounded-[28px] relative  transition-all duration-300 flex flex-col justify-between"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                }}
              >
                {/* Rating */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold">
                      {item.rating.toFixed(1)}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-300 text-yellow-300"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Line divider */}
                  <div className="border-t border-white/30 mb-5"></div>

                  {/* Text */}
                  <p className="text-white/95 text-sm sm:text-[14px] lg:text-[20px] font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-8">
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-lg sm:text-xl font-bold">
                        {item.author.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">
                      {item.author}
                    </div>
                    <div className="text-xs sm:text-sm text-white/90">
                      {item.role}
                    </div>
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
