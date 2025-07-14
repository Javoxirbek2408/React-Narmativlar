import { Image } from "antd";
import { RedDivv } from "../../../../assets/icon/RedDiv";
import pl5 from "../../../../assets/img/pl5.png";
import women from "../../../../assets/img/attractive_woman.png";
import amazon_echo from "../../../../assets/img/amazon_echo.png";
import perfume from "../../../../assets/img/perfume.png";
import { Link } from "react-router-dom";

export const NewArrival = () => {
  return (
    <div className="container !mt-[100px] !mb-10">
      <div className="flex gap-[87px] items-center">
        <div>
          <span className="flex items-center gap-2">
            <RedDivv />
            <h4 className="font-semibold text-base text-[#DB4444] leading-5">
              Featured
            </h4>
          </span>
          <h3 className="mt-6 !font-semibold text-4xl leading-[48px] tracking-[4%]">
            New Arrival
          </h3>
        </div>
      </div>
      <div className=" mt-[60px] flex  gap-8">
        <div className="w-[570px] h-[600px] pt-16 pl-8 bg-black relative">
          <Image src={pl5} />
          <div className="absolute bottom-12">
            <h2 className="font-semibold text-2xl leading-6 tracking-[3%]!z-10 text-white ">
              PlayStation 5
            </h2>
            <p className="text-white ont-normal text-sm leading-[21px] !mt-4 mb-4">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <Link
              to="/"
              className=" font-medium text-base leading-6 text-white border-b-1 !mt-4"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div>
          <div className="w-[570px] h-[284px] pl-32 bg-black relative">
            <Image src={women} />
            <div className="absolute bottom-6 left-6">
              <h2 className="font-semibold text-2xl leading-6 tracking-[3%]!z-10 text-white ">
                Women’s Collections
              </h2>
              <p className="text-white ont-normal text-sm leading-[21px] !mt-4 mb-4">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <Link
                to="/"
                className=" font-medium text-base leading-6 text-white border-b-1 !mt-4"
              >
                Shop Now
              </Link>
            </div>
          </div>
         <div className="flex gap-8">
             <div className="w-[270px] h-[284px] !mt-8 !pt-10 pl-10 bg-[#1A1A1A] relative">
            <Image src={amazon_echo} />
            <div className="absolute bottom-4 left-6">
              <h2 className="font-semibold text-2xl leading-6 tracking-[3%] text-white ">
                Speakers
              </h2>
              <p className="text-white mt-2  mb-2 font-normal text-sm leading-[21px]">
                Amazon wireless speakers
              </p>
              <Link
                to="/"
                className=" font-medium text-base leading-6 text-white border-b-1 !mt-4"
              >
                Shop Now
              </Link>
            </div>
          </div>
           <div className="w-[270px] h-[284px] !mt-8 !pt-10 pl-10 bg-[#1A1A1A] relative">
            <Image src={perfume} />
            <div className="absolute bottom-4 left-6">
              <h2 className="font-semibold text-2xl leading-6 tracking-[3%] text-white ">
                Speakers
              </h2>
              <p className="text-white mt-2  mb-2 font-normal text-sm leading-[21px]">
                Amazon wireless speakers
              </p>
              <Link
                to="/"
                className=" font-medium text-base leading-6 text-white border-b-1 !mt-4"
              >
                Shop Now
              </Link>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};
