import React, { useState } from 'react';
import Image from 'next/image';
import userImg from "../../../../assets/images/user-img.png";
import Language from '@/components/language';
import Footer from '@/common/Footer';
import ButtonNextStep from '@/common/buttonNextStep';
import ArrowbottomIcon from "../../../../assets/images/icons/arrowbottomicon.svg";
import Inputbox from "@/components/inputbox";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Faq from "./faq";
import Notification from '../../../notification';
import BirthdateComponent from '../../../../common/birthDate';
import { ErrorMessage } from 'formik';
import { REFFERAL_VALUES, _dateFormatChange } from '@/services/Methods/normalMethods';
import ChoosePathComponent from '@/common/ChoosePath';

const Website = ({ onContinueClick, onBackClick, props, fieldValue }) => {
  const [changeBirthDay, setChangeBirthDay] = useState(false);
  const [changePath, setChangePath] = useState(false);
  const { scrollToTop, _validateRefferalFunction, isWebAlies, isLoginLoading, formData, setFormData } = props
  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    if (fieldValue?.values?.webAlias !== "") {
      onContinueClick();
    }
    scrollToTop();
  };
  const handleBackClick = () => {
    // Call the parent component's function to go back to the previous step
    onBackClick();
    scrollToTop();
  };
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4">
        <h3 className="mb-2 mt-5">Choose your website name</h3>
      </div>
      <div className="py-8 pt-3 max-w-[484px] mx-auto px-4">
        <div className="border-gray border-t pt-8">
          {isWebAlies !== "" && <div className="mt-[1px] mb-[20px]">
            <Notification
              backgroundColor={isWebAlies === "Success" ? "#51C96D" : isWebAlies === "Error" ? "#B80000" : ""}
              icon={isWebAlies === "Success" ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                : isWebAlies === "Error" ?
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                  </svg>
                  : ""
              }
              message={isWebAlies === "Success" ? "Your name is available. Complete your enrollment to secure it." : isWebAlies === "Error" ? "This name is not available. Please choose a different name." : ""}
            />
          </div>}
          <div className="flex flex-col gap-[9px]">
            <label className='text-lg text-[#1C1C1C]'>{fieldValue?.values?.webAlias}.keiok.com</label>
            <Inputbox
              name="webAlias"
              id="websitename"
              autocomplete="websitename"
              placeholder="Your website name"
              value={fieldValue?.values?.webAlias}
              onChange={(e) => {
                fieldValue?.handleChange(e);
                setFormData((prv) => ({ ...prv, webAlias: e?.target?.value }))
              }}
            />
          </div>
          <ErrorMessage name="webAlias" component="p" className="text-sm text-red" />
          <div className="max-w-[484px] mx-auto">
            <button button="button" className="dark-button mt-8" onClick={() => { fieldValue?.values?.webAlias !== "" && !fieldValue?.errors?.webAlias && _validateRefferalFunction(fieldValue?.values?.webAlias) }}>{isLoginLoading ? <div className="h-6 w-6 mr-auto ml-auto animate-spin rounded-full border-2 border-solid border-white border-t-transparent" /> : "Check availability"}</button>
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4">
        <Faq />
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
            disabled={fieldValue?.errors?.webAlias || isWebAlies !== "Success" || changePath || changeBirthDay}
            handleClick={handleButtonClick}
            amt=""
            label="Continue" />
        </div>
      </div>
    </>
  );
};

export default Website;
