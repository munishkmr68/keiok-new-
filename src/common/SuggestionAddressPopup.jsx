import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Close from "../assets/images/icons/close-circle.svg";

const checkicon = {
    width: "24px",
    height: "24px",
};

const listingspan = {
    width: "calc(100% - 34px)",
};

const SuggestionAddressPopup = ({
    bypass,
    ourAddress,
    addressOptions,
    _acceptOrNotAddressOption
}) => {

    return (
        <>
            <Transition appear show={(!!addressOptions && !bypass)} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={() => console.log('close')}>
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
                                            onClick={() => _acceptOrNotAddressOption('close')}
                                        />
                                    </div>
                                    <div className="py-4">
                                        <h3 className="font-bold">
                                            Let&apos;s confirm your address
                                        </h3>
                                        <p className="text-t4 mb-0 text-base ">
                                            USPS was unable to verify the address you entered, but we found a close a match.
                                        </p>
                                    </div>
                                    <div className="mx-auto">
                                        <div className="border-[#D8D8D8] border-b py-4 flex items-center gap-2.5 justify-between">
                                            <div className="w-full">
                                                <h6 className="text-base">
                                                    You Entered
                                                    <a
                                                        onClick={() => _acceptOrNotAddressOption('close')}
                                                        className="cursor-pointer font-normal text-xs float-right mt-1"
                                                    >
                                                        Change
                                                    </a>
                                                </h6>
                                                <p className="text-sm leading-6">
                                                    {ourAddress?.shipping_street}
                                                    <br />
                                                    {ourAddress?.shipping_city} {ourAddress?.shipping_state} {ourAddress?.shipping_zipcode}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="border-inputcolor py-4 flex items-center gap-2.5 justify-between">
                                            <div className="w-full">
                                                <h6 className="text-base">We suggest</h6>
                                                <p className="text-sm leading-6">
                                                    {addressOptions?.address_1}
                                                    <br />
                                                    {addressOptions?.city} {addressOptions?.state_region} {addressOptions?.postal_code}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="primary-button" onClick={() => _acceptOrNotAddressOption('accept')}>
                                        Use suggested address
                                    </button>
                                    <button className="primary-button-outlined mt-[10px]" onClick={() => _acceptOrNotAddressOption('reject')}>
                                        Use address you entered
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
export default SuggestionAddressPopup;
