import React, { useState } from "react";
import Image from "next/image";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import LockCircleIcon from "../../../../assets/images/icons/lock-circle.svg";
import NortonLogo from "../../../../assets/images/norton-logo.png";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";
import ArrowbottomIcon from "../../../../assets/images/icons/arrowbottomicon.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Faq from "./faq";
import Day from "./Day";
import Month from "./Month";
import Year from "./Year";
import { ErrorMessage } from "formik";
import ChoosePathComponent from "@/common/ChoosePath";

const BirthDate = ({ onBackClick, props, fieldValue }) => {
  const [changePath, setChangePath] = useState(false);
  const handleBackClick = () => {
    // Call the parent component's function to go back to the previous step
    onBackClick();
    props.scrollToTop();
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <LockCircleIcon className="mb-6 mt-8" />

        <h3 className="mb-2 mt-5">What is your birthdate?</h3>
        <p className="text-t4 mb-6 sm:text-base lg:text-lg flex">
          <CheckmarkIcon className="w-6 h-6 mr-2" />
          You must be 18 years or older to enroll as a
          <br />
          Brand {fieldValue?.values?.pathValue === 'ambassador' ? 'Ambassador' : 'Affiliate'}
        </p>
      </div>

      <div className="bg-bg3 px-4 py-8 pt-3">
        <div className="max-w-[484px] mx-auto px-4">
          <Image
            className="max-w-[66px] ml-auto mb-1"
            src={NortonLogo}
            alt="logo"
          />
          <div className="flex flex-col gap-[9px]">
            <div className="">
              <Day props={props} fieldValue={fieldValue} />
              <ErrorMessage name="selectedDay" component="p" className="text-md text-red mt-3" />
            </div>
            <div className="">
              <Month props={props} fieldValue={fieldValue} />
              <ErrorMessage name="selectedMonth" component="p" className="text-md text-red mt-3" />
            </div>
            <div className="">
              <Year props={props} fieldValue={fieldValue} />
              <ErrorMessage name="selectedYear" component="p" className="text-md text-red mt-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto pt-10 px-4">
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
            handleClick={() => props?.scrollToTop()}
            amt=""
            label="Continue"
            disabled={changePath}
          />
        </div>
      </div>
    </>
  );
};

export default BirthDate;
