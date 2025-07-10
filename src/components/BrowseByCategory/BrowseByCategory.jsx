import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Gamepad,
  Headphones,
  LaptopMinimal,
  Smartphone,
  Watch,
} from "lucide-react";
// import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { RedDivv } from "../../assets/icon/RedDiv";
import { CurrentButton } from "../CurrentButton/CurrentButton";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { SwiperSlide, Swiper } from "swiper/react";
import { useRef } from "react";

export const BrowseByCategory = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container">
      <div className=" gap-[60px] mb-5">
        <div className="  relative">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[24px]">
              <div className="flex items-center gap-2">
                <RedDivv />
                <p className="text-[#DB4444] font-semibold text-base leading-5">
                  Categories
                </p>
              </div>
              <h2 className=" font-semibold text-4xl leading-[48px] ">
                Browse By Category
              </h2>
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
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="!z-50  mt-10"
          >
            <SwiperSlide>
              <div className="flex gap-8">
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Smartphone />
                  <p className="font-normal text-base leading-6 ">Phones</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <LaptopMinimal />
                  <p className="font-normal text-base leading-6 ">Computers</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Watch />
                  <p className="font-normal text-base leading-6 ">SmartWatch</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Camera />
                  <p className="font-normal text-base leading-6 ">Camera</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Headphones />
                  <p className="font-normal text-base leading-6 ">HeadPhones</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Gamepad />
                  <p className="font-normal text-base leading-6 ">Gaming</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-8">
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Smartphone />
                  <p className="font-normal text-base leading-6 ">Phones</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <LaptopMinimal />
                  <p className="font-normal text-base leading-6 ">Computers</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Watch />
                  <p className="font-normal text-base leading-6 ">SmartWatch</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Camera />
                  <p className="font-normal text-base leading-6 ">Camera</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Headphones />
                  <p className="font-normal text-base leading-6 ">HeadPhones</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Gamepad />
                  <p className="font-normal text-base leading-6 ">Gaming</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-8">
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Smartphone />
                  <p className="font-normal text-base leading-6 ">Phones</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <LaptopMinimal />
                  <p className="font-normal text-base leading-6 ">Computers</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Watch />
                  <p className="font-normal text-base leading-6 ">SmartWatch</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Camera />
                  <p className="font-normal text-base leading-6 ">Camera</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Headphones />
                  <p className="font-normal text-base leading-6 ">HeadPhones</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Gamepad />
                  <p className="font-normal text-base leading-6 ">Gaming</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-8">
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Smartphone />
                  <p className="font-normal text-base leading-6 ">Phones</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <LaptopMinimal />
                  <p className="font-normal text-base leading-6 ">Computers</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Watch />
                  <p className="font-normal text-base leading-6 ">SmartWatch</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Camera />
                  <p className="font-normal text-base leading-6 ">Camera</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Headphones />
                  <p className="font-normal text-base leading-6 ">HeadPhones</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Gamepad />
                  <p className="font-normal text-base leading-6 ">Gaming</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-8">
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Smartphone />
                  <p className="font-normal text-base leading-6 ">Phones</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <LaptopMinimal />
                  <p className="font-normal text-base leading-6 ">Computers</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Watch />
                  <p className="font-normal text-base leading-6 ">SmartWatch</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Camera />
                  <p className="font-normal text-base leading-6 ">Camera</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Headphones />
                  <p className="font-normal text-base leading-6 ">HeadPhones</p>
                </div>
                <div className="flex flex-col items-center w-[175px] h-[150px] border-gray-500 border-2 gap-4 hover:bg-[#DB4444] rounded-[4px] hover:text-white  justify-center">
                  <Gamepad />
                  <p className="font-normal text-base leading-6 ">Gaming</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
