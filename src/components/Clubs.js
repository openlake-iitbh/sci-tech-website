import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const CircularImages = () => {
  const images = [
    { src: "club_logo/GDSC.png", alt: "GDSC Club", name: "GDSC", href:"/club/gdsc" },
    { src: "club_logo/SES Logo.png", alt: "SES Logo", name: "SES", href:"/club/ses" },
    { src: "club_logo/BIB.png", alt: "BIB Logo", name: "BlockChain", href:"/club/blockchain" },
    { src: "club_logo/OPENLAKE.png", alt: "OPENLAKE Club", name: "Openlake", href:"/club/openlake" },
    {
      src: "club_logo/Motorsports.png",
      alt: "Motorsports Club",
      name: "Motorsports",
      href:"/club/motorsports"
    },
    { src: "club_logo/epsilon_nobg.png", alt: "Epsilon Logo", name: "Epsilon", href:"/club/epsilon" },
    { src: "club_logo/ING.png", alt: "ING Logo", name: "Ingenuity", href:"/club/ingenuity" },
    { src: "club_logo/DSAI.png", alt: "DSAI Logo", name: "DSAI", href:"/club/dsai" },
    {
      src: "club_logo/Electromos.png",
      alt: "Electromos Logo",
      name: "Electromos",
      href:"/club/electromos"
    },
    { src: "club_logo/Spectre Logo.png", alt: "Spectre Logo", name: "Spectre" , href:"/club/spectre"},
  ];

  const centerX = 50; // Center X coordinate (percentage)
  const centerY = 50; // Center Y coordinate (percentage)

  // State for hover effects
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // State to hold dynamic radius based on screen size
  const [radius, setRadius] = useState(window.screen.width > 640 ? 40 : 30);

  // UseEffect to update radius when window resizes
  useEffect(() => {
    const handleResize = () => {
      const newRadius = window.innerWidth > 640 ? 40 : 30; // Update radius based on screen width
      setRadius(newRadius);
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-full w-full mx-auto">
      {/* Center Image */}
      <div className="relative h-full w-[100vh] max-w-full mx-auto">
        <img
        effect="blur"
          src="scitechgif.gif"
          alt="Center"
          className="absolute w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Surrounding Images */}
        {images.map((img, index) => {
          // Calculate the angle for each image
          const angle = (index / images.length) * (2 * Math.PI);

          // Adjusted positions for top and left
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <Link
              key={index}
              to={img.href}
              // target="_blank"
              // rel="noreferrer"
              className="absolute transition-transform duration-300 ease-in-out overflow-visible"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: `translate(-50%, -50%) scale(${
                  hoveredIndex === index ? 1.5 : 1
                })`, // Scale on hover
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <LazyLoadImage
              effect="blur"
                src={img.src}
                alt={img.alt}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24 "
              />
              {hoveredIndex === index && (
                <p className="text-[#0A66C2] absolute w-max text-center -bottom-5 left-1/2 transform -translate-x-1/2 z-50">
                  {img.name}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CircularImages;
