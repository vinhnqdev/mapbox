import React from "react";
const SubMenuWithLogo = React.forwardRef(({ data, maxHeight }, ref) => {
  return (
    <div
      className="px-3 overflow-hidden"
      ref={ref}
      style={{ transition: "max-height 0.5s", maxHeight: maxHeight + "px" }}
    >
      <ul className="space-y-4 py-5">
        {data?.map((subItem) => (
          <li className="flex space-x-4">
            {/* Left Side */}
            <div className="p-1 bg-blue-100 rounded-full">
              <img src={subItem.iconUrl} alt="" className="h-8" />
            </div>

            {/* Right Side */}

            <div className="space-y-1">
              <p className="text-xs text-black font-semibold">
                {subItem.heading}
              </p>
              <p className="text-xs text-gray-500 font-normal">
                {subItem.para}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default SubMenuWithLogo;
