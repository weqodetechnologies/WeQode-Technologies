import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import mascot from "@/assets/AvetarImg/sittingLaptopRobo.png";

function Cta() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact#contact-form-section");
  };

  return (
    <div>
      <section className="bg-[hsl(var(--brand-beige))] py-12 sm:py-16 lg:py-20 mb-12 sm:mb-16 lg:mb-20">
        <div
          className="
      mx-auto 
      px-4 sm:px-6 
      grid lg:grid-cols-2 gap-8 lg:gap-12 items-center
      w-full 
      max-w-[1441px] 
      h-auto lg:h-[496px]
    "
        >
          {/* Text Section */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight">
              Let's build something extraordinary!
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-[24px] text-[#4D4D4D] max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
              From idea to launch, We’re your team for bold, scalable digital
              products.
            </p>
            <Button
              className="
          text-white rounded-xl 
          px-6 sm:px-8 py-3 sm:py-4 md:py-6 
          text-sm sm:text-base md:text-lg lg:text-[20px]
          hover:opacity-90 transition-opacity font-medium
        "
              style={{ backgroundColor: "hsl(var(--brand-orange))" }}
              onClick={handleClick}
            >
              Start Your Project
            </Button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center order-first lg:order-last">
            <img
              src={mascot}
              alt="WeQode Mascot - Ready to build"
              className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[474px] h-auto"
            />
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

export default Cta;
