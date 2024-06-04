"use client";
import _ from "lodash";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Close from "../../../../assets/images/icons/close-circle.svg";

const CancelModal = ({ onClose, onCancelationComplete }) => {
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
                  <div className="max-w-[484px] mx-auto px-4 mt-3">
                    <h3 className="mb-4">
                      <span className="text-darkpink">If</span> I cancel MY lash
                      + MY club:
                    </h3>

                    <div className="flex flex-col gap-3 text-t4 font-medium">
                      <div className="flex gap-2">
                        <span className="w-5 flex justify-center">
                          <input
                            id="address"
                            className="accent-blue w-4 h-4"
                            type="checkbox"
                            name="status"
                          />
                        </span>
                        <label
                          htmlFor="address"
                          className="text-t3 leading-[21px]"
                        >
                          I will{" "}
                          <span className="text-darkpink">not be paid</span>{" "}
                          personal or level commissions.
                        </label>
                      </div>

                      <div className="flex  gap-2">
                        <span className="w-5 flex justify-center">
                          <input
                            id="address"
                            className="accent-blue w-4 h-4"
                            type="checkbox"
                            name="status"
                          />
                        </span>
                        <label
                          htmlFor="address"
                          className="text-t3 leading-[21px]"
                        >
                          If I cancel and restart MY lash + MY shop membership,
                          I will{" "}
                          <span className="text-darkpink">
                            not inherit any commissions
                          </span>{" "}
                          from MY current customers including personal and level
                          commission.
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <button type="button" className="primary-button mt-8" onClick={onCancelationComplete}>
                        Cancel MY lash + MY shop
                      </button>
                      <button className="primary-button-text-only text-darkpink sm:text-lg text-base font-bold">
                        Continue MY membership
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

export default CancelModal;
