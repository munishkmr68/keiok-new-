"use client";
import Image from "next/image";
import Language from "@/components/language";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "@/common/Footer";
import { FormattedMessage } from "react-intl";
import ButtonNextStep from "@/common/buttonNextStep";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';

const ActivateEmailSent = (props) => {
  const { _activateAccountLater, _handleSteps, loading } = props
  const callBackFunc = () => {
    _handleSteps('need4');
  }

  return (
    <Formik
      initialValues={{
        email: ""
      }}
      validationSchema={
        Yup.object().shape({
          email: Yup.string().trim().required('Please enter your email').email('Please enter a valid email').matches(/^(?!.*@[^,]*,)/)
        })
      }
      onSubmit={(values, actions) => _activateAccountLater(values, actions, callBackFunc)}
    >
      {({ errors, handleBlur, handleChange, values }) => {
        return (
          <Form>
            <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
              <h3 className="font-bold">
                <FormattedMessage id="activateAccount" defaultMessage="Activate Your Account" />
              </h3>
              <p className="text-t4 mb-0 text-base ">
                <FormattedMessage id="activateAccountText" />
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
                    name="email"
                    id="email"
                    value={values?.email}
                    onChange={handleChange}
                    autocomplete="email"
                    placeholder="Email"
                  />
                </div>
                <ErrorMessage name="email" component="p" className="text-md text-red mt-5" />
              </div>
            </div>
            {/* <div className="max-w-[484px] mx-auto px-4">
              <button className="dark-button-outlined mt-8">
                <FormattedMessage id="dontRemember" />
              </button>
            </div> */}
            <div className="max-w-[484px] mx-auto px-4 mb-12">
              <div className="mt-24 border-b border-gray">
                <Language />
              </div>
            </div>
            <Footer />
            <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
              <div className="max-w-[484px] mx-auto px-4 py-8">
                {loading ?
                  <button className="primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white">
                    <div className="h-6 w-6 mr-auto ml-auto animate-spin rounded-full border-2 border-solid border-white border-t-transparent" />
                  </button>
                  :
                  <ButtonNextStep type="submit" amt="" label="Continue" />
                }
              </div>
            </div>
          </Form>
        )
      }}
    </Formik >
  );
};

export default ActivateEmailSent;
