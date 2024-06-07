"use client";
import _ from "lodash";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Close from "../../assets/images/icons/close-circle.svg";

const CancelationCompleteModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
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
                  <div className="max-w-[484px] mx-auto px-4 mt-3">
                    <h3 className="mb-4">
                      Cancelation
                      <span className="text-darkpink"> complete</span>
                    </h3>
                    <div className="text-t1 flex flex-col gap-2 font-medium">
                    <p className="text-t4">Thank you for your business, Jancy.</p>
                    <p>An email confirmation will be sent to:</p>
                    <p>j .. e@gmail.com</p>
                    </div>
                    

                    <div className="flex flex-col gap-3">
                      <button type="button" className="primary-button mt-8">
                        Done
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

export default CancelationCompleteModal;
