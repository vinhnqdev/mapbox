import React from "react";

function SubNavBasic({ data }) {
  return (
    <ul className="hidden absolute top-full bg-white p-8 mt-3 w-56 transform -translate-x-1/4 rounded-md group-hover:block">
      <span className="absolute top-0 left-20 transform -translate-y-full triangle"></span>
      {data.map((data, index) => (
        <li
          key={index}
          className="text-sm text-gray-900 font-normal py-1 hover:text-primary-dark"
        >
          {data}
        </li>
      ))}
    </ul>
  );
}

export default SubNavBasic;
