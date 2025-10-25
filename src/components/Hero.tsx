import mascot from "@/assets/weqode-mascot.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            We <span className="text-primary">Redesign</span>
            <br />
            for All Your Tech
            <br />
            Problems.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            We turn complex technology into seamless digital solutions that empower your business to grow. Every product we create is built with precision, innovation, and purpose.
          </p>
        </div>
        
        <div className="flex justify-center">
          <img 
            src={mascot} 
            alt="WeQode Mascot - Robot with laptop" 
            className="w-full max-w-md animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
