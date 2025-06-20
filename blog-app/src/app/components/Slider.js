"use client";
import React, { useState, useEffect, useRef } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

function Slider({ slideData, sidePostsData }) {
  // slides array
  const slides = slideData;
  const posts = sidePostsData;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideAnimation, setSlideAnimation] = useState("");
  const [width, setWidth] = useState(0);
  const slideImage = useRef();
  const [slideImageHeight, setSlideImageHeight] = useState(0);

  //Jump go slide (dot clicked)
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  //previous slide
  const previousSlide = () => {
    setSlideAnimation("animate-backSlide");
    const hasFirstSlide = currentSlide === 0;
    if (hasFirstSlide) {
      return setCurrentSlide(slides.length - 1);
    } else {
      return setCurrentSlide((prev) => prev - 1);
    }
  };

  //next slide
  const nextSlide = async () => {
    setSlideAnimation("animate-slide");
    const hasLastSlide = currentSlide === slides.length - 1;
    if (hasLastSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  //   Timeout for slides
  useEffect(() => {
    const intervalRef = setInterval(nextSlide, 3000);
    setTimeout(() => {
      setSlideAnimation("");
    }, 500);
    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalRef);
    };
  }, [currentSlide]);

  useEffect(() => {
    // Function to preload images
    const preloadImages = (images) => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    // Preload the images from your slides array
    const slideImages = slides.map((slide) => slide.image);
    preloadImages(slideImages);
    setSlideImageHeight(slideImage.current.clientHeight);

    setWidth(window.innerWidth);
    window.onresize = () => {
      setWidth(window.innerWidth);
      setSlideImageHeight(slideImage.current.clientHeight);
    };
  }, []);

  return (
    <>
    {/* Slides */}
      <div className="w-full slg:grid grid-cols-2">
        <div className="">
          <div className="w-full place-self-center h-72 md:h-[28rem] xsm:h-96 px-1 py-1 overflow-hidden slg:h-72 1000px:h-80 1300px:h-[28rem] lg:h-96">
            <div
              id="slide"
              className={`${slideAnimation} transition-all overflow-hidden duration-500 relative rounded-md w-full h-[85%] bg-cover bg-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer  group`}
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
              ref={slideImage}
            >
              <span className="h-full w-full group-hover:opacity-100 opacity-0 hidden xsm:flex items-center justify-center text-white font-bold text-2xl font-serif transition-all duration-500">
                Read More
              </span>

              <div className="absolute bottom-0 left-0 right-0 text-white h-[90%] bg-gradient-to-t from-black via-gray-[#000000bf]">
                <div className="absolute bottom-5 font-bold text-center text-lg font-serif right-0 left-0 px-3 md:px-24 slg:px-3">
                  {slides[currentSlide].text.substring(0, 80)}...
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-3 dark:invert">
              {/* Previous button */}

              <div
                className="text-2xl cursor-pointer bg-gray-400 rounded-full p-1 hover:[&>*]:-translate-x-1 transition-all duration-700"
                onClick={previousSlide}
              >
                <GrPrevious />
              </div>

              {/* index dot buttons */}
              <div className="text-2xl flex [&>*]:mx-1">
                {slides.map((_, index) => {
                  if (currentSlide === index) {
                    return (
                      <div key={index}>
                        <GoDotFill />
                      </div>
                    );
                  }
                  return (
                    <div
                      className="cursor-pointer"
                      key={index}
                      onClick={() => goToSlide(index)}
                    >
                      <GoDot />
                    </div>
                  );
                })}
              </div>

              {/* next button */}
              <div
                className="text-2xl bg-gray-400 rounded-full p-1 cursor-pointer hover:[&>*]:translate-x-1 transition-all duration-700"
                onClick={nextSlide}
              >
                <GrNext />
              </div>
            </div>
          </div>

          {/* NewsletterForm */}
          <div className="w-full px-8 my-3 flex flex-col items-center justify-center place-self-center">
            <h2 className="font-bold text-xl text-center my-2 dark:text-white">
              Subscribe to our Newsletter
            </h2>
            <input
              type="text"
              className="w-full block outline-none border-[2px] h-10 rounded-md my-2 border-indigo-600 px-3 dark:bg-indigo-950 dark:border-white dark:text-white"
              placeholder="Enter your Name"
            />
            <input
              type="email"
              className="w-full block outline-none border-[2px] h-10 rounded-md my-2 border-indigo-600 px-3 dark:bg-indigo-950 dark:border-white dark:text-white"
              placeholder="Enter your Email"
            />
            <button className="bg-indigo-600 text-white font-bold rounded px-4 py-2 w-full text-lg hover:bg-indigo-700 hover:text-xl transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Side posts */}

        <div
          className="flex-wrap hidden slg:inline-flex [&>*]:m-1 slg:[&>*]:-mt-2 1000px:[&>*]:mt-0 items-center justify-center flex-row 1000px:py-1"
          id="posters"
        >
          {posts.map((elem, index) => {
            if (width < 1300) {
              if (index > 1) {
                return;
              }
            }
            if (index > 3) {
              return;
            }

            return (
              <div
                key={index}
                className={`w-full 1300px:w-[48%]`}
                style={{ height: slideImageHeight }}
              >
                <div
                  className={`overflow-hidden duration-500 relative rounded-md h-full w-full bg-cover bg-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}
                  style={{ backgroundImage: `url(${elem.image})` }}
                >
                  <div className="absolute bottom-0 left-0 right-0 text-white h-full bg-gradient-to-t from-black via-gray-[#000000bf]">
                    <div className="absolute bottom-5 font-bold text-lg font-serif right-0 left-0 px-3 md:px-24 slg:px-3">
                      {elem.text.substring(0, 80)}
                      <a
                        href="/"
                        className="text-center block rounded-md px-3.5 py-1 mt-5 overflow-hidden relative group cursor-pointer border-2 font-medium border-white text-white w-1/2"
                      >
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative transition duration-300 group-hover:text-white ease">
                          Read More
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slider;
