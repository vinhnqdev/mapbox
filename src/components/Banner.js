import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Carousel from "nuka-carousel";
import React from "react";
import slide1 from "./../assets/images/slide/drivehome-slider.jpeg";
import slide2 from "./../assets/images/slide/gl-jshome-slider.jpeg";
import slide3 from "./../assets/images/slide/mobile-sdk-v10home-slider.jpeg";
import slide4 from "./../assets/images/slide/movement-datahome-slider.jpeg";
import slide5 from "./../assets/images/slide/mtshome-slider.jpeg";
import slide6 from "./../assets/images/slide/navigation-slidehome.jpeg";

function Banner() {
  const handleStypeContainer = (key) => {
    switch (key) {
      case "BottomCenter":
        return {
          bottom: "-20px",
        };
      default:
        return {
          backgroundColor: "blue",
        };
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Carousel
        wrapAround={true}
        // autoplay={true}
        autoplayInterval={5000}
        slidesToShow={3}
        opacityScale={0.9}
        animation="zoom"
        cellAlign="center"
        zoomScale={0.6}
        // initialSlideHeight={isMediumViewPort ? 600 : 400}
        transitionMode="scroll3d"
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        framePadding="-50px 0"
        // initialSlideHeight={370}
        renderBottomCenterControls={({ previousSlide, nextSlide }) => (
          <div className="flex items-center space-x-4">
            <div className="cursor-pointer" onClick={previousSlide}>
              <ChevronLeftIcon className="text-gray-500 h-9 p-1 md:h-12 xl:h-16 xl:text-gray-300" />
            </div>
            <div className="cursor-pointer" onClick={nextSlide}>
              <ChevronRightIcon className="text-gray-500 h-9 p-1 md:h-12 xl:h-16 xl:text-gray-300" />
            </div>
          </div>
        )}
        getControlsContainerStyles={handleStypeContainer}
      >
        {/* Slide 1 */}
        <div className="relative ">
          <img
            className="rounded-xl h-full w-full object-cover"
            src={slide1}
            alt=""
          />
          <div className="absolute top-0 left-0 bottom-0 h-full px-5 py-1 items-start flex flex-col justify-evenly">
            <div className="space-y-4">
              <span className="bg-green-700 text-gray-100 px-2 py-1 text-xxs font-semibold rounded-sm uppercase xl:py-3 xl:rounded-md xl:text-sm">
                New product
              </span>
              <h3 className="text-gray-100 text-xl sm:text-2xl sm:w-5/6 font-semibold xl:text-5xl">
                Announcing Mapbox Dash
              </h3>
            </div>
            <button className="text-gray-200 text-sm sm:text-base pb-4 font-semibold capitalize xl:text-2xl">
              Learn about mapbox dash &#x2192;
            </button>
          </div>
          {/* Backdrop */}
          <div className="slide-backdrop absolute left-0  top-0 w-full h-full bg-black bg-opacity-30"></div>
        </div>
        {/* Slide 2 */}

        <div className="relative ">
          <img
            className="rounded-xl h-full w-full object-cover"
            src={slide2}
            alt=""
          />
          <div className="absolute top-0 left-0 bottom-0 h-full px-5 py-1 items-start flex flex-col justify-evenly">
            <div className="space-y-4">
              <span className="bg-green-700 text-gray-100 px-2 py-1 text-xxs font-semibold rounded-sm uppercase xl:py-3 xl:rounded-md xl:text-sm">
                Product update
              </span>
              <h3 className="text-gray-100 text-xl sm:text-2xl sm:w-5/6 font-semibold xl:text-5xl">
                Announcing GLJS v2
              </h3>
            </div>
            <button className="text-gray-200 text-sm sm:text-base pb-4 font-semibold capitalize xl:text-2xl">
              Learn about GLJS &#x2192;
            </button>
          </div>
          {/* Backdrop */}
          <div className="slide-backdrop absolute left-0  top-0 w-full h-full bg-black bg-opacity-30"></div>
        </div>

        {/* Slide 3 */}

        <div className="relative ">
          <img
            className="rounded-xl h-full w-full object-cover"
            src={slide3}
            alt=""
          />
          <div className="absolute top-0 left-0 bottom-0 h-full px-5 py-1 items-start flex flex-col justify-evenly">
            <div className="space-y-4">
              <span className="bg-green-700 text-gray-100 px-2 py-1 text-xxs font-semibold rounded-sm uppercase xl:py-3 xl:rounded-md xl:text-sm">
                Product update
              </span>
              <h3 className="text-gray-100 text-xl sm:text-2xl sm:w-5/6 font-semibold xl:text-5xl">
                Announcing Mobile Maps SDK v10
              </h3>
            </div>
            <button className="text-gray-200 text-sm sm:text-base pb-4 font-semibold capitalize xl:text-2xl">
              Mobile Maps SDK v10 &#x2192;
            </button>
          </div>
          {/* Backdrop */}
          <div className="slide-backdrop absolute left-0  top-0 w-full h-full bg-black bg-opacity-30"></div>
        </div>

        {/* Slide 4 */}

        <div className="relative ">
          <img
            className="rounded-xl h-full w-full object-cover"
            src={slide4}
            alt=""
          />
          <div className="absolute top-0 left-0 bottom-0 h-full px-5 py-1 items-start flex flex-col justify-evenly">
            <div className="space-y-4">
              <span className="bg-green-700 text-gray-100 px-2 py-1 text-xxs font-semibold rounded-sm uppercase xl:py-3 xl:rounded-md xl:text-sm">
                New Product
              </span>
              <h3 className="text-gray-100 text-xl sm:text-2xl sm:w-5/6 font-semibold xl:text-5xl">
                Understand When Movement Is Happening
              </h3>
            </div>
            <button className="text-gray-200 text-sm sm:text-base pb-4 font-semibold capitalize xl:text-2xl">
              Learn about movement Data &#x2192;
            </button>
          </div>
          {/* Backdrop */}
          <div className="slide-backdrop absolute left-0  top-0 w-full h-full bg-black bg-opacity-30"></div>
        </div>

        {/* Slide 5 */}

        <div className="relative ">
          <img
            className="rounded-xl h-full w-full object-cover"
            src={slide5}
            alt=""
          />
          <div className="absolute top-0 left-0 bottom-0 h-full px-5 py-1 items-start flex flex-col justify-evenly">
            <div className="space-y-4">
              <span className="bg-green-700 text-gray-100 px-2 py-1 text-xxs font-semibold rounded-sm uppercase xl:py-3 xl:rounded-md xl:text-sm">
                New Service
              </span>
              <h3 className="text-gray-100 text-xl sm:text-2xl sm:w-5/6 font-semibold xl:text-5xl">
                Announcing Mapbox Tiling Service
              </h3>
            </div>
            <button className="text-gray-200 text-sm sm:text-base pb-4 font-semibold capitalize xl:text-2xl">
              Learn About MTS &#x2192;
            </button>
          </div>
          {/* Backdrop */}
          <div className="slide-backdrop absolute left-0  top-0 w-full h-full bg-black bg-opacity-30"></div>
        </div>

        {/* Slide 6 */}

        <div className="relative ">
          <img
            className="rounded-xl h-full w-full object-cover"
            src={slide6}
            alt=""
          />
          <div className="absolute top-0 left-0 bottom-0 h-full px-5 py-1 items-start flex flex-col justify-evenly">
            <div className="space-y-4">
              <span className="bg-green-700 text-gray-100 px-2 py-1 text-xxs font-semibold rounded-sm uppercase xl:py-3 xl:rounded-md xl:text-sm">
                Product update
              </span>
              <h3 className="text-gray-100 text-xl sm:text-2xl sm:w-5/6 font-semibold xl:text-5xl">
                Navigation SDK v2 release candidate
              </h3>
            </div>
            <button className="text-gray-200 text-sm sm:text-base pb-4 font-semibold capitalize xl:text-2xl">
              Learn about Navigation SDK &#x2192;
            </button>
          </div>
          {/* Backdrop */}
          <div className="slide-backdrop absolute left-0  top-0 w-full h-full bg-black bg-opacity-30"></div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
