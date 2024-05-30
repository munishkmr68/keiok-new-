import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import Close from "../../../assets/images/icons/close-circle.svg";

const RemovePaymentModal = ({  isOpen, onClose, }) => {


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mx-4 sm:mx-0 w-full max-w-[375px] transform mt-24 p-7 bg-white  text-left align-middle  transition-all rounded-md">
                  <div>
                    <Close
                      className="mb-1 ml-auto cursor-pointer"
                      onClick={onClose}
                    />
                  </div>
                  <div className="py-4  flex items-center justify-between gap-2 group">
                    <h3 className="font-bold">Remove payment method</h3>
                  </div>
                  <p className="sm:text-md text-base text-t4">
                    Are you sure you want to remove this payment method?
                  </p>

                  <button className="primary-button mt-12">Yes</button>
                  <button className="primary-button-outlined mt-2" onClick={onClose}>
                    Cancel
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default RemovePaymentModal;
