import React, { useState } from "react";
import mapboxlogo from "../../assets/images/mapbox-logo.svg";
import { MenuIcon } from "@heroicons/react/solid";
import MenuItem from "./MenuItemMobile";
import {
  subMenuDataWithIcon,
  subMenuDataBasic,
} from "../../assets/fakeData/SubMenuData";
import Navigation from "./Navigation";

function Header() {
  const [isShownMenu, setIsShownMenu] = useState(false);
  const handleToggleMenu = () => {
    setIsShownMenu((prevState) => !prevState);
  };
  return (
    <header className="fixed w-full flex items-center px-4 py-2 lg:px-8 lg:py-3">
      {/* Header Logo */}
      <div className="flex-grow cursor-pointer lg:flex-grow-0">
        <img src={mapboxlogo} alt="Mapbox-logo" className="h-6" />
      </div>

      {/* Header Middle */}
      <Navigation />

      {/* Header Right */}
      <div className="flex items-center space-x-4">
        <span className="hidden text-white hover:text-primary-dark cursor-pointer text-xs sm:inline">
          Login
        </span>
        <button className="text-white bg-primary rounded-full py-2 px-3 cursor-pointer text-xs font-nomal hover:bg-primary-light">
          Sign up
        </button>
        <MenuIcon
          className="h-6 lg:hidden text-white cursor-pointer"
          onClick={handleToggleMenu}
        />
      </div>

      {/* Menu Toogle when clicking menuICon */}
      <div className={`absolute left-4 right-4 top-full`}>
        <ul
          className={`bg-gray-100 px-6 py-4 rounded-xl transition transform origin-top duration-300 max-h-screen overflow-y-scroll scrollbar-hide ${
            !isShownMenu && "opacity-0 scale-y-0 lg:hidden"
          }`}
        >
          <MenuItem
            dataSubMenu={subMenuDataWithIcon}
            subMenuIcon={true}
            hasSubNav={true}
          >
            Products
          </MenuItem>
          <MenuItem dataSubMenu={subMenuDataBasic[0]} hasSubNav={true}>
            Solution
          </MenuItem>
          <MenuItem dataSubMenu={subMenuDataBasic[1]} hasSubNav={true}>
            Developers
          </MenuItem>
          <MenuItem dataSubMenu={subMenuDataBasic[2]} hasSubNav={true}>
            Company
          </MenuItem>
          <MenuItem hasSubNav={false}>Pricing</MenuItem>
          <MenuItem hasSubNav={false}>Blog</MenuItem>
        </ul>
      </div>
    </header>
  );
}

export default Header;
