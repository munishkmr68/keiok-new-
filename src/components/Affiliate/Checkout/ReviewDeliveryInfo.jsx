import React from "react";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import LashesIcon from "../../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import Image from "next/image";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";
import {
  LockClosedIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Footer from "@/common/Footer";

const ReviewDeliveryInfo = ({ onOrderSummaryEditable, onNext }) => {
  return (
    <>
      <header className="sticky top-0 z-40 bg-white">
        <div className="mx-auto flex container items-center justify-between py-[18px] px-4">
          <button
            className="flex items-center gap-1 text-sm font-medium text-blue"
            onClick={onOrderSummaryEditable}
          >
            View order summary
            <ChevronDownIcon className="size-4 relative top-[0.8px]" />
          </button>

          <span className="text-[13px] font-medium text-blue">$20.00</span>
        </div>
        {/* <SubscriptionBar /> */}
      </header>
      <div className="max-w-[484px] mx-auto pt-11 px-4">
        <div className="flex items-center gap-4">
          <Image
            className="w-[140px] h-[140px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <div>
            <span className="text-t5 text-[10px] font-bold flex items-center gap-1">
              <LockClosedIcon className="w-2 h-2" /> CHECKOUT 2 OF 3
            </span>
            <h4 className="mb-0.5 text-t4 font-bold leading-tight">
              Review <span className="text-darkpink">your</span>
              <br /> delivery info
            </h4>
            <p className="font-medium text-sm">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
          </div>
        </div>
        <div className="space-y-1 text-t3 text-[15px] my-8 font-medium">
          <p>No commitments</p>
          <p>Cancel anytime</p>
        </div>
        <div className="border rounded-xl shadow-shadow1 border-gray p-6">
          <ul className="text-[13px] text-t1 font-medium mb-5">
            <li className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4" />
              <span>In stock and ready to ship</span>
            </li>
          </ul>
          <div className="bg-pink -mx-6">
            <div className="px-6 py-4 text-t1">
              <div className="flex justify-between text-t1 font-medium">
                <span>Arrives</span>
                <span>Jun 12 - Jun 15</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-[13px] font-medium text-t4">
            <div className="flex justify-between">
              <span className="text-[15px] text-t1">Shipping cost</span>
              <span className="text-t5">$4.95</span>
            </div>
            <div className="flex text-t4 justify-between">
              <span>Affiliate discount — $2</span>
              <span className="text-[15px] text-t1">$2.95</span>
            </div>
            <div className="flex text-t4 justify-between">
              <span></span>
              <span>Every 6 weeks</span>
            </div>
          </div>
        </div>

        <button className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-7" onClick={onNext}>
          Next
          <ChevronRightIcon className="w-4 h-4" />
        </button>
        <div className="my-24">
          <EncryptionPolicy />
        </div>
        <NeedHelp />
      </div>
      <div className="bg-pink mt-6">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ul className="text-t4 space-y-2">
            <li className="flex gap-2">
              <LashesIcon className="w-6 h-6" />
              <span className="text-base font-medium">
                Natural LASHES
                <br />+ BROWS
              </span>
            </li>
            <li className="flex gap-2">
              <SubscribeIcone className="w-6 h-6" />
              <span className="text-base font-medium">
                Subscribe because of our <br />
                Lash Cycle{" "}
                <span className="text-blue text-base font-medium">
                  Learn more
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              <CheckmarkIcon className="w-6 h-6" />
              <span className="text-base font-medium">
                No commitments,
                <br />
                Cancel anytime
              </span>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ReviewDeliveryInfo;
