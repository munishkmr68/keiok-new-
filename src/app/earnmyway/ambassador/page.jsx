"use client";
import Choose from "@/components/EarnMyWay/Ambassador/Choose";
import BirthDate from "@/components/EarnMyWay/Ambassador/BirthDate";
import Sponsor from "@/components/EarnMyWay/Ambassador/Sponsor";
import Website from "@/components/EarnMyWay/Ambassador/Website";
import HowJoin from "@/components/EarnMyWay/Ambassador/HowJoin";
import Review from "@/components/EarnMyWay/Ambassador/Review";
import Confirmation from "@/components/EarnMyWay/Ambassador/Confirmation";
import useBrandAmbassadorHook from "../../../../hooks/useBrandAmbassadorHook";
import { signUpValidationSchema } from "@/services/Methods/validationSchema";
import { Form, Formik } from "formik";
import withRouteHOC from "@/HOC/withRouteHOC";
import localStorageCall from "@/services/Methods/localstorage.hook";
import { _handleValidDateCheck } from "@/services/Methods/normalMethods";

const Ambassador = (props) => {
  const HookData = useBrandAmbassadorHook(props);
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
      validationSchema={signUpValidationSchema(currentStep, isUserLogin, 'Ambassador')}
      onSubmit={(values, actions) => {
        if (currentStep === 0 || currentStep === 4) {
          handleButtonClick();
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
export default withRouteHOC(Ambassador);
