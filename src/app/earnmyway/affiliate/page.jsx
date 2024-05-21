"use client";
import Choose from "@/components/EarnMyWay/Affiliate/Choose";
import BirthDate from "@/components/EarnMyWay/Affiliate/BirthDate";
import Sponsor from "@/components/EarnMyWay/Affiliate/Sponsor";
import Website from "@/components/EarnMyWay/Affiliate/Website";
import HowJoin from "@/components/EarnMyWay/Affiliate/HowJoin";
import Review from "@/components/EarnMyWay/Affiliate/Review";
import Confirmation from "@/components/EarnMyWay/Affiliate/Confirmation";
import useBrandAffiliateHook from "../../../../hooks/useBrandAffiliateHook.jsx"
import { Form, Formik } from "formik";
import { signUpValidationSchema } from "../../../services/Methods/validationSchema";
import withRouteHOC from "../../../HOC/withRouteHOC";
import localStorageCall from "@/services/Methods/localstorage.hook.jsx";
import { _handleValidDateCheck } from "@/services/Methods/normalMethods.jsx";

const Affiliate = (props) => {
  const HookData = useBrandAffiliateHook(props);
  const { currentStep, setCurrentStep, alluserData, _handleSubmit, isUserLogin, formData, setFormData, scrollToTop, months } = HookData;
  const handleButtonClick = () => {
    setCurrentStep(currentStep + 1);
    scrollToTop();
  };
  const handleBackClick = () => {
    // Check if there is a previous step
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const _handleSubmitAddFormdata = (values) => {
    setFormData((prv) => ({ ...prv, ...values }))
  }
  const steps = (currentStep, fieldValue) => {
    switch (currentStep) {
      case 0: return <Choose
        key={1}
        onBackClick={handleBackClick}
        props={HookData}
        fieldValue={fieldValue}
      />;
      case 1: return <BirthDate
        key={2}
        onBackClick={handleBackClick}
        props={HookData}
        fieldValue={fieldValue}
      />;
      case 2: return <Sponsor
        key={3}
        onContinueClick={handleButtonClick}
        onBackClick={handleBackClick}
        props={HookData}
        fieldValue={fieldValue}
      />;
      case 3: return <Website
        key={4}
        onContinueClick={handleButtonClick}
        onBackClick={handleBackClick}
        props={HookData}
        fieldValue={fieldValue}
      />;
      case 4: return <HowJoin
        key={5}
        onBackClick={handleBackClick}
        props={HookData}
        fieldValue={fieldValue}
      />;
      case 5: return <Review
        key={6}
        onBackClick={handleBackClick}
        props={HookData}
        fieldValue={fieldValue}
        alluserData={alluserData}
      />;
      case 6: return <Confirmation
        key={7}
        onBackClick={handleBackClick}
        props={HookData}
        fieldValue={fieldValue}
        alluserData={alluserData}
      />;
      default: return 'Unknown step';
    };
  }

  return (
    <Formik
      enableReinitialize
      initialValues={formData}
      validationSchema={signUpValidationSchema(currentStep, isUserLogin, 'Affiliate')}
      onSubmit={(values, actions) => {
        if (currentStep === 0 || currentStep === 4) {
          handleButtonClick();
          scrollToTop();
        } else if (currentStep === 5) {
          _handleSubmit(values, actions, alluserData)
        } else if (currentStep === 1) {
          _handleValidDateCheck(values, actions, months, handleButtonClick, setFormData)
        }
        _handleSubmitAddFormdata(values);
      }}
    >
      {(fieldValue) => (
        <Form>
          {steps(currentStep, fieldValue)}
        </Form>)}
    </Formik>);
};

export default withRouteHOC(Affiliate);
