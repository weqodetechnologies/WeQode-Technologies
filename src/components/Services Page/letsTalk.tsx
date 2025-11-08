import { useNavigate } from "react-router-dom";
import characterImg from "../../assets/AvetarImg/HelloChar.png"; // your image path

const ProjectCTA = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact#contact-form-section");
  };
  return (
    <section
      className="bg-[hsl(var(--brand-purple))] rounded-2xl mx-auto 
  w-full max-w-[1282px] my-16 
  px-6 py-10 sm:px-10 sm:py-12 
  flex flex-col lg:flex-row items-center justify-between gap-8 text-white
  min-h-[300px] sm:min-h-[380px] lg:max-h-[426px]"
    >
      {" "}
      {/* Left Section */}
      <div className="flex flex-col justify-center text-center lg:text-left max-w-lg space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold lg:text-[42px] mb-6 leading-r">
          Got a project in mind?
        </h2>
        <p className="text-sm sm:text-base  lg:text-[24px] text-[#FFFFFF]  mb-6 leading-relaxed font-medium  sm:leading-[26px] md:leading-[32px] lg:leading-[38px]">
          We’d love to help you bring it to life. Let’s collaborate to turn your
          ideas into seamless digital experiences that inspire and perform.
        </p>
        <button
          className="bg-[#FD9546] text-white font-medium text-xl sm:text-2xl md:text-xl lg:text-[20px] rounded-md shadow-lg 
  hover:shadow-xl hover:opacity-90 transition-all 
  w-[200px] h-[44px] sm:w-[220px] sm:h-[48px] lg:w-[261px] lg:h-[52px] 
  flex items-center justify-center mx-auto lg:mx-0"
          onClick={handleClick}
        >
          {" "}
          Let’s Talk
        </button>
      </div>
      {/* Right Section */}
      <div className="flex justify-center lg:justify-end mt-6 sm:mt-8 md:mt-10 lg:mt-[86px]">
        <img
          src={characterImg}
          alt="Character"
          className="object-contain 
  w-[180px] h-[220px] sm:w-[230px] sm:h-[280px] md:w-[280px] md:h-[340px] lg:w-[326px] lg:h-[388px]"
        />
      </div>
    </section>
  );
};

export default ProjectCTA;
