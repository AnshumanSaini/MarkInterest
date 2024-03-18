import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import logo from "../assets/logo.png";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

const Categories = [
  { name: "animals" },
  { name: "wallpaper" },
  { name: "gaming" },
  { name: "coding" },
  { name: "other" },
];

const SideBar = ({ userData, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            onClick={handleCloseSidebar}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover Categories
          </h3>
          {Categories.slice(0, Categories.length - 1).map((item) => (
            <NavLink
              to={`/category/${item.name}`}
              onClick={handleCloseSidebar}
              key={item.name}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              {item.name} 
            </NavLink>
          ))}
        </div>
      </div>
      {userData && (
        <Link
        to={`user-profile/${userData._id}`}
        className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
        onClick={handleCloseSidebar}
        >
          <img src={userData.image} alt="user-profile" className="w-10 h-10 rounded-full" />
          <p>{userData.name}</p>
        </Link>
      )}
    </div>
  );
};

export default SideBar;
