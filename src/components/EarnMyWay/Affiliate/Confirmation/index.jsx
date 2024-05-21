"use client";
import Language from "@/components/language";
import Notification from "@/components/notification";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Arrow from "../../../../assets/images/icons/check-circle-white.svg";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import Link from "next/link";

const Confirmation = ({ onContinueClick, onBackClick, props, fieldValue, alluserData }) => {
  const scrollToTop = () => {
    // Smooth scroll to the top with a slight delay
    setTimeout(() => {
      const element = document.scrollingElement || document.documentElement;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    onContinueClick();
    scrollToTop();
  };

  const handleBackClick = () => {
    // Call the parent component's function to go back to the previous step
    onBackClick();
    scrollToTop();
  };
  return (
    <>
      <div className="max-w-[484px] mx-auto pt-12 pb-5  px-4">
        <h3 className="mb-5">Welcome, {fieldValue?.values?.businessName}</h3>
        <div className="mb-5">
          <Notification
            icon={<Arrow />}
            message={`You have successfully joined keiok as a Brand ${fieldValue?.values?.pathValue === 'ambassador' ? 'Ambassador' : 'Affiliate'}`}
          />
        </div>
        <div className="py-[30px] border-y border-gray">
          <p className="text-t4 mb-1.5 text-base ">
            Your website is ready now.
          </p>
          <p className="font-medium mb-4">
            <Link href="#">{fieldValue?.values?.webAlias}.keiok.com</Link>
          </p>
          <p className="text-t4 text-base mb-1.5">
            We have sent a confirmation email to:
          </p>
          <p className="text-t4 text-base  font-bold">{alluserData?.emailAddress}</p>
        </div>
        <h3 className="my-[30px]">Getting Started is Simple</h3>
        <ButtonNextStep amt="" label="Fast Start Guide" />
        <div className="mt-24">
          <Language />
        </div>
      </div>

      <Footer />
      {/* <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="max-w-[484px] mx-auto px-4 py-8 flex items-center gap-3">
          <span
            className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center"
            onClick={handleBackClick}
          >
            <ChevronLeftIcon className="w-4 h-4 stroke-current" />
          </span>
          <ButtonNextStep
            handleClick={handleButtonClick}
            amt=""
            label="Fast Start Guide"
          />
        </div>
      </div> */}
    </>
  );
};

export default Confirmation;
