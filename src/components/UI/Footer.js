import React from "react";
import footerLogo from "../../assets/images/mapbox-logo.svg";
import redditLogo from "../../assets/images/social/reddit-vector.svg";
import twitterLogo from "../../assets/images/social/twiter-vector.svg";
import linkinLogo from "../../assets/images/social/linkin-vector.svg";
import facebookLogo from "../../assets/images/social/fb-vector.svg";
import instaLogo from "../../assets/images/social/intagram-vector.svg";

function Footer() {
  return (
    <footer className="px-5 md:px-8 max-w-screen-xl mx-auto xl:px-0">
      {/* Footer Top */}
      <div className="mb-16 grid grid-cols-2 gap-y-10 gap-x-5 xs:grid-cols-3 md:grid-cols-4 md:gap-x-7">
        {/* Logo Column */}
        <div className="col-span-full md:col-auto cursor-pointer">
          <img src={footerLogo} alt="" className="h-8" />
        </div>
        {/* Footer Column1 */}
        <div className="space-y-7">
          <h4 className="text-white uppercase text-sm font-semibold">
            Products
          </h4>
          <ul className="space-y-4">
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Maps
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Navigation SDK
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Studio
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Data
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Search SDK
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Mobile Maps SDK
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Vision
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Atlas
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Dash
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              ___
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Pricing
            </li>
          </ul>
        </div>

        {/* Footer Column2 */}
        <div className="space-y-7">
          <h4 className="text-white uppercase text-sm font-semibold">
            Company
          </h4>
          <ul className="space-y-4">
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              About Mapbox
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Customers
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Careers
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Comunity
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Press
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Cotact
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              ___
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Blog
            </li>
          </ul>
        </div>

        {/* Footer Column3 */}
        <div className="space-y-7">
          <h4 className="text-white uppercase text-sm font-semibold">
            Developers
          </h4>
          <ul className="space-y-4">
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Documentations
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Getting started
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Tutorials
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Troubleshooting
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Webinars
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              How-to-videos
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Developer Network
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Flatform
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Status
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              ___
            </li>
            <li className="text-sm text-gray-400 cursor-pointer hover:text-primary">
              Support
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Footer Bottom Top */}
        <div className="flex justify-around py-5 md:order-1">
          {/* Social 1 */}
          <div>
            <img className="h-4" src={redditLogo} alt="redditLogo" />
          </div>
          {/* Social 1 */}
          <div>
            <img className="h-4" src={twitterLogo} alt="twitterLogo" />
          </div>
          {/* Social 1 */}
          <div>
            <img className="h-4" src={linkinLogo} alt="linkinLogo" />
          </div>
          {/* Social 1 */}
          <div>
            <img className="h-4" src={facebookLogo} alt="facebookLogo" />
          </div>
          {/* Social 1 */}
          <div>
            <img className="h-4" src={instaLogo} alt="instaLogo" />
          </div>
        </div>

        {/* Footer Bottom Bottom */}
        <ul className="pt-5 pb-10 flex justify-center space-x-5 md:justify-start">
          <li className="text-gray-400 text-sm">&#169; Mapbox</li>
          <li className="cursor-pointer text-gray-400 text-sm hover:text-primary">
            Terms
          </li>
          <li className="cursor-pointer text-gray-400 text-sm hover:text-primary">
            Privacy
          </li>
          <li className="cursor-pointer text-gray-400 text-sm hover:text-primary">
            Security
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
