import { ArrowLeft, ArrowRight } from "lucide-react";
import { RedDivv } from "../../../../assets/icon/RedDiv";
import { CurrentButton } from "../../../../components/CurrentButton/CurrentButton";
import { useTimer } from "react-timer-hook";
import { useRef } from "react";
import { TimeDots } from "../../../../assets/icon/TimeDot";

export const FlashSales = () => {
  const expiryTimeRef = useRef(() => {
    const time = new Date();
    time.setDate(time.getDate() + 3);
    return time;
  });

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: expiryTimeRef.current(),
  });

  return (
    <div className="container ">
      <div className="mt-[140px] mb-[40px] flex justify-between ">
        <div className="flex gap-[87px] items-center">
          <div>
            <span className="flex items-center gap-2">
              <RedDivv />
              <h4 className="font-semibold text-base text-[#DB4444] leading-5">
                Today’s
              </h4>
            </span>
            <h3 className="mt-6 font-semibold text-4xl leading-[48px] tracking-[4%]">
              Flash Sales
            </h3>
          </div>

          
          <div className="mt-10 flex gap-6 items-center ">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs leading-[18px]">Day</p>
              <span className=" font-bold text-[32px] leading-[30px] tracking-[4%]">
                {days}
              </span>
            </div>
            <TimeDots />
            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs leading-[18px]">Hour</p>
              <span className=" font-bold text-[32px] leading-[30px] tracking-[4%]">
                {hours}
              </span>
            </div>
            <TimeDots />

            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs leading-[18px]">Minutes</p>
              <span className=" font-bold text-[32px] leading-[30px] tracking-[4%]">
                {minutes}
              </span>
            </div>
            <TimeDots />

            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs leading-[18px]">Seconds</p>
              <span className=" font-bold text-[32px] leading-[30px] tracking-[4%]">
                {seconds}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-18">
          <CurrentButton
            className="!bg-[#F5F5F5] !p-2 !w-[46px] !h-[46px] !rounded-[50%]"
            icon={<ArrowLeft />}
          />
          <CurrentButton
            className="!bg-[#F5F5F5] !p-2  !w-[46px] !h-[46px] !rounded-[50%]"
            icon={<ArrowRight />}
          />
        </div>
      </div>
    </div>
  );
};
