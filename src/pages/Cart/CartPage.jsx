import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";
import { TrashIcon } from "lucide-react";
import { Form } from "antd";

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
    <div className="container !mb-[140px]">
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
      <div className="flex justify-between">
        <Form className=" flex ju items-center gap-4">
          <Form.Item htmlFor="submit">
            <input
              className="w-[300px] h-[56px] p-6 !border-gray-500 border-2 rounded-md"
              placeholder="Coupon Code"
              type="email"
            />
          </Form.Item>
          <CurrentButton
            type="submit"
            className={"w-[210px] !h-[56px] mb-6 !text-white !bg-[#DB4444]"}
            title={"Apply Coupon"}
          />
        </Form>
        <div className="w-[470px] !h-[324px] mt-[200px]  border-2 pt-8 ">
          <h2 className="font-medium text-xl leading-7  pl-6">Cart Total</h2>
          <div className="flex flex-col justify-self-start">
            <div className="!flex  gap-[300px] pt-6 p-2  border-b-2 w-[422px] !ml-6">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div className="!flex  gap-[300px] pt-6 p-2  border-b-2 w-[422px] !ml-6">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="!flex  gap-[330px] pt-6 p-2  border-b-2 w-[422px] !ml-6">
              <p>Total:</p>
              <p>$1750</p>
            </div>
          </div>
          <Link to={"/checkout"}>
            <CurrentButton
              type="submit"
              className={
                "w-[260px] mt-4 ml-28 !h-[56px] mb-6 !text-white !bg-[#DB4444]"
              }
              title={"Procees to checkout"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
