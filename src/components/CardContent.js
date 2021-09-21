import React from "react";

function CardContent() {
  return (
    <section className="my-20 max-w-screen-xl mx-auto bg-modern-gray rounded-2xl">
      <div className="py-14 px-10 text-center space-y-5 md:py-16 lg:py-20">
        <h2 className="text-white text-2xl font-bold sm:text-3xl lg:text-4xl leading-none">
          Ready to get started?
        </h2>
        <p className="text-gray-400 font-light text-base sm:text-lg lg:text-xl">
          Create an account or talk to one of our experts
        </p>
        <div className="flex flex-col items-center space-y-4 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-3">
          <button className="text-white rounded-full bg-primary-light text-sm px-4 py-2 sm:text-base">
            Sign up for free
          </button>
          <button className="text-white rounded-full bg-transparent border border-gray-400 text-sm px-4 py-2 sm:text-base">
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default CardContent;
