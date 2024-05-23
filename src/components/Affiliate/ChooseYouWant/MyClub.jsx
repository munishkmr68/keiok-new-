import React from "react";
import Image from "next/image";
import prdimage from "../../../assets/images/my-club-mylash.png";
import TextCutt from "../../../assets/images/text-cutt-pattren.svg";
import Dots from "../../../assets/images/icons/dots.svg";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";

const MyClub = () => {
  return (
    <div className="border rounded-xl shadow-shadow1 border-gray p-6 overflow-hidden">
      <div className="max-w-[484px] mt-0 px-4">
        <div className="flex flex-col items-center gap-0.5  ">
          <Image
            className="w-[248px] h-[100px] mb-1"
            src={prdimage}
            alt="user-img"
          />
        </div>
        <h4 className="font-bold text-t4 text-center">
          MY lash
          <span className="text-darkpink"> + </span>
          MY club
        </h4>
        <p className="font-medium text-center ">
          <span className="text-[9px]">with</span> Ashley Jackson
        </p>
      </div>
      <ul className="flex flex-col gap-3 mt-2">
        <li className="flex gap-2">
          <span className="flex flex-row ">
            <span className="text-sm text-t5">✨</span>
            <span className="text-sm text-t4 font-bold ">
              See results for fuller and longer looking lashes in just a few
              weeks
            </span>
          </span>
        </li>
        <li className="flex gap-2">
          <span className="flex flex-row  ">
            <span className="text-sm text-t5 ">✨</span>
            <span className="text-sm text-t4 font-bold ">
              Join me as an affiliate and get your own website + commissions
            </span>
          </span>
        </li>
        <li className="flex gap-2">
          <span className="flex flex-row">
            <span className="text-sm text-t5 ">✨</span>
            <span className="text-sm text-t4 font-bold ">
              Setup your club after checkout whenever is best for you
            </span>
          </span>
        </li>
      </ul>
      <div className="bg-pink -mx-6 mt-4">
        <div className="px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px]">
                <li className="text-[10px] sm:text-xs text-t4">Price</li>
                <li className="text-[12px] font-bold sm:text-xs text-t4">
                  1-time setup bonus — $18.00
                </li>
                <li className="text-[17px] font-bold text-t4">Pay today</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px] sm:text-right">
                <li className="text-[10px] sm:text-xs text-t4">$38.00</li>
                <li className="text-[10px] sm:text-xs text-t4"> </li>
                <li className="text-[17px] font-bold text-t4 mt-5">$20.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-6">
        <div className="px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px]">
                <li className="text-[12px] font-normal sm:text-xs text-t4">
                  Size
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px] sm:text-right">
                <li className="text-[12px] font-normal sm:text-xs text-t4">
                  6-week supply (2ml)
                </li>
              </ul>
            </div>
          </div>
          <Dots className="mx-7 w-[390px]" />
        </div>
      </div>
      <div className="-mx-6">
        <div className="px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px]">
                <li className="text-[12px] font-normal sm:text-xs text-t4">
                  Items
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px] sm:text-right">
                <li className="text-[12px] font-normal sm:text-xs text-t4">
                  1
                </li>
              </ul>
            </div>
          </div>
          <Dots className="mx-7 w-[390px]" />
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 py-4">
        <ul className="text-t4 space-y-1">
          <li className="flex gap-2 ">
            <SubscribeIcone className="w-6 h-6" />
            <span className="text-[13px] sm:text-[14px] font-medium">
              Subscribe because of 
              <span className="text-darkpink"> our</span>{" "}
              <u
               
                className="cursor-pointer "
              >
                Lash cycle
              </u>
            </span>
          </li>
          <li className="flex gap-2 ">
            <CheckmarkIcon className="w-6 h-6" />
            <span className="text-[13px] sm:text-[13px] font-medium">
            Recurring every 6 weeks
            </span>
          </li>
          <li className="flex gap-2">
            <CheckmarkIcon className="w-6 h-6" />
            <span className="text-[13px] sm:text-[13px] font-medium">
            Cancel anytime
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyClub;
