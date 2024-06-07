"use client";
import React, { useState } from "react";
import Inputbox from "@/components/inputbox";
import Footer from "@/common/Footer";
import NortonLogo from "../../assets/images/norton-logo.png";
import Image from "next/image";
import LockIcon from "../../assets/images/icons/lock.svg";

const ShippingInfo = ({ onOrderSummaryEditable }) => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4">
        <p className="text-t2 my-6 font-medium flex items-center justify-center gap-2">
          <LockIcon /> Secure for peace of mind
        </p>
      </div>
      <div className="bg-bg3 py-10 px-4">
        <div className="max-w-[484px] mx-auto px-4">
          <div className="flex justify-end mb-3">
            <Image
              className="max-w-[66px] ml-auto mb-3"
              src={NortonLogo}
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-[9px] mt-6">
            <div className="relative">
              <Inputbox
                name="name"
                id="name"
                placeholder=""
                value="Jane Doe"
                className="floating-input peer"
              />
              <label htmlFor="name" className="floating-label">
                Full Name
              </label>
            </div>

            <div className="relative">
              <Inputbox
                name="name"
                id="name"
                placeholder=""
                value="2134 Oak Bluff Dr"
                className="floating-input peer"
              />
              <label htmlFor="name" className="floating-label">
                Address
              </label>
            </div>

            <div className="relative">
              <Inputbox
                name="name"
                id="name"
                placeholder=""
                value="1"
                className="floating-input peer"
              />
              <label htmlFor="name" className="floating-label">
                Apt, suite, company, c/o (optional)
              </label>
            </div>

            <div className="relative">
              <Inputbox
                name="name"
                id="name"
                placeholder=""
                value="33837-3691"
                className="floating-input peer"
              />
              <label htmlFor="name" className="floating-label">
                ZIP code
              </label>
            </div>
            <div className="relative">
              <Inputbox
                name="name"
                id="name"
                placeholder=""
                value="Davenport, FL"
                className="floating-input peer"
              />
              <label htmlFor="name" className="floating-label">
                City, State
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mt-6">
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="primary-button w-auto font-medium min-w-[124px]"
          >
            Save
          </button>
          <button className="primary-button-outlined w-auto font-medium">
            Cancel
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShippingInfo;
