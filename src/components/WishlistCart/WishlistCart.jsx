import { Image, Rate } from "antd";
import { CurrentButton } from "../CurrentButton/CurrentButton";
import { Eye, Heart, ShoppingCart, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const WishlistCart = ({
  className,
  discount,
  title,
  neWPrice,
  img,
  isNew,
}) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const found = wishlist.some((item) => item.title === title);
    setIsInWishlist(found);
  }, [title]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const index = wishlist.findIndex((item) => item.title === title);

    if (index > -1) {
      wishlist.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.info("Mahsulot wishlistdan olib tashlandi!");
      setIsInWishlist(false);
    } else {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success("Mahsulot wishlistga qo‘shildi!");
      setIsInWishlist(true);
    }
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
          <CurrentButton
            className="!rounded-full"
            onClick={toggleWishlist}
            icon={<Trash />}
          />
        </div>
      </div>

      <CurrentButton
        className="w-full !bg-black !text-white border font-medium text-base"
        icon={<ShoppingCart />}
        title="Add to Cart"
      />

      <h1 className="font-medium text-base mt-2">{title}</h1>
      <div className="flex mt-2 gap-2">
        <span className="font-medium text-base text-[#DB4444]">
          ${String(neWPrice)}
        </span>
      </div>
    </div>
  );
};
