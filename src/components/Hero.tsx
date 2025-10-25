import mascot from "@/assets/weqode-mascot.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            We <span className="text-primary">Redesign</span>
            <br />
            for All Your Tech
            <br />
            Problems.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            We turn complex technology into seamless digital solutions that empower your business to grow. Every product we create is built with precision, innovation, and purpose.
          </p>
        </div>
        
        <div className="flex justify-center order-first lg:order-last">
          <img 
            src={mascot} 
            alt="WeQode Mascot - Robot with laptop" 
            className="w-full max-w-xs sm:max-w-md animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
