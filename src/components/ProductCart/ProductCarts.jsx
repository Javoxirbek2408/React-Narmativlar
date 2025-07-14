import { Image, Rate } from "antd";
import { CurrentButton } from "../CurrentButton/CurrentButton";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

export const ProductCart = ({
  className,
  discount,
  title,
  newPrice,
  oldPrice,
  img,
  rating,
  store,
  isNew,
  colorOne,
  colorTwo,
}) => {
  const location = useLocation();

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const found = wishlist.some((item) => item.title === title);
      setIsInWishlist(found);
    } catch {
      setIsInWishlist(false);
    }
  }, [title]);

  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem("cartpage")) || [];
      const found = cart.some((item) => item.title === title);
      setIsInCart(found);
    } catch {
      setIsInCart(false);
    }
  }, [title]);

  const toggleWishlist = () => {
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const index = wishlist.findIndex((item) => item.title === title);

      if (index > -1) {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        toast.info("Mahsulot wishlistdan olib tashlandi!");
        setIsInWishlist(false);
      } else {
        const product = {
          title,
          newPrice,
          img,
          colorTwo,
        };
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        toast.success("Mahsulot wishlistga qo‘shildi!");
        setIsInWishlist(true);
      }
    } catch (error) {
      console.error("Wishlist error:", error);
    }
  };

  const toggleCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cartpage")) || [];
      const index = cart.findIndex((item) => item.title === product.title);

      if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem("cartpage", JSON.stringify(cart));
        toast.info("Cart pagedan olib tashlandi!");
        setIsInCart(false);
      } else {
        cart.push(product);
        localStorage.setItem("cartpage", JSON.stringify(cart));
        toast.success("Mahsulot Cart Pagega qo‘shildi!");
        setIsInCart(true);
      }
    } catch (error) {
      console.error("Cart error:", error);
    }
  };

  const productData = {
    className,
    discount,
    title,
    newPrice,
    oldPrice,
    img,
    rating,
    store,
    isNew,
    colorOne,
    colorTwo,
  };

  return (
    <div className={className}>
      <div className="flex relative">
        {discount && (
          <span className="absolute left-2 bg-[#aa0000] text-white rounded-md w-14 h-[26px] pl-3 pt-1 text-xs">
            -{discount}%
          </span>
        )}
        {isNew && (
          <span className="absolute top-6 left-2 bg-[#00ffa2] text-white rounded-md w-14 h-[26px] pl-3 pt-1 text-xs">
            {isNew}
          </span>
        )}

        <Image className="!w-[270px] !h-[200px] p-6" src={img} />
        <div className="flex flex-col gap-2 absolute top-2 left-[230px]">
          {location.pathname !== "/wishlist" && (
            <CurrentButton
              onClick={toggleWishlist}
              className="!rounded-full"
              icon={<Heart fill={isInWishlist ? "red" : "none"} />}
            />
          )}
          <CurrentButton
            className="!rounded-full transition bg-white text-black"
            icon={<Eye className="pt-1" />}
          />
        </div>
      </div>

      <CurrentButton
        className="w-full !bg-black !text-white border font-medium text-base"
        title={isInCart ? "In the Cart" : "Add to Cart"}
        icon={location.pathname !== "/" ? <ShoppingCart /> : null}
        onClick={() => toggleCart(productData)}
      />

      <h1 className="font-medium text-base mt-2">{title}</h1>
      <div className="flex mt-2 gap-2">
        <span className="font-medium text-base text-[#DB4444]">
          ${newPrice}
        </span>
        {oldPrice && (
          <span className="font-medium text-base line-through text-gray-400">
            ${oldPrice}
          </span>
        )}
      </div>

      <div className="flex gap-3 mt-2 items-center">
        <Rate disabled defaultValue={rating} />
        <span className="text-sm text-gray-400">({store})</span>
      </div>

      <div className="flex gap-2 mt-3 items-center">
        {colorOne && <img src={colorOne} alt="color1" />}
        {colorTwo && <img src={colorTwo} alt="color2" />}
      </div>
    </div>
  );
};
