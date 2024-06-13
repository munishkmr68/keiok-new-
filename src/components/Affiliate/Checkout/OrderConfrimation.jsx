import { useState } from 'react';
import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";
import star from "../../../assets/images/star.png";
import NortonLogo from "../../../assets/images/norton-logo.png";
import OrderSummary from "./OrderSummary"; 
import OrderSummaryEditable from "./OrderSummaryEditable"; 
import ReviewDeliveryInfo from "./ReviewDeliveryInfo"; 
import SetupCard from "./SetupCard";
import ThankYou from './ThankYou';

const OrderConfrimation = () => {

  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [showOrderSummaryEditable, setShowOrderSummaryEditable] = useState(false);
  const [showReviewDeliveryInfo, setShowReviewDeliveryInfo] = useState(false);
  const [showSetupCard, setShowSetupCard] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleViewOrderClick = () => {
    setShowOrderSummaryEditable(true);
  };

  const handleClubClick = () => {
    setShowReviewDeliveryInfo(true);
  };

  const handleCloseOrderSummary = () => {
    setShowOrderSummary(false);
  };
  
  const handleOrderSummaryEditable = () => {
    setShowOrderSummaryEditable(true);
    setShowReviewDeliveryInfo(false);
    setShowReviewDeliveryInfo(false);
  };


  const handleCloseOrderSummaryEditable = () => {
    setShowOrderSummaryEditable(false);
    setShowReviewDeliveryInfo(true);
  };

  const handleNextClick = () => {
    setShowReviewDeliveryInfo(false);
    setShowSetupCard(true);
  };

  const handleThankYou = () => {
    setShowOrderSummaryEditable(false);
    setShowThankYou(true);
  };

  if (showOrderSummary) {
    return <OrderSummaryEditable onClose={handleCloseOrderSummary} />;
  }
  if (showOrderSummaryEditable) {
    return <OrderSummaryEditable onClose={handleCloseOrderSummaryEditable}  onThankYou={handleThankYou} />;
  }

  if (showReviewDeliveryInfo) {
    return <ReviewDeliveryInfo onOrderSummaryEditable={handleOrderSummaryEditable} onNext={handleNextClick} />;
  }
  if (showSetupCard) {
    return <SetupCard onOrderSummaryEditable={handleOrderSummaryEditable} />;
  }
  if (showThankYou) {
    return <ThankYou />;
  }


  return (
    <>
      <header className="sticky top-0 z-40  bg-white shadow-headershadow">
        <div className="mx-auto flex container items-center justify-between py-[18px] px-4">
          <button
          onClick={handleViewOrderClick}
            className="flex items-center gap-1 text-sm font-medium text-blue"
          
          >
             View order confirmation info
            <ChevronDownIcon className="size-4 relative top-[1px]" />
          </button>

          <Image
            className="max-w-[66px] ml-auto mb-1"
            src={NortonLogo}
            alt="logo"
          />
        </div>

      </header>
      <div className="max-w-[484px] mx-auto pt-11 px-4">
        <div className="flex items-center gap-4">
          <Image
            className="w-[140px] h-[140px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <div>
            <h4 className="mb-0.5 text-t4 font-bold leading-tight">
              <span className="text-darkpink">Thank you!</span>
            </h4>
            <p className="font-medium text-sm">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
          </div>
        </div>
        <div className="space-y-1 text-t3 text-[15px] my-8 font-medium">
          <p>Success! Would you like to setup your personal club now?</p>
          <p>Getting setup is easy</p>
        </div>
        <button className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-3" onClick={handleClubClick} >
          Setup MY club
          <ChevronRightIcon className="w-4 h-4" />
        </button>
        <p className="font-medium text-[15px] text-blue mt-3 mb-14 underline text-center">
          I`&apos;`ll do it later
        </p>
        <div className="border rounded-xl shadow-shadow1 border-gray p-6">
          <h4 className="font-bold text-t4 text-left">
            <span className="text-darkpink"> Earn </span>
            your way
          </h4>
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex gap-2">
              <span className="flex flex-row ">
                <span className="text-sm text-t5 w-[20px] mr-2 ">
                  <Image src={star} alt="user-img" />{" "}
                </span>
                <span className="text-sm text-t4 font-medium ">
                  28% commission on personal sales
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="flex flex-row ">
                <span className="text-sm text-t5 w-[20px] mr-2 ">
                  <Image src={star} alt="user-img" />{" "}
                </span>
                <span className="text-sm text-t4 font-medium ">
                  Want to earn more? Activate level bonuses and get earn
                  commissions from your team.
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div className="border rounded-xl shadow-shadow1 border-gray p-6 mt-6">
          <h4 className="font-bold text-t4 text-left">
            <span className="text-darkpink"> Personal </span>
            website
          </h4>
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex gap-2">
              <span className="flex flex-row ">
                <span className="text-sm text-t5 w-[20px] mr-2 ">
                  <Image src={star} alt="user-img" />{" "}
                </span>
                <span className="text-sm text-t4 font-medium ">
                  Get your website just like mine
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="flex flex-row ">
                <span className="text-sm text-t5 w-[20px] mr-2 ">
                  <Image src={star} alt="user-img" />{" "}
                </span>
                <span className="text-sm text-t4 font-medium ">
                  Setup is simple and easy
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="flex flex-row  ">
                <span className="text-sm text-t5 w-[20px] mr-2 ">
                  <Image src={star} alt="user-img" />{" "}
                </span>
                <span className="text-sm text-t4 font-medium ">
                  No hassle - all shipping, customer
                  <br />
                  service, etc is handled for you
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default OrderConfrimation;
