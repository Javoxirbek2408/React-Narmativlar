import { Input, InputNumber } from "antd";
import FormItem from "antd/es/form/FormItem";
import FormItemLabel from "antd/es/form/FormItemLabel";
import { Slash } from "lucide-react";
import React from "react";
import { Form, NavLink } from "react-router-dom";

export const CheckOutPage = () => {
  return (
    <div className="container !mt-[80px] !mb-[140px]">
      <ul className="flex gap-2 ">
        <li>
          <NavLink className={" font-normal text-sm leading-[21px]"}>
            Account
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />
        <li>
          <NavLink className={" activLink font-normal text-sm leading-[21px]"}>
            My Account
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />{" "}
        <li>
          <NavLink className={" activLink font-normal text-sm leading-[21px]"}>
            Product
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />{" "}
        <li>
          <NavLink className={" activLink font-normal text-sm leading-[21px]"}>
            View Cart
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />{" "}
        <li>
          <NavLink className={" activLink font-normal text-sm leading-[21px]"}>
            CheckOut
          </NavLink>
        </li>
      </ul>
      <div className="!mt-[80px]">
        <h2 className="font-medium text-4xl leading-[30px] tracking-[4%]">
          Billing Details
        </h2>
        <div className="flex justify-between">
          <form action="" className="mt-[48px] flex flex-col !gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Name"
                className="font-normal text-base leading-6 text-gr"
              >
                First Name
              </label>
              <input
                type="text"
                id="Name"
                className="bg-[#F5F5F5] w-[470px] h-[50px] pl-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Name"
                className="font-normal text-base leading-6 text-gr"
              >
                Company Name
              </label>
              <input
                type="text"
                id="Name"
                className="bg-[#F5F5F5] w-[470px] h-[50px] pl-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Name"
                className="font-normal text-base leading-6 text-gr"
              >
                Street Address*
              </label>
              <input
                type="text"
                id="Name"
                className="bg-[#F5F5F5] w-[470px] h-[50px] pl-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Name"
                className="font-normal text-base leading-6 text-gr"
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="Name"
                className="bg-[#F5F5F5] w-[470px] h-[50px] pl-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Name"
                className="font-normal text-base leading-6 text-gr"
              >
                Town/City*
              </label>
              <input
                type="text"
                id="Name"
                className="bg-[#F5F5F5] w-[470px] h-[50px] pl-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Name"
                className="font-normal text-base leading-6 text-gr"
              >
                Phone Number*
              </label>
              <input
                type="text"
                id="Name"
                className="bg-[#F5F5F5] w-[470px] h-[50px] pl-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Name"
                className="font-normal text-base leading-6 text-gr"
              >
                Email Address*
              </label>
              <input
                type="text"
                id="Name"
                className="bg-[#F5F5F5] w-[470px] h-[50px] pl-4"
              />
            </div>
            <div className="flex items-center gap-5 ml-4 ">
              <input type="checkbox"  />{" "}
              <p>Save this information for faster check-out next time</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
