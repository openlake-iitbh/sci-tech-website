import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getGalleryImages } from "../utils/getGalleryImages";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const gallery = [
    "epsilon",
    "ses",
    "ingenuity",
    "electromos",
    "dsai",
    // "blockchain",
    "openlake",
    // "motorsports",
    // "gdsc",
  ];
  const images = gallery.map((club) => getGalleryImages(club)).flat();
  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const showSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > images.length) newIndex = 1;
    if (newIndex < 1) newIndex = images.length;
    setSlideIndex(newIndex);

    const thumbnailElement = document.getElementById(
      `thumbnail-${newIndex - 1}`
    );
    if (thumbnailElement) {
      thumbnailElement.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
    const thumbnailElement = document.getElementById(`thumbnail-${n - 1}`);
    if (thumbnailElement) {
      thumbnailElement.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showSlides(-1);
      if (e.key === "ArrowRight") showSlides(1);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="home-bg">
      <NavBar />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-8">
        {images.map((img, index) => (
          <div key={index} className="p-2 rounded-md">
            <LazyLoadImage
              effect = "blur"
              src={img}
              alt={img}
              className="hover-shadow rounded-md cursor-pointer w-full h-full object-cover"
              onClick={() => {
                openModal();
                currentSlide(index + 1);
              }} 
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black left-0 top-0 w-full h-full overflow-auto pt-8">
          <span
            className="absolute top-0 right-0 m-4 text-3xl text-white cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>
          <div className="relative w-11/12 max-w-5xl m-auto h-96 p-4">
            {images.map((img, index) => (
              <div
                key={index}
                className={`mySlides h-full ${
                  slideIndex === index + 1 ? "flex" : "hidden"
                }`}
              >
                <div className="numbertext absolute top-0 left-0 m-2 text-white text-sm">
                  {index + 1} / {images.length}
                </div>
                <LazyLoadImage
                  effect = "blur"
                  src={`${img}`}
                  className="w-full object-center object-contain"
                  alt={img} 
                />
              </div>
            ))}
            <button
              className="prev absolute top-1/2 w-auto p-4 -mt-12 transition-ease select-none rounded-t-sm rounded-r-sm text-2xl text-white cursor-pointer"
              onClick={() => showSlides(-1)}
            >
              &#10094;
            </button>
            <button
              className="next absolute top-1/2 w-auto p-4 -mt-12 transition-ease select-none rounded-t-sm rounded-r-sm right-0 text-2xl text-white cursor-pointer"
              onClick={() => showSlides(1)}
            >
              &#10095;
            </button>
            {/* <div className="caption-container text-center text-white p-2 mt-2">
                            <p id="caption">{images[slideIndex - 1]}</p>
                        </div> */}
            <div className="flex gap-2 h-36 overflow-x-scroll scrollbar-hide mt-4">
              {images.map((img, index) => (
                <LazyLoadImage
                  effect = "blur"
                  key={index}
                  id={`thumbnail-${index}`}
                  className={`demo cursor-pointer hover:opacity-100 ${
                    slideIndex === index + 1
                      ? "opacity-100 border-2 border-blue-700"
                      : "opacity-60"
                  }`}
                  src={img}
                  onClick={() => currentSlide(index + 1)}
                  alt={img}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
