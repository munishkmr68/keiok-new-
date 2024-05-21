"use client";
import ArrowRightIcon from "../../assets/images/icons/arrow-right.svg";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { FormattedMessage } from "react-intl";
import { ButtonPreviousStep } from "@/common/buttonNextStep";

const NeedHelpPage = (props) => {
  const { _handleSteps } = props

  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
        <h3 className="font-bold">
          <FormattedMessage id="needHelpSIgnIn" defaultMessage="Need help signing in?" />
        </h3>
      </div>
      <div className="max-w-[484px] mx-auto px-4">
        <div onClick={() => _handleSteps('need2')} className=" cursor-pointer border-t border-inputcolor py-4 flex items-center gap-2.5 justify-between">
          <div >
            <p className="text-base sm:text-lg text-t3 mb-0">
              <FormattedMessage id="resetEmail" defaultMessage="Reset Email / Password" />
            </p>
          </div>
          <ArrowRightIcon />
        </div>
        <div onClick={() => _handleSteps('need3')} className="cursor-pointer border-b border-t border-inputcolor py-4 flex items-center gap-2.5 justify-between">
          <div >
            <p className="text-base sm:text-lg text-t3 mb-0">
              <FormattedMessage id="resendActivateLink" defaultMessage="Resend Link to Activate Account" />
            </p>
          </div>
          <ArrowRightIcon />
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="mt-24 border-b border-gray">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ButtonPreviousStep handleClick={() => _handleSteps('back')} amt="" label="Back to Sign In" />
        </div>
      </div>
    </>
  );
};

export default NeedHelpPage;
