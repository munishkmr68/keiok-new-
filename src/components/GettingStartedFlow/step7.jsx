"use client";
import GooglePlaceSearchPopup from '../../common/GooglePlaceSearchPopup';
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import YourTotal from "@/components/yourtotal";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import SearchIcon from "../../assets/images/icons/search.svg";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import Inputbox from "@/components/inputbox";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import Lock from "../../assets/images/icons/lock-white.svg";
import { ErrorMessage, Form, Formik } from "formik";
import { _dateFormatChange, _scrollToUp } from "@/services/Methods/normalMethods";
import ProductCard from "@/common/ProductCard";
import { ShippingAddressValidationSchema } from "@/services/Methods/validationSchema";
import CountryAndStateInputs from '@/common/inputs/CountryStateDropdown';
import { OuterLoader } from '@/services/Methods/checkoutPayloads';
import _ from 'lodash';
import { useState } from 'react';


const InnerInputComp = ({ name, label, handleChange, handleBlur, values, setFieldValue, _handleOnValueChange }) => (
  <div>
    <div className="relative">
      <Inputbox
        name={name}
        id={name}
        placeholder=""
        onChange={(e) => {
          handleChange(e);

          if (name === 'shipping_urname') {
            setFieldValue('shipping_lastname', _.split(e.target.value, ' ')?.[1] || 'test');
          }
        }}
        onBlur={(e) => {
          handleBlur(e);
          _handleOnValueChange(e, values, setFieldValue)
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

const Step7 = (props) => {
  const {
    singleProductData, calculatedData, googleAddressSearch, setGoogleAddressSearch, formData, countryState, setCountryState,
    checkoutError, checkoutNormalAddressError,

    _handleOnValueChange, _handleGetStartedShipSubmit, _handelGooglePlace,
  } = props;

  const [display2Address, setDisplay2Address] = useState(false);

  return (
    <>

      <Formik
        enableReinitialize
        initialValues={formData}
        validationSchema={ShippingAddressValidationSchema('shipping')}
        onSubmit={(values, actions) => _handleGetStartedShipSubmit(values, actions)}
      >
        {(fieldProps) => {
          const FieldValues = { ...fieldProps, _handleOnValueChange }
          return (
            <Form>
              {/* <ScrollToFieldError /> */}
              <div className="max-w-[484px] mx-auto  px-4">
                <LockCircleIcon className="mb-6 mt-8" />
                <h3 className="mb-6">Where should we ship to?</h3>
                <ul className="text-input1 space-y-1 mb-6 sm:text-lg text-base">
                  <li className="flex items-center gap-2">
                    <CheckmarkIcon className="w-4 h-4" />
                    <span className="font-medium">
                      You can change your address anytime
                    </span>
                  </li>
                  <li className="flex items-center  gap-2">
                    <CheckmarkIcon className="w-4 h-4" />
                    <span className="font-medium">Cancel anytime</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-[9px]">
                  <InnerInputComp name="shipping_urname" label="Full Name" {...FieldValues} />
                  <InnerInputComp name="emailAddress" label="Email" {...FieldValues} />
                  {googleAddressSearch?.fieldOpen
                    ?
                    <>
                      <div className='addressField'>
                        <InnerInputComp name="shipping_street" label="Address" {...FieldValues} />
                        <p className='text-sm text-red'>{checkoutNormalAddressError || checkoutError || ''}</p>
                      </div>
                      {!display2Address
                        ?
                        <span className="text-sm text-blue" onClick={() => setDisplay2Address(true)}>+Address 2 (optional)</span>
                        :
                        <InnerInputComp name="shipping_street2" label="Apt, suite, company, c/o (optional)" {...FieldValues} />
                      }
                      <CountryAndStateInputs {...{
                        countryState, setCountryState, onChange: (val, sec) => {
                          if (sec === 'state') {
                            FieldValues?.setFieldValue('shipping_state', val);
                          } else {
                            FieldValues?.setFieldValue('shipping_country', val);
                          }
                        }
                      }} />
                      <InnerInputComp name="shipping_zipcode" label="ZIP code" {...FieldValues} />
                      <InnerInputComp name="shipping_city" label="City" {...FieldValues} />
                    </>
                    :
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center pl-[10px] pointer-events-none">
                        <SearchIcon />
                      </div>

                      <input
                        id="googleaddress"
                        placeholder=""
                        name="googleSearch"
                        className={`location-search-input floating-input peer pl-10`}
                        onMouseDown={() => setGoogleAddressSearch((prv) => ({
                          ...prv, popupClose: true,
                        }))}
                        onChange={() => setGoogleAddressSearch((prv) => ({
                          ...prv, popupClose: true,
                        }))}
                      />
                      <label
                        htmlFor="googleaddress"
                        className={`floating-label pl-6`}
                        onMouseDown={() => setGoogleAddressSearch((prv) => ({
                          ...prv, popupClose: true,
                        }))}
                      >
                        Quickly find your address
                      </label>
                    </div>
                  }

                </div>
                <hr className="border-gray mt-[30px]" />
                <p className='text-red mt-2 text-[16px]'>{checkoutError}</p>
                <div className="py-[30px]">
                  {calculatedData?.autoshipCalculateData
                    ?
                    <YourTotal orderData={calculatedData?.autoshipCalculateData} />
                    :
                    <OuterLoader section="oneTime" />
                  }
                </div>
                <Freeshipping />
                <ProductCard {...{ singleProductData, className: "gap-4 my-7" }} />
              </div>
              <div className="bg-pink">
                <div className="max-w-[484px] mx-auto  px-4 py-5">
                  <div className="flex flex-col sm:flex-row justify-between gap-3">
                    <div>
                      <h6 className="flex items-center gap-2 text-base sm:text-lg font-medium text-2 mb-2.5">
                        <SubscribeIcone className="w-6 h-6" />
                        Delivered & Billed
                      </h6>
                      <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px]">
                        <li className="text-[10px] sm:text-xs text-t4">
                          First Delivery & Billing Date
                        </li>
                        <li className="text-[10px] sm:text-xs text-t4">
                          Next Delivery & Billing Date
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="flex items-center gap-2 text-base sm:text-lg font-medium text-2 mb-2.5">
                        <SubscribeIcone className="w-6 h-6" />
                        Every 3 Months
                      </h6>
                      <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px] sm:text-right">
                        <li className="text-[10px] sm:text-xs text-t4">Today</li>
                        <li className="text-[10px] sm:text-xs text-t4">
                          {_dateFormatChange(new Date().setDate(new Date().getDate() + 30), 'MMM Do, YYYY')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[484px] mx-auto px-4 py-8">
                <ShoppingWith />
                <div className="mt-24">
                  <Language />
                </div>
              </div>
              <Footer />
              <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
                <div className="max-w-[484px] mx-auto px-4 py-8">
                  <ButtonNextStep
                    type='button'
                    handleClick={() => {
                      if (!checkoutNormalAddressError && !checkoutError) {
                        fieldProps?.handleSubmit();
                        setTimeout(() => {
                          if (!_.isEmpty(fieldProps?.errors)) {
                            _scrollToUp();
                          }
                        }, 1000);
                      }
                    }}
                    label="Continue"
                    // amt={`$${FloatValues(singleProductData?.retail_oneTime)}`}
                    icon={<Lock />}
                  />
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>

      <GooglePlaceSearchPopup
        callback={(data) => _handelGooglePlace(data)}
        isOpen={googleAddressSearch?.popupClose}
        closeModal={() => setGoogleAddressSearch((prv) => ({
          ...prv, popupClose: false
        }))} />
    </>

  );
};
export default Step7;

