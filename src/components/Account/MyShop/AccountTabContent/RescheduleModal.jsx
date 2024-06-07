"use client";
import _ from "lodash";
import moment from "moment";
import Day from "./Day";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Close from "../../../../assets/images/icons/close-circle.svg";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const RescheduleModal = ({
  onClose,
  onConfirm,
  _handleSteps,
  _handleReviewBillingDay,
  newBillingDay,
  autoshipOrders,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose(); // Call onClose prop to handle modal close
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
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
                      className="mb-1 ml-auto cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>
                  <div className="max-w-[484px] mx-auto px-4">
                    <div className="flex flex-col gap-3 my-5">
                      <div className="flex gap-2.5 it items-center shadow-shadow1 border border-gray py-4 px-6 rounded-xl text-t1 text-sm font-medium">
                        <CheckCircleIcon
                          className="h-5 w-5 text-green"
                          aria-hidden="true"
                        />

                        <span className="w-[193px]">
                          Your delivery & billing day has been changed
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-4">
                      Choose a new delivery & <br /> billing day
                    </h3>
                    <p className="text-t4 mb-0 text-base ">
                      Currently your subscription delivers and is billed on the{" "}
                      <b>
                        {moment(autoshipOrders?.[0]?.nextProcessDate).format(
                          "Do"
                        )}
                        , every 3 months.
                      </b>{" "}
                      If you want, you can change the delivery and billing day
                      below.
                    </p>
                    <div className="mt-6 w-full mb-2 text-t5 text-xs">
                      Your new delivery and billing day
                    </div>

                    <div className="flex gap-4 items-center">
                      <div className="max-w-[172px] w-full">
                        <Day />
                      </div>
                      <span className="text-t4">every 3 months</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <button
                        type="button"
                        className="primary-button mt-8"
                        onClick={onConfirm}
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
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RescheduleModal;
