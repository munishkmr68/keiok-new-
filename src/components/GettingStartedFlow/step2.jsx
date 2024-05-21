"use client";
import Image from "next/image";
import ProductImg from "../../assets/images/product-img.png";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Menu from "@/components/menu";

const Step2 = (props) => {
  const { signinPopUp, setSignInPopup, onContinueClick, onBackClick } = props;
  function handlePopUp() {
    setSignInPopup(true)
  }

  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4 py-12">
        <Image
          className="mx-auto block w-[154px] h-[154px] sm:h-[200px] sm:w-[200px] rounded-full"
          src={ProductImg}
          alt="product-img"
        />
        <h3 className="my-20 text-t2 text-center">
          Imagine not knowing
          <br />
          about toothpaste
        </h3>
        <Freeshipping />
        <ShoppingWith />
        <div className="mt-20">
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
    </>
  );
};

export default Step2;
