"use client";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LanguageSelector from "../../LanguageSelector";
import JoinLashClub from "../JoinLashClub";
import Close from "../../../assets/images/icons/close-circle.svg";

const SignInModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const close = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-40" onClose={close}>
          <div className="fixed inset-0 bg-black bg-opacity-30 z-40">
            <div className="flex w-full min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className="w-full flex items-center justify-center bg-white fixed top-0 left-0 h-full"
              >
                <div className="mx-auto flex container items-center pt-[29px] px-4 absolute top-0">
                  <Close
                    className="mb-1 ml-auto cursor-pointer"
                    onClick={() => onClose("")}
                  />
                </div>
                <Dialog.Panel className="w-full max-w-[452px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all shadow-none">
                  <LanguageSelector />
                  <button className="primary-button mt-6">Sign in</button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignInModal;
