import React, { useState, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

import SubMenuBasic from "./SubMenuMobile/SubMenuBasic";
import SubMenuWithLogo from "./SubMenuMobile/SubMenuWithLogo";
function MenuItem({ children, hasSubNav, dataSubMenu, subMenuIcon = false }) {
  const [isShownSubMenu, setIsShownSubMenu] = useState(false);
  const [maxheight, setMaxHeight] = useState(0);
  const subNavEl = useRef(null);
  const handleToggleSubMenu = () => {
    if (!subNavEl.current) return;
    if (maxheight === 0) {
      setMaxHeight(subNavEl.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }

    setIsShownSubMenu((prevState) => !prevState);
  };

  return (
    <li className={`mb-menu__item`} onClick={handleToggleSubMenu}>
      <div className="flex items-center">
        {children}
        {hasSubNav && !isShownSubMenu && <ChevronDownIcon className="h-5" />}
        {hasSubNav && isShownSubMenu && <ChevronUpIcon className="h-5" />}
      </div>
      {hasSubNav && subMenuIcon && (
        <SubMenuWithLogo
          ref={subNavEl}
          data={dataSubMenu}
          maxHeight={maxheight}
        />
      )}
      {hasSubNav && !subMenuIcon && (
        <SubMenuBasic ref={subNavEl} data={dataSubMenu} maxHeight={maxheight} />
      )}
    </li>
  );
}

export default MenuItem;
