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
      <div>
        <menu className="flex flex-col gap-4">
          <ul className=" font-medium  text-base leading-6 flex flex-col gap-2  ">
            Manage My Account
            <li className="pl-3">
              <NavLink className={"font-normal text-base leading-6"}>
                My Profile
              </NavLink>
            </li>
            <li className="pl-3">
              <NavLink className=" font-normal text-base leading-6   !focus:text-[#DB4444]">
                Address Book
              </NavLink>
            </li>
            <li className="pl-3">
              <NavLink className=" font-normal text-base leading-6   !focus:text-[#DB4444]">
                My Payment Options
              </NavLink>
            </li>
          </ul>
          <ul className=" font-medium text-base leading-6 flex flex-col gap-2 ">
            My Orders
            <li className="pl-3">
              <NavLink className=" font-normal text-base leading-6   !focus:text-[#DB4444]">
                My Returns
              </NavLink>
            </li>
            <li className="pl-3">
              <NavLink className=" font-normal text-base leading-6   !focus:text-[#DB4444]">
                My Cancellations
              </NavLink>
            </li>
          </ul>
          <ul className=" font-medium text-base leading-6 flex flex-col gap-2 ">My WishList</ul>
        </menu>
      </div>
    </div>
  );
};
