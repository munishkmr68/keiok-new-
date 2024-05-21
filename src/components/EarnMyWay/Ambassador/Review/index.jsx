import React, { useState } from "react";
import Image from "next/image";
import userImg from "../../../../assets/images/user-img.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import ArrowbottomIcon from "../../../../assets/images/icons/arrowbottomicon.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Faq from "./faq";
import Notification from "../../../notification";
import BirthdateComponent from "../../../../common/birthDate";
import BusinessAddressComponent from "../../../../common/businessAddress";
import { REFFERAL_VALUES, _dateFormatChange } from "@/services/Methods/normalMethods";
import EmailComponent from "@/common/EmailChange";
import EnrollmentTypeChange from "@/common/EnrollmentTypeChange";
import ChoosePathComponent from "@/common/ChoosePath";

const Review = ({ onBackClick, props, fieldValue, alluserData }) => {
  const [changeBirthDay, setChangeBirthDay] = useState(false);
  const [editBusinessAddress, setEditBusinessAddress] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [changeEnrollmentType, setChangeEnrollmentType] = useState(false);
  const [changePath, setChangePath] = useState(false);
  const { scrollToTop, enrollApiErrorMsg, isLoginLoading, formData, setFormData } = props;

  const handleBackClick = () => {
    // Call the parent component's function to go back to the previous step
    onBackClick();
    scrollToTop();
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto px-4">
        <h3 className="mb-2 mt-5">Review and start earning</h3>
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
          {(!!fieldValue?.errors?.brandAgreement || !!fieldValue?.errors?.privacyPolicy || !!fieldValue?.errors?.electronicRecord) &&
            <div className="flex flex-col gap-[9px] pb-6">
              <Notification
                backgroundColor="#B80000"
                icon={<></>}
                message={fieldValue?.errors?.brandAgreement || fieldValue?.errors?.privacyPolicy || fieldValue?.errors?.electronicRecord}
              />
            </div>}
          <div className="mb-4 pb-1">
            <div className="text-t2 font-medium mb-[5px]">
              Brand <span className="capitalize">{fieldValue?.values?.pathValue}</span> Agreement
            </div>
            <fieldset className="flex flex-col gap-4 mt-3">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="w-5 flex justify-center">
                  <input
                    id="brandambassador"
                    className="accent-blue"
                    type="checkbox"
                    name="brandAgreement"
                    checked={fieldValue?.values?.brandAgreement}
                    onChange={(e) => {
                      fieldValue?.handleChange(e);
                      setFormData((prv) => ({ ...prv, brandAgreement: e?.target?.checked }))
                    }}
                  />
                </span>
                <label
                  htmlFor="brandambassador"
                  className="text-t3 leading-[21px]"
                >
                  I have read & agree
                </label>
                <a href="#" className="block w-full">
                  Download
                </a>
              </div>
            </fieldset>
          </div>
          <div className="mb-4 pb-1">
            <div className="text-t2 font-medium mb-[5px]">Privacy Policy</div>
            <fieldset className="flex flex-col gap-4 mt-3">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="w-5 flex justify-center">
                  <input
                    id="brandambassador"
                    className="accent-blue"
                    type="checkbox"
                    name="privacyPolicy"
                    checked={fieldValue?.values?.privacyPolicy}
                    onChange={(e) => {
                      fieldValue?.handleChange(e);
                      setFormData((prv) => ({ ...prv, privacyPolicy: e?.target?.checked }))
                    }}
                  />
                </span>
                <label
                  htmlFor="brandambassador"
                  className="text-t3 leading-[21px]"
                >
                  I have read & agree
                </label>
                <a href="#" className="block w-full">
                  Download
                </a>
              </div>
            </fieldset>
          </div>
          <div className="mb-4 pb-1">
            <div className="text-t2 font-medium mb-[5px]">
              Consent to Electronic Record
            </div>
            <fieldset className="flex flex-col gap-4 mt-3">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="w-5 flex justify-center">
                  <input
                    id="brandambassador"
                    className="accent-blue"
                    type="checkbox"
                    name="electronicRecord"
                    checked={fieldValue?.values?.electronicRecord}
                    onChange={(e) => {
                      fieldValue?.handleChange(e);
                      setFormData((prv) => ({ ...prv, electronicRecord: e?.target?.checked }))
                    }}
                  />
                </span>
                <label
                  htmlFor="brandambassador"
                  className="text-t3 leading-[21px]"
                >
                  I have read & agree
                </label>
                <a href="#" className="block w-full">
                  Download
                </a>
              </div>
            </fieldset>
          </div>
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
            {changeEmail ?
              <EmailComponent changeEmail={changeEmail} setChangeEmail={setChangeEmail} fieldValue={fieldValue} props={props} />
              :
              <p className="text-sm leading-6">{fieldValue?.values?.webAlias}.keiok.com</p>}
          </div>
        </div>
        <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
          <div className="w-full">
            <h6 className="text-base">
              Enrollment type:
              {!changeEnrollmentType && <a
                onClick={() => setChangeEnrollmentType(!changeEnrollmentType)}
                className="font-normal text-xs float-right mt-1 flex items-center"
              >
                Change <ArrowbottomIcon className="ml-2" />
              </a>}
            </h6>
            {changeEnrollmentType ? <EnrollmentTypeChange fieldValue={fieldValue} changeEnrollmentType={changeEnrollmentType} setChangeEnrollmentType={setChangeEnrollmentType} setEditBusinessAddress={setEditBusinessAddress} props={props} /> : <p className="text-sm leading-6">{fieldValue?.values?.joinAs}</p>}
          </div>
        </div>
        {fieldValue?.values?.joinAs === "Business" && <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
          <div className="w-full">
            <h6 className="text-base">
              Business Info & Address:
              {!editBusinessAddress && <a
                onClick={() => { setEditBusinessAddress(!editBusinessAddress) }}
                className="font-normal text-xs float-right mt-1 flex items-center"
              >
                Change <ArrowbottomIcon className="ml-2" />
              </a>}
            </h6>
            {editBusinessAddress ? <BusinessAddressComponent fieldValue={fieldValue} editBusinessAddress={editBusinessAddress} setEditBusinessAddress={setEditBusinessAddress} props={props} /> :
              <p className="text-sm leading-6">
                {fieldValue?.values?.businessName}
                <br />
                {_dateFormatChange(fieldValue?.values?.businessCreationDate, 'DD/MM/YYYY')}
                <br />
                {fieldValue?.values?.businessAddress}
                <br />
                {fieldValue?.values?.businessCityState}{" "} {fieldValue?.values?.businessZip}
              </p>}
          </div>
        </div>}
        <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
          <div className="w-full">
            <h6 className="text-base">
              Full Name & Address:
              {/* <a
                href="#"
                className="font-normal text-xs float-right mt-1 flex items-center"
              >
                Change <ArrowbottomIcon className="ml-2" />
              </a> */}
            </h6>
            <p className="text-sm leading-6">
              {alluserData?.fullName}
              <br />
              {alluserData?.billingAddress?.address1}
              <br />
              {alluserData?.billingAddress?.address2 && <br />}{alluserData?.billingAddress?.address2}{' '}{alluserData?.billingAddress?.address3}
              {alluserData?.billingAddress?.city && ", "}{alluserData?.billingAddress?.regionProvState}{' '}{alluserData?.billingAddress?.postalCode}
            </p>
          </div>
        </div>
        <div className="border-gray border-b py-4 flex items-center gap-2.5 justify-between">
          <div className="w-full">
            <h6 className="text-base">
              Contact Information:
              {/* <a
                href="#"
                className="font-normal text-xs float-right mt-1 flex items-center"
              >
                Change <ArrowbottomIcon className="ml-2" />
              </a> */}
            </h6>
            <p className="text-sm leading-6">
              {alluserData?.emailAddress}
              <br />
              {alluserData?.phoneNumbers?.cellPhone}
              <br />
            </p>
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
          {isLoginLoading && !changeEmail ? <button className="primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white"><div className="h-6 w-6 mr-auto ml-auto animate-spin rounded-full border-2 border-solid border-white border-t-transparent" /></button>
            :
            <ButtonNextStep
              type="submit"
              handleClick={() => (!!fieldValue?.errors?.brandAgreement || !!fieldValue?.errors?.privacyPolicy || !!fieldValue?.errors?.electronicRecord) && scrollToTop()}
              amt=""
              disabled={changeBirthDay || editBusinessAddress || changeEmail || changeEnrollmentType || changePath || props?.isWebAlies === "Error"}
              label={`Enroll as a Brand ${fieldValue?.values?.pathValue === 'ambassador' ? 'Ambassador' : 'Affiliate'}`}
            />}
        </div>
      </div>
      {enrollApiErrorMsg && <p className="text-sm text-red text-center pb-6">{enrollApiErrorMsg}</p>}
    </>
  );
};

export default Review;
