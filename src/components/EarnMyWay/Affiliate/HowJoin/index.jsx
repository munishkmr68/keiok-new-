import React, { useState } from "react";
import Image from "next/image";
import userImg from "../../../../assets/images/user-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import ArrowbottomIcon from "../../../../assets/images/icons/arrowbottomicon.svg";
import Inputbox from "@/components/inputbox";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Faq from "./faq";
import BirthdateComponent from "../../../../common/birthDate";
import { ErrorMessage } from "formik";
import { DatePicker } from 'antd';
import { REFFERAL_VALUES, _dateFormatChange } from "@/services/Methods/normalMethods";
import moment from "moment";
import EmailComponent from "@/common/EmailChange";
import ChoosePathComponent from "@/common/ChoosePath";
import CountryAndStateInputs from "@/common/inputs/CountryStateDropdown";
import GooglePlaceSearchPopup from "@/common/GooglePlaceSearchPopup";
import SearchIcon from "../../../../assets/images/icons/search.svg";

const HowJoin = ({ onBackClick, props, fieldValue }) => {
  const [changeBirthDay, setChangeBirthDay] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [changePath, setChangePath] = useState(false);
  const [display2Address, setDisplay2Address] = useState(false);
  const { scrollToTop, formData, setFormData, googleAddressSearch, countryState, setCountryState, setGoogleAddressSearch, _handelGooglePlace } = props

  const handleBackClick = () => {
    // Call the parent component's function to go back to the previous step
    onBackClick();
    scrollToTop();
  };
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4">
        <h3 className="mb-2 mt-5">Choose how to join</h3>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-3">
          <span className="text-bg1 text-base sm:text-lg font-medium">
            Joining as a Brand <span className="capitalize">{fieldValue?.values?.pathValue}</span> is free and easy
          </span>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 pt-2">
        <div className="my-6 pt-6 border-t border-gray">
          <div className="text-t2 font-medium mb-[18px]">Join as a:</div>
          <fieldset className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="w-5 flex justify-center ">
                <input
                  id="individual"
                  className="accent-blue checked:w-5 checked:h-5"
                  type="radio"
                  name="joinAs"
                  checked={fieldValue?.values?.joinAs === 'Individual'}
                  onChange={(e) => {
                    fieldValue?.handleChange(e);
                    setFormData((prv) => ({ ...prv, joinAs: e?.target?.value }))
                  }}
                  value="Individual"
                />
              </span>
              <label htmlFor="individual" className="text-t1">
                Individual
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-5 flex justify-center">
                <input
                  id="business"
                  className="accent-blue checked:w-5 checked:h-5"
                  type="radio"
                  name="joinAs"
                  checked={fieldValue?.values?.joinAs === 'Business'}
                  onChange={(e) => {
                    fieldValue?.handleChange(e);
                    setFormData((prv) => ({ ...prv, joinAs: e?.target?.value }))
                  }}
                  value="Business"
                />
              </span>
              <label htmlFor="business" className="text-t1">
                Business
              </label>
            </div>
            {fieldValue?.values?.joinAs === 'Business' && <>
              <Inputbox
                name="businessName"
                className={`max-h-[54px] peer ${!!fieldValue?.errors?.businessName ? 'invalid' : 'valid'}`}
                id="businessName"
                placeholder="Business Name"
                value={fieldValue?.values?.businessName}
                onChange={(e) => {
                  fieldValue?.handleChange(e);
                  setFormData((prv) => ({ ...prv, businessName: e?.target?.value }))
                }}
                onBlur={fieldValue?.handleBlur}
              />
              <ErrorMessage name="businessName" component="p" className="text-sm text-red" />
              <DatePicker
                name="businessCreationDate"
                format="DD/MM/YYYY"
                value={fieldValue?.values?.businessCreationDate}
                disabledDate={(current) => {
                  return current && current > moment(new Date());
                }}
                onChange={(date, dateString) => {
                  console.log("date", date, "dateString", dateString)
                  fieldValue?.setFieldValue("businessCreationDate", date)
                  setFormData((prv) => ({ ...prv, businessCreationDate: date }))
                }}
                allowClear={true}
                status={!!fieldValue?.errors?.businessCreationDate && 'error'}
                style={{ width: '100%', maxHeight: '54px', height: '54px', borderColor: !fieldValue?.errors?.businessCreationDate && '#51c96d' }}
                placeholder={['Business Creation Date (DD/MM/YYYY)']}
              />
              <ErrorMessage name="businessCreationDate" component="p" className="text-sm text-red" />
              {googleAddressSearch?.fieldOpen
                ?
                <>
                  <div className='addressField'>
                    <Inputbox
                      name="businessAddress"
                      className={`max-h-[54px] peer ${!!fieldValue?.errors?.businessAddress ? 'invalid' : 'valid'}`}
                      id="businessAddress"
                      placeholder="Business Address"
                      value={fieldValue?.values?.businessAddress}
                      onChange={(e) => {
                        fieldValue?.handleChange(e);
                        setFormData((prv) => ({ ...prv, businessAddress: e?.target?.value }))
                      }}
                      onBlur={fieldValue?.handleBlur}
                    />
                    <ErrorMessage name="businessAddress" component="p" className="text-sm text-red" />
                  </div>
                  {!display2Address
                    ?
                    <span className="text-sm text-blue" onClick={() => setDisplay2Address(true)}>+Address 2 (optional)</span>
                    :
                    <>
                      <Inputbox
                        name="businessAddress2"
                        className={`max-h-[54px] peer ${!!fieldValue?.values?.businessAddress2 ? 'valid' : ''}`}
                        id="businessAddress2"
                        placeholder="Apt, suite, company, c/o (optional)"
                        value={fieldValue?.values?.businessAddress2}
                        onChange={(e) => {
                          fieldValue?.handleChange(e);
                          setFormData((prv) => ({ ...prv, businessAddress2: e?.target?.value }))
                        }}
                        onBlur={fieldValue?.handleBlur}
                      />
                      <ErrorMessage name="businessAddress2" component="p" className="text-sm text-red" />
                    </>
                  }
                  <CountryAndStateInputs {...{
                    countryState, setCountryState, onChange: (val, sec) => {
                      if (sec === 'state') {
                        fieldValue?.setFieldValue('shipping_state', val);
                      } else {
                        fieldValue?.setFieldValue('shipping_country', val);
                      }
                    }
                  }} />
                  <Inputbox
                    name="businessZip"
                    className={`max-h-[54px] peer  ${!!fieldValue?.errors?.businessZip ? 'invalid' : 'valid'}`}
                    id="businessZip"
                    placeholder="Business ZIP"
                    value={fieldValue?.values?.businessZip}
                    onChange={(e) => {
                      fieldValue?.handleChange(e);
                      setFormData((prv) => ({ ...prv, businessZip: e?.target?.value }))
                    }}
                    onBlur={fieldValue?.handleBlur}
                  />
                  <ErrorMessage name="businessZip" component="p" className="text-sm text-red" />
                  <Inputbox
                    name="businessCityState"
                    className={`max-h-[54px] peer ${!!fieldValue?.errors?.businessCityState ? 'invalid' : 'valid'}`}
                    id="businessCityState"
                    placeholder="Business City/State"
                    value={fieldValue?.values?.businessCityState}
                    onChange={(e) => {
                      fieldValue?.handleChange(e);
                      setFormData((prv) => ({ ...prv, businessCityState: e?.target?.value }))
                    }}
                    onBlur={fieldValue?.handleBlur}
                  />
                  <ErrorMessage name="businessCityState" component="p" className="text-sm text-red" />
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
            </>
            }
          </fieldset>
          <ErrorMessage name="joinAs" component="p" className="text-sm text-red pt-6" />
        </div>

        <Faq />
      </div>

      <div className="max-w-[484px] mx-auto px-4">
        <div className="mx-auto mt-24">
          <div className="border-gray border-t border-b py-4 flex items-center gap-2.5 justify-between">
            <div className="w-full">
              <h6 className="text-base">
                MY Path:
                {!changePath && <a
                  onClick={() => setChangePath(!changePath)}
                  className="font-normal text-xs float-right mt-1 flex items-center"
                >
                  Change <ArrowbottomIcon className="ml-2" />
                </a>}
              </h6>
              {changePath ? <ChoosePathComponent changePath={changePath} setChangePath={setChangePath} {...{ fieldValue, ...props }} /> : <p className="text-sm leading-6 capitalize">Brand {fieldValue?.values?.pathValue}</p>}
            </div>
          </div>
          <div className="border-[#D8D8D8] border-b py-4 flex items-center gap-2.5 justify-between">
            <div className="w-full">
              <h6 className="text-base">
                Birthdate:
                {!changeBirthDay && <a
                  onClick={() => setChangeBirthDay(!changeBirthDay)}
                  className="font-normal text-xs float-right mt-1 flex items-center"
                >
                  Change <ArrowbottomIcon className="ml-2" />
                </a>}
              </h6>
              {changeBirthDay ? <BirthdateComponent changeBirthDay={changeBirthDay} setChangeBirthDay={setChangeBirthDay} fieldValue={fieldValue} props={props} /> : <p className="text-sm leading-6">{_dateFormatChange((formData?.selectedMonth + ' ' + formData?.selectedDay + ',' + formData?.selectedYear), 'MMM Do, YYYY')}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto mt-0 px-4">
        <div className="border-b border-gray py-6">
          <h6 className="label mb-4">Your sponsor is</h6>
          <div className="flex items-center gap-4">
            <Image
              className="w-[120px] h-[120px] rounded-full"
              src={userImg}
              alt="user-img"
            />
            <div>
              <h6 className="label mb-0.5">{REFFERAL_VALUES?.name || 'Jancy Wade'}</h6>
              <p className="capitalize">Brand {fieldValue?.values?.pathValue}</p>
            </div>
          </div>
        </div>
        <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
          <div className="w-full">
            <h6 className="text-base">
              Your website name is:
              {!changeEmail && <a
                onClick={() => setChangeEmail(!changeEmail)}
                className="font-normal text-xs float-right mt-1 flex items-center"
              >
                Change <ArrowbottomIcon className="ml-2" />
              </a>}
            </h6>
            {changeEmail ? <EmailComponent changeEmail={changeEmail} setChangeEmail={setChangeEmail} fieldValue={fieldValue} props={props} /> : <p className="text-sm leading-6">{fieldValue?.values?.webAlias}.keiok.com</p>}
          </div>
        </div>
      </div>

      <div className="max-w-[484px] mx-auto pb-10 px-4">
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-0 left-0 bg-white z-40 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="max-w-[484px] mx-auto px-4 py-8 flex items-center gap-3">
          <span
            className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center"
            onClick={handleBackClick}
          >
            <ChevronLeftIcon className="w-4 h-4 stroke-current" />
          </span>
          <ButtonNextStep
            type="submit"
            disabled={countryState?.stateError || countryState?.countryError || changePath || changeBirthDay || changeEmail || props?.isWebAlies === "Error"}
            handleClick={() => scrollToTop()}
            amt=""
            label="Continue"
          />
        </div>
      </div>
      <GooglePlaceSearchPopup
        callback={(data) => _handelGooglePlace(data)}
        isOpen={googleAddressSearch?.popupClose}
        closeModal={() => setGoogleAddressSearch((prv) => ({
          ...prv, popupClose: false
        }))} />
    </>
  );
};

export default HowJoin;
