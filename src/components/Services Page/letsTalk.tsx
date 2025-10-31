import characterImg from "../../assets/AvetarImg/HelloChar.png"; // your image path

const ProjectCTA = () => {
  return (
    <section className="bg-[#512E78] rounded-2xl mx-auto max-w-[1100px] my-16 px-6 py-10 sm:px-10 sm:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
      {/* Left Section */}
      <div className="flex flex-col justify-center text-center lg:text-left max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Got a project in mind?
        </h2>
        <p className="text-sm sm:text-base text-gray-200 mb-6 leading-relaxed">
          We’d love to help you bring it to life. Let’s collaborate to turn your
          ideas into seamless digital experiences that inspire and perform.
        </p>
        <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-all w-fit mx-auto lg:mx-0">
          Let’s Talk
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={characterImg}
          alt="Character"
          className="w-[200px] sm:w-[250px] lg:w-[280px] object-contain"
        />
      </div>
    </section>
  );
};

export default ProjectCTA;
