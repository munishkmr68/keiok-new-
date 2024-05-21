"use client"
import React, { useState } from "react";
import Image from "next/image";
import userImg from "../../../../assets/images/user-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import ArrowbottomIcon from "../../../../assets/images/icons/arrowbottomicon.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Faq from "./faq";
import BirthdateComponent from "../../../../common/birthDate";
import { REFFERAL_VALUES, _dateDisplayformat, _dateFormatChange } from "@/services/Methods/normalMethods";
import ChoosePathComponent from "@/common/ChoosePath";

const Sponsor = ({ onContinueClick, onBackClick, props, fieldValue }) => {
  const { formData } = props;
  const [changeBirthDay, setChangeBirthDay] = useState(false);
  const [changePath, setChangePath] = useState(false);

  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    onContinueClick();
    props.scrollToTop();
  };

  const handleBackClick = () => {
    // Call the parent component's function to go back to the previous step
    onBackClick();
    props.scrollToTop();
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <h3 className="mb-2 mt-5">Confirm your sponsor</h3>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-3">
          <span className="text-bg1 text-base sm:text-lg font-medium">
            Joining as a Brand <span className="capitalize">{fieldValue?.values?.pathValue}</span> is free and easy{" "}
          </span>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto mt-8 px-4">
        <div className="border-t border-gray py-6">
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
          <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
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
            handleClick={handleButtonClick}
            amt=""
            label="Continue"
            disabled={changePath || changeBirthDay}
          />
        </div>
      </div>
    </>
  );
};

export default Sponsor;
