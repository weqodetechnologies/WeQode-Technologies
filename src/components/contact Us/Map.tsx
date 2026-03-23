import React, { useState } from "react";
import zoomOutmap from "../../assets/zoomOutMap.png";
import ZoominMap from "../../assets/zoomIn.png";
import { MapPin } from "lucide-react";
import mumbai from "../../assets/mumbai.png";
import pune from "../../assets/pune.png";
import bangalore from "../../assets/bangalore.png";

const Map: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  // Add this const at the top of your Footer component, after the hooks
  // Updated offices array with 3-line structure
  const offices = [
    {
      city: "Mumbai",
      line1: "Carter Road, Bandra",
      line2: " West Mumbai",
      line3: "Maharashtra 400050",
      gradient: "from-orange-500/20",
      image: mumbai,
    },
    {
      city: "Pune",
      line1: "Shree Heights Society",
      line2: "Baner Road, Baner Pune",
      line3: "Maharashtra 411045",
      gradient: "from-blue-500/20",
      image: pune,
    },
    {
      city: "Bangalore",
      line1: "HSR Layout, Sector 2",
      line2: "Bangalore",
      line3: "Karnataka 560102",
      gradient: "from-purple-500/20",
      image: bangalore,
    },
  ];

  // Google Maps direct link (opens in new tab)
  const googleMapLink = "https://maps.app.goo.gl/KeruBWjFHTDz4nxn9";

  return (
    <section>
      {/* New Our Offices Section - Card Layout */}
      <div className="container mx-auto px-4 sm:px-20">
        <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-36px] sm:mb-[-40px] lg:mb-[-60px] select-none">
          OFFICES
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6"
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Our Offices Across India
        </h2>
        <p className="text-base sm:text-lg text-regular lg:text-[24px] mb-10 max-w-2xl lg:mt-10 sm:mt-4">
          Connecting innovation with local expertise across major cities.
        </p>

        {/* Offices Section - 3 Lines Each */}
        <div className="text-center md:text-left">
          {/* Desktop: Dynamic 2-column grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 mb-8">
            {offices.map((office) => (
              <div
                key={office.city}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row gap-6 h-[240px] lg:h-[260px]">
                  {/* Left: Content - 3 Lines */}
                  <div className="flex-1 flex flex-col justify-start">
                    <div className="flex items-start gap-3 mb-6">
                      <MapPin className="text-[#F68C2D] w-6 h-6 flex-shrink-0 mt-1" />
                      <h4 className="font-bold text-lg text-black">
                        {office.city}
                      </h4>
                    </div>
                    <div className="space-y-1 text-md leading-tight">
                      <p className="font-semibold text-[#898989]">
                        {office.line1}
                      </p>
                      <p className="font-semibold text-[#898989]">
                        {office.line2}
                      </p>
                      <p className="text-[#898989]">{office.line3}</p>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="flex-1 h-26 lg:h-full rounded-xl overflow-hidden bg-gray-200">
                    <img
                      src={office.image}
                      alt={`${office.city} office`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${office.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            ))}
          </div>

          {/* Mobile: Increased height, centered content, taller image */}
          <div className="md:hidden flex flex-col gap-8 mb-10">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] flex flex-col gap-4 group relative min-h-[220px]"
              >
                {/* Left: Content - Centered */}
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="font-bold text-lg text-black">
                      {office.city}
                    </h4>
                  </div>
                  <div className="space-y-1 text-sm leading-tight max-w-[200px]">
                    <p className="font-semibold text-[#898989]">
                      {office.line1}
                    </p>
                    <p className="font-semibold text-[#898989]">
                      {office.line2}
                    </p>
                    <p className="text-[#898989]">{office.line3}</p>
                  </div>
                </div>

                {/* Right: Taller Image */}
                <div className="w-full h-40 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${office.gradient} to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default Map;
