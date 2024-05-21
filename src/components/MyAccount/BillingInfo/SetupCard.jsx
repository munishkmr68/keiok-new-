"use client";
import React, { useState } from "react";
import Image from "next/image";
import Language from "@/components/language";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../../assets/images/norton-logo.png";
import Footer from "@/common/Footer";
import CardIcons from "../../../assets/images/icons/card-group-icons.svg";
import CardNumber from "../../../assets/images/icons/cardnumber.svg";
import SecurityCode from "../../../assets/images/icons/securitycode.svg";
import GoogleAutocomplete from "@/components/GoogleAutocomplete";
import ChangeDropdown from "./ChangeDropdown";
import PaymentInfo from "./PaymentInfo";
import AddPaymentInfo from "./AddPaymentInfo";
import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/solid";

const SetupCard = (props) => {
  const { _handleSteps } = props;
  const [billingAddressSameAsShipping, setBillingAddressSameAsShipping] =
    useState(true);
  const [additionalAddressFields, setAdditionalAddressFields] = useState(1);
  const [editBillingAddress, setEditBillingAddress] = useState(false);
  const [editShippingAddress, setEditShippingAddress] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [showAddPaymentInfo, setShowAddPaymentInfo] = useState(false);
  const [showSetupCard, setShowSetupCard] = useState(true);

  const scrollToTop = () => {
    // Smooth scroll to the top with a slight delay
    setTimeout(() => {
      const element = document.scrollingElement || document.documentElement;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleButtonClick = () => {
    setShowPaymentInfo(true);
    setShowSetupCard(false);
    setShowAddPaymentInfo(false);
    scrollToTop();
  };

  const handleBackClick = () => {
    setShowPaymentInfo(false);
    setShowSetupCard(false);
    setShowAddPaymentInfo(true);
    scrollToTop();
  };


  const handleAddAddressField = () => {
    setAdditionalAddressFields((prevFields) => prevFields + 1);
  };

  const handleEditClick = () => {
    setEditBillingAddress(!editBillingAddress);
  };
  const handleEditShippingClick = () => {
    setEditShippingAddress(!editShippingAddress);
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto mb-5 px-4 pt-12">
        <span
          className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
          onClick={() => _handleSteps('back')}
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </span>
        <div className="flex items-center flex-col">
          <LockCircleIcon className="mb-6 mt-8" />
          <h3 className="mb-4">Add your Credit or Debit Card</h3>
          <CardIcons />
        </div>
      </div>

      <div className="bg-bg3 py-10 px-4">
        <div className="max-w-[484px] mx-auto">
          <Image
            className="max-w-[66px] ml-auto mb-1"
            src={NortonLogo}
            alt="logo"
          />
          <div className="flex flex-col gap-[9px]">
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

            <div className="grid grid-cols-2 gap-2">
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
                  <label htmlFor="securitycode" className="floating-label">
                    Security Code
                  </label>
                </div>
                <p className="text-red text-sm mt-0.5">
                  Please enter a security code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto px-4 py-8">
        <div className="border-t border-gray pt-[30px]">
          <div className="font-medium text-t2 mb-2">Billing Address</div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="w-5 flex justify-center">
              <input
                id="address"
                className="accent-blue w-4 h-4"
                type="checkbox"
                name="status"
                checked={billingAddressSameAsShipping}
                onChange={() =>
                  setBillingAddressSameAsShipping(
                    !billingAddressSameAsShipping
                  )
                }
              />
            </span>
            <label htmlFor="address" className="text-t3 leading-[21px]">
              Billing address same as shipping
            </label>
          </div>
        </div>

        {!editBillingAddress && (
          <div className="flex flex-col gap-4 border-y border-gray py-[30px] mt-[30px]">
            <div>
              <div className="font-medium text-t2 mb-2 flex justify-between items-center">
                Billing Address
                <ChangeDropdown onClick={handleEditClick} />
              </div>
              <p className="text-t4 text-sm">
                Erica Jones
                <br />
                USA
                <br />
                3836 E Stiles Ln
                <br />
                Gilbert, AZ 85295-0150
                <br />
                Apt 1
              </p>
            </div>
            <div>
              <div className="font-medium text-t2 mb-2">Email</div>
              <p className="text-t4 text-sm">j ........ 2@gmail.com</p>
            </div>
          </div>
        )}

        {editBillingAddress && (
          <div className="flex flex-col gap-[9px] mt-6">
            <div className="relative">
              <Inputbox
                name="cardholder"
                id="cardholder"
                autocomplete="cardholder"
                placeholder=""
                className="floating-input peer"
              />
              <label htmlFor="cardholder" className="floating-label">
                Cardholder Name
              </label>
            </div>

            {[...Array(additionalAddressFields)].map((_, index) => (
              <div key={index} className="relative">
                <GoogleAutocomplete
                  manually={false}
                  label={`Address`}
                  InputClassName="pl-3.5"
                  LabelClassName="!pl-0"
                />
              </div>
            ))}
            <span
              className="text-sm text-blue"
              onClick={handleAddAddressField}
            >
              +Address {additionalAddressFields + 1} (optional)
            </span>

            <div className="relative">
              <Inputbox
                name="zipcode"
                id="zipcode"
                autocomplete="zipcode"
                placeholder=""
                className="floating-input peer"
              />
              <label htmlFor="zipcode" className="floating-label">
                ZIP code
              </label>
            </div>

            <div className="relative">
              <Inputbox
                name="city"
                id="city"
                autocomplete="city"
                placeholder=""
                className="floating-input peer"
              />
              <label htmlFor="city" className="floating-label">
                City, State
              </label>
            </div>

            <div className="flex mt-[30px] gap-4">
              <button
                className="primary-button w-auto font-medium min-w-[124px]"
                onClick={() => setEditBillingAddress(false)}
              >
                Save
              </button>
              <button
                className="primary-button-text-only w-auto font-medium"
                onClick={() => setEditBillingAddress(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {!editShippingAddress && (
          <div className="flex flex-col gap-4 border-b border-gray pb-[30px] mt-[30px]">
            <div>
              <div className="font-medium text-t2 mb-2 flex justify-between items-center">
                Shipping Address
                <ChangeDropdown onClick={handleEditShippingClick} />
              </div>
              <p className="text-t4 text-sm">
                Erica Jones
                <br />
                USA
                <br />
                3836 E Stiles Ln
                <br />
                Gilbert, AZ 85295-0150
                <br />
                Apt 1
              </p>
            </div>
            <div>
              <div className="font-medium text-t2 mb-2">Email</div>
              <p className="text-t4 text-sm">j ........ 2@gmail.com</p>
            </div>
          </div>
        )}

        {editShippingAddress && (
          <div className="flex flex-col gap-[9px] mt-6">
            <div className="relative">
              <Inputbox
                name="cardholder"
                id="cardholder"
                autocomplete="cardholder"
                placeholder=""
                className="floating-input peer"
              />
              <label htmlFor="cardholder" className="floating-label">
                Cardholder Name
              </label>
            </div>

            {[...Array(additionalAddressFields)].map((_, index) => (
              <div key={index} className="relative">
                <GoogleAutocomplete
                  label={`Address`}
                  InputClassName="pl-3.5"
                  LabelClassName="!pl-0"
                />
              </div>
            ))}
            <span
              className="text-sm text-blue"
              onClick={handleAddAddressField}
            >
              +Address {additionalAddressFields + 1} (optional)
            </span>

            <div className="relative">
              <Inputbox
                name="zipcode"
                id="zipcode"
                autocomplete="zipcode"
                placeholder=""
                className="floating-input peer"
              />
              <label htmlFor="zipcode" className="floating-label">
                ZIP code
              </label>
            </div>

            <div className="relative">
              <Inputbox
                name="city"
                id="city"
                autocomplete="city"
                placeholder=""
                className="floating-input peer"
              />
              <label htmlFor="city" className="floating-label">
                City, State
              </label>
            </div>

            <div className="flex mt-[30px] gap-4">
              <button
                className="primary-button w-auto font-medium min-w-[124px]"
                onClick={() => setEditShippingAddress(false)}
              >
                Save
              </button>
              <button
                className="primary-button-text-only w-auto font-medium"
                onClick={() => setEditShippingAddress(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <button className="primary-button mt-8" onClick={() => _handleSteps('revert', ['step1', 'step2'])}>
          Add Payment Method
        </button>
        <button className="primary-button-outlined mt-2" onClick={() => _handleSteps('back')}>Cancel</button>
      </div>


    </>
  );
};

export default SetupCard;
