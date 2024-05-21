import EncryptionPolicy from "@/components/EncryptionPolicy";
import Footer from "@/common/Footer";
import Inputbox from "@/components/inputbox";
import NotificationMsg from "@/common/NotificationMsg";
import { FormattedMessage } from "react-intl";
import {
  loginDefaultSchema,
  loginIntialValue,
} from "@/services/Methods/validationSchema";
import ButtonNextStep from "@/common/buttonNextStep";
import { Formik, ErrorMessage, Form } from "formik";
import _ from "lodash";
import React from "react";
import NeedHelp from "../NeedHelp";
import LashesIcon from "../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/24/solid";


const SignInPage = (props) => {
  const { emailerror, _handleAuthanticedSubmit, _handleSteps } = props;

  return (
    <>
    
      <Formik
        enableReinitialize
        initialValues={loginIntialValue}
        validationSchema={loginDefaultSchema}
        onSubmit={(values) => _handleAuthanticedSubmit(values)}
      >
        {({ errors, handleBlur, handleChange, values }) => {
          return (
            <Form>
              <div className="max-w-[484px] px-4 mx-auto my-24">
                <div className="flex items-center border rounded-xl shadow-shadow1 border-gray p-4 bg-white mb-11">
                  <XCircleIcon className="size-6 text-red mr-3" />
                  <span className="sr-only">Info</span>
                  <div className="font-medium text-sm text-t3">
                    Please try again or create a new account by purchasing MY
                    lash.
                  </div>
                </div>
                <div className="border rounded-xl shadow-shadow1 border-gray p-6  bg-white">
                  <h3 className="font-bold text-center">
                    <FormattedMessage id="signIn" defaultMessage="Sign In" />{' '}
                    <span className="text-darkpink">
                      <FormattedMessage id="clubName" defaultMessage="MY club" />
                    </span>
                  </h3>
                  {emailerror && (
                    <NotificationMsg
                      msg="We were unable to find an account with the email address you entered. Please try again or create a new account"
                      error={emailerror}
                    />
                  )}
                  <div className="flex flex-col mt-5 relative">
                    {/* Removed password field and only mapping email field */}
                    {_.map(
                      [{ name: "email", placeholder: "Please provide a valid email address." }],
                      ({ name, placeholder }) => (
                        <React.Fragment key={name}>
                          <Inputbox
                            type="text"
                            name={name}
                            id={name}
                            placeholder=""
                            className={`floating-input peer ${
                              _.isEmpty(errors)
                                ? ""
                                : errors?.[name]
                                ? "invalid"
                                : "valid"
                            }`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[name]}
                          />
                          <label htmlFor={name} className="floating-label">
                            Type your email
                          </label>
                          <ErrorMessage
                            name={name}
                            component="p"
                            className="text-sm text-red mt-2"
                          />
                        </React.Fragment>
                      )
                    )}
                    <Link
                      href="/signin/verification"
                      className="primary-button mt-6"
                    >
                      Get code via email
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="max-w-[484px] mx-auto px-4">
                <button type="button" className="dark-button-outlined mt-8" onClick={() => _handleSteps('need1')}>
                <FormattedMessage id="needHelp" defaultMessage="Need Help?" />
              </button>
              </div> */}
              <div className="max-w-[484px] mx-auto px-4 mb-12">
                <EncryptionPolicy />
                <div className="mt-24">
                  <NeedHelp />
                </div>
              </div>
              <div className="bg-pink">
                <div className="max-w-[484px] mx-auto px-4 py-8">
                  <ul className="text-t4 space-y-3">
                    <li className="flex gap-2">
                      <LashesIcon className="w-6 h-6" />
                      <span className="flex flex-col text-sm sm:text-[15px] font-medium">
                        <span>Natural LASHES</span>
                        <span>+ BROWS</span>
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <SubscribeIcone className="w-6 h-6" />
                      <span className="flex flex-col text-sm sm:text-[15px] font-medium">
                        <span>Subscribe because of our</span>
                        <span>Lash Cycle <Link className="text-xs" href="/">Learn more</Link></span>
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckmarkIcon className="w-6 h-6" />
                      <span className="flex flex-col text-sm sm:text-[15px] font-medium">
                        <span>No commitments,</span>
                        <span>cancel anytime</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <Footer />
              {/* <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
                <div className="max-w-[484px] mx-auto px-4 py-8">
                  <ButtonNextStep type="submit" amt="" label="Sign In" />
                </div>
              </div> */}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignInPage;
