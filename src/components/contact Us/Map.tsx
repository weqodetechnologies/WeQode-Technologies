import React, { useState } from "react";
import zoomOutmap from "../../assets/zoomOutMap.png";
import ZoominMap from "../../assets/zoomIn.png";

const Map: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  // Google Maps direct link (opens in new tab)
  const googleMapLink = "https://maps.app.goo.gl/KeruBWjFHTDz4nxn9";

  return (
    <div
      className="relative group cursor-pointer mx-auto 
                 w-[300px] h-[180px] sm:w-[450px] sm:h-[220px] 
                 md:w-[550px] md:h-[250px] lg:w-[1264px] lg:h-[584px] mb-16 "
      onClick={() => window.open(googleMapLink, "_blank")}
    >
      {/* First Image (default) */}
      <img
        src={zoomOutmap} // 🖼️ Replace with your first image path
        alt="Map Default"
        className="w-full h-full object-cover rounded-xl transition-opacity duration-500 group-hover:opacity-0"
      />

      {/* Second Image (on hover) */}
      <img
        src={ZoominMap} // 🖼️ Replace with your second image path
        alt="Map Hover"
        className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default Map;
