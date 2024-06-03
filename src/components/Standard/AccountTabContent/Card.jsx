"use client";
import React, { useState } from "react";

import EncryptionPolicy from "@/components/EncryptionPolicy";
import Image from "next/image";
import myLashMyClub from "../../../assets/images/mylash-myclub-img.png";
import NortonLogo from "../../../assets/images/norton-logo.png";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";
import Amex from "../../../assets/images/icons/amex-icon.svg";
import PaymentIcon from "../../../assets/images/icons/payment-icons.svg";
import CardNumber from "../../../assets/images/icons/cardnumber.svg";
import SecurityCode from "../../../assets/images/icons/securitycode.svg";
import ApplePay from "../../../assets/images/icons/applepay.svg";
import Googlepay from "../../../assets/images/icons/google-pay-black.svg";
import Coinzoom from "../../../assets/images/icons/coinzoom-black.svg";
import Paypal from "../../../assets/images/icons/paypal.svg";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/solid";

import Inputbox from "@/components/inputbox";
import GoogleAutocomplete from "@/components/GoogleAutocomplete";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";
import GetOrderModal from "./GetOrderModal";
import RescheduleModal from "./RescheduleModal";
import ChangeDropdown from "@/components/Affiliate/SetupShop/ChangeDropdown";

const Card = (props) => {
  
  const [isEditingShipping, setIsEditingShipping] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPayWith, setIsEditingPayWith] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showLoaderModal, setShowLoaderModal] = useState(false);
  const [openGetOrderModal, setOpenGetOrderModal] = useState(false);
  const [openRechedule, setOpenRechedule] = useState(false);

  const handleLoader = () => {
    setShowLoaderModal(true);
  };

  const handleGetOrderModal = () => {
    setOpenGetOrderModal(true);
  };

  const handleRescheduleOrderModal = () => {
    setOpenRechedule(true);
  };

  const handleRadioChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <>
      <div className="border rounded-xl shadow-shadow1 border-gray px-6 pt-8 mt-6">
        <p className="text-t4 font-medium mb-4">Tues, April 23, 2024</p>
        <div>
          <button
            type="button"
            className="pink-button font-medium flex-1 py-2"
            onClick={handleGetOrderModal}
          >
            Send now
          </button>
          <div className="flex mt-3 gap-4">
            <button
              type="button"
              className="primary-button font-medium flex-1 py-2"
              onClick={handleRescheduleOrderModal}
            >
              Reschedule
            </button>
            <button className="dark-button flex-1 py-2">Cancel</button>
          </div>
        </div>
        <div class="flex items-center justify-between my-7">
          <span class="border-b border-gray flex-1"></span>
          <span href="#" class="text-xs text-center text-t5 uppercase px-3">
            ORDER
          </span>
          <span class="border-b border-gray flex-1"></span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Image className="w-[248px] mb-3" src={myLashMyClub} alt="user-img" />
          <h4 className="font-bold text-t4">
            MY lash <span className="text-darkpink">+</span> MY club
          </h4>
          <p className="font-medium">
            <span className="text-[9px]">with</span> Ashley Jackson
          </p>
          <h6 className="text-base text-darkpink font-bold">
            lash + brow serum
          </h6>
          <h6 className="text-base text-darkpink font-bold">
            affiliate opportunity
          </h6>
        </div>

        <ul className="space-y-1 text-[13px] text-t4 font-medium mt-5">
          <li className="flex items-center gap-2">
            <SubscribeIcone className="w-6 h-6" />
            <span>
              Subscribe because of <span className="text-darkpink">our</span>{" "}
              <span className="underline">Lash Cycle
                </span>
            </span>
          </li>
        </ul>
        <div className="divide-y divide-dashed divide-gray mt-6 text-sm text-t4">
          <div className="flex  justify-between py-3">
            <span>Size</span>
            <span>6-week supply (2ml)</span>
          </div>
          <div className="flex text-t4 justify-between py-3">
            <span>Delivered and billed</span>
            <span>Every 6 weeks</span>
          </div>
          <div className="flex text-t4 justify-between py-3">
            <span>Items</span>
            <span>1</span>
          </div>
        </div>

        <div className="bg-pink -mx-6">
          <div className="max-w-[484px] mx-auto px-6 py-4 text-sm text-t1 space-y-2">
            <div className="flex justify-between">
              <span>Price</span>
              <span>$89.50</span>
            </div>
            
          </div>
        </div>
        <div className="divide-y divide-solid divide-gray text-t1">
          <div className="pt-6 pb-8">
            <div className="font-medium text-t2 mb-1 flex justify-between items-center">
              Shipping Address
              <ChangeDropdown
                onClick={() => setIsEditingShipping(!isEditingShipping)}
              />
            </div>
            {isEditingShipping ? (
              <div className="flex flex-col gap-[9px] mt-6">
                <div className="relative">
                  <Inputbox
                    name="name"
                    id="name"
                    placeholder=""
                    className="floating-input peer"
                  />
                  <label htmlFor="name" className="floating-label">
                    Full Name
                  </label>
                </div>

                <GoogleAutocomplete
                  manually={false}
                  label={`Address`}
                  InputClassName="pl-3.5"
                  LabelClassName="!pl-0"
                />

                <div className="relative">
                  <Inputbox
                    name="name"
                    id="name"
                    placeholder=""
                    className="floating-input peer"
                  />
                  <label htmlFor="name" className="floating-label">
                    ZIP code
                  </label>
                </div>
                <div className="relative">
                  <Inputbox
                    name="name"
                    id="name"
                    placeholder=""
                    className="floating-input peer"
                  />
                  <label htmlFor="name" className="floating-label">
                    City, State
                  </label>
                </div>

                <div className="flex mt-3 gap-4">
                  <button
                    type="button"
                    className="primary-button font-medium flex-1 py-2"
                    onClick={() => setIsEditingShipping(!isEditingShipping)}
                  >
                    Save
                  </button>
                  <button
                    className="primary-button-outlined flex-1 py-2"
                    onClick={() => setIsEditingShipping(!isEditingShipping)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-t4 text-sm">
                Jane Doe
                  <br />
                  2134 Oak Bluff Dr
                  <br />
                  1
                  <br />
                  Davenport, FL 33837-3691
                  <br />
                  United States
                </p>
              </div>
            )}
          </div>

          <div className="py-6">
            <div className="flex flex-col gap-4 ">
              <div>
                <div className="font-medium text-t2 flex justify-between">
                  <div>
                    <div className="font-medium text-t2">Email</div>
                    <p className="text-t4 text-sm">j ........ 2@gmail.com</p>
                  </div>
                  <ChangeDropdown
                    onClick={() => setIsEditingEmail(!isEditingEmail)}
                  />
                </div>
              </div>
            </div>
            {isEditingEmail && (
              <div className="flex flex-col gap-[9px] mt-6">
                <div className="relative">
                  <Inputbox
                    name="email"
                    id="email"
                    placeholder=""
                    className="floating-input peer"
                  />
                  <label htmlFor="email" className="floating-label">
                    email
                  </label>
                </div>

                <div className="flex mt-3 gap-4">
                  <button
                    type="button"
                    className="primary-button font-medium flex-1 py-2"
                    onClick={() => setIsEditingEmail(!isEditingEmail)}
                  >
                    Save
                  </button>
                  <button
                    className="primary-button-outlined flex-1 py-2"
                    onClick={() => setIsEditingEmail(!isEditingEmail)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="py-6">
            <div className="flex flex-col gap-2 ">
              <div className="font-medium text-t2 flex justify-between">
                <div>Pay with</div>
                <ChangeDropdown
                  onClick={() => setIsEditingPayWith(!isEditingPayWith)}
                />
              </div>
              <div className="flex items-center text-sm text-t2 gap-1">
                <Amex />{" "}
                <span className="h-[6px] inline-block leading-[0px]">...</span>{" "}
                <span>1002</span>
              </div>
            </div>
            {isEditingPayWith && (
              <div className="flex flex-col gap-[9px] mt-6">
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
                            <label
                              htmlFor="cardnumber"
                              className="floating-label"
                            >
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
                <div className="flex mt-3 gap-4">
                  <button
                    type="button"
                    className="primary-button font-medium flex-1 py-2"
                    onClick={() => setIsEditingPayWith(!isEditingPayWith)}
                  >
                    Save
                  </button>
                  <button
                    className="primary-button-outlined flex-1 py-2"
                    onClick={() => setIsEditingPayWith(!isEditingPayWith)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 pb-8">
            <h6 className="label pb-3 font-bold border-b border-dashed border-gray">
              Your Total
            </h6>
            <div className="flex text-sm  text-t4 justify-between py-3 border-0">
              <span>Subtotal</span>
              <span >$89.50</span>
            </div>
            <div className="bg-bg3 -mx-6 py-2 px-6 text-sm flex flex-col gap-1">
              <div className="flex text-t4 justify-between">
                <span>Shipping cost</span>
                <span>$4.95</span>
              </div>
              
            </div>
            <div className="flex text-t4  text-sm justify-between py-3 border-b border-gray">
              <span>MD State Tax (0.06%)</span>
              <span>$2.06</span>
            </div>
            <div className="flex text-base text-t2 justify-between pt-3 font-medium">
              <span>Your Total</span>
              <span>$96.51</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-14">
        <EncryptionPolicy />
      </div>

      {openGetOrderModal && (
        <GetOrderModal onClose={() => setOpenGetOrderModal(false)} />
      )}
{openRechedule && (
        <RescheduleModal onClose={() => setOpenRechedule(false)} setShowRestart={props?.setShowRestart} />
      )}
     
    </>
  );
};

export default Card;
