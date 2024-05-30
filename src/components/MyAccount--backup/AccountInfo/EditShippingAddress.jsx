"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NortonLogo from "../../../assets/images/norton-logo.png";
import GoogleAutocomplete from "@/components/GoogleAutocomplete";
import { ErrorMessage, Form, Formik } from "formik";
import { ShippingAddressValidationSchema } from "@/services/Methods/validationSchema";
import CountryAndStateInputs from "@/common/inputs/CountryStateDropdown";
import SuggestionAddressPopup from "@/common/SuggestionAddressPopup";
import _, { values } from "lodash";
import { AddressButtonSection, AddressIconSection, InnerInputComp } from "@/components/MyAccount/AccountInfo/CommonAccountSection";


const EditShippingAddress = (props) => {
  const {
    editPrefferedAddress,
    isLoading, loginLoading, checkoutLoading,
    //getStartedHook
    _acceptOrNotAddressOption, useDefaultAddressOrNot, formData, setFormData, countryState, setCountryState,
    checkoutError, checkoutNormalAddressError,
    _handleOnValueChange, _handleAddressChangeSubmit, _handelGooglePlace, _handleEditAddress,
    _handleSteps
  } = props;

  const [display2Address, setDisplay2Address] = useState(false);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={formData}
        validationSchema={ShippingAddressValidationSchema('shipping')}
        onSubmit={(values, actions) => _handleAddressChangeSubmit(null, { values, actions }, (data) => {
          _handleEditAddress(editPrefferedAddress, values, 'submit');
        })}
      >
        {((fieldProps) => {
          const FieldValues = { ...fieldProps, _handleOnValueChange }
          return (
            <Form>
              <AddressIconSection {...{ setFormData, setCountryState, _handleSteps, title: "Edit your shipping address" }} />
              <div className="bg-bg3 py-8 px-4">
                <div className="max-w-[484px] mx-auto">
                  <Image
                    className="max-w-[66px] ml-auto mb-1"
                    src={NortonLogo}
                    alt="logo"
                  />
                  <div className="flex flex-col gap-[9px]">
                    <InnerInputComp disabled={true} name="shipping_urname" label="Full Name" {...FieldValues} />
                    <div className="relative">
                      <GoogleAutocomplete
                        defaultValue={FieldValues?.values?.shipping_street}
                        onChange={(val) => {
                          FieldValues?.setFieldValue('shipping_street', val);
                        }}
                        manually={false}
                        label={`Address`}
                        InputClassName={`pl-3 ${_.isEmpty(FieldValues?.errors) ? "" : (FieldValues?.errors?.shipping_street) ? 'invalid' : 'valid'}`}
                        LabelClassName="!pl-1"
                        callback={(data) => _handelGooglePlace(data, 'addressChange', FieldValues)}
                      />
                      <ErrorMessage name='shipping_street' component="p" className="text-sm text-red" />
                      <p className='text-sm text-red'>{checkoutNormalAddressError || checkoutError || ''}</p>
                    </div>

                    {(!display2Address && !FieldValues?.values?.shipping_street2)
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

                  </div>
                </div>
              </div>
              <AddressButtonSection {...{
                saveText: (isLoading || loginLoading || checkoutLoading) ? 'Processing ....' : "Save Details",
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

export default EditShippingAddress;
