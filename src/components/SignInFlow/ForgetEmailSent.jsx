"use client";
import Image from "next/image";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import { FormattedMessage } from "react-intl";
import ButtonNextStep, { ButtonPreviousStep } from "@/common/buttonNextStep";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';
import Loader from "@/common/Loader";
import NotificationMsg from "@/common/NotificationMsg";

const ForgetEmailSent = (props) => {
  const { _handleSteps, emailIsValid, _handleForgetPasswordEmail, loading, _onHandleChange, errorReset } = props

  return (
    <>
      {loading
        ?
        <Loader />
        :
        <>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().trim().required('Please enter your email').email('Please enter a valid email').matches(/^(?!.*@[^,]*,)/)
              })
            }
            onSubmit={(values) => _handleForgetPasswordEmail(values, () => {
              _handleSteps('need4');
            })}
          >
            {({ handleChange, isSubmitting, isValid, errors, values, handleBlur }) => (
              <Form>
                <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
                  <h3 className="font-bold">
                    <FormattedMessage id="resetEmail" defaultMessage="Reset Email / Password" />
                  </h3>
                  {(errors?.email || emailIsValid?.errMsg) &&
                    <NotificationMsg icon={false} msg={errors?.email || emailIsValid?.errMsg} error={!!emailIsValid?.errMsg || !!errors?.email} />
                  }
                  <p className="text-t4 mb-0 text-base mt-3">
                    <FormattedMessage id="enterEmailAddressText" />
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
                        onChange={(e) => {
                          _onHandleChange(e)
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        autocomplete="email"
                        placeholder="Email"
                      />
                    </div>
                    {/* <ErrorMessage name="email" component="p" className="text-md text-red mt-2" /> */}
                  </div>
                </div>
                {/* <div className="max-w-[484px] mx-auto px-4">
                  <button type="button" className="dark-button-outlined mt-8" onClick={() => _handleSteps('need5')}>
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
                  <div className="flex max-w-[484px] mx-auto px-4 py-8">
                    <ButtonPreviousStep
                      type='button'
                      className="w-full max-w-[42px] mr-2 p-0 text-primery bg-inherit border border-primery hover:bg-primery hover:text-[#fff]"
                      handleClick={() => _handleSteps('back')}
                    />
                    <ButtonNextStep type='submit' amt="" label="Email Me" />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      }
    </>
  );
}

export default ForgetEmailSent;
