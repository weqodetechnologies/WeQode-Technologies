import React from "react";
import { BsFillRocketFill, BsRocketFill } from "react-icons/bs";
import { MdSatelliteAlt } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import PocketIcon from "../icon";
import Icon from "../icon";

const BackgroundOrbit: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 flex items-end justify-end overflow-hidden">
      {/* Outer orbit container */}
      <div className="relative w-[900px] h-[900px] sm:w-[600px] sm:h-[600px] md:w-[750px] md:h-[750px] lg:w-[900px] lg:h-[900px]">
        {/* Central glowing gradient with white inner circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Gradient outer glow (behind white circle) */}
            {/* Gradient outer glow (behind white circle) */}
            <div
              className="absolute w-[180px] h-[180px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] 
  rounded-full 
  bg-[conic-gradient(from_180deg_at_50%_50%,_#5442C6_0%,_#5FDED5_25%,_#9C99FC_50%,_#C369E7_75%,_#FFFFFF_100%)] 
  blur-[20px] opacity-100 -z-10 brightness-125 saturate-150 
  animate-[spin_20s_linear_infinite]"
            ></div>

            {/* Inner white circle (on top of glow) */}
            <div
              className="relative z-10 w-[154px] h-[154px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[154px] lg:h-[154px] 
      rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.7)]  "
            ></div>
          </div>
        </div>

        {/* Orbit rings */}
        {[220, 320, 420, 520].map((radius, index) => (
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

        {/* Orbiting icons (optional1) */}
        <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
          <span className="absolute bottom-[calc(50%-220px)] left-1/2 -translate-x-1/2 text-4xl text-[#ECECEC]  ">
            <Icon type="office" />
          </span>
        </div>
        {/* Orbiting icons (optional2) */}
        <div className="absolute inset-0 animate-[spin_80s_linear_infinite]">
          <span className="absolute top-[calc(50%-330px)] left-1/2 -translate-x-1/2 text-4xl text-[#ECECEC] rotate-90 ">
            <Icon type="pocket" />
          </span>
          <span className="absolute bottom-[calc(50%-330px)] left-1/2 -translate-x-1/2 text-4xl text-[#ECECEC] rotate-90 ">
            <Icon type="pocket" />
          </span>
        </div>
        {/* Orbit rotation 3 */}
        <div className="absolute inset-0 animate-[spin_90s_linear_infinite]">
          <span className="absolute top-[calc(50%-440px)] left-1/2 -translate-x-1/2 text-4xl text-[#ECECEC] rotate-90 ">
            <Icon type="rocket" />
          </span>
        </div>
        {/* Orbit rotation 4 */}
        <div className="absolute inset-0 animate-[spin_90s_linear_infinite]">
          <span className="absolute top-[calc(50%-540px)] left-1/2 -translate-x-1/2 text-4xl text-[#ECECEC] rotate-90 ">
            <Icon type="rocket" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundOrbit;
