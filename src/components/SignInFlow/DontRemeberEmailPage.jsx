"use client";
import Image from "next/image";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { FormattedMessage } from "react-intl";
import ButtonNextStep, { ButtonPreviousStep } from "@/common/buttonNextStep";

const DontRemeberEmailPage = (props) => {
  const { onContinueClick } = props
  const handleButtonClick = () => {
    onContinueClick()
  }
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
        <h3 className="font-bold">
          <FormattedMessage id="forgotEmailPassword" defaultMessage="Forgot Email / Password" />
        </h3>
        <p className="text-t4 mb-0 text-base ">
          <FormattedMessage id="findAccountText" />
        </p>
      </div>
      <div className="bg-bg3 py-8 pt-3 sm:px-4">
        <div className="max-w-[484px] mx-auto px-4">
          <Image
            className="max-w-[66px] ml-auto mb-1"
            src={NortonLogo}
            alt="logo"
          />
          <div className="flex flex-col gap-[9px]">
            <Inputbox
              name="firstname"
              id="firstname"
              autocomplete="firstname"
              placeholder="First Name on Account"
            />
            <Inputbox
              name="lastname"
              id="lastname"
              autocomplete="lastname"
              placeholder="Last Name on Account"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="mt-24 border-b border-gray">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="flex max-w-[484px] mx-auto px-4 py-8">
          <ButtonPreviousStep
            type='button'
            className="w-full max-w-[42px] mr-2 p-0 text-primery bg-inherit border border-primery hover:bg-primery hover:text-[#fff]"
            handleClick={() => _handleSteps('back')}
          />
          <ButtonNextStep handleClick={handleButtonClick} amt="" label="Find MY Account" />
        </div>
      </div>
    </>
  );
};

export default DontRemeberEmailPage;
