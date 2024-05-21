import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ArrowRightIcon from "../../assets/images/icons/arrow-right.svg";
import Close from "../../assets/images/icons/close-circle.svg";
import Lock from "../../assets/images/icons/lock-white.svg";
import Language from "@/components/languageStandAlone";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { _scrollToUp } from "@/services/Methods/normalMethods";

const ActivateAccountModal = ({ handleSubmit, values }) => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
        _scrollToUp();
    }

    function openModal() {
        setIsOpen(true);
    }
    const ValueCheck = values?.email === '' || values?.password === '' || values?.confirmPassword === ''
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const validEmailCheck = emailRegex?.test(values?.email);
    return (
        <>
            <button
                type={ValueCheck || !validEmailCheck ? "submit" : "button"}
                onClick={() => ValueCheck || !validEmailCheck ? _scrollToUp() : openModal()}
                className="primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white"
            >
                <Lock />
                Activate MY Account
            </button>

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
                        <div className="fixed inset-0 bg-white" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform mt-24 p-7 bg-white text-left align-middle transition-all">
                                    <Close
                                        className="mb-5 sm:mb-24 ml-auto cursor-pointer"
                                        onClick={closeModal}
                                    />

                                    <h3 className="font-bold py-4">Are you ready to activate your account?</h3>
                                    <p className="text-t4">Activate your account and easily manage or cancel your subscription.</p>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (handleSubmit) {
                                                handleSubmit();
                                            }

                                            closeModal();
                                        }}
                                        className="primary-button mx-auto my-9 flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white"
                                    >
                                        <Lock />
                                        Activate MY Account
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </button>
                                    <div className="divide-y divide-gray border-t border-gray">
                                        <div className="py-6 flex items-center justify-between gap-2 group">
                                            <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium group-hover:text-blue transition ease-in-out">
                                                Join as a Brand Ambassador
                                            </div>

                                            <ArrowRightIcon className="transition ease-in-out group-hover:text-blue" />
                                        </div>
                                        <div className="py-6 flex items-center justify-between gap-2 group">
                                            <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium group-hover:text-blue transition ease-in-out ">
                                                Join as a Brand Affiliate
                                            </div>

                                            <ArrowRightIcon className="transition ease-in-out group-hover:text-blue" />
                                        </div>
                                    </div>

                                    <Language />


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
export default ActivateAccountModal;
