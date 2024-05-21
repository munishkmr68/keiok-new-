// Home.jsx
"use client";
import Step1 from "../components/GettingStartedFlow/Step1/step1";
import Step2 from "../components/GettingStartedFlow/step2";
import Step3 from "../components/GettingStartedFlow/step3";
import Step4 from "../components/GettingStartedFlow/step4";
import Step5 from "../components/GettingStartedFlow/step5";
import Step6 from "../components/GettingStartedFlow/step6";
import Step7 from "../components/GettingStartedFlow/step7";
import Step8 from "../components/GettingStartedFlow/step8";
import Step9 from "../components/GettingStartedFlow/step9";
import Step10 from "../components/GettingStartedFlow/step10";
import Step11 from "../components/GettingStartedFlow/ActivateAccountCofirmation";
import SetupCard from "@/components/GettingStartedFlow/SetupCard";
import FunFactModal from "../components/GettingStartedFlow/FunFactModal";
import withRouteHOC from "@/HOC/withRouteHOC";
import useGetStartedHook from "../../hooks/useGetStarted.hook";
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
    <Step1 key={1} onContinueClick={handleButtonClick} />,
    <Step2
      key={2}
      {...data}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    <Step3 key={3} onContinueClick={handleButtonClick} />,
    <Step4
      key={4}
      {...data}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    <Step5
      key={5}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    <Step6
      key={6}
      {...data}
      onContinueClick={handleButtonClick}
      onBackClick={handleBackClick}
    />,
    <Step7
      key={7}
      {...data}
      onContinueClick={handleButtonClick}
    />,
    <Step8 key={9} {...data} onContinueClick={handleButtonClick} />,
    <SetupCard key={10} {...data} onContinueClick={handleButtonClick} />,
    <Step9 key={11} {...data} onContinueClick={handleButtonClick} />,
    // <Step10 key={12}  {...data} onContinueClick={handleButtonClick} />,
    // <Step11 key={13} />,

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
