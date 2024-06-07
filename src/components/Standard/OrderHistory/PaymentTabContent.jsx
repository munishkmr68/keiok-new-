"use client";
import React from "react";
import Footer from "@/common/Footer";
import Image from "next/image";
import myLashMyClub from "../../../assets/images/mylash-myclub-img.png";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";
import Amex from "../../../assets/images/icons/amex-icon.svg";

const PaymentTabContent = ({ onOrderSummaryEditable }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-0.5">
        <Image className="w-[248px] mb-3" src={myLashMyClub} alt="user-img" />
        <h4 className="font-bold text-t4">
          MY lash <span className="text-darkpink">+</span> MY club
        </h4>
        <p className="font-medium">
          <span className="text-[9px]">with</span> Ashley Jackson
        </p>
        <h6 className="text-base text-darkpink font-bold">lash + brow serum</h6>
        <h6 className="text-base text-darkpink font-bold">
          affiliate opportunity
        </h6>
      </div>

      <div className="flex gap-2 mt-5">
        <SubscribeIcone className="w-6 h-6" />
        <span className="text-[13px] font-medium text-t4">
          Subscribe because of <span className="text-darkpink">our </span>
          Lash Cycle
        </span>
      </div>

      <div className="divide-y divide-dashed divide-gray mt-6 text-sm text-t2 font-medium">
        <div className="flex  justify-between py-2">
          <span>Date Ordered</span>
          <span>January 13, 2023</span>
        </div>
        <div className="flex  justify-between py-2">
          <span>Payment Method</span>
          <p className=" sm:text-base text-sm text-t2 font-bold mb-3 flex gap-0.5">
            <Amex /> ... 1002
          </p>
        </div>

        <div className="flex  justify-between py-2 bg-bg3 -mx-6 px-6">
          <div className="text-t1">
            <p className="text-t1 text-sm mb-2">Billing Address</p>
            <p className="text-sm font-normal">
              Erica Jones
              <br />
              USA
              <br />
              3836 E Stiles Ln
              <br />
              Gilbert, AZ 85295-0150
              <br />
              Apt 1
            </p>
          </div>
        </div>

        <div className="flex justify-between py-2 bg-bg3 -mx-6 px-6">
          <span>Items</span>
          <span>1</span>
        </div>
        <div className="flex justify-between py-2 bg-bg3 -mx-6 px-6">
          <span>Subtotal</span>
          <span>$35.00 USD</span>
        </div>
        <div className="flex  justify-between py-2 bg-bg3 -mx-6 px-6">
          <span>Shipping</span>
          <span>$4.95 USD</span>
        </div>
        <div className="flex  justify-between py-2 bg-bg3 -mx-6 px-6">
          <span>MY club discount — $2</span>
          <span>$2.95 USD</span>
        </div>
        <div className="flex  justify-between py-2 bg-bg3 -mx-6 px-6">
          <span>MD State Tax (0.06%)</span>
          <span>$2.06 USD</span>
        </div>
        <div className="flex  justify-between py-2 bg-bg3 -mx-6 px-6 pb-4">
          <span>Total</span>
          <span>$39.95 USD</span>
        </div>
      </div>
    </>
  );
};

export default PaymentTabContent;
