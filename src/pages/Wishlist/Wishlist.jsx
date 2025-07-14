import { useEffect, useState } from "react";
import { ProductCart } from "../../components/ProductCart/ProductCarts";
import { WishlistCart } from "../../components/WishlistCart/WishlistCart";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";
import { RedDivv } from "../../assets/icon/RedDiv";
import { products } from "../../data/data";

export const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWish = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWish);
  }, []);

  // const handleDlete = (titleDlete) => {
  //   const updateWish = wishlist.filter((item) => item.title !== titleDlete);
  //   localStorage.setItem("wishlist", JSON.stringify(updateWish));
  //   setWishlist(updateWish);
  // };
  return (
    <div className="container">
      <div>
        <div>
          <div className="flex justify-between items-center">
            <p className=" !font-normal !text-xl !leading-[26px]  !text-center">
              Wishlist {wishlist.length}
            </p>{" "}
            <CurrentButton
              className=" mt-[60px] mb-[40px] ml-[40%]   !w-[256px] !h-[56px]  font-medium text-base leading-6 "
              title="Move All To Bag "
            />
          </div>
          <div className=" grid grid-cols-4 !gap-[300px] !p-12">
            {wishlist.map((item) => {
              return (
                <WishlistCart
                  className="!w-[270px] !h-[350px] flex-shrink-0 "
                  key={item.id}
                  discount={item.discaunt}
                  img={item.img}
                  title={item.title}
                  isNew={item.isNew}
                  neWPrice={item.neWPrice}
                  oldPrice={item.oldPrice}
                  reyting={item.reyting}
                  store={item.store}
                  colorOne={item.colorOne}
                  colorTwo={item.colorTwo}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <span className="flex items-center !gap-4">
                <RedDivv />
                <h4 className=" font-normal !text-xl leading-[26px] tracking-[0%] text-center">
                  Just For You
                </h4>
              </span>
            </div>
            <CurrentButton
              className=" mt-[60px] mb-[40px] ml-[40%]   !w-[256px] !h-[56px]  font-medium text-base leading-6 "
              title="See All "
            />
          </div>
          <div className="flex gap-8">
            {products?.slice(5,9).map((item) => {
              return (
                <ProductCart
                  className="!w-[270px] !h-[350px] flex-shrink-0 "
                  key={item.id}
                  discount={item.discaunt}
                  img={item.image}
                  title={item.title}
                  isNew={item.isNew}
                  neWPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  reyting={item.reyting}
                  store={item.store}
                  colorOne={item.colorOne}
                  colorTwo={item.colorTwo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
