import React from "react";

function SectionWithTwoImages({
  title,
  para,
  linkText,
  image1,
  image2,
  positionImg = false,
}) {
  return (
    <section
      className={`mt-20 space-y-10 ${
        positionImg ? "xl:space-y-10" : "xl:space-y-0"
      } max-w-screen-xl mx-auto`}
    >
      <div className="space-y-5 w-full max-w-screen-sm">
        <h2 className="text-white text-2xl font-bold sm:text-3xl lg:text-4xl leading-none">
          {title}
        </h2>
        <p className="text-gray-400 font-light text-base sm:text-lg lg:text-xl">
          {para}
        </p>
        <div>
          <a
            href=""
            className="text-white text-sm py-2 group px-4 border border-gray-300 rounded-full sm:text-base lg:text-lg inline-block lg:mt-1 lg:px-5 hover:border-primary-light hover:bg-primary-darkest"
          >
            {linkText}
            <span className="ml-1 transition transform inline-block group-hover:translate-x-1">
              &#x2192;
            </span>
          </a>
        </div>
      </div>

      <div className={`flex items-end -mx-2 md:-mx-4`}>
        <div className="px-2 md:px-4">
          <img src={image2} alt="" />
        </div>
        <div className="px-2 md:px-4">
          <img src={image1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SectionWithTwoImages;
