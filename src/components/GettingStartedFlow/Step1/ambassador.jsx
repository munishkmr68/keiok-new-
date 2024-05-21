"use client";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import Faq from "@/components/GettingStartedFlow/Step1/faq";

const Ambassador = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <h3 className="my-6">You are invited to join as a Brand Ambassador!</h3>
      </div>

      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-5">
          <h6 className="text-bg1">Joining is free and easy</h6>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto px-4 py-6">
        <ul className="text-input1 space-y-1 mb-6 sm:text-lg text-base text-t4">
          <li className="flex items-center gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span>keiok handles all shipping & returns for you</span>
          </li>
          <li className="flex items-center  gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span>No order minimums</span>
          </li>

          <li className="flex items-center  gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span>No commitments</span>
          </li>
        </ul>

        <Faq />

        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ambassador;
