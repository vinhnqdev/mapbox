import React from "react";

const SubMenuBasic = React.forwardRef(({ data, maxHeight }, ref) => {
  console.log(maxHeight);

  //   ${
  //     maxHeight ? `max-h-[${maxHeight}px] py-5 space-y-4` : "max-h-0"
  //   }`}
  return (
    <div
      style={{ transition: "max-height 0.3s", maxHeight: maxHeight + "px" }}
      className={`overflow-hidden px-5 space-y-4`}
      ref={ref}
    >
      <ul className="space-y-4 my-4">
        {data?.map((item, index) => (
          <li key={index} className="text-xs">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default SubMenuBasic;
