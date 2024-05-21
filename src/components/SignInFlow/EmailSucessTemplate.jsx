"use client";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { FormattedMessage } from "react-intl";
import ButtonNextStep from "@/common/buttonNextStep";

const EmailSucessTemplate = (props) => {
  const { emailSuccessState, _handleSteps } = props;
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
        <h3 className="font-bold">
          <FormattedMessage id="emailSent" defaultMessage="Email sent" />
        </h3>
        <p className="text-t4 mb-0 text-base ">
          <FormattedMessage id="emailSpecifiedText" />
        </p>
        <p className="text-t4 text-base font-bold py-2">{emailSuccessState ? emailSuccessState : "j......2@gmail.com"}</p>
        <p className="text-t4 mb-0 text-base ">
          <FormattedMessage id="checkSpamFolder" />
        </p>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="mt-24 border-b border-gray">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ButtonNextStep handleClick={() => _handleSteps('need6')} amt="" label="Continue" />
        </div>
      </div>
    </>
  );
};

export default EmailSucessTemplate;
