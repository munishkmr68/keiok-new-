"use client";
import React, { useState } from "react";
import Image from "next/image";
import PaymentIcon from "../../../../assets/images/icons/payment-icons.svg";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";
import LashesIcon from "../../../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../../../assets/images/icons/subscribe.svg";
import CardNumber from "../../../../assets/images/icons/cardnumber.svg";
import SecurityCode from "../../../../assets/images/icons/securitycode.svg";
import ApplePay from "../../../../assets/images/icons/applepay.svg";
import Googlepay from "../../../../assets/images/icons/google-pay-black.svg";
import Coinzoom from "../../../../assets/images/icons/coinzoom-black.svg";
import Paypal from "../../../../assets/images/icons/paypal.svg";
import NortonLogo from "../../../../assets/images/norton-logo.png";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import Inputbox from "@/components/inputbox";
import Footer from "@/common/Footer";
import Loader from "./Loader";
import OrderSummaryEditable from "./OrderSummaryEditable";
import LockIcon from "../../../../assets/images/icons/lock.svg";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const PaymentInfo = ({ onOrderSummaryEditable }) => {
  const [isEditingShipping, setIsEditingShipping] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showLoaderModal, setShowLoaderModal] = useState(false);
  const [showOrderSummaryEditable, setShowOrderSummaryEditable] =
    useState(false);

  const handleRadioChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleLoader = () => {
    setShowLoaderModal(true);
  };

  const handleViewOrderSummary = () => {
    setShowOrderSummaryEditable(true);
  };

  return (
    <>
      {!showOrderSummaryEditable && (
        <>
          <div className="max-w-[484px] mx-auto px-4">
          <div className="flex gap-2.5 mt-5 items-center shadow-shadow1 border border-gray py-4 px-6 rounded-xl text-t1 text-sm font-medium">
              <CheckCircleIcon
                className="h-5 w-5 text-green"
                aria-hidden="true"
              />
              Your payment method has been changed
            </div>
            <p className="text-t2 my-6 font-medium flex items-center justify-center gap-2">
              <LockIcon /> Secure for peace of mind
            </p>

            <div className="border-2 rounded-xl shadow-shadow1 border-gray overflow-hidden">
              <div
                className={`  ${
                  selectedPaymentMethod === "card" ? "bg-bg3" : ""
                }`}
              >
                <div className="flex items-center justify-between p-[18px] ">
                  <div className="flex gap-4 items-center">
                    <span className="w-5 flex justify-center">
                      <input
                        id="card"
                        className="accent-blue checked:w-5 checked:h-5"
                        type="radio"
                        name="payment"
                        value="card"
                        onChange={handleRadioChange}
                      />
                    </span>
                    <label
                      htmlFor="card"
                      className="text-t3 font-medium flex flex-col gap-2"
                    >
                      Credit or Debit Card
                      <PaymentIcon />
                    </label>
                  </div>
                  <Image
                    className="max-w-[66px] ml-auto mb-1"
                    src={NortonLogo}
                    alt="logo"
                  />
                </div>

                {selectedPaymentMethod === "card" && (
                  <div className="flex flex-col gap-[9px] pb-6 px-6">
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                          <CardNumber />
                        </div>
                        <Inputbox
                          name="cardnumber"
                          id="cardnumber"
                          placeholder=""
                          className="floating-input peer pr-10"
                        />
                        <label htmlFor="cardnumber" className="floating-label">
                          Card Number
                        </label>
                      </div>
                      <p className="text-red text-sm mt-0.5">
                        Please enter a card number.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <div className="relative">
                          <Inputbox
                            name="expirationdate"
                            id="expirationdate"
                            placeholder=""
                            className="floating-input peer filled"
                          />
                          <label
                            htmlFor="expirationdate"
                            className="floating-label"
                          >
                            Expiration Date
                          </label>
                        </div>
                        {/* <p className="text-red text-sm mt-0.5"> Please enter an expiration date.</p> */}
                      </div>
                      <div>
                        <div className="relative">
                          <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                            <SecurityCode />
                          </div>
                          <Inputbox
                            name="securitycode"
                            id="securitycode"
                            placeholder=""
                            className="floating-input peer pr-10 error"
                          />
                          <label
                            htmlFor="securitycode"
                            className="floating-label"
                          >
                            CVV
                          </label>
                        </div>
                        <p className="text-red text-sm mt-0.5">
                          Please enter a security code.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="divide-y divide-gray bg-white  border-t border-gray">
                <div
                  className={` p-[18px] ${
                    selectedPaymentMethod === "applepay" ? "bg-bg3" : ""
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <span className="w-5 flex justify-center">
                      <input
                        id="applepay"
                        className="accent-blue checked:w-5 checked:h-5"
                        type="radio"
                        name="payment"
                        value="applepay"
                        onChange={handleRadioChange}
                      />
                    </span>
                    <label
                      htmlFor="applepay"
                      className="text-t3 font-medium flex flex-col gap-2"
                    >
                      <ApplePay />
                    </label>
                  </div>
                  {selectedPaymentMethod === "applepay" && (
                    <div className="mt-3">
                      <p className="font-medium text-t3 text-sm">
                        Click to connect your ApplePay account
                      </p>
                      <button className="rounded-xl w-full flex items-center px-4 sm:px-6 gap-2.5 bg-t1 text-white py-3.5 mt-3">
                        <span className="mx-auto">
                          <ApplePay />
                        </span>
                      </button>
                    </div>
                  )}
                </div>
                <div
                  className={` p-[18px] ${
                    selectedPaymentMethod === "googlepay" ? "bg-bg3" : ""
                  }`}
                >
                  <div className="flex gap-3 items-center ">
                    <span className="w-5 flex justify-center">
                      <input
                        id="googlepay"
                        className="accent-blue checked:w-5 checked:h-5"
                        type="radio"
                        name="payment"
                        value="googlepay"
                        onChange={handleRadioChange}
                      />
                    </span>
                    <label
                      htmlFor="googlepay"
                      className="text-t3 font-medium flex flex-col gap-2"
                    >
                      <Googlepay />
                    </label>
                  </div>
                  {selectedPaymentMethod === "googlepay" && (
                    <div className="mt-3">
                      <p className="font-medium text-t3 text-sm">
                        Click to connect your GooglePay account
                      </p>
                      <button className="rounded-xl w-full flex items-center px-4 sm:px-6 gap-2.5 bg-t1 text-white py-3.5 mt-3">
                        <span className="mx-auto">
                          <Googlepay />
                        </span>
                      </button>
                    </div>
                  )}
                </div>
                <div
                  className={` p-[18px] ${
                    selectedPaymentMethod === "coinzoom" ? "bg-bg3" : ""
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <span className="w-5 flex justify-center">
                      <input
                        id="coinzoom"
                        className="accent-blue checked:w-5 checked:h-5"
                        type="radio"
                        name="payment"
                        value="coinzoom"
                        onChange={handleRadioChange}
                      />
                    </span>
                    <label
                      htmlFor="coinzoom"
                      className="text-t3 font-medium flex flex-col gap-2"
                    >
                      <Coinzoom />
                    </label>
                  </div>

                  {selectedPaymentMethod === "coinzoom" && (
                    <div className="mt-3">
                      <p className="font-medium text-t3 text-sm">
                        Click to connect your GooglePay account
                      </p>
                      <button className="rounded-xl w-full flex items-center px-4 sm:px-6 gap-2.5  text-white py-3.5 bg-green mt-3">
                        <span className="mx-auto">
                          <Coinzoom />
                        </span>
                      </button>
                    </div>
                  )}
                </div>
                <div
                  className={` p-[18px] ${
                    selectedPaymentMethod === "paypal" ? "bg-bg3" : ""
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <span className="w-5 flex justify-center">
                      <input
                        id="paypal"
                        className="accent-blue checked:w-5 checked:h-5"
                        type="radio"
                        name="payment"
                        value="paypal"
                        onChange={handleRadioChange}
                      />
                    </span>
                    <label
                      htmlFor="paypal"
                      className="text-t3 font-medium flex flex-col gap-2"
                    >
                      <Paypal />
                    </label>
                  </div>

                  {selectedPaymentMethod === "paypal" && (
                    <div className="mt-3">
                      <p className="font-medium text-t3 text-sm">
                        Click to connect your GooglePay account
                      </p>
                      <button
                        className="rounded-xl w-full flex items-center px-4 sm:px-6 gap-2.5  text-white py-3.5 bg-yellow mt-3"
                        onClick={handleLoader}
                      >
                        <span className="mx-auto">
                          <Paypal />
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="items-start shadow-shadow1 border border-gray py-4 px-6 rounded-xl text-[13px] leading-tight mt-4">
              I <span className="text-darkpink">choose</span> to subscribe
              because of <span className="text-darkpink">our</span> Lash Cycle
              and I can <span className="text-darkpink">choose</span> to cancel
              anytime
            </div>

            <button className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-7">
              Update Card
            </button>
            <div className="my-24">
              <EncryptionPolicy />
            </div>
            <NeedHelp />
          </div>
          <div className="bg-pink mt-6">
            <div className="max-w-[484px] mx-auto px-4 py-8">
              <ul className="text-t4 space-y-2">
                <li className="flex gap-2">
                  <LashesIcon className="w-6 h-6" />
                  <span className="text-base font-medium">
                    Natural LASHES
                    <br />+ BROWS
                  </span>
                </li>
                <li className="flex gap-2">
                  <SubscribeIcone className="w-6 h-6" />
                  <span className="text-base font-medium">
                    Subscribe because of our <br />
                    Lash Cycle{" "}
                    <span className="text-blue text-base font-medium">
                      Learn more
                    </span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckmarkIcon className="w-6 h-6" />
                  <span className="text-base font-medium">
                    No commitments,
                    <br />
                    Cancel anytime
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {showLoaderModal && <Loader />}
          <Footer />
        </>
      )}

      {showOrderSummaryEditable && (
        <OrderSummaryEditable
          onClose={() => setShowOrderSummaryEditable(false)}
        />
      )}
    </>
  );
};

export default PaymentInfo;
