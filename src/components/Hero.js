import React from "react";

function Hero() {
  return (
    <div className="pt-24 pb-16 md:pb-4 px-5 md:pt-36 xl:pt-40">
      <div className="text-center text-white max-w-md w-full mx-auto md:max-w-2xl ">
        <h1 className="text-4xl leading-snug font-bold md:text-5xl md:leading-tight xl:text-6xl xl:leading-none xl:font-extrabold ">
          Maps and location for developers
        </h1>
        <p className="text-md sm:text-xl text-gray-400 font-light mt-5 xl:mt-5 xl:text-2xl xl:w-3/4 xl:mx-auto">
          Precise location data and powerful developer tools to change the way
          we navigate the world.
        </p>
        <button className="text-white bg-primary rounded-full py-2 px-5 cursor-pointer text-sm sm:text-md mt-5 font-nomal hover:bg-primary-light xl:mt-8 xl:text-lg xl:font-light">
          Start mapping for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
