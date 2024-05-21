"use client";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import TruckIcon from "../../assets/images/icons/truck.svg";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { FloatValues, _dateFormatChange } from "@/services/Methods/normalMethods";
import ProductCard from "@/common/ProductCard";

const Step6 = (props) => {

  const { onContinueClick, onBackClick, singleProductData } = props;

  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <h3 className="mt-8 mb-6">
          Subscribe because of your
          <br className="hidden sm:block" />
          lash cycle{" "}
          <a href="#" className="text-blue text-sm font-normal pl-1">
            Learn more
          </a>
        </h3>
        <ul className="text-bg1 space-y-1 mb-3">
          <li className="flex items-center gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span className="font-medium">100% money-back guarantee</span>
          </li>
          <li className="flex items-center  gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span className="font-medium">Cancel anytime</span>
          </li>
          <li className="flex items-center gap-2">
            <TruckIcon className="fill-current w-4 h-4" />
            <span className="font-medium">Free shipping</span>
          </li>
        </ul>
        <ProductCard {...{ singleProductData }} />
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <h6 className="flex items-center gap-2 text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Delivered & Billed
              </h6>
              <ul className="flex flex-col gap-1.5 pl-[30px]">
                <li className="text-xs text-t4">
                  First Delivery & Billing Date
                </li>
                <li className="text-xs text-t4">
                  Next Delivery & Billing Date
                </li>
              </ul>
            </div>
            <div>
              <h6 className="flex items-center gap-2 text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Every 3 Months
              </h6>
              <ul className="flex flex-col gap-1.5 pl-[30px] sm:text-right">
                <li className="text-xs text-t4">Today</li>
                <li className="text-xs text-t4">{_dateFormatChange(new Date().setDate(new Date().getDate() + 30), 'MMM Do, YYYY')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto  px-4 py-8">
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
            label="Continue"
            amt={`$${FloatValues(singleProductData?.retail_autoship)}`}
          />
        </div>
      </div>
    </>
  );
};

export default Step6;
