import { RedDivv } from "../../../../assets/icon/RedDiv";
import { CurrentButton } from "../../../../components/CurrentButton/CurrentButton";
import { ProductCart } from "../../../../components/ProductCart/ProductCarts";
import { products } from "../../../../data/data";

export const BestProduct = () => {
  return (
    <div className="container !mt-[70px]">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-2">
            <RedDivv />
            <p className="text-[#DB4444] font-semibold text-base leading-5">
              This Month
            </p>
          </div>
          <h2 className=" font-semibold text-4xl leading-[48px] ">
            Best Selling Products
          </h2>
        </div>
        <div className="flex gap-3 mt-16">
          <CurrentButton
            className="!w-[160px] !h-[56px] !text-white !bg-[#DB4444] !font-medium t!ext-base !leading-6 "
            title="View All"
          />
        </div>
      </div>

      <div className="flex mt-[60px]  gap-[30px]">
        {products?.slice(4, 8).map((item) => {
          return (
            <ProductCart
              className="!w-[270px] !h-[350px] flex-shrink-0 "
              key={item.id}
              discount={item?.discaunt}
              img={item.image}
              title={item.title}
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
  );
};
