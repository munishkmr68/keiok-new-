"use client";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import LockIcon from "../../../assets/images/icons/lock-customizable.svg";
import PaymentIcon from "../../../assets/images/icons/payment-group.png";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right.svg";

const AddPaymentInfo = (props) => {
  const { _handleSteps } = props;

  return (
    <div className="max-w-[484px] mx-auto px-4 pt-12">
      <span
        className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
        onClick={() => _handleSteps('back')}
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </span>
      <div className="flex flex-col items-center text-center">
        <LockCircleIcon className="mb-6 mt-8" />
        <h3 className="mb-4">Add Payment Info</h3>
        <p className="text-t4 mb-8 text-base ">
          We’ll only use your backup payment method if we can’t process
          your main one.
        </p>
      </div>
      <div className="flex justify-end items-center gap-2">
        <span className="text-t4 text-[10px]">End-to-end encrypted</span>{" "}
        <LockIcon className="w-3 h-3 text-lock" />
      </div>
      <div
        className="border border-inputcolor p-4 flex items-center gap-2.5 justify-between rounded-[3px] mb-1.5 cursor-pointer"
        onClick={() => _handleSteps('step6')}
      >
        <div>
          <p className="text-base sm:text-lg text-t3 mb-2">
            Credit or Debit Card
          </p>
          <Image className="max-w-[159px]" src={PaymentIcon} alt="img" />
        </div>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default AddPaymentInfo;
