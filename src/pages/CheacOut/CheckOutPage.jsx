import { Slash } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";
import { Radio } from "antd";
import { PlastekCart } from "../../assets/icon/PlastekCart";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

// Kuponlar ro‘yxati
const validCoupons = {
  WELCOME10: 0.10,
  SALE20: 0.20,
};

export const CheckOutPage = () => {
  const [cartpage, setCartpr] = useState([]);
  const [value, setValue] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  // Cartni olish
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartpage") || "[]");
    setCartpr(cart);
  }, []);

  // To‘lov usuli
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // Kupon qo‘llash
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (validCoupons[code]) {
      setDiscountPercent(validCoupons[code]);
    } else {
      setDiscountPercent(0);
      alert("Invalid coupon code");
    }
  };

  // Narx hisoblash
  const calculateSubtotal = () => {
    return cartpage.reduce((total, item) => {
      return total + parseFloat(item.oldPrice || 0);
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - subtotal * discountPercent;
  };

  return (
    <div className="container !mt-[80px] !mb-[140px]">
      {/* Breadcrumb */}
      <ul className="flex gap-2">
        <li>
          <NavLink to="/account" className="font-normal text-sm leading-[21px]">
            Account
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />
        <li>
          <NavLink to="/" className="activLink font-normal text-sm leading-[21px]">
            My Account
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />
        <li>
          <NavLink className="activLink font-normal text-sm leading-[21px]">
            Product
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />
        <li>
          <NavLink className="activLink font-normal text-sm leading-[21px]">
            View Cart
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />
        <li>
          <NavLink className="activLink font-normal text-sm leading-[21px]">
            CheckOut
          </NavLink>
        </li>
      </ul>

      <div className="!mt-[80px]">
        <h2 className="font-medium text-4xl leading-[30px] tracking-[4%]">
          Billing Details
        </h2>
        <div className="flex justify-between">
          {/* Chap tarafdagi forma */}
          <form className="mt-[48px] flex flex-col !gap-8">
            {[
              "First Name",
              "Company Name",
              "Street Address*",
              "Apartment, floor, etc. (optional)",
              "Town/City*",
              "Phone Number*",
              "Email Address*",
            ].map((label, idx) => (
              <div className="flex flex-col gap-2" key={idx}>
                <label className="font-normal text-base leading-6 text-gr">
                  {label}
                </label>
                <input
                  type="text"
                  className="bg-[#F5F5F5] w-[470px] h-[50px] pl-4"
                />
              </div>
            ))}
            <div className="flex items-center gap-5 ml-4">
              <input type="checkbox" />
              <p>Save this information for faster check-out next time</p>
            </div>
          </form>

          {/* O'ng tarafdagi cart + to‘lov */}
          <div>
            <div className="!gap-8 flex flex-col">
              {/* Mahsulotlar */}
              {cartpage?.map((item) => (
                <div key={item.id}>
                  <div className="p-4 flex justify-between items-center shadow-md gap-[210px]">
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-[54px] object-cover"
                        src={item.img}
                        alt={item.title}
                      />
                      <p>{item.title}</p>
                    </div>
                    <h1>${item.oldPrice}</h1>
                  </div>
                </div>
              ))}

              {/* Narxlar hisobi */}
              <div className="w-[470px] mt-[30px] pt-8">
                <div className="flex flex-col">
                  <div className="flex justify-between pt-6 px-2 border-b-2 w-[472px]">
                    <p>Subtotal:</p>
                    <p>${calculateSubtotal().toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between pt-6 px-2 border-b-2 w-[472px]">
                    <p>Shipping:</p>
                    <p>Free</p>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex justify-between pt-6 px-2 border-b-2 w-[472px]">
                      <p>Discount ({(discountPercent * 100).toFixed(0)}%):</p>
                      <p>− ${(calculateSubtotal() * discountPercent).toFixed(2)}</p>
                    </div>
                  )}
                  <div className="flex justify-between pt-6 px-2 border-b-2 w-[472px]">
                    <p>Total:</p>
                    <p>${calculateTotal().toFixed(2)}</p>
                  </div>
                </div>

                {/* To‘lov turi */}
                <div className="flex justify-between mt-8">
                  <Radio.Group
                    style={style}
                    onChange={onChange}
                    value={value}
                    options={[
                      { value: 1, label: "Bank" },
                      { value: 2, label: "Cash on delivery" },
                    ]}
                  />
                  <PlastekCart className="flex items-center gap-2 pb-6" />
                </div>

                {/* Kupon forma */}
                <form
                  className="flex !mt-8 items-center gap-4"
                  onSubmit={handleApplyCoupon}
                >
                  <input
                    className="w-[300px] h-[56px] p-6 border-gray-500 border-2 rounded-md"
                    placeholder="Coupon Code"
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <CurrentButton
                    type="submit"
                    className="!w-[210px] !h-[56px] mb-6 !text-white !bg-[#DB4444]"
                    title="Apply Coupon"
                  />
                </form>

                {/* Buyurtmani yakunlash */}
                <Link to="/checkout">
                  <CurrentButton
                    type="submit"
                    className="w-[190px] mt-4 !h-[56px] mb-6 !text-white !bg-[#DB4444]"
                    title="Place Order"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
