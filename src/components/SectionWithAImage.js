import React from "react";

function SectionWithAImage({
  title,
  para,
  linkText,
  image,
  reverse,
  rowAtXlSize,
  tag,
}) {
  return (
    <section
      className={`mt-20 space-y-10 max-w-screen-xl mx-auto flex flex-col gap-x-4
      } ${rowAtXlSize ? "xl:space-y-0" : "md:space-y-0"} ${
        rowAtXlSize ? "lg:flex-row" : "md:flex-row"
      } ${tag && "bg-modern-gray pl-10 pt-16 rounded-2xl overflow-hidden"}`}
    >
      {/* Left */}
      <div
        className={`space-y-5 w-full max-w-screen-sm ${
          reverse && !rowAtXlSize && "md:order-1"
        } ${reverse && rowAtXlSize && "lg:order-1"}`}
      >
        {tag && (
          <div className="text-white text-sm inline-block bg-green-700 uppercase font-semibold px-2 py-1 rounded-md">
            {tag}
          </div>
        )}

        {!title && (
          <div>
            <img
              src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6076f540d539fa8c97126f0b_straigtaway.svg"
              alt=""
              className="h-7"
            />
          </div>
        )}

        {title && (
          <h2 className="text-white text-2xl font-bold sm:text-3xl lg:text-4xl leading-none">
            {title}
          </h2>
        )}

        <p className="text-gray-400 font-light text-base sm:text-lg lg:text-xl">
          {para}
        </p>
        <div>
          <a
            href=""
            className="text-white text-sm py-2 px-3 border border-gray-300 rounded-full sm:text-base lg:text-lg inline-block lg:mt-1"
          >
            {linkText} &#x2192;
          </a>
        </div>
      </div>

      {/* Right */}
      <div className={`${rowAtXlSize ? "xl:w-11/12" : "md:w-11/12"}`}>
        <img src={image} alt="" />
      </div>
    </section>
  );
}

export default SectionWithAImage;
