"use client";
import Image from "next/image";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import CrditDebitPay from "@/components/crditdebitpay";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import ProductImg from "../../assets/images/prd-img.png";
import YourTotal from "@/components/yourtotal";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import Lock from "../../assets/images/icons/lock-white.svg";
import { OuterLoader } from "@/services/Methods/checkoutPayloads";
import { _dateFormatChange } from "@/services/Methods/normalMethods";
import ProductCard from "@/common/ProductCard";
import { useState } from "react";

const Step8 = (props) => {
  const {
    onContinueClick, calculatedData, singleProductData, paymentOptions, selectedPayment,
    _handlePaymentSelectionFunction
  } = props;

  const [selectionError, setSelectionError] = useState('')

  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <LockCircleIcon className="mb-6 mt-8" />
        <h3 className="mb-4">Choose how to pay</h3>
        <p className="text-t4 mb-3 sm:text-lg text-base">
          You can change how you pay anytime
        </p>
        <p className="text-t2 sm:text-lg text-base font-bold">
          Secure for peace of mind
        </p>
        <p className="text-t2 sm:text-lg text-base font-bold mb-4">
          Cancel easily online
        </p>
        {(paymentOptions?.length > 0)
          ?
          <>
            <CrditDebitPay {...{ paymentOptions, selectedPayment, _handlePaymentSelectionFunction }} />
            <p className="text-sm text-red">{selectionError}</p>
          </>
          :
          <OuterLoader section="oneTime" msg="Please wait................." />
        }
        <hr className="border-gray mt-[30px] pb-[30px]" />

        {calculatedData?.autoshipCalculateData
          ?
          <YourTotal orderData={calculatedData?.autoshipCalculateData} />
          :
          <OuterLoader section="oneTime" />
        }

        <Freeshipping />
        <h6 className="label mb-4 mt-[30px]">Your Subscription</h6>
        <ProductCard {...{ singleProductData, className: "mt-0" }} />
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-5">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <h6 className="flex items-center gap-2 text-base sm:text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Delivered & Billed
              </h6>
              <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px]">
                <li className="text-[10px] sm:text-xs text-t4">
                  First Delivery & Billing Date
                </li>
                <li className="text-[10px] sm:text-xs text-t4">
                  Next Delivery & Billing Date
                </li>
              </ul>
            </div>
            <div>
              <h6 className="flex items-center gap-2 text-base sm:text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Every 3 Months
              </h6>
              <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px] sm:text-right">
                <li className="text-[10px] sm:text-xs text-t4">Today</li>
                <li className="text-[10px] sm:text-xs text-t4">
                  {_dateFormatChange(new Date().setDate(new Date().getDate() + 30), 'MMM Do, YYYY')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 py-8">
        <ShoppingWith />
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ButtonNextStep
            icon={<Lock />}
            handleClick={() => {
              if (selectedPayment?.selectedPaymentDropdown) {
                onContinueClick()
              } else {
                setSelectionError('');
              }
            }}
            amt=""
            label="Continue"
          />
        </div>
      </div>
    </>
  );
};

export default Step8;
