import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  subMenuDataWithIcon,
  subMenuDataBasic,
} from "../../assets/fakeData/SubMenuData";
import SubNavBasic from "./SubNavBasic";
function Navigation() {
  return (
    <nav className="hidden lg:flex lg:items-center lg:justify-center lg:flex-grow">
      <ul className="flex ">
        <li className="menu__item">
          Products
          <span className="bridge"></span>
          <ChevronDownIcon className="h-5 transition transform group-hover:rotate-180 group-hover:text-white" />
          <ul className="absolute hidden -left-32 top-full w-100 mt-3 bg-white grid-cols-3 p-8 gap-4 rounded-xl group-hover:grid">
            <span className="absolute top-0 left-40 transform -translate-y-full triangle"></span>
            {subMenuDataWithIcon.map((data, index) => (
              <li key={data.iconUrl} className="flex items-start space-x-4">
                <div className="p-1 bg-blue-100 rounded-full">
                  {/* 2 icon cuối có 1 chút vấn đề nên phải chữa cháy bằng conditions */}
                  <img
                    src={data.iconUrl}
                    alt=""
                    className={`h-7 ${
                      index === subMenuDataWithIcon.length - 2 && "w-8"
                    } ${index === subMenuDataWithIcon.length - 1 && "w-9"}`}
                  />
                </div>

                <div>
                  <h4 className="text-xs text-gray-900 hover:text-primary">
                    {data.heading}
                  </h4>
                  <p className="text-xxs text-gray-400 hover:text-primary">
                    {data.para}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </li>
        <li className="menu__item">
          Solutions
          <span className="bridge"></span>
          <ChevronDownIcon className="h-5 transition transform group-hover:rotate-180 group-hover:text-white" />
          <SubNavBasic data={subMenuDataBasic[0]} />
        </li>
        <li className="menu__item">
          Developers
          <span className="bridge"></span>
          <ChevronDownIcon className="h-5 transition transform group-hover:rotate-180 group-hover:text-white" />
          <SubNavBasic data={subMenuDataBasic[1]} />
        </li>
        <li className="menu__item">
          Company
          <span className="bridge"></span>
          <ChevronDownIcon className="h-5 transition transform group-hover:rotate-180 group-hover:text-white" />
          <SubNavBasic data={subMenuDataBasic[2]} />
        </li>
        <li className="menu__item">Pricing</li>
        <li className="menu__item">Blog</li>
      </ul>
    </nav>
  );
}

export default Navigation;
