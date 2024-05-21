"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NortonLogo from "../../../assets/images/norton-logo.png";
import GoogleAutocomplete from "@/components/GoogleAutocomplete";
import { Form, Formik } from "formik";
import { ShippingAddressValidationSchema } from "@/services/Methods/validationSchema";
import CountryAndStateInputs from "@/common/inputs/CountryStateDropdown";
import SuggestionAddressPopup from "@/common/SuggestionAddressPopup";
import _ from "lodash";
import { AddressButtonSection, AddressIconSection, InnerInputComp } from "@/components/MyAccount/AccountInfo/CommonAccountSection";

const AddNewShippingAddress = (props) => {
  const {
    loginUserData,
    isLoading, loginLoading, checkoutLoading,
    //getStartedHook
    _acceptOrNotAddressOption, useDefaultAddressOrNot, formData, setFormData, countryState, setCountryState,
    checkoutError, checkoutNormalAddressError,
    _handleOnValueChange, _handleAddressChangeSubmit, _handelGooglePlace, _handleAddressAdd,
    _handleSteps
  } = props;

  const [display2Address, setDisplay2Address] = useState(false);

  useEffect(() => {
    if (loginUserData?.firstName) {
      setFormData({
        ...formData,
        shipping_urname: `${loginUserData?.firstName + ' ' + loginUserData?.lastName}`,
        shipping_lastname: loginUserData?.lastName,
        emailAddress: loginUserData?.emailAddress,
      })
    }
  }, [loginUserData, countryState])

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          ...formData, shipping_urname: `${loginUserData?.firstName + ' ' + loginUserData?.lastName}`,
        }}
        validationSchema={ShippingAddressValidationSchema('shipping')}
        onSubmit={(values, actions) => _handleAddressChangeSubmit(null, { values, actions }, (data) => {
          _handleAddressAdd(values);
        })}
      >
        {((fieldProps) => {
          const FieldValues = { ...fieldProps, _handleOnValueChange }
          return (
            <Form>
              <AddressIconSection {...{ setFormData, setCountryState, _handleSteps, title: "Add New Address" }} />
              <div className="bg-bg3 py-8 px-4">
                <div className="max-w-[484px] mx-auto">
                  <Image
                    className="max-w-[66px] ml-auto mb-1"
                    src={NortonLogo}
                    alt="logo"
                  />
                  <div className="flex flex-col gap-[9px]">
                    <InnerInputComp disabled={true} name="shipping_urname" label="Full Name" {...FieldValues} />

                    {FieldValues?.values?.shipping_street
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

                        <GoogleAutocomplete
                          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                          </svg>}
                          manually={false}
                          label={`Quickly find your address`}
                          InputClassName="pl-10 "
                          LabelClassName="!pl-6"
                          callback={(data) => _handelGooglePlace(data, 'addressChange', FieldValues)}
                        />
                      </div>
                    }
                  </div>
                </div>
              </div>
              <AddressButtonSection {...{
                saveText: (isLoading || loginLoading || checkoutLoading) ? 'Processing ....' : "Add New Address",
                checkoutNormalAddressError, checkoutError, FieldValues, setFormData,
                setCountryState, _handleSteps
              }} />

            </Form>
          )
        })}

      </Formik>
      <SuggestionAddressPopup {...{
        _acceptOrNotAddressOption,
        bypass: useDefaultAddressOrNot?.bypassOrNot,
        ourAddress: formData,
        addressOptions: useDefaultAddressOrNot?.addessData,
      }} />
      {/* <ConfirmAddressModal
        isOpen={isConfirmAddressModalOpen}
        onClose={closeConfirmAddressModal}
        addNewClick={handleAddNewClick}
      /> */}
    </>
  );
};

export default AddNewShippingAddress;
