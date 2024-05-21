"use client";
import Image from "next/image";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import Lock from "../../assets/images/icons/lock-white.svg";
import CreatePasswordActivateLaterModal from "./CreatePasswordActivateLaterModal";
import NotificationMsg from "@/common/NotificationMsg";
import { ErrorMessage, Form, Formik } from "formik";
import { resetPasswordDefaultSchema } from "@/services/Methods/validationSchema";
import ActivateLaterModal from "@/components/Activate/ActivateLaterModal";
import withRouteHOC from "@/HOC/withRouteHOC";
import useActivateHook from "../../../hooks/useActivate.hook";

const Step10 = (props) => {

  const { activateAccountValue, setActivateAccountValue, _handleActiveSubmit, errorMsg, messageDisplay, ...data } = useActivateHook(props);

  const handleButtonClick = () => {
    // Call the parent component's function to change the step
    props?.onContinueClick();
    // Delay the scroll operation to allow time for rendering
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      {/* <div className="max-w-[484px] mx-auto  px-4">
        <LockCircleIcon className="mb-6 mt-8" />

        <h3 className="mb-4 mt-5">Create a password & activate your account</h3>
        <p className="text-t4 mb-6 sm:text-base text-sm">
          Your phone number will be used to help you access and recover your
          account. Message and data rates may apply.
        </p>
      </div>

      <div className="bg-bg3 py-10 px-4">
        <div className="max-w-[484px] mx-auto">
          <Image
            className="max-w-[66px] ml-auto mb-1"
            src={NortonLogo}
            alt="logo"
          />
          <div className="flex flex-col gap-[9px]">
            <div className="relative">
              <Inputbox
                name="email"
                className="max-h-[54px] pt-7 disabled:!border-inputcolor disabled:placeholder:text-inputcolor disabled:text-inputcolor peer"
                id="email"
                disabled={true}
                autocomplete="email"
                placeholder="jaywade12@gmail.com"
              />
              <label className="font-bold absolute top-[2px] left-3.5 peer-disabled:text-inputcolor">
                Email
              </label>
            </div>
            <div className="relative">
              <Inputbox
                name="password"
                id="password"
                type="password"
                placeholder=""
                className="floating-input peer"
              />
              <label htmlFor="password" className="floating-label">
                Password (6-60 characters)
              </label>
            </div>
            <div className="relative">
              <Inputbox
                name="password"
                id="reenterpassword"
                type="password"
                placeholder=""
                className="floating-input peer"
              /> <label htmlFor="reenterpassword" className="floating-label">
                Re-enter password
              </label>
            </div>

          </div>
        </div>
      </div> */}

      {/* <div className="max-w-[484px] mx-auto px-4 py-8">
        <ShoppingWith />
        <div className="mt-24">
          <Language />
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ButtonNextStep
            icon={<Lock />}
            handleClick={handleButtonClick}
            amt=""
            label="Activate MY Account"
          />
          <CreatePasswordActivateLaterModal />
        </div>
      </div> */}
      <>
        <div className="max-w-[484px] mx-auto  px-4">
          <LockCircleIcon className="mb-6 mt-8" />
          {(messageDisplay || errorMsg) &&
            <NotificationMsg msg={messageDisplay || errorMsg} error={(errorMsg && !messageDisplay)} />
          }
          <h3 className="mb-4 mt-5">Create a password & activate your account</h3>
          <p className="text-t4 mb-6 sm:text-base text-sm">
            Your phone number will be used to help you access and recover your
            account. Message and data rates may apply.
          </p>
        </div>
        <Formik
          enableReinitialize
          initialValues={activateAccountValue}
          validationSchema={resetPasswordDefaultSchema}
          onSubmit={(values) => _handleActiveSubmit(values)}
        >{({ isSubmitting, handleBlur, handleSubmit, handleChange, values }) => {
          return (
            <Form>
              <div className="bg-bg3 py-10 px-4">
                <div className="max-w-[484px] mx-auto">
                  <Image
                    className="max-w-[66px] ml-auto mb-1"
                    src={NortonLogo}
                    alt="logo" />
                  <div className="flex flex-col gap-[9px]">
                    <div className="relative">
                      <Inputbox
                        name="email"
                        className="max-h-[54px] pt-7 disabled:!border-inputcolor disabled:placeholder:text-inputcolor disabled:text-inputcolor peer"
                        disabled={true}
                        label={'Email'}
                        placeholder='Email'
                        value={values?.email} />
                    </div>
                    <ErrorMessage name="email" component="p" className="text-sm text-red" />
                    <>
                      <Inputbox
                        name="password"
                        type="password"
                        placeholder="Password (6-60 characters)"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="password" component="p" className="text-sm text-red" />
                    </>
                    <>
                      <Inputbox
                        name="confirmPassword"
                        type="password"
                        placeholder="Re-enter password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />
                      <ErrorMessage name="confirmPassword" component="p" className="text-sm text-red" />
                    </>
                  </div>
                </div>
              </div>
              <div className="max-w-[484px] mx-auto px-4 py-8">
                <ShoppingWith />
                <div className="mt-24"><Language /></div>
              </div>
              <Footer />

              <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
                <div className="max-w-[484px] mx-auto px-4 py-8">
                  <ButtonNextStep
                    type="submit"
                    icon={<Lock />}
                    // onClick={handleButtonClick}
                    amt=""
                    label="Activate MY Account"
                  />
                  <ButtonNextStep
                    type='button'
                    icon={<Lock />}
                    handleClick={handleButtonClick}
                    amt=""
                    label="Activate MY Account"
                  />
                  {/* <ActivateAccountModal {...{ handleSubmit, values }} /> */}
                  <ActivateLaterModal {...{ ...data, values, messageDisplay, errorMsg }} />
                </div>
              </div>

            </Form>
          );
        }}
        </Formik>
      </>
    </>
  );
};

export default withRouteHOC(Step10);
