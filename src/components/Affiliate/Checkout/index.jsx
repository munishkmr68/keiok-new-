"use client";


import { useState } from 'react';
import GooglePlaceSearchPopup from "../../../common/GooglePlaceSearchPopup";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import YourTotal from "@/components/yourtotal";
import SearchIcon from "../../../assets/images/icons/search.svg";
import ApplePay from "../../../assets/images/icons/applepay.svg";
import Googlepay from "../../../assets/images/icons/googlepay-icon.svg";
import Coinzoom from "../../../assets/images/icons/coinzoom-icon.svg";
import Paypal from "../../../assets/images/icons/paypal.svg";
import Inputbox from "@/components/inputbox";
import Footer from "@/common/Footer";
import { ErrorMessage, Form, Formik } from "formik";
import {
  _dateFormatChange,
  _scrollToUp,
} from "@/services/Methods/normalMethods";
import ProductCard from "@/common/ProductCard";
import { ShippingAddressValidationSchema } from "@/services/Methods/validationSchema";
import CountryAndStateInputs from "@/common/inputs/CountryStateDropdown";
import { OuterLoader } from "@/services/Methods/checkoutPayloads";
import _ from "lodash";
import Image from "next/image";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import Link from "next/link";

const InnerInputComp = ({
  name,
  label,
  handleChange,
  handleBlur,
  values,
  setFieldValue,
  _handleOnValueChange,
}) => (
  <div>
    <div className="relative">
      <Inputbox
        name={name}
        id={name}
        placeholder=""
        onChange={(e) => {
          handleChange(e);

          if (name === "shipping_urname") {
            setFieldValue(
              "shipping_lastname",
              _.split(e.target.value, " ")?.[1] || "test"
            );
          }
        }}
        onBlur={(e) => {
          handleBlur(e);
          _handleOnValueChange(e, values, setFieldValue);
        }}
        value={values?.[name]}
        className="floating-input peer"
      />
      <label htmlFor={name} className="floating-label">
        {label}
      </label>
    </div>
    <ErrorMessage name={name} component="p" className="text-sm text-red" />
  </div>
);

const Checkout = (props) => {
  const {
    singleProductData,
    calculatedData,
    googleAddressSearch,
    setGoogleAddressSearch,
    formData,
    countryState,
    setCountryState,
    checkoutError,
    checkoutNormalAddressError,

    _handleOnValueChange,
    _handleGetStartedShipSubmit,
    _handelGooglePlace,
  } = props;

  const [display2Address, setDisplay2Address] = useState(false);

  return (
    <>
       <header className="sticky top-0 z-40  bg-white">
        <div className="mx-auto flex container items-center justify-between py-[18px] px-4">
          <Link
            className="flex items-center gap-1 text-sm font-medium"
            href="/"
          >
            View order summary
            <ChevronDownIcon className="size-4 relative top-[0.8px]" />
          </Link>

          <span className="text-[13px] font-medium text-blue">$20.00</span>
        </div>
        {/* <SubscriptionBar /> */}
      </header>
      <div className="max-w-[484px] mx-auto pt-11 px-4">
        <div className="flex items-center gap-4">
          <Image
            className="w-[140px] h-[140px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <div>
            <span className="text-t5 text-[10px] font-bold flex items-center gap-1">
              <LockClosedIcon className="w-2 h-2" /> CHECKOUT 1 OF 3
            </span>
            <h4 className="mb-0.5 text-t4 font-bold leading-tight">
              <span className="text-darkpink">Choose</span> how to
              <br /> checkout
            </h4>
            <p className="font-medium text-sm">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
          </div>
        </div>
        <div className="space-y-1 text-t3 text-[15px] my-8 font-medium">
          <p>No commitments</p>
          <p>Cancel anytime</p>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto  px-4">
        <div className="border rounded-xl shadow-shadow1 border-gray p-6">
          <div className="space-y-2.5">
            <button className="rounded-xl w-full flex items-center px-4 sm:px-6 gap-2.5 bg-t1 text-white py-3.5">
              <span className="mx-auto">
                <ApplePay />
              </span>
            </button>
            <button className="rounded-xl w-full flex items-center px-4 sm:px-6 gap-2.5 bg-t1 text-white py-3.5">
              <span className="mx-auto">
                <Googlepay />
              </span>
            </button>
            <button className="rounded-xl w-full flex items-center px-4 sm:px-6 gap-2.5  text-white py-3.5 bg-green">
              <span className="mx-auto">
                <Coinzoom />
              </span>
            </button>
            <button className="rounded-xl w-full flex items-center px-4 sm:px-6 gap-2.5  text-white py-3.5 bg-yellow">
              <span className="mx-auto">
                <Paypal />
              </span>
            </button>
          </div>
          <p className="text-xs font-medium max-w-[274px] mx-auto text-center mt-3">
            I <span className="text-darkpink">choose</span> to subscribe because
            of <span className="text-darkpink">our</span> Lash Cycle and I can{" "}
            <span className="text-darkpink">choose</span> to cancel anytime
          </p>
          <div class="flex items-center justify-between my-7">
            <span class="border-b border-gray flex-1"></span>
            <span href="#" class="text-xs text-center text-t5 uppercase px-3">
              or
            </span>
            <span class="border-b border-gray flex-1"></span>
          </div>

          <Formik
            enableReinitialize
            initialValues={formData}
            validationSchema={ShippingAddressValidationSchema("shipping")}
            onSubmit={(values, actions) =>
              _handleGetStartedShipSubmit(values, actions)
            }
          >
            {(fieldProps) => {
              const FieldValues = { ...fieldProps, _handleOnValueChange };
              return (
                <Form className="">
                  {/* <ScrollToFieldError /> */}

                  <p className="mb-4 text-t4 font-bold">Shipping info</p>

                  <div className="flex flex-col gap-[9px]">
                    <InnerInputComp
                      name="shipping_urname"
                      label="Full Name"
                      {...FieldValues}
                    />
                    <InnerInputComp
                      name="emailAddress"
                      label="Email"
                      {...FieldValues}
                    />
                    {googleAddressSearch?.fieldOpen ? (
                      <>
                        <div className="addressField">
                          <InnerInputComp
                            name="shipping_street"
                            label="Address"
                            {...FieldValues}
                          />
                          <p className="text-sm text-red">
                            {checkoutNormalAddressError || checkoutError || ""}
                          </p>
                        </div>
                        {!display2Address ? (
                          <span
                            className="text-sm text-blue"
                            onClick={() => setDisplay2Address(true)}
                          >
                            +Address 2 (optional)
                          </span>
                        ) : (
                          <InnerInputComp
                            name="shipping_street2"
                            label="Apt, suite, company, c/o (optional)"
                            {...FieldValues}
                          />
                        )}
                        <CountryAndStateInputs
                          {...{
                            countryState,
                            setCountryState,
                            onChange: (val, sec) => {
                              if (sec === "state") {
                                FieldValues?.setFieldValue(
                                  "shipping_state",
                                  val
                                );
                              } else {
                                FieldValues?.setFieldValue(
                                  "shipping_country",
                                  val
                                );
                              }
                            },
                          }}
                        />
                        <InnerInputComp
                          name="shipping_zipcode"
                          label="ZIP code"
                          {...FieldValues}
                        />
                        <InnerInputComp
                          name="shipping_city"
                          label="City"
                          {...FieldValues}
                        />
                      </>
                    ) : (
                      <>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center pl-[10px] pointer-events-none">
                            <SearchIcon />
                          </div>

                          <input
                            id="googleaddress"
                            placeholder=""
                            name="googleSearch"
                            className={`location-search-input floating-input peer pl-10`}
                            onMouseDown={() =>
                              setGoogleAddressSearch((prv) => ({
                                ...prv,
                                popupClose: true,
                              }))
                            }
                            onChange={() =>
                              setGoogleAddressSearch((prv) => ({
                                ...prv,
                                popupClose: true,
                              }))
                            }
                          />
                          <label
                            htmlFor="googleaddress"
                            className={`floating-label pl-6`}
                            onMouseDown={() =>
                              setGoogleAddressSearch((prv) => ({
                                ...prv,
                                popupClose: true,
                              }))
                            }
                          >
                            Quickly find your address
                          </label>
                        </div>
                        <button className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-3">
                          Next
                          <ChevronRightIcon className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>

                  <p className="text-red mt-2 text-[16px]">{checkoutError}</p>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="my-24">
          <EncryptionPolicy />
        </div>
        <NeedHelp />
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ul className="space-y-1 sm:text-base text-sm text-t4 font-medium">
            <li className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4" />
              <span>It only works if you use it</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4" />
              <span>Optional affiliate opportunity</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      {/* <GooglePlaceSearchPopup
        callback={(data) => _handelGooglePlace(data)}
        isOpen={googleAddressSearch?.popupClose}
        closeModal={() => setGoogleAddressSearch((prv) => ({
          ...prv, popupClose: false
        }))} /> */}
    </>
  );
};
export default Checkout;
