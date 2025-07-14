import { Heart, LucideShoppingCart, ShoppingCart, User } from "lucide-react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <nav className="container flex items-center pt-12 justify-between ">
        <div className="logo    font-bold text-2xl leading-6 tracking-[3%] font-inter">
          <h1>Exclusive</h1>
        </div>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to={"/"}
              className={
                "font-normal text-base leading-6 tracking-[0%] text-center font-popins  "
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={
                "font-normal text-base leading-6 tracking-[0%] text-center font-popins "
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={
                "font-normal text-base leading-6 tracking-[0%] text-center font-popins "
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/singup"}
              className={
                "font-normal text-base leading-6 tracking-[0%] text-center font-popins"
              }
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <div className="bg-[#F5F5F5] flex  w-[243px] h-[38px] gap-2.5 rounded-md pl-5 pr-3 py-[7px] ">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="font-normal cursor-pointer  w-[200px] outline-none text-xs leading-[18px] font-popins"
            />
            <svg
              width={24}
              height={24}
              className="cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {location.pathname !== "/singup" &&
            location.pathname !== "/login" && (
              <div className="flex items-center cursor-pointer gap-4">
                <Heart />
                <LucideShoppingCart />
                
              </div>
            )}
        </div>
      </nav>
      <hr className="mt-4 text-[#B3B3B3]" />
    </div>
  );
};
