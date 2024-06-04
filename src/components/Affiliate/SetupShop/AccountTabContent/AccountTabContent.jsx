import React from "react";
import { ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Card from "./Card";

const AccountTabContent = () => {
  return (
    <>
      <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between">
        <span className="ml-36">MY next order</span>
        <ChevronDownIcon className="w-5 h-5 " />
      </button>
      <div className="flex gap-2.5 mt-5 items-center shadow-shadow1 border border-gray py-4 px-6 rounded-xl text-t1 text-sm font-medium">
        <CheckCircleIcon className="h-5 w-5 text-green" aria-hidden="true" />

        Your payment method has been updated
    
      </div>
      <Card />
    </>
  );
};

export default AccountTabContent;
