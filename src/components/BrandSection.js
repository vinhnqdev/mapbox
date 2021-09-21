import React from "react";
import gmLogo from "../assets/images/brandlogo/brand-gm.svg";
import instacartLogo from "../assets/images/brandlogo/brand-instacart.svg";
import snapLogo from "../assets/images/brandlogo/brand-snap.svg";
import theweatherLogo from "../assets/images/brandlogo/brand-weather.svg";
import bmwLogo from "../assets/images/brandlogo/brand-bmw.svg";
import newYorkTimeLogo from "../assets/images/brandlogo/brand-nytime.svg";
import geoLogo from "../assets/images/brandlogo/brand-geography.svg";
import toyotaLogo from "../assets/images/brandlogo/brand-toyota.svg";
import stravaLogo from "../assets/images/brandlogo/brand-strava.svg";
import reverLogo from "../assets/images/brandlogo/brand-rever.svg";

function BrandSection() {
  return (
    <section className="max-w-screen-lg mx-auto space-y-10">
      <h4 className="text-white text-center uppercase text-xs sm:text-sm lg:text-base lg:font-medium">
        Trusted by the industry leaders
      </h4>
      <div className="grid grid-cols-2 items-center justify-items-center gap-x-2 gap-y-7 sm:grid-cols-4 sm:gap-y-10 md:grid-cols-5">
        <img src={gmLogo} alt="gmLogo" className="h-10" />
        <img src={instacartLogo} alt="instacartLogoo" className="h-8" />
        <img src={snapLogo} alt="snapLogo" className="h-5" />
        <img src={theweatherLogo} alt="theweatherLogo" className="h-8" />
        <img src={bmwLogo} alt="bmwLogo" className="h-8" />
        <img src={geoLogo} alt="geoLogo" className="h-6" />
        <img src={toyotaLogo} alt="toyotaLogo" className="h-10" />
        <img src={newYorkTimeLogo} alt="newYorkTimeLogo" className="h-5" />
        <img src={stravaLogo} alt="stravaLogo" className="h-4" />
        <img src={reverLogo} alt="reverLogo" className="h-3" />
      </div>

      <div className="text-center">
        <a href="" className="text-primary text-sm sm:text-base lg:text-lg">
          View custom stories &#x2192;
        </a>
      </div>
    </section>
  );
}

export default BrandSection;
