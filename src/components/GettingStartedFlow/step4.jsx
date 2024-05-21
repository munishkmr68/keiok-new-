"use client";
import Image from "next/image";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import Faq from "@/components/Faq";
import TruckIcon from "../../assets/images/icons/truck.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import Carousel from "@/components/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Loader from "@/common/Loader";

const Step4 = (props) => {
  const { onContinueClick, onBackClick, singleProductData, loading } = props;

  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 mt-12">
        <Carousel singleProductData={singleProductData} />
        <h4 className="sm:text-[22px] text-xl font-medium my-5">
          {singleProductData ? singleProductData?.title : "MY lash serum"}
        </h4>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto px-4 py-3">
          <p className="font-medium text-t4">
            Feel more confident in your natural lashes for as little as
            $20/month
          </p>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 py-8">
        <ul className="text-bg1 space-y-1 mb-3">
          <li className="flex items-center gap-2">
            <TruckIcon className="fill-current w-4 h-4" />
            <span className="text-sm font-medium">Free shipping</span>
          </li>
          <li className="flex items-center  gap-2">
            <CheckmarkIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Cancel anytime</span>
          </li>
        </ul>

        <Faq title={singleProductData?.title || 'MY lash serum'} />
        <div className="mt-24">
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
            label={singleProductData ? singleProductData?.title : "MY lash serum"}
          />
        </div>
      </div>
    </>
  );
};

export default Step4;
