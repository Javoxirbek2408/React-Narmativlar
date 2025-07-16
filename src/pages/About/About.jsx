import { Slash } from "lucide-react";
import { NavLink } from "react-router-dom";
import { AboutOne } from "./components/aboutOne";
import { AboutTwo } from "./components/aoutTwo/AboutTwo";
import { AboutThrere } from "./components/aboutThrere/AboutThrere";
import { EmdHome } from "../Home/components/EndHome/EmdHome";

export const About = () => {
  return (
    <div className="!mt-[80px] !mb-[140px]">
      <ul className="container  flex  gap-2">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
      <AboutOne />
      <AboutTwo />
      <AboutThrere />
      <EmdHome />
    </div>
  );
};
