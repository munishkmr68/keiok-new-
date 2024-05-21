"use client";
import Image from "next/image";
import NortonLogo from "../../assets/images/norton-logo.png";
import Language from "@/components/language";
import Inputbox from "@/components/inputbox";
import Footer from "@/common/Footer";
import { FormattedMessage } from "react-intl";
import ButtonNextStep from "@/common/buttonNextStep";

const Step7 = (props) => {
  const { onContinueClick } = props
  const handleButtonClick = () => {
    onContinueClick()
  }
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
        <h3 className="font-bold">
          <FormattedMessage id="signIn" />
        </h3>
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
              name="email"
              id="email"
              autocomplete="email"
              placeholder="Email"
            />
            <Inputbox
              name="password"
              id="password"
              autocomplete="password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4">
        <button className="dark-button-outlined mt-8">
          <FormattedMessage id="needHelp" defaultMessage="Need Help?" />
        </button>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="mt-24 border-b border-gray">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ButtonNextStep handleClick={handleButtonClick} amt="" label="Continue" />
        </div>
      </div>
    </>
  );
};

export default Step7;
