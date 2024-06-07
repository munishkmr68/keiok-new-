"use client";
import { Fragment, useState } from "react";
import OtpInput from "react-otp-input";
import { Dialog, Transition } from "@headlessui/react";
import LockIcon from "../../assets/images/icons/lock.svg";
import Close from "../../assets/images/icons/close-circle.svg";

const SecurityCheck = (props) => {
  const { _handleSteps } = props;
  const [otp, setOtp] = useState("");

  let [isOpen, setIsOpen] = useState(true);

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
                <Dialog.Panel className="w-full max-w-[375px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div>
                    <Close
                      className="mb-1 ml-auto cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>
                  <div className="max-w-[484px] mx-auto px-4 mt-3">
                    <p className="text-t2 mb-6 font-bold flex items-center justify-center mt-8 gap-2">
                      <LockIcon /> SECURITY CHECK
                    </p>

                    <div className="border rounded-xl shadow-shadow1 border-gray p-6 mt-6 mb-6">
                      <h3 className="mb-5 text-center">
                        We sent <span className="text-darkpink">you</span> a
                        code
                      </h3>
                      <p className="text-t2 mb-4 text-sm font-medium">
                        Enter verification code
                      </p>
                      <OtpInput
                        value={otp}
                        inputStyle="otp-input"
                        containerStyle="otp-input-container"
                        onChange={setOtp}
                        numInputs={4}
                        renderInput={(props) => <input {...props} />}
                      />
                      {otp !== "121212" && (
                        <div className="text-center mt-3">
                          <span className="text-red text-xs ">
                            Code is not correct
                          </span>
                        </div>
                      )}
                      <p className="text-xs text-t4 mt-4 text-center max-w-[193px] mx-auto">
                        You'll also receive an SMS if we have your number on
                        file
                      </p>
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

export default SecurityCheck;
