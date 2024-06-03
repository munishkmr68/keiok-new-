"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import _ from "lodash";
import moment from "moment";
import Day from "./Day";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const RescheduleModal = (props) => {
  const {
    _handleSteps,
    _handleReviewBillingDay,
    newBillingDay,
    autoshipOrders,
  } = props;

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
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
                  <div className="max-w-[484px] mx-auto px-4 pt-12">
                    <span
                      className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center  cursor-pointer"
                      onClick={() => _handleSteps("back")}
                    >
                      <ChevronLeftIcon className="w-4 h-4 stroke-current" />
                    </span>
                    <h3 className="mb-4 mt-8">
                      Choose a new delivery & billing day
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
                    {newBillingDay?.error && (
                      <p className="text-md text-red mt-3">
                        {newBillingDay?.error}
                      </p>
                    )}

                    <button
                      type="button"
                      className="primary-button mt-8"
                      onClick={() =>
                        _.isNull(newBillingDay?.value)
                          ? _handleReviewBillingDay()
                          : _handleSteps("step10")
                      }
                    >
                      Review & Confirm
                    </button>
                    <button
                      type="button"
                      className="primary-button-outlined mt-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
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
