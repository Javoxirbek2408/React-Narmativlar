import { Slash, TrashIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../../data/data";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";
import { Form } from "antd";

export const CheckOutPage = () => {
  const [cartpage, setCartpr] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartpage") || "[]");

    setCartpr(cart);
  }, []);

  return (
    <div className="container !mt-[80px] !mb-[140px]">
      <ul className="flex gap-2 ">
        <li>
          <NavLink
            to={"/account"}
            className={" font-normal text-sm leading-[21px]"}
          >
            Account
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />
        <li>
          <NavLink
            to={"/"}
            className={" activLink font-normal text-sm leading-[21px]"}
          >
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
              <input type="checkbox" />{" "}
              <p>Save this information for faster check-out next time</p>
            </div>
          </form>
          <div>
            <div>
              <div className="!gap-8 flex flex-col">
                {products?.slice(1, 3).map((item) => {
                  return (
                    <div>
                      <div className="p-4 flex justify-between   items-center shadow-md gap-[210px]  ">
                        <div className="!flex !gap-3 items-center">
                          <img
                            className="w-[54px] !object-cover"
                            src={item.image}
                            alt=""
                          />
                          <p>{item.title}</p>
                        </div>
                        <h1>${item.oldPrice}</h1>
                      </div>
                    </div>
                  );
                })}

                <div className="! w-[470px] !h-[324px] mt-[30px]   pt-8 ">
                  <div className="flex flex-col justify-self-start">
                    <div className="!flex  gap-[350px] pt-6 !p-2  border-b-2 w-[472px]">
                      <p>Subtotal:</p>
                      <p>$1750</p>
                    </div>
                    <div className="!flex  gap-[360px] pt-6 pb-3  border-b-2 w-[472px]">
                      <p>Shipping:</p>
                      <p>Free</p>
                    </div>
                    <div className="!flex  gap-[380px] pt-6 pb-3  border-b-2 w-[472px]">
                      <p>Total:</p>
                      <p>$1750</p>
                    </div>
                  </div>

                  <Form className=" flex !mt-8 ju items-center gap-4">
                    <Form.Item htmlFor="submit">
                      <input
                        className="w-[300px] h-[56px] p-6 !border-gray-500 border-2 rounded-md"
                        placeholder="Coupon Code"
                        type="email"
                      />
                    </Form.Item>
                    <CurrentButton
                      type="submit"
                      className={
                        "!w-[210px] !h-[56px] mb-6 !text-white !bg-[#DB4444]"
                      }
                      title={"Apply Coupon"}
                    />
                  </Form>

                  <Link to={"/checkout"}>
                    <CurrentButton
                      type="submit"
                      className={
                        "w-[190px] mt-4 !h-[56px] mb-6 !text-white !bg-[#DB4444]"
                      }
                      title={"Place Order"}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
