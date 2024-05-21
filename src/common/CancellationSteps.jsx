import { Dialog, Transition } from "@headlessui/react";
import Close from "../assets/images/icons/close-circle.svg";
import { Fragment } from "react";

export const FirstCancellation = ({ isOpen, onClose }) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={() => onClose('')}>
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
                                        <Close className="mb-1 ml-auto cursor-pointer" onClick={() => onClose('')} />
                                    </div>
                                    <div className="p-4 bg-red flex flex-col gap-[10px] rounded">
                                        <h3 className="font-bold text-base text-whiteColor">IMPORTANT:</h3>
                                        <p className="text-t4 mb-0 text-base text-whiteColor">
                                            Ashley, in order to remain a keiok Brand Ambassador you must be subscribed to
                                            MY lash serum.
                                        </p>
                                        <p className="text-t4 mb-0 text-base text-whiteColor">
                                            Effective immediately, upon cancelation of your subscription, you will no longer receive commissions from customers or
                                            your downline.
                                        </p>
                                        <p className="text-t4 mb-0 text-base text-whiteColor">
                                            If you cancel your subscription and then restart your subscription, and if you wish to be a Brand Affiliate or Brand Ambassador
                                            you will need to re-enroll and you will not inherit any commissions from your current customers or downline.
                                        </p>
                                    </div>
                                    <button
                                        className="primary-button mt-4"
                                        onClick={() => onClose('step20')}
                                    >
                                        Got it!
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
};

export const SecondCancellation = ({ loading, onClose, onCancel }) => {
    return (
        <div className="max-w-[484px] mx-auto px-4 pt-12 ">
            <div className="p-4 bg-red flex flex-col gap-[10px] rounded">
                <h3 className="font-bold text-base text-whiteColor">Cancelation complete</h3>
                <p className="text-t4 mb-0 text-base text-whiteColor">
                    Ashley, in order to remain a keiok Brand Ambassador you must be subscribed to
                    MY lash serum.
                </p>
                <p className="text-t4 mb-0 text-base text-whiteColor">
                    Effective immediately, upon cancelation of your subscription, you will no longer receive commissions from customers or
                    your downline.
                </p>
                <p className="text-t4 mb-0 text-base text-whiteColor">
                    If you cancel your subscription and then restart your subscription, and if you wish to be a Brand Affiliate or Brand Ambassador
                    you will need to re-enroll and you will not inherit any commissions from your current customers or downline.
                </p>
            </div>
            <h3 className="mb-4 mt-8">Canceling is easy</h3>

            <p className="mt-6 w-full mb-2 text-base">
                Click &quot;Cancel MY Subscription&quot; to cancel your subsciption.
            </p>

            <button type="button" className="primary-button mt-4" onClick={() => {
                onCancel();
            }}>{loading ? "Processing ..." : 'Cancel MY Subscription'}</button>
            <button type="button" className="primary-button-outlined mt-2" onClick={() => onClose(false)}>Back</button>
        </div>
    )
}

export const ThirdCancellation = ({ email, onClose }) => {
    return (
        <div className="max-w-[484px] mx-auto px-4 pt-12 ">
            <h3 className="mb-4 mt-8">Cancelation complete</h3>
            <div>
                <p className="mt-6 w-full mb-1 text-base text-black">
                    Thank you for your business, Ashley.
                </p>
                <p className="mt-1 w-full mb-2 text-base text-black">
                    An email confirmation will be sent to:
                </p>
            </div>

            <p className="mt-6 w-full mb-2 text-xl">
                {email || "j......2@gmail.com"}
            </p>
            <button type="button" className="primary-button mt-4" onClick={() => onClose(false)}>Done</button>
        </div>
    )
}





