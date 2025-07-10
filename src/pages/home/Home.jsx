import { FlashSales } from "./components/Flasshsales";
import { CardHome } from "./components/HomeCard";
import { products } from "../../data/data";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";
import { BestProduct } from "./components/BestProducts/BestProduct";
import { BrowseByCategory } from "../../components/BrowseByCategory";
import { JblBanner } from "./components/JBLbanner/JblBanner";
import { ExploreOur } from "./components/ExploreOur/ExploreOur";

const Home = () => {
  console.log(products[15].discaunt);

  return (
    <div className="flex flex-col gap-5">
      <CardHome />
      <FlashSales />
      <div className="flex flex-col container justify-center mb-4">
        <CurrentButton
          className="!w-[234px]  items-center ml-[450px]   !h-[56px] !bg-[#DB4444] !font-medium !text-base !leading-6 !text-white"
          title="View All Products"
        />
      </div>
      <BrowseByCategory />
      <hr className="container  border-gray-400 !mt-12" />
      <BestProduct />
      <JblBanner />
      <ExploreOur />
    </div>
  );
};

export default Home;
