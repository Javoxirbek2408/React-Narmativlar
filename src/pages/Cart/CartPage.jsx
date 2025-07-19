import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";
import { TrashIcon } from "lucide-react";
import { Form } from "antd";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartpage") || "[]");
    setCartItems(storedCart);

    const initialQuantities = {};
    storedCart.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, []);

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cartpage", JSON.stringify(updatedCart));
    setCartItems(updatedCart);

    const updatedQuantities = { ...quantities };
    delete updatedQuantities[id];
    setQuantities(updatedQuantities);
  };

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value);
    if (quantity > 0) {
      setQuantities((prev) => ({ ...prev, [id]: quantity }));
    }
  };

  const handleUpdateCart = () => {
    localStorage.setItem("cartpage", JSON.stringify(cartItems));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const qty = quantities[item.id] || 1;
      return total + item.oldPrice * qty;
    }, 0);
  };

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === "SALE10") {
      setDiscount(0.1);
      setError("");
    } else if (code === "SALE20") {
      setDiscount(0.2);
      setError("");
    } else {
      setDiscount(0);
      setError("Invalid coupon code!");
    }
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - subtotal * discount;
  };

  return (
    <div className="container !mb-[140px]">
      {/* Breadcrumbs */}
      <div className="flex gap-2 !font-normal !text-sm leading-[21px]">
        <NavLink to="/">Home</NavLink>/<NavLink to="/cartpage">Cart</NavLink>
      </div>

      {/* Cart Items */}
      <div>
        {cartItems?.map((item) => (
          <div
            key={item.id}
            className="p-4 flex justify-between mt-[80px] mb-6 items-center shadow-md"
          >
            <div className="flex gap-3 items-center">
              <img
                className="w-[54px] object-cover"
                src={item.img}
                alt={item.title}
              />
              <h2 className="font-medium text-base">{item.title}</h2>
            </div>

            <h1>${item.oldPrice}</h1>

            <input
              type="number"
              min="1"
              value={quantities[item.id] || 1}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              className="w-[72px] h-[44px] pl-4 rounded border-[1.5px]"
            />

            <h1>
              ${(item.oldPrice * (quantities[item.id] || 1)).toFixed(2)}
            </h1>

            <CurrentButton
              icon={<TrashIcon />}
              onClick={() => handleDelete(item.id)}
            />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <CurrentButton
          className="mt-[60px] mb-[40px] w-[218px] h-[56px] font-medium text-base leading-6"
          title="Return To Shop"
          onClick={() => navigate("/")}
        />
        <CurrentButton
          className="mt-[60px] mb-[40px] ml-[40%] w-[195px] h-[56px] font-medium text-base leading-6"
          title="Update Cart"
          onClick={handleUpdateCart}
        />
      </div>

      {/* Coupon & Total */}
      <div className="flex justify-between">
        <div>
          <Form className="flex items-center gap-4">
            <Form.Item>
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-[300px] h-[56px] p-6 border-gray-500 border-2 rounded-md"
                placeholder="Coupon Code"
                type="text"
              />
            </Form.Item>
            <CurrentButton
              type="button"
              onClick={handleApplyCoupon}
              className="!w-[210px] !h-[56px] !mb-6 !text-white !bg-[#DB4444]"
              title="Apply Coupon"
            />
          </Form>
          {error && (
            <p className="text-red-500 mt-[-10px] mb-4 font-medium">{error}</p>
          )}
        </div>

        <div className="w-[470px] h-auto mt-[200px] border-2 pt-8 pb-6">
          <h2 className="font-medium text-xl leading-7 pl-6">Cart Total</h2>

          <div className="flex flex-col">
            <div className="flex justify-between pt-6 px-6 border-b-2 w-[422px] mx-auto">
              <p>Subtotal:</p>
              <p>${calculateSubtotal().toFixed(2)}</p>
            </div>

            <div className="flex justify-between pt-6 px-6 border-b-2 w-[422px] mx-auto">
              <p>Shipping:</p>
              <p>Free</p>
            </div>

            {discount > 0 && (
              <div className="flex justify-between pt-6 px-6 border-b-2 w-[422px] mx-auto">
                <p>Discount:</p>
                <p>
                  -${(calculateSubtotal() * discount).toFixed(2)} (
                  {discount * 100}%)
                </p>
              </div>
            )}

            <div className="flex justify-between pt-6 px-6 border-b-2 w-[422px] mx-auto">
              <p>Total:</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
          </div>

          <Link to="/checkout">
            <CurrentButton
              type="submit"
              className="!w-[260px] !mt-4 !ml-[100px] !h-[56px] mb-6 !text-white !bg-[#DB4444]"
              title="Proceed to checkout"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
