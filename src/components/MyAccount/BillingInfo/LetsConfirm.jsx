"use client";
import { useState } from "react";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import ChangeBilling from "@/components/MyAccount/BillingInfo/ChangeBilling";
import moment from "moment";

const LetsConfirm = (props) => {
  const { _handleSteps, newBillingDay, _handleChangeBillingDay, checkoutLoading } = props;

  // const [showChangeBilling, setShowChangeBilling] = useState(false);
  // const [showLetsConfirm, setShowLetsConfirm] = useState(true);

  // const handleBackClick = () => {
  //   setShowLetsConfirm(false);
  //   setShowChangeBilling(true);
  // };
  return (
    <>
      {/* {showLetsConfirm && ( */}
      <>
        <div className="max-w-[484px] mx-auto px-4 pt-12">
          <span
            className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center  cursor-pointer"
            onClick={() => _handleSteps('back')}
          >
            <ChevronLeftIcon className="w-4 h-4 stroke-current" />
          </span>
          <h3 className="mb-4 mt-8">Let’s confirm your changes</h3>
          <p className="text-t4 mb-0 text-base ">
            Your delivery and billing day will be changed to the {moment(newBillingDay?.value, 'DD').format('Do')}, every 3
            months.
          </p>
          <button type="button" disabled={checkoutLoading ? true : false} onClick={() => _handleChangeBillingDay()} className="primary-button mt-8">
            {checkoutLoading ? <div className="h-6 w-6 mr-auto ml-auto animate-spin rounded-full border-2 border-solid border-white border-t-transparent" /> : 'Confirm'}
          </button>
        </div>

        <div className="max-w-[484px] mx-auto px-4 py-8">
          <div className="mt-16">
            <Language />
          </div>
        </div>
        <Footer />
      </>
      {/* )} */}
      {/* {showChangeBilling && <ChangeBilling />} */}
    </>
  );
};

export default LetsConfirm;
