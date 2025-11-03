import React, { useState } from "react";

const Map: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  // Google Maps direct link (opens in new tab)
  const googleMapsUrl =
    "https://www.google.com/maps/place/WeQode+Technologies/@21.128726,79.072368,17z";

  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <div
        className="relative w-full max-w-5xl h-[450px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.open(googleMapsUrl, "_blank")}
      >
        {/* Zoomed-Out View (Default State) */}
        {!hovered && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d226807.67031491466!2d78.98184402888086!3d21.18980978804849!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1762001469545!5m2!1sen!2sin"
            width="1264"
            height="584"
            loading="lazy"
          ></iframe>
        )}      

        {/* Zoomed-In (Hover) View */}
        {hovered && (
          <iframe
            title="WeQode Technologies Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.825824960116!2d79.07236777502554!3d21.12872608055614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c9f3b0bca9%3A0x48a1580fa339ed64!2sWeQode%20Technologies!5e0!3m2!1sen!2sin!4v1695473620893!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0 transition-opacity duration-500"
          ></iframe>
        )}

        {/* Overlay Label */}
        <div className="absolute bottom-5 left-5 bg-black/60 text-white text-base sm:text-lg px-4 py-2 rounded-lg font-medium">
          WeQode Technologies
        </div>
      </div>
    </div>
  );
};

export default Map;
