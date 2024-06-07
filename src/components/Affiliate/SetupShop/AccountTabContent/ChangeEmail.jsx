"use client";
import Image from "next/image";
import React from "react";
import LockIcon from "../../../../assets/images/icons/lock.svg";
import NortonLogo from "../../../../assets/images/norton-logo.png";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ChangeEmail = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4">
        <div className="flex gap-2.5 mt-5 items-center shadow-shadow1 border border-gray py-4 px-6 rounded-xl text-t1 text-sm font-medium">
          <CheckCircleIcon className="h-5 w-5 text-green" aria-hidden="true" />
          Your payment method has been updated
        </div>
        <p className="text-t2 my-6 font-medium flex items-center justify-center gap-2">
          <LockIcon /> Secure for peace of mind
        </p>
      </div>
      <div className="bg-bg3 py-10 px-4">
        <div className="max-w-[484px] mx-auto px-4 mb-3">
          <Image
            className="max-w-[66px] ml-auto mb-3"
            src={NortonLogo}
            alt="logo"
          />
          <div className="relative">
            <input
              id="email"
              type="email"
              value="Jane@gmail.com"
              className="floating-input peer"
              disabled
            />
            <label htmlFor="email" className="floating-label">
              Current Email
            </label>
          </div>
          <div className="relative mt-3">
            <input
              id="email"
              type="email"
              placeholder=""
              className="floating-input peer"
            />
            <label htmlFor="email" className="floating-label">
              Email
            </label>
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-3 mt-6">
        <button type="reset" className="primary-button font-medium">
          Save
        </button>
        <button
          type="reset"
          className="primary-button-outlined font-medium mt-3"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default ChangeEmail;
