"use client";
import React from "react";
import Footer from "@/common/Footer";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import Image from "next/image";
import profileImg from "../../../assets/images/profile-product-img.png";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import TruckIcon from "../../../assets/images/icons/truck.svg";
import InstantResult from "./InstantResult";
import IsubscribeLash from "./IsubscribeLash";
import Yes from "./Yes";
import Faq from "./Faq";
import NightlyRoutine from "./NightlyRoutine";

const JoinLashClub = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 pt-8">
        <div className="flex flex-col items-center gap-0.5">
          <Image
            className="w-[230px] mb-3"
            src={profileImg}
            alt="user-img"
          />
          <h4 className="font-bold text-t4">MY lash</h4>
          <p className="font-medium">
            <span className="text-[9px]">with</span> Ashley Jackson
          </p>
          <p className="font-medium text-[15px] text-t4">6-week supply (2mL)</p>
          <h6 className="text-base text-darkpink font-bold">
            lash + brow serum
          </h6>
          <p className="text-t3">Starting at $20</p>
        </div>
        <button className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6">
          join MY lash club
          <ChevronRightIcon className="w-4 h-4" />
        </button>
        <div className="flex gap-2.5 items-center justify-center text-t5 mt-3">
          <TruckIcon className="fill-current" />
          <p className="text-sm">Shipping is calculated at checkout</p>
        </div>
        <div className="flex flex-col gap-6 mt-14">
          <InstantResult />
          <IsubscribeLash />
          <Yes />
          <NightlyRoutine />
        </div>
      </div>

      <div className="max-w-[484px] mx-auto px-4 mt-20">
        <Faq />
      </div>

      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="my-24">
          <EncryptionPolicy />
        </div>
        <NeedHelp />
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ul className="space-y-1 sm:text-base text-sm text-t4 font-medium">
            <li className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4" />
              <span>It only works if you use it</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4" />
              <span>Optional affiliate opportunity</span>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default JoinLashClub;
