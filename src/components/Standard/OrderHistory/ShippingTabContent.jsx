"use client";
import React from "react";
import Footer from "@/common/Footer";
import Image from "next/image";
import myLashMyClub from "../../../assets/images/mylash-myclub-img.png";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";

const ShippingTabContent = () => {
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
          <span>Tracking Number</span>
          <span>11111111111111111111111111111111</span>
        </div>
        <div className="flex  justify-between py-2 text-blue">
          <span>Track this shipment</span>
          <span></span>
        </div>
        <div className="flex  justify-between py-2">
          <span>Carrier</span>
          <span>USPS</span>
        </div>

        <div className="flex  justify-between py-2 bg-bg3 -mx-6 px-6">
          <div className="text-t1">
            <p className="text-t1 text-sm mb-2">Shipping Address</p>
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
            <p className="text-t1 text-sm mb-2 mt-3">Email</p>
            <p className="font-normal text-sm mb-1">j .. e@gmail.com</p>
          </div>
        </div>

        <div className="flex  justify-between py-2 bg-bg3 -mx-6 px-6">
          <span>Items</span>
          <span>1</span>
        </div>
        <div className="flex  justify-between py-2 bg-bg3 -mx-6 px-6">
          <span>Subtotal</span>
          <span>$39.95 USD</span>
        </div>
        <div className="flex  justify-between py-2 bg-bg3 -mx-6 px-6">
          <span>Shipping</span>
          <span className="line-through">$4.95 USD</span>
        </div>
        <div className="flex  justify-between py-2 bg-bg3 -mx-6 px-6">
          <span>MY club discount — $2</span>
          <span>$39.95 USD</span>
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

export default ShippingTabContent;
