"use client";
import { useState } from "react";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import OtpInput from "react-otp-input";
import Footer from "@/common/Footer";
import _ from "lodash";
import React from "react";
import NeedHelp from "../NeedHelp";
import LashesIcon from "../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import Link from "next/link";

const VerificationCode = () => {
  const [otp, setOtp] = useState("");

  return (
    <>
      <div className="max-w-[343px] mx-auto px-4 my-24">
        <div className="border rounded-xl shadow-shadow1 border-gray p-6  bg-white">
          <h3 className="mb-5 text-center">
            We sent <span className="text-darkpink">you</span> a code
          </h3>
          <p className="text-sm text-t2 font-medium mb-4">
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
            <p className="text-red text-xs mt-3 text-center">
              Code is not correct
            </p>
          )}
          <p className="text-center mt-6 text-t4 text-xs max-w-[193px] mx-auto">
            You`&apos;`ll also receive an SMS if we have your number on file
          </p>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <EncryptionPolicy />
        <div className="mt-24">
          <NeedHelp />
        </div>
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ul className="text-t4 space-y-3">
            <li className="flex gap-2">
              <LashesIcon className="w-6 h-6" />
              <span className="flex flex-col text-sm sm:text-[15px] font-medium">
                <span>Natural LASHES</span>
                <span>+ BROWS</span>
              </span>
            </li>
            <li className="flex gap-2">
              <SubscribeIcone className="w-6 h-6" />
              <span className="flex flex-col text-sm sm:text-[15px] font-medium">
                <span>Subscribe because of our</span>
                <span>
                  Lash Cycle{" "}
                  <Link className="text-xs" href="/">
                    Learn more
                  </Link>
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              <CheckmarkIcon className="w-6 h-6" />
              <span className="flex flex-col text-sm sm:text-[15px] font-medium">
                <span>No commitments,</span>
                <span>cancel anytime</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VerificationCode;

