import { Slash } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Account = () => {
  return (
    <div className="container !mt-[80px] !mb-[140px]">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <NavLink className={"font-normal text-sm leading-[21px]"}>
            Home
          </NavLink>
          <Slash className="w-[13px] text-gray-500" />
          <NavLink className={"font-normal text-sm leading-[21px]"}>
            My Account
          </NavLink>
        </div>
        <div>
          <span className="font-normal text-sm leading-[21px] ">Welcome! </span>
          <span className="font-normal text-sm leading-[21px] text-[#DB4444]">
            Md Rimel
          </span>
        </div>
      </div>
    </div>
  );
};
