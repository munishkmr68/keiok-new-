"use client";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import _ from "lodash";
import moment from "moment";
import { Fragment, useState } from "react";
import Close from "../../../assets/images/icons/close-circle.svg";
import Day from "./Day";
import GreenCheck from "../../../assets/images/icons/check-with-green.svg";

// import Day from "./Day";

const RescheduleModal = (props) => {
  const {
    _handleSteps,
    _handleReviewBillingDay,
    newBillingDay,
    autoshipOrders,
    setShowRestart,
    onClose,
  } = props;

  const [step, setStep] = useState("step1");
  let [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    onClose();
  }

  function handleSendOrder() {
    closeModal();
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div>
                  <Close
                    className=" ml-auto cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
                <div className="max-w-[484px] mx-auto px-4 ">
                  {step == "step1" ? (
                    <>
                      <h3 className="mb-4 mt-8 max-w-[256px]">
                        Choose a new delivery & billing day
                      </h3>
                      <p className="text-t4 mb-0 text-[15px] ">
                        Currently your subscription delivers and is billed on
                        <br /> the{" "}
                        <b>
                          {/* {moment(autoshipOrders?.[0]?.nextProcessDate).format(
                        "Do"
                      )} */}
                          14th , every 3 months.
                        </b>{" "}
                        If you want, you can <br />
                        change the delivery and billing day below.
                      </p>
                      <div className="mt-6 w-full mb-2 text-t5 text-xs">
                        Your new delivery and billing day
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="max-w-[172px] w-full">
                          <Day />
                        </div>
                        <span className="text-t3">every 3 months</span>
                      </div>
                      {newBillingDay?.error && (
                        <p className="text-md text-red mt-3">
                          {newBillingDay?.error}
                        </p>
                      )}
                      <div className="flex flex-col gap-3">
                        <button
                          type="button"
                          className="primary-button mt-8"
                          onClick={() => setStep("step2")}
                        >
                          Review & Confirm
                        </button>
                        <button
                          type="button"
                          className="primary-button-text-only text-darkpink sm:text-lg text-base font-bold"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : step == "step2" ? (
                    <>
                      <h4 className="mb-4 -mt-6 font-bold text-[24px]">
                        Let’s confirm your changes
                      </h4>
                      <p className="text-t4 font-medium text-[15px] ">
                        Your delivery and billing day will be changed to the
                        1st, every 3 months.
                      </p>
                      <button
                        type="button"
                        className="primary-button mt-[52px]"
                        onClick={() => setStep("step3")}
                      >
                        Confirm
                      </button>
                    </>
                  ) : step == "step3" ? (
                    <>
                      <button className="tab-button rounded-lg font-[450] text-xl border border-gray text-t4 flex items-center   ">
                        <span className="mt-1 ">
                          <GreenCheck className="h-6 w-6" />
                        </span>
                        <span className="text-[14px] font-medium text-t2 ml-3 text-left">
                          Your delivery & billing day has been
                          <br />
                          changed
                        </span>
                      </button>

                      <h3 className="mb-4 mt-8 text-[24px] font-bold">
                        Choose a new delivery &<br /> billing day
                      </h3>
                      <p className="text-t4 mb-0 text-[15px] ">
                        Currently your subscription delivers and is billed on
                        <br /> the{" "}
                        <b>
                          {/* {moment(autoshipOrders?.[0]?.nextProcessDate).format(
                        "Do"
                      )} */}
                          14th , every 3 months.
                        </b>{" "}
                        If you want, you can <br />
                        change the delivery and billing day below.
                      </p>
                      <div className="mt-6 w-full mb-2 text-t5 text-xs">
                        Your new delivery and billing day
                      </div>

                      <div className="flex gap-4 items-center">
                        <div className="max-w-[172px] w-full">
                          <Day />
                        </div>
                        <span className="text-t3">every 3 months</span>
                      </div>
                      {newBillingDay?.error && (
                        <p className="text-md text-red mt-3">
                          {newBillingDay?.error}
                        </p>
                      )}
                      <div className="flex flex-col gap-3">
                        <button
                          type="button"
                          className="primary-button mt-8"
                          onClick={() => setStep("step4")}
                        >
                          Review & Confirm
                        </button>
                        <button
                          className="primary-button-text-only text-darkpink sm:text-lg text-base font-bold"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : step == "step4" ? (
                    <>
                      <h4 className="mb-4 -mt-6 font-bold text-[24px]">
                        Are you sure you want to cancel <br /> your MY lash
                        membership?
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-3 ">
                        <span className="w-5 ">
                          <input
                            id="brandaffiliate"
                            className="accent-blue"
                            type="checkbox"
                            name="brandAgreement"
                          />
                        </span>
                        <label
                          htmlFor="brandaffiliate"
                          className="text-t2  text-base leading-[20px]"
                        >
                          Yes,I am sure.
                        </label>
                      </div>
                      <div className="flex flex-col item-center ">
                        <button
                          type="button"
                          className="primary-button mt-8"
                          onClick={() => setStep("step5")}
                        >
                          Cancel MY lash + MY shop
                        </button>
                        <button
                          type="button"
                          className=" text-darkpink text-[18px] font-bold text-center mt-3"
                          onClick={closeModal}
                        >
                          Continue MY membership
                        </button>
                      </div>
                    </>
                  ) : step == "step5" ? (
                    <>
                      <h4 className="mb-4 -mt-6 text-t4 font-bold text-[24px]">
                        Cancelation{" "}
                        <span className="text-darkpink">complete</span>
                      </h4>
                      <p className="text-t4 font-medium text-[15px] ">
                        Thank you for your business, Ashley.
                      </p>
                      <p className="text-t2 font-medium text-[15px] ">
                        An email confirmation will be sent to:
                      </p>
                      <p className="text-t2 font-bold text-[14px] ">
                        j ........ 2@gmail.com
                      </p>
                      <button
                        type="button"
                        className="primary-button mt-[52px]"
                        onClick={() => {
                    
                          closeModal();
                        }}
                      >
                        Done
                      </button>
                    </>
                  ) : null}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default RescheduleModal;
