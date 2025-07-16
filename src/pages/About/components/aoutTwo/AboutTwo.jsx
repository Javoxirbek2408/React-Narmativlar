import React from "react";
import { AbouIcontOne } from "../../../../assets/icon/abouIcontOne";
import { AboutIconThere } from "../../../../assets/icon/AboutIconThere";
import { AboutIconFour } from "../../../../assets/icon/AboutIconFour";
import { AboutIconTwo } from "../../../../assets/icon/AboutIconTwo";

export const AboutTwo = () => {
  return (
    <div className="container !mt-[140px] flex gap-[30px]">
      <div className="flex flex-col items-center gap-6 !w-[270px] !h-[230px] border-gray-600 p-[30px] border-2  hover:text-white hover:bg-[#DB4444]">
        <AbouIcontOne />
        <div className=" !h-[23px] flex flex-col items-center gap-3 ">
          <h3 className="font-bold text-[32px] leading-[30px] tracking-[4%">
            10.5k{" "}
          </h3>
          <span className="font-normal text-base leading-6 tracking-[0%] text-center">
            Sallers active our site
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 !w-[270px] !h-[230px] border-gray-600 p-[30px] border-2  hover:text-white hover:bg-[#DB4444]">
        <AboutIconTwo />
        <div className=" !h-[23px] flex flex-col items-center gap-3 ">
          <h3 className="font-bold text-[32px] leading-[30px] tracking-[4%">
            33k
          </h3>
          <span className="font-normal text-base leading-6 tracking-[0%] text-center">
            Mopnthly Produduct Sale
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 !w-[270px] !h-[230px] border-gray-600 p-[30px] border-2  hover:text-white hover:bg-[#DB4444]">
        <AboutIconThere />
        <div className=" !h-[23px] flex flex-col items-center gap-3 ">
          <h3 className="font-bold text-[32px] leading-[30px] tracking-[4%">
            45.5k
          </h3>
          <span className="font-normal text-base leading-6 tracking-[0%] text-center">
            Customer active in our site
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 !w-[270px] !h-[230px] border-gray-600 p-[30px] border-2  hover:text-white hover:bg-[#DB4444]">
        <AboutIconFour />
        <div className=" !h-[23px] flex flex-col items-center gap-3 ">
          <h3 className="font-bold text-[32px] leading-[30px] tracking-[4%">
            25k
          </h3>
          <span className="font-normal text-base leading-6 tracking-[0%] text-center">
            Anual gross sale in our site
          </span>
        </div>
      </div>
    </div>
  );
};
