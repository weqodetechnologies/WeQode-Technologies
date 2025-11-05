import React from "react";
import Icon from "../icon";

const BackgroundOrbit: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 flex items-end justify-end overflow-hidden">
      {/* Outer orbit container */}
      <div
        className="
          relative
          w-[400px] h-[400px]
          sm:w-[500px] sm:h-[500px]
          md:w-[650px] md:h-[650px]
          lg:w-[900px] lg:h-[900px]
          xl:w-[1000px] xl:h-[1000px]
        "
      >
        {/* Central glowing gradient with white inner circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Gradient outer glow (behind white circle) */}
            <div
              className="
                absolute
                w-[100px] h-[100px]
                sm:w-[120px] sm:h-[120px]
                md:w-[150px] md:h-[150px]
                lg:w-[180px] lg:h-[180px]
                xl:w-[200px] xl:h-[200px]
                rounded-full 
                bg-[conic-gradient(from_180deg_at_50%_50%,_#5442C6_0%,_#5FDED5_25%,_#9C99FC_50%,_#C369E7_75%,_#FFFFFF_100%)]
                blur-[20px] opacity-100 -z-10 brightness-125 saturate-150 
                animate-[spin_20s_linear_infinite]
              "
            ></div>

            {/* Inner white circle */}
            <div
              className="
                relative z-10
                w-[84px] h-[84px]
                sm:w-[110px] sm:h-[110px]
                md:w-[130px] md:h-[130px]
                lg:w-[154px] lg:h-[154px]
                xl:w-[170px] xl:h-[170px]
                rounded-full 
                bg-white 
                shadow-[0_0_40px_rgba(255,255,255,0.7)]
              "
            ></div>
          </div>
        </div>

        {/* Orbit rings */}
        {[190, 280, 370, 470].map((radius, index) => (
          <div
            key={index}
            className="absolute border border-gray-300/30 rounded-full"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              top: `calc(50% - ${radius}px)`,
              left: `calc(50% - ${radius}px)`,
            }}
          ></div>
        ))}

        {/* Orbit 1 */}
        <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
          <span className="absolute bottom-[calc(50%-190px)] left-1/2 -translate-x-1/2 text-[18px] sm:text-[24px] md:text-[30px] lg:text-4xl text-[#ECECEC]">
            <Icon type="office" />
          </span>
        </div>

        {/* Orbit 2 */}
        <div className="absolute inset-0 animate-[spin_80s_linear_infinite]">
          <span className="absolute top-[calc(50%-290px)] left-1/2 -translate-x-1/2 text-[18px] sm:text-[24px] md:text-[30px] lg:text-4xl text-[#ECECEC] rotate-90">
            <Icon type="pocket" />
          </span>
          <span className="absolute bottom-[calc(50%-290px)] left-1/2 -translate-x-1/2 text-[18px] sm:text-[24px] md:text-[30px] lg:text-4xl text-[#ECECEC] rotate-90">
            <Icon type="pocket" />
          </span>
        </div>

        {/* Orbit 3 */}
        <div className="absolute inset-0 animate-[spin_90s_linear_infinite]">
          <span className="absolute top-[calc(50%-390px)] left-1/2 -translate-x-1/2 text-[18px] sm:text-[24px] md:text-[30px] lg:text-4xl text-[#ECECEC] rotate-90">
            <Icon type="rocket" />
          </span>
        </div>

        {/* Orbit 4 */}
        <div className="absolute inset-0 animate-[spin_120s_linear_infinite]">
          <span className="absolute top-[calc(50%-490px)] left-1/2 -translate-x-1/2 text-[18px] sm:text-[24px] md:text-[30px] lg:text-4xl text-[#ECECEC] rotate-90">
            <Icon type="rocket" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundOrbit;
