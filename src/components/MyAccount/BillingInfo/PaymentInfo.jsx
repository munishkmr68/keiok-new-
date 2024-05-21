"use client";
import { useState } from "react";
import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/solid";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import Amex from "../../../assets/images/icons/amex.svg";
import Notification from "@/components/notification";
import RemovePaymentModal from "./RemovePaymentModal";
import Arrow from "../../../assets/images/icons/check-circle-white.svg";

const PaymentInfo = (props) => {
  const { _handleSteps } = props;

  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const openRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };

  const closeRemoveModal = () => {
    setIsRemoveModalOpen(false);
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 pt-12">
        <span
          className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
          onClick={() => _handleSteps('back')}
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </span>
        <div className="mt-5">
          <Notification
            icon={<Arrow />}
            message="Your Payment Method has been changed"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <LockCircleIcon className="mb-6 mt-8" />
          <h3 className="mb-4">Manage Payment Info</h3>
          <p className="text-t4 mb-8 text-base ">
            Edit your payment details, add a backup, or switch{" "}
            <br className="sm:block hidden" /> your preferred payment
            method.
          </p>
        </div>

        <div className="border border-gray px-4 py-[18px] shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)]">
          <p className=" sm:text-base text-sm text-t2 font-bold mb-3 flex gap-0.5">
            <Amex /> ... 1002
          </p>
          <p className="mb-3 text-t5">
            To remove, add another payment method first
          </p>
          <div className="flex">
            <button className="font-bold text-t2 border border-t2 rounded-[20px] py px-2.5 tracking-wider">
              PREFERRED
            </button>
            <button
              onClick={() => _handleSteps('step3')}
              className="text-sm ml-auto text-blue"
            >
              Edit
            </button>
            <button
              onClick={openRemoveModal}
              className="text-sm ml-auto text-blue"
            >
              Remove
            </button>
          </div>
        </div>
        <button
          className="primary-button-outlined mt-8 flex items-center gap-4 justify-center"
          onClick={() => _handleSteps('step5')}
        >
          <PlusIcon className="w-4 h-4 stroke-current" /> Add Payment Method
        </button>
      </div>
      <RemovePaymentModal
        isOpen={isRemoveModalOpen}
        onClose={closeRemoveModal}
      />
    </>
  );
};

export default PaymentInfo;
