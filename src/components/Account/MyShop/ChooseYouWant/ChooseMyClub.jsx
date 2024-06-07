"use client";
import React from "react";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import Image from "next/image";
import profileImg from "../../../../assets/images/profile-product-img.png";
import LashesIcon from "../../../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../../../assets/images/icons/subscribe.svg";
import Tabs from "./Tabs";

const ChooseMyClub = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 pt-8">
        <div className="flex flex-col items-center gap-0.5 mb-8">
          <Image className="w-[230px] mb-3" src={profileImg} alt="user-img" />
          <h4 className="font-bold text-t4">
            <span className="text-darkpink">Choose</span> what you want
          </h4>
          <p className="font-medium text-sm">
            <span className="text-[9px]">with</span> Ashley Jackson
          </p>
        </div>

        <Tabs />
      </div>

      <div className="max-w-[484px] mx-auto px-4 mb-4">
        <div className="my-28">
          <EncryptionPolicy />
        </div>
        <NeedHelp />
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ul className="text-t4 space-y-1">
            <li className="flex gap-2">
              <LashesIcon className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Natural LASHES
                <br />+ BROWS
              </span>
            </li>
            <li className="flex gap-2">
              <SubscribeIcone className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Subscribe because of our <br />
                Lash Cycle{" "}
                <span className="text-blue text-base sm:text-lg font-medium">
                  Learn more
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              <CheckmarkIcon className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                No commitments,
                <br />
                Cancel anytime
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default ChooseMyClub;
