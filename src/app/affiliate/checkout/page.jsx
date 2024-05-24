// Home.jsx
"use client";
import Step1 from "@/components/Affiliate/Checkout";
import Step2 from "@/components/Affiliate/Checkout";
import Step3 from "@/components/GettingStartedFlow/step3";
import Step4 from "@/components/GettingStartedFlow/step4";
import Step5 from "@/components/GettingStartedFlow/step5";
import Step6 from "@/components/GettingStartedFlow/step6";
import Step7 from "@/components/GettingStartedFlow/step7";
import Step8 from "@/components/GettingStartedFlow/step8";
import Step9 from "@/components/GettingStartedFlow/step9";
import Step10 from "@/components/GettingStartedFlow/step10";
import Step11 from "@/components/GettingStartedFlow/ActivateAccountCofirmation";
import SetupCard from "@/components/GettingStartedFlow/SetupCard";
import FunFactModal from "@/components/GettingStartedFlow/FunFactModal";
import withRouteHOC from "@/HOC/withRouteHOC";
import useGetStartedHook from "../../../../hooks/useGetStarted.hook";
import _ from "lodash";
import Loader from "@/common/Loader";
import SuggestionAddressPopup from "@/common/SuggestionAddressPopup";

const Home = (props) => {

  const TOTOAL_STEPS = new Array(10).fill('step');

  const {
    currentStep, setCurrentStep, handleButtonClick, handleBackClick, ...data
  } = useGetStartedHook(props, TOTOAL_STEPS);

  const { useDefaultAddressOrNot, formData, _acceptOrNotAddressOption } = data;

  const steps = [
    <Step1
      key={1}
      {...data}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    
  ];


  return <>{(data?.loading)
    ?
    <Loader />
    :
    <>
      {steps[currentStep]}
      <SuggestionAddressPopup {...{
        _acceptOrNotAddressOption,
        bypass: useDefaultAddressOrNot?.bypassOrNot,
        ourAddress: formData,
        addressOptions: useDefaultAddressOrNot?.addessData,
      }} />
    </>
  }
  </>;
};

export default withRouteHOC(Home);
