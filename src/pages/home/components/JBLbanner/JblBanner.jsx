import { useRef } from "react";
import { useTimer } from "react-timer-hook";
import { CurrentButton } from "../../../../components/CurrentButton/CurrentButton";
import jbl from "../../../../assets/img/jbl.png";
import { Image } from "antd";
export const JblBanner = () => {
  const expiryTimeRef = useRef(() => {
    const time = new Date();
    time.setDate(time.getDate() + 6);
    return time;
  });

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: expiryTimeRef.current(),
  });
  return (
    <div className="container bg-black h-[500px] !mb-8 flex justify-between  ">
      <div className="flex flex-col !p-16  ">
        <span className=" font-semibold text-base leading-5 text-[#47B486]">
          Categories
        </span>
        <h1 className="mt-8 font-semibold text-5xl leading-[60px] tracking-[4%] text-white">
          Enhance Your Music Experience
        </h1>
        <div className="mt-8 flex gap-6 items-center  ">
          <div className="flex flex-col items-center !p-2  rounded-full !h-[62px] gap-1 !w-[62px] !bg-white">
            <span className="font-semibold text-base leading-5">{hours}</span>
            <p className="font-normal text-[11px] leading-[18px]">Hour</p>
          </div>
          <div className="flex flex-col items-center !p-2  rounded-full !h-[62px] gap-1 !w-[62px] !bg-white">
            <span className="font-semibold text-base leading-5">{days}</span>
            <p className="font-normal text-[11px] leading-[18px]">Days</p>
          </div>
          <div className="flex flex-col items-center !p-2  rounded-full !h-[62px] gap-1 !w-[62px] !bg-white">
            <span className="font-semibold text-base leading-5">{minutes}</span>
            <p className="font-normal text-[11px] leading-[18px]">Minutes</p>
          </div>
          <div className="flex flex-col items-center !p-2  rounded-full !h-[62px] gap-1 !w-[62px] !bg-white">
            <span className="font-semibold text-base leading-5">{seconds}</span>
            <p className="font-normal text-[11px] leading-[18px]">Seconds</p>
          </div>
        </div>
        <CurrentButton
          className="!w-[170px] mt-8 !h-[56px] !bg-[#00FF66] !text-white font-medium text-base leading-6"
          title="Buy Now!"
        />
      </div>
     <div className="pt-[100px] pr-[100px] ">
         <Image className=" jblShadow  " src={jbl} />
     </div>
    </div>
  );
};
