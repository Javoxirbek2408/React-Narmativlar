import React from "react";
import people1 from "../../../../assets/img/people1.png";
import people2 from "../../../../assets/img/people2.png";
import people3 from "../../../../assets/img/people3.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export const AboutThrere = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="flex container  justify-between !mt-[140px] !mb-[140px]">
          <div className="flex flex-col w-[370px] gap-8">
            <img src={people1} alt="a" />
            <div className="flex flex-col gap-2">
              <h2 className=" font-medium text-[32px] leading-[30px] tracking-[4%]">
                Tom Cruise
              </h2>
              <h4 className="font-normal text-base leading-6">
                Founder & Chairman
              </h4>
              <div className="flex gap-6 mt-2">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/?locale=ru_RU"}
                >
                  <Facebook />
                </Link>
                <Link target="_blank" to={"https://x.com/"}>
                  <Twitter />
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/"}>
                  <Instagram />
                </Link>
                <Link target="_blank" to={"https://www.linkedin.com/"}>
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[370px] gap-8">
            <img src={people2} alt="a" />
            <div className="flex flex-col gap-2">
              <h2 className=" font-medium text-[32px] leading-[30px] tracking-[4%]">
                Tom Cruise
              </h2>
              <h4 className="font-normal text-base leading-6">
                Founder & Chairman
              </h4>
              <div className="flex gap-6 mt-2">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/?locale=ru_RU"}
                >
                  <Facebook />
                </Link>
                <Link target="_blank" to={"https://x.com/"}>
                  <Twitter />
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/"}>
                  <Instagram />
                </Link>
                <Link target="_blank" to={"https://www.linkedin.com/"}>
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[370px] gap-8">
            <img src={people3} alt="a" />
            <div className="flex flex-col gap-2">
              <h2 className=" font-medium text-[32px] leading-[30px] tracking-[4%]">
                Tom Cruise
              </h2>
              <h4 className="font-normal text-base leading-6">
                Founder & Chairman
              </h4>
              <div className="flex gap-6 mt-2">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/?locale=ru_RU"}
                >
                  <Facebook />
                </Link>
                <Link target="_blank" to={"https://x.com/"}>
                  <Twitter />
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/"}>
                  <Instagram />
                </Link>
                <Link target="_blank" to={"https://www.linkedin.com/"}>
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex container  justify-between !mt-[140px] !mb-[140px]">
          <div className="flex flex-col w-[370px] gap-8">
            <img src={people1} alt="a" />
            <div className="flex flex-col gap-2">
              <h2 className=" font-medium text-[32px] leading-[30px] tracking-[4%]">
                Tom Cruise
              </h2>
              <h4 className="font-normal text-base leading-6">
                Founder & Chairman
              </h4>
              <div className="flex gap-6 mt-2">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/?locale=ru_RU"}
                >
                  <Facebook />
                </Link>
                <Link target="_blank" to={"https://x.com/"}>
                  <Twitter />
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/"}>
                  <Instagram />
                </Link>
                <Link target="_blank" to={"https://www.linkedin.com/"}>
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[370px] gap-8">
            <img src={people2} alt="a" />
            <div className="flex flex-col gap-2">
              <h2 className=" font-medium text-[32px] leading-[30px] tracking-[4%]">
                Tom Cruise
              </h2>
              <h4 className="font-normal text-base leading-6">
                Founder & Chairman
              </h4>
              <div className="flex gap-6 mt-2">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/?locale=ru_RU"}
                >
                  <Facebook />
                </Link>
                <Link target="_blank" to={"https://x.com/"}>
                  <Twitter />
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/"}>
                  <Instagram />
                </Link>
                <Link target="_blank" to={"https://www.linkedin.com/"}>
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[370px] gap-8">
            <img src={people3} alt="a" />
            <div className="flex flex-col gap-2">
              <h2 className=" font-medium text-[32px] leading-[30px] tracking-[4%]">
                Tom Cruise
              </h2>
              <h4 className="font-normal text-base leading-6">
                Founder & Chairman
              </h4>
              <div className="flex gap-6 mt-2">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/?locale=ru_RU"}
                >
                  <Facebook />
                </Link>
                <Link target="_blank" to={"https://x.com/"}>
                  <Twitter />
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/"}>
                  <Instagram />
                </Link>
                <Link target="_blank" to={"https://www.linkedin.com/"}>
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex container  justify-between !mt-[140px] !mb-[140px]">
          <div className="flex flex-col w-[370px] gap-8">
            <img src={people1} alt="a" />
            <div className="flex flex-col gap-2">
              <h2 className=" font-medium text-[32px] leading-[30px] tracking-[4%]">
                Tom Cruise
              </h2>
              <h4 className="font-normal text-base leading-6">
                Founder & Chairman
              </h4>
              <div className="flex gap-6 mt-2">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/?locale=ru_RU"}
                >
                  <Facebook />
                </Link>
                <Link target="_blank" to={"https://x.com/"}>
                  <Twitter />
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/"}>
                  <Instagram />
                </Link>
                <Link target="_blank" to={"https://www.linkedin.com/"}>
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[370px] gap-8">
            <img src={people2} alt="a" />
            <div className="flex flex-col gap-2">
              <h2 className=" font-medium text-[32px] leading-[30px] tracking-[4%]">
                Tom Cruise
              </h2>
              <h4 className="font-normal text-base leading-6">
                Founder & Chairman
              </h4>
              <div className="flex gap-6 mt-2">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/?locale=ru_RU"}
                >
                  <Facebook />
                </Link>
                <Link target="_blank" to={"https://x.com/"}>
                  <Twitter />
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/"}>
                  <Instagram />
                </Link>
                <Link target="_blank" to={"https://www.linkedin.com/"}>
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[370px] gap-8">
            <img src={people3} alt="a" />
            <div className="flex flex-col gap-2">
              <h2 className=" font-medium text-[32px] leading-[30px] tracking-[4%]">
                Tom Cruise
              </h2>
              <h4 className="font-normal text-base leading-6">
                Founder & Chairman
              </h4>
              <div className="flex gap-6 mt-2">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/?locale=ru_RU"}
                >
                  <Facebook />
                </Link>
                <Link target="_blank" to={"https://x.com/"}>
                  <Twitter />
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/"}>
                  <Instagram />
                </Link>
                <Link target="_blank" to={"https://www.linkedin.com/"}>
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
