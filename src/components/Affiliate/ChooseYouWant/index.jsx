"use client";
import React, { useState } from "react";
import Footer from "@/common/Footer";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import Image from "next/image";
import profileImg from "../../../assets/images/profile-product-img.png";
import subscribeLash from "../../../assets/images/i-subscribe-lash.png";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";
import LashesIcon from "../../../assets/images/icons/lashes.svg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ChoosePopUp from "./ChoosePopUp";
import ChooseMyClub from "./ChooseMyClub";

const Choose = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showChooseMyClubComponent, setShowChooseMyClubComponent] = useState(false);

  return (
    <>
     {openModal && <ChoosePopUp openModal={openModal} setOpenModal={setOpenModal} setShowChooseMyClubComponent={setShowChooseMyClubComponent} />}
    {!showChooseMyClubComponent? <> <div className="max-w-[484px] mx-auto px-4 pt-8">
      
        <div className="flex flex-col items-center gap-0.5">
        <Image
            className="w-[230px] mb-3"
            src={profileImg}
            alt="user-img"
          />
          <h4 className="font-bold text-t4">
            <span className="text-darkpink">Choose </span>
            what you want
          </h4>
          <p className="font-medium">
            <span className="text-[9px]">with</span> Ashley Jackson
          </p>
        </div>
      </div>

      <div className="max-w-[485px] mx-auto px-4 mt-6">
        <div className="border rounded-xl shadow-shadow1 border-gray p-6 flex items-center relative">
          <Image
            className="max-w-[300px] rounded-full mb-3"
            src={subscribeLash}
            alt="lash-img"
          />
          <div className="">
            <div className="absolute right-14 top-8">
              <h6 className="text-[16px] leading-5">I subscribe</h6>
              <h6 className="text-[16px] leading-5"> because of our</h6>
              <h3 className="font-bold text-[22px] text-darkpink mb-2">
                Lash Cycle
              </h3>
            </div>

            <div className="bottom-10 right-24 absolute">
              <h3 className="font-bold text-[22px] text-darkpink mb-2 leading-5">
                Every 12 weeks
              </h3>
              <h6 className="text-[16px] leading-5">we naturally shed and</h6>
              <h6 className="text-[16px] leading-5">
                replace all of our lashes
              </h6>
            </div>
          </div>
        </div>
        <button className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6" onClick={() => setOpenModal(!openModal)}>
          Next
          <ChevronRightIcon className="w-4 h-4" />
        </button>
        <button className="primary-button-text-only w-full px-4 sm:px-6 py-[13px] text-blue font-medium hover:text-darkpink transition border-0 text-center text-blue flex flex-1 items-center justify-center gap-1 sm:gap-1 mt-1 ">
          <ChevronLeftIcon className="w-4 h-4" />
          Back
        </button>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="my-24">
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
                Lash Cycle <span className="text-blue text-base sm:text-lg font-medium">Learn more</span>
              </span>
           
            </li>
            <li className="flex gap-2">
              <CheckmarkIcon className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
              No commitments,<br/>Cancel anytime
              </span>
            </li>
          </ul>
        </div>
      </div></>:<ChooseMyClub/>}
      <Footer />
    </>
  );
};

export default Choose;
