"use client";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import LashesIcon from "../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import FunFactModal from "./FunFactModal";

const Step5 = ({ onContinueClick, onBackClick }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4">
        <h3 className="mt-12 mb-6">Are you ready for LASHES?</h3>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ul className="text-t4 space-y-1">
            <li className="flex gap-2">
              <LashesIcon className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Get LASHES in as little as 6 weeks
              </span>
            </li>
            <li className="flex gap-2">
              <SubscribeIcone className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Subscribe because of your <u onClick={() => setOpenModal(!openModal)} className="cursor-pointer">lash cycle</u>
              </span>
            </li>
            <li className="flex gap-2">
              <CheckmarkIcon className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">
                Cancel anytime
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 py-8">
        <div className="mt-16">
          <Freeshipping />
        </div>
        <ShoppingWith />
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="max-w-[484px] mx-auto px-4 py-8 flex items-center gap-3">
          <span
            className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center"
            onClick={onBackClick}
          >
            <ChevronLeftIcon className="w-4 h-4 stroke-current" />
          </span>

          <ButtonNextStep
            handleClick={onContinueClick}
            amt=""
            label="Continue"
          />
        </div>
      </div>
      {openModal && <FunFactModal openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
};

export default Step5;
