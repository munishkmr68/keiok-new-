import React from "react";
import Image from "next/image";
import userImg from "../../../assets/images/user-img.png";
import ClipartImg from "../../../assets/images/clipart-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import localStorageCall from "@/services/Methods/localstorage.hook";

const Step1 = ({ onContinueClick }) => {
  const REFFERAL_VALUES = localStorageCall().getItem('refferal_link');
  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    onContinueClick();
    // Delay the scroll operation to allow time for rendering
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12">
        <div className="flex gap-4 font-medium text-base sm:text-lg justify-between">
          <div className="flex flex-col items-center  gap-4 flex-1">
            <Image
              className="max-w-[200px] w-full"
              src={userImg}
              alt="user-img"
            />
            {REFFERAL_VALUES?.name || 'Jancy Wade'}
          </div>
          <div className="flex flex-col items-center gap-4 flex-1">
            <Image
              className="max-w-[200px] w-full"
              src={ClipartImg}
              alt="user-img"
            />
            You
          </div>
        </div>
        <h3 className="mt-[52px] sm:mt-20 text-t2 text-center">
          Welcome to MY shop!
        </h3>
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ButtonNextStep
            handleClick={handleButtonClick}
            amt=""
            label="Continue"
          />
        </div>
      </div>
    </>
  );
};

export default Step1;
