import { Image, Rate } from "antd";
import { CurrentButton } from "../CurrentButton/CurrentButton";
import { Eye, Heart } from "lucide-react";

export const ProductCart = ({
  className,
  discount,
  title,
  neWPrice,
  oldPrice,
  img,
  reyting,
  store,
}) => {
  return (
    <div className={className}>
      <div className="flex  relative">
        {discount ? (
          <span className="!left-2 absolute bg-[#DB4444] text-white rounded-md !w-14 h-[26px] pl-3 pt-1 font-normal text-xs leading-[18px] ">
            {discount}
          </span>
        ) : (
          <span className="!left-2 absolute  text-white rounded-md !w-14 h-[26px] pl-3 pt-1 font-normal text-xs leading-[18px] ">
            {discount}
          </span>
        )}

        <Image className="!w-[270px]  object-cover !h-[200px] p-6" src={img} />
        <div className="flex flex-col  !gap-2 absolute top-2  !left-[230px]">
          <CurrentButton
            className="!rounded-full  "
            icon={<Heart className="pt-1" />}
          />
          <CurrentButton
            className="!rounded-full  "
            icon={<Eye className="pt-1" />}
          />
        </div>
      </div>
      <CurrentButton
        className="w-full  !bg-black !text-white !border-one  !font-medium !text-base l!eading-6"
        title="add to cart"
      />
      <h1 className="f!ont-medium !text-base !leading-6  !  mt-2 ">{title}</h1>
      <div className="flex !mt-2 gap-2">
        <span className="font-medium text-base leading-6 text-[#DB4444]">
          {neWPrice}
        </span>
        <span className="font-medium text-base leading-6 tracking-[0%] line-through !text-gray-400">
          {oldPrice}
        </span>
      </div>
      <div className="flex gap-3 mt-2">
        <Rate disabled defaultValue={reyting} />{" "}
        <span className="font-semibold text-sm leading-[21px] text-gray-400">
          {" "}
          {store}
        </span>
      </div>
    </div>
  );
};
