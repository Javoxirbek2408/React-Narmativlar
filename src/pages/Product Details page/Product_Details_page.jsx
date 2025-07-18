import { Slash } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sowpl1 from "../../assets/img/shopPl1.png";
import sowpl2 from "../../assets/img/shopPl2.png";
import sowpl3 from "../../assets/img/shopPl3.png";
import sowpl4 from "../../assets/img/shopPl4.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Minus, Plus, Heart } from "lucide-react";
import "./product.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Button, Card, Rate } from "antd";
import { IsusiIcon } from "../../assets/icon/Isusi";
import { RestartIcon } from "../../assets/icon/Restart";
import { ProductCart } from "../../components/ProductCart/ProductCarts";
import { RedDivv } from "../../assets/icon/RedDiv";
import { products } from "../../data/data";
export const Product_Details_page = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="container !mt-[80px] !mb-[140px]">
      <ul className="flex gap-2 ">
        <li>
          <NavLink
            to={"/account"}
            className={" font-normal text-sm leading-[21px]"}
          >
            Account
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />
        <li>
          <NavLink
            to={"/"}
            className={" activLink font-normal text-sm leading-[21px]"}
          >
            Gaming{" "}
          </NavLink>
        </li>
        <Slash className="w-[13px] text-gray-500" />{" "}
        <li>
          <NavLink className={" activLink font-normal text-sm leading-[21px]"}>
            Havic HV G-92 Gamepad
          </NavLink>
        </li>
      </ul>
      <div className="flex !mt-[80px] justify-between items-center">
        <div className="!flex swipShp">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper  !w-[300px]  !flex !flex-col  !h-[300px]"
          >
            <div className="!flex !flex-col  !gap-2">
              <SwiperSlide className="!!w-[70px] !h-[38px]">
                <img src={sowpl1} />
              </SwiperSlide>
              <br />
              <SwiperSlide>
                <img src={sowpl2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sowpl3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sowpl4} />
              </SwiperSlide>
            </div>
          </Swiper>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            // navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper3  w-[300px]  !h-[300px]"
          >
            <SwiperSlide>
              <img className="!w-[700px]" src={sowpl1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="!w-[700px]" src={sowpl2} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="!w-[700px]" src={sowpl3} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="!w-[700px]" src={sowpl4} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <Card className="max-w-sm mx-auto p-4 space-y-4">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Havic HV G-92 Gamepad</h2>

              <div className="flex items-center space-x-2">
                <Rate disabled defaultValue={4} />
                <span className="text-gray-500 ml-4 text-sm">
                  (150 Reviews)
                </span>
                <span className="text-green-500 text-sm">In Stock</span>
              </div>

              <p className="font-normal text-2xl leading-6 tracking-[3%] mb-6">
                $192.00
              </p>

              <p className="text-sm text-gray-700">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal. Pressure sensitive.
              </p>

              <div className="flex gap-4">
                <p className="font-semibold mb-1">Colours:</p>
                <div className="flex space-x-2">
                  <span className="w-5 h-5 rounded-full bg-gray-300  border-2 border-black"></span>
                  <span className="w-5 h-5 rounded-full bg-red-400 border-2 border-black"></span>
                </div>
              </div>
              <hr />
              <div className="flex gap-4 items-center">
                <p className="font-semibold mb-1">Size:</p>
                <div className="flex space-x-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <Button
                      key={size}
                      className={`px-3 py-1 border rounded ${
                        size === "M" ? "!bg-red-500 !text-white" : "!bg-white"
                      }`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="border-1 flex items-center gap-2">
                  {" "}
                  <Button
                    className="!rounded-none"
                    variant="outline"
                    size="icon"
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="px-4">2</span>
                  <Button className="!rounded-none !bg-red-600" size="icon">
                    <Plus color="white" size={16} />
                  </Button>
                </div>
                <Button className="!bg-red-500 !text-white ml-2">
                  Buy Now
                </Button>
                <Button variant="outline" size="icon">
                  <Heart size={16} />
                </Button>
              </div>

              <div className="border-2 !mt-[40px] !p-4 space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <IsusiIcon />
                  <div>
                    <p className="font-semibold">Free Delivery</p>
                    <p className="text-gray-600">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <hr className="!w-[300px] !pr-1" />
                <div className="flex items-start space-x-2">
                  <RestartIcon />
                  <div>
                    <p className="font-semibold">Return Delivery</p>
                    <p className="text-gray-600">
                      Free 30 Days Delivery Returns.{" "}
                      <span className="underline">Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="mt-[140px]">
        <div>
          <div>
            <span className="flex items-center !gap-4">
              <RedDivv />
              <h4 className="!text-[#DB4444] font-normal !text-xl leading-[26px] tracking-[0%] text-center">
                Related Item
              </h4>
            </span>
          </div>
        </div>
        <div className="flex mt-[60px] gap-8">
          {products?.slice(0, 4).map((item) => {
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
  );
};
