import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCart } from "../../../../components/ProductCart/ProductCarts";
import { products } from "../../../../data/data";
import { RedDivv } from "../../../../assets/icon/RedDiv";
import { CurrentButton } from "../../../../components/CurrentButton/CurrentButton";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const ExploreOur = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container   ">
      <div className="mt-[140px] mb-[40px] flex justify-between ">
        <div className="flex gap-[87px] items-center">
          <div>
            <span className="flex items-center gap-2">
              <RedDivv />
              <h4 className="font-semibold text-base text-[#DB4444] leading-5">
                Our Products
              </h4>
            </span>
            <h3 className="mt-6 font-semibold text-4xl leading-[48px] tracking-[4%]">
              Explore Our Products
            </h3>
          </div>
        </div>
        <div className="flex gap-3 mt-18">
          <CurrentButton
            className="!bg-[#F5F5F5] !p-2 !w-[46px] !h-[46px] !rounded-[50%] custom-prev"
            icon={<ArrowLeft />}
            ref={prevRef}
          />
          <CurrentButton
            className="!bg-[#F5F5F5] !p-2  !w-[46px] !h-[46px] !rounded-[50%] custom-next"
            icon={<ArrowRight />}
            ref={nextRef}
          />
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Pagination, Navigation]}
        className="!z-50  mt-10"
      >
        <SwiperSlide>
          <div className="product_scroll  grid grid-cols-4 !gap-[30px]  mb-4">
            {products?.slice(8, 16).map((item) => {
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="product_scroll  grid grid-cols-4 !gap-[30px]  mb-4">
            {products?.slice(8, 16).map((item) => {
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="product_scroll  grid grid-cols-4 !gap-[30px]  mb-4">
            {products?.slice(8, 16).map((item) => {
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
        </SwiperSlide>
      </Swiper>
      <CurrentButton
        className="!text-white mt-[60px] mb-[40px] ml-[40%]  !bg-[#DB4444] !w-[256px] !h-[56px]   font-medium text-base leading-6 "
        title="View All Products "
      />
    </div>
  );
};
