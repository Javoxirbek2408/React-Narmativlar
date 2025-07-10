import { FlashSales } from "./components/Flasshsales";
import { CardHome } from "./components/HomeCard";
import { products } from "../../data/data";
import { ProductCart } from "../../components/ProductCart/ProductCarts";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";
import { BestProduct } from "./components/BestProducts/BestProduct";
import { BrowseByCategory } from "../../components/BrowseByCategory";
import { JblBanner } from "./components/JBLbanner/JblBanner";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <CardHome />
      <FlashSales />
      <div className="flex flex-col container justify-center mb-4">
        <div className="product_scroll   flex gap-6 h-[400px] overflow-hidden mb-4">
          {products?.slice(0, 7).map((item) => {
            return (
              <ProductCart
                className="!w-[270px] !h-[350px] flex-shrink-0 "
                key={item.id}
                discount={item.discaunt}
                img={item.image}
                title={item.title}
                neWPrice={item.newPrice}
                oldPrice={item.oldPrice}
                reyting={item.reyting}
                store={item.store}
              />
            );
          })}
        </div>
        <CurrentButton
          className="!w-[234px]  items-center ml-[450px]   !h-[56px] !bg-[#DB4444] !font-medium !text-base !leading-6 !text-white"
          title="View All Products"
        />
      </div>
      <BrowseByCategory />
      <hr className="container  border-gray-400 !mt-12" />
      <BestProduct />
      <JblBanner />
    </div>
  );
};

export default Home;
