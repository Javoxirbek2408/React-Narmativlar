import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";
import { TrashIcon } from "lucide-react";

export const CartPage = () => {
  const [cartpage, setCartpr] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartpage") || "[]");

    setCartpr(cart);
  }, []);

  const handleDlete = (titleDlete) => {
    const updateWish = cartpage.filter((item) => item.id !== titleDlete);
    localStorage.setItem("cartpage", JSON.stringify(updateWish));
    setCartpr(updateWish);
  };

  return (
    <div className="container">
      <div className="flex gap-2 !font-normal !text-sm l!eading-[21px]">
        <NavLink to={"/"}>Home</NavLink>/
        <NavLink to={"/cartpage"}>Cart</NavLink>
      </div>
      <div>
        <div>
          {cartpage?.map((item) => {
            return (
              <div>
                <div className="p-4 flex justify-between mt-[80px] mb-6 items-center shadow-md  ">
                  <div className="!flex !gap-3 items-center">
                    <img
                      className="w-[54px] !object-cover"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <h1>${item.oldPrice}</h1>

                  <input
                    type="number"
                    placeholder="01"
                    className=" !w-[72px] !h-[44px] pl-6 !opacity-100 rounded border-[1.5px]"
                  />

                  <h1>${item.oldPrice}</h1>
                  <CurrentButton
                    icon={<TrashIcon />}
                    onClick={() => handleDlete(cartpage.i)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex !justify-between  items-center">
        <CurrentButton
          className=" mt-[60px] mb-[40px]  !w-[218px] !h-[56px]  font-medium text-base leading-6 "
          title="Return To Shop"
        />
        <CurrentButton
          className=" mt-[60px] mb-[40px] ml-[40%]   !w-[195px] !h-[56px]  font-medium text-base leading-6 "
          title="Update Cart"
        />
      </div>
    </div>
  );
};
