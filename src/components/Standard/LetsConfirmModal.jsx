"use client";
import _ from "lodash";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Close from "../../assets/images/icons/close-circle.svg";

const LetsConfirmModal = ({
  onClose,
  onCancel,
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
                    <h3 className="mb-4">Let’s confirm your changes</h3>
                    <p className="text-t4 mb-0 text-base ">
                      Your delivery and billing day will be changed to the 1st,
                      every 3 months.
                    </p>

                    <button
                      type="button"
                      className="primary-button mt-8"
                      onClick={onCancel}
                    >
                       Confirm
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

export default LetsConfirmModal;
