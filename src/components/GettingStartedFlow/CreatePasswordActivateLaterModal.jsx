import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import Close from "../../assets/images/icons/close-circle.svg";


const checkicon = {
    width: "24px",
    height: "24px",
};

const listingspan = {
    width: "calc(100% - 34px)",
};

const CreatePasswordActivateLaterModal = () => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>


            <button type="button"
                onClick={openModal} className="primary-button-outlined mt-2">Activate Later</button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={closeModal}>
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
                                            onClick={closeModal}
                                        />
                                    </div>

                                    <h3 className="font-bold py-4">Want to activate your<br className="hidden sm:block" />account later?</h3>
                                    <p className="text-t4 pb-2">We&apos;ve got you covered.</p>
                                    <p className="text-t4">A link to activate your account has been sent
                                        to your email.</p>

                                    <button className="primary-button mt-[30px]">Got it!</button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
export default CreatePasswordActivateLaterModal;
