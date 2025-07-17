import { Button, Form, Input } from "antd";
import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizontal,
  Twitter,
} from "lucide-react";
import React from "react";
import { CurrentButton } from "../../components/CurrentButton/CurrentButton";
import { Link } from "react-router-dom";
import { QrCode } from "../../assets/icon/QrCode";
import { PlayMarket } from "../../assets/icon/PlayMarket";
import { ApplStore } from "../../assets/icon/ApplStore";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="">
        <div className="container flex  justify-between gap-[87px]">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl leading-6 tracking-[3%] font-inter">
              Exclusive
            </h1>
            <p className="font-medium text-xl leading-7">Subscribe</p>
            <p className="font-normal text-base leading-6">
              Get 10% off your first order
            </p>
            <form className=" relative">
              <input
                placeholder="Enter your email"
                className="!w-[217px] !h-[46px] border-gray-500 border-2 rounded-md p-2 "
                type="email"
              />
              <CurrentButton
                onClick="Submit"
                className="!bg-transparent !border-none absolute !left-[180px] !bottom-10"
                icon={<SendHorizontal color="gray" />}
              />
            </form>
          </div>
          <div className="flex gap-[87px]">
            <div className="flex flex-col gap-6">
              <p className="font-medium text-xl leading-7">Support</p>
              <div className="flex flex-col gap-4">
                <p className="font-normal text-base leading-6">
                  111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
                </p>
                <p className=" font-normal text-base leading-6 ">
                  exclusive@gmail.com
                </p>
                <p className=" font-normal text-base leading-6 ">
                  +88015-88888-9999
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-medium text-xl leading-7">Account</p>
              <div className="flex flex-col gap-4">
                <Link className="font-normal text-base leading-6">
                  My Account
                </Link>
                <Link className="font-normal text-base leading-6">
                  Login / Register
                </Link>
                <Link className="font-normal text-base leading-6">Cart</Link>
                <Link className="font-normal text-base leading-6">
                  Wishlist
                </Link>
                <Link
                  className="font-normal text-base leading-6"
                  to={"/productdetailspage"}
                >
                  Shop
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-medium text-xl leading-7">Quick Link</p>
              <div className="flex flex-col gap-4">
                <Link className="font-normal text-base leading-6">
                  Privacy Policy
                </Link>
                <Link className="font-normal text-base leading-6">
                  Terms Of Use
                </Link>
                <Link className="font-normal text-base leading-6">FAQ </Link>
                <Link className="font-normal text-base leading-6">Contact</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className=" font-medium text-xl leading-7 ">Download App</p>
            <div>
              <p className=" font-medium text-xs leading-[18px] text-gray-300">
                Save $3 with App New User Only
              </p>
              <div className="flex gap-[10px] mt-[10px]">
                <QrCode />
                <div className="flex flex-col !gap-2">
                  <Link
                    className=" !cursor-pointer"
                    target="_blank"
                    to={"https://play.google.com/store/games?hl=ru&pli=1"}
                  >
                    <PlayMarket />
                  </Link>
                  <Link
                    className=" !cursor-pointer"
                    target="_blank"
                    to={"https://play.google.com/store/games?hl=ru&pli=1"}
                  >
                    <ApplStore />
                  </Link>
                </div>
                <div></div>
              </div>
            </div>

            <div className="flex gap-6">
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
        <div className="flex  flex-col justify-cente !mt-[60px] gap-3 items-center">
          <hr className="border-gray-300 border-1 !w-full" />
          <p className="!text-gray-500  ">
            @Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
