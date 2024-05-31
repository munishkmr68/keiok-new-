"use client";
import { useState } from "react";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import OtpInput from "react-otp-input";
import SmsChangeEmail from "./SmsChangeEmail";
import AccountInfo from "./AccountInfo";

const SentEmailCode = (props) => {
    const { _handleSteps } = props;
    const [otp, setOtp] = useState("");




    return (
        <>

            <div className="max-w-[484px] mx-auto px-4 pt-12">
                <span
                    className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
                    onClick={() => _handleSteps('back')}
                >
                    <ChevronLeftIcon className="w-4 h-4" />
                </span>
                <div className="flex flex-col items-center text-center mt-8">
                    <p className="text-t2 mb-6 font-bold">SECURITY CHECK</p>
                    <h3 className="mb-4">
                        Check your email. You should have received a message with a code
                    </h3>
                    <p className="text-t4 mb-12 text-base">
                        Enter the code we sent to you at jaywade12@gmail.com. This is necessary to protect your account.
                    </p>
                </div>

                <OtpInput
                    value={otp}
                    inputStyle="otp-input"
                    containerStyle="otp-input-container"
                    onChange={setOtp}
                    numInputs={6}
                    renderInput={(props) => <input {...props} />}
                />
                {otp !== "121212" && <span className="text-red text-xs mt-3">
                    Code is incorrect. Please try again or request a new code
                </span>}

                <button className="primary-button mt-8" onClick={() => { otp === "121212" && _handleSteps('step8') }}>
                    Enter Code to Continue
                </button>

                <div className="flex gap-3 items-center justify-center mt-4">
                    <span className="text-blue text-sm">Send code again</span>
                    <span className="text-gray">|</span>
                    <span className="text-blue text-sm">Try another way</span>
                </div>
            </div>

            <div className="max-w-[484px] mx-auto px-4 py-8">
                <div className="mt-16">
                    <Language />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SentEmailCode;
