"use client";
import React from "react";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import Image from "next/image";
import profileImg from "../../../assets/images/mylash-myclub-img.png";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ChangeDropdown from "./ChangeDropdown";

const OrderSummaryEditable = ({ onClose }) => {
  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-headershadow">
        <div className="mx-auto flex container items-center justify-between py-[18px] px-4">
          <button
            className="flex items-center gap-1 text-sm font-medium text-blue"
            onClick={onClose}
          >
            <XCircleIcon className="size-6  mr-1" /> Close order summary
          </button>

          <span className="text-[13px] font-medium text-blue">$20.00</span>
        </div>
      </header>
      <div className="max-w-[484px] mx-auto px-4 mt-8">
        <div className="border rounded-xl shadow-shadow1 border-gray px-6 pt-8">
          <div className="flex flex-col items-center gap-0.5">
            <Image className="w-[248px] mb-3" src={profileImg} alt="user-img" />
            <h4 className="font-bold text-t4">
              MY lash <span className="text-darkpink">+</span> MY club
            </h4>
            <p className="font-medium">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
            <h6 className="text-base text-darkpink font-bold">
              lash + brow serum
            </h6>
            <h6 className="text-base text-darkpink font-bold">
              affiliate opportunity
            </h6>
          </div>

          <ul className="space-y-1 text-[13px] text-t4 font-medium mt-5">
            <li className="flex items-center gap-2">
              <SubscribeIcone className="w-6 h-6" />
              <span>
                Subscribe because of <span className="text-darkpink">our</span>{" "}
                Lash Cycle
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckmarkIcon className="w-6 h-6" />
              <span>Skip or cancel anytime</span>
            </li>
          </ul>
          <div className="divide-y divide-dashed divide-gray mt-6 text-sm text-t4">
            <div className="flex  justify-between py-3">
              <span>Size</span>
              <span>6-week supply (2ml)</span>
            </div>
            <div className="flex text-t4 justify-between py-3">
              <span>Delivered and billed</span>
              <span>Every 6 weeks</span>
            </div>
            <div className="flex text-t4 justify-between py-3">
              <span>Items</span>
              <span>1</span>
            </div>
          </div>

          <div className="bg-pink -mx-6">
            <div className="max-w-[484px] mx-auto px-6 py-4 text-sm text-t1 space-y-2">
              <div className="flex justify-between">
                <span>Price</span>
                <span>$35.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-medium">
                  MY club discount — $15{" "}
                </span>
                <span></span>
              </div>
              <div className="flex text-[17px] font-bold justify-between ">
                <span>MY club membership</span>
                <span>$20.00</span>
              </div>
            </div>
          </div>
          <div className="divide-y divide-solid divide-gray text-t1">
            <div className="pt-6 pb-8">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="font-medium text-t2 mb-2 flex justify-between items-center">
                    Shipping Address
                    <ChangeDropdown />
                  </div>
                  <p className="text-t4 text-sm">
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
            </div>

            <div className="pt-6 pb-8">
              <div className="flex flex-col gap-4 ">
                <div>
                  <div className="font-medium text-t2 mb-2 flex justify-between">
                    <div>
                      <div className="font-medium text-t2 mb-2">Email</div>
                      <p className="text-t4 text-sm">j ........ 2@gmail.com</p>
                    </div>
                    <ChangeDropdown />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 pb-8">
              <h6 className="text-sm">Email</h6>
              <span className="w-3 h-[1px] bg-t2 block mt-3"></span>
            </div>
            <div className="pt-6 pb-8">
              <h6 className="text-sm">Pay with</h6>
              <span className="w-3 h-[1px] bg-t2 block mt-3"></span>
            </div>
            <div className="pt-6 pb-8">
              <h6 className="text-base font-bold">Your Total</h6>
              <span className="w-3 h-[1px] bg-t2 block mt-3"></span>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-14">
          <EncryptionPolicy />
        </div>
      </div>
    </>
  );
};

export default OrderSummaryEditable;
