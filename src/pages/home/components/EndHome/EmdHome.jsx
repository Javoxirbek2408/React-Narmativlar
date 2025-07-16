import { useEffect, useState } from "react";
import { FreeEnd } from "../../../../assets/icon/FreeEnd";
import { CurrentButton } from "../../../../components/CurrentButton/CurrentButton";
import { ArrowUp, Eye } from "lucide-react";
import { Input } from "antd";
import { CustomerService } from "../../../../assets/icon/CustomerService";
import { MoneyBack } from "../../../../assets/icon/MoneyBack";

export const EmdHome = () => {
  const [topUp, setTopUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setTopUp(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="  !items-center !justify-center !mt-[100px] !mb-[40px]">
      <div className="container !flex !gap-[88px] !items-center !justify-center">
        <div className="flex flex-col items-center">
          <FreeEnd />
          <h3 className=" font-semibold text-xl mt-6 leading-7">
            FREE AND FAST DELIVERY
          </h3>
          <p className="font-normal text-sm leading-[21px] mt-2 tracking-[0%] text-center">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex flex-col items-center">
          <CustomerService />
          <h3 className=" font-semibold text-xl mt-6 leading-7">
            24/7 CUSTOMER SERVICE
          </h3>
          <p className="font-normal text-sm leading-[21px] mt-2 tracking-[0%] text-center">
            Friendly 24/7 customer support
          </p>
        </div>
        <div className="flex flex-col items-center">
          <MoneyBack />
          <h3 className=" font-semibold text-xl mt-6 leading-7">
            MONEY BACK GUARANTEE{" "}
          </h3>
          <p className="font-normal text-sm leading-[21px] mt-2 tracking-[0%] text-center">
            We reurn money within 30 days{" "}
          </p>
        </div>
      </div>
      {topUp && (
        <CurrentButton
          onClick={scrollToTop}
          className={`!bg-[#F5F5F5] !p-2 !w-[46px] !h-[46px]  !left-[95%] !bottom-10 !fixed !rounded-[50%] custom-prev `}
          icon={<ArrowUp />}
        />
      )}
    </div>
  );
};
