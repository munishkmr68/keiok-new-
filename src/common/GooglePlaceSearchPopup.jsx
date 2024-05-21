import GoogleAutocomplete from "@/components/GoogleAutocomplete";
import React, { Fragment } from "react";
import Close from "../assets/images/icons/close-circle.svg";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import ClipartImg from "../assets/images/clipart-img.png";

const GooglePlaceSearchPopup = ({
    isOpen,
    closeModal,
    callback
}) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[9999] " onClose={() => console.log('false')}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)]" />
                </Transition.Child>

                <div className="fixed inset-0 bg-white overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle transition-all">
                                <div>
                                    <Close
                                        className="mb-1 ml-auto cursor-pointer"
                                        onClick={closeModal}
                                    />
                                </div>
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Address
                                </Dialog.Title>

                                <GoogleAutocomplete
                                    manually={true}
                                    InputClassName="pt-1 border-[#1990C6]"
                                    LabelClassName="!pl-0"
                                    autocompleteContainerclassName="h-[914px]"
                                    callback={(data) => callback(data)}
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>}
                                // label="Address"
                                >
                                    <div className="flex justify-center flex-col items-center pt-[4rem] gap-[10px]">
                                        <div>
                                            <p className="text-base">Start typing the first line of your</p>
                                            <p className="text-base">address, and then select it from the list</p>
                                        </div>
                                        <Image className="max-w-[58px]" src={ClipartImg} alt="user-img" />
                                    </div>
                                </GoogleAutocomplete>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default GooglePlaceSearchPopup;
