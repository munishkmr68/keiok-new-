"use client";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import NortonLogo from "../../../assets/images/norton-logo.png";
import Inputbox from "@/components/inputbox";
import { ErrorMessage, Form, Formik } from "formik";
import { ChangeMyAccountPasswordSchema } from "@/services/Methods/validationSchema";
import _ from "lodash";
import NotificationMsg from "@/common/NotificationMsg";
import Loader from "@/common/Loader";

const ChangePassword = (props) => {
  const { _handleSteps, validCurrentPassword, _handleChangePasswordSubmit, _checkCurrentPassword, loginLoading } = props;
  return (
    <>
      {
        // loginLoading ?
        //   <Loader />
        //   :
        <Formik
          enableReinitialize
          validationSchema={ChangeMyAccountPasswordSchema}
          initialValues={{ currentpassword: '', password: '', confirmPassword: '' }}
          onSubmit={(values, actions) => _handleChangePasswordSubmit(values, actions)}
        >
          {(({ handleBlur, handleChange, setFieldError }) => {

            return (
              <Form>
                <div className="max-w-[484px] mx-auto px-4 pt-12">
                  <span
                    className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
                    onClick={() => _handleSteps('back')}
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                  </span>
                  <h3 className="mt-8 mb-6">Reset Password</h3>
                </div>
                {/* <div className="max-w-[484px] mx-auto sm:px-4">
              {validCurrentPassword?.msg &&
                <NotificationMsg icon={false} msg={validCurrentPassword?.msg} error={(!validCurrentPassword?.valid && validCurrentPassword?.msg)} />
              }
            </div> */}
                <div className="bg-bg3 py-8 sm:px-4">
                  <div className="max-w-[484px] mx-auto sm:px-4">
                    <Image
                      className="max-w-[66px] ml-auto mb-1"
                      src={NortonLogo}
                      alt="logo"
                    />
                    <div className="flex flex-col gap-[9px]">
                      <div className="relative flex-1">
                        <div>
                          <Inputbox
                            type="password"
                            name="currentpassword"
                            id="currentpassword"
                            onChange={handleChange}
                            onBlur={(e) => {
                              handleBlur(e);
                              _checkCurrentPassword(e?.target?.value, setFieldError)
                            }}
                            placeholder=""
                            className="floating-input peer"
                          />
                          <label htmlFor="currentpassword" className="floating-label" >
                            Current password
                          </label>
                        </div>
                        <ErrorMessage name="currentpassword" component='p' className="text-sm text-red" />
                        <p className="text-sm text-blue">Forgot password?</p>
                      </div>
                      {_.map([
                        { label: 'New password (6-60 characters)', name: 'password' },
                        { label: 'Re-enter new password', name: 'confirmPassword' }
                      ], ({ label, name }) => (
                        <>
                          <div className="relative flex-1" key={name}>
                            <Inputbox
                              type="password"
                              name={name}
                              id={name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder=""
                              className="floating-input peer"
                            />
                            <label htmlFor={name} className="floating-label">
                              {label}
                            </label>
                          </div>
                          <ErrorMessage name={name} component='p' className="text-sm text-red" />
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="max-w-[484px] mx-auto px-4">
                  <div className="flex flex-col mt-[30px] gap-4">

                    <button type="submit" className="primary-button w-auto font-medium min-w-[124px]" disabled={!validCurrentPassword?.valid}>
                      {loginLoading ? 'Processing ....' : 'Save'}
                    </button>

                    <button className="primary-button-outlined w-auto font-medium" onClick={() => _handleSteps('back')}>
                      Cancel
                    </button>
                  </div>
                </div>
              </Form>
            )
          })}

        </Formik>
      }
    </>
  );
};

export default ChangePassword;
