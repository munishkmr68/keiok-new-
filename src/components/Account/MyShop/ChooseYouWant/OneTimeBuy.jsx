import React from "react";
import Image from "next/image";
import prdimage from "../../../../assets/images/my-club-mylash.png";
import star from "../../../../assets/images/star.png";
import SubscribeIcone from "../../../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";

const OneTimeBuy = () => {
  return (
    <div className="border rounded-xl shadow-shadow1 border-gray p-6 overflow-hidden">
      <div className="max-w-[484px] mt-0 mb-[16px] px-4">
        <div className="flex flex-col items-center gap-1.5  ">
          <Image
            className="w-[248px] h-[100px] mb-6 "
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
      <ul className="flex flex-col gap-3 mt-2 max-w-[240px]">
        <li className="flex gap-2">
          <span className="flex flex-row ">
            <span className="text-sm text-t5 w-[20px]  mr-2">
              <Image src={star} alt="user-img" />{" "}
            </span>
            <span className="text-sm text-t4 font-bold ">
              See results for fuller and longer looking lashes in just a few
              weeks
            </span>
          </span>
        </li>
      </ul>
      <div className="bg-pink -mx-6 mt-[20px] px-6 py-3">
      <ul className="flex justify-between text-sm">
                <li className="text-t4">Price</li>
                <li className="text-t4">$89.50</li>
              </ul>
      </div>

      <div className="flex flex-col divide-y divide-dashed divide-gray mt-3 border-b border-dashed border-gray">
        <ul className="flex justify-between py-1.5 font-bold">
          <li className="text-[12px] sm:text-xs text-t4 ">Size</li>
          <li className="text-[12px] sm:text-xs text-t4 ">
            6-week supply (2ml)
          </li>
        </ul>

        <ul className="flex justify-between py-1.5">
          <li className="text-[12px] sm:text-xs text-t4 ">Items</li>
          <li className="text-[12px] sm:text-xs text-t4 ">1</li>
        </ul>
      </div>

      <div className="max-w-[484px] mx-auto mt-4 ">
        <ul className="text-t4 space-y-1">
          <li className="flex gap-2 ">
            <SubscribeIcone className="w-6 h-6" />
            <span className="text-[13px]  font-medium">
              Subscribe because of
              <span className="text-darkpink"> our</span>{" "}
              <u className="cursor-pointer ">Lash cycle</u>
            </span>
          </li>
          <li className="flex gap-2 ">
            <CheckmarkIcon className="w-6 h-6" />
            <span className="text-[13px]  font-medium">
              Recurring every 6 weeks
            </span>
          </li>
          <li className="flex gap-2">
            <CheckmarkIcon className="w-6 h-6" />
            <span className="text-[13px]  font-medium">Cancel anytime</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OneTimeBuy;
