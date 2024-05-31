import React from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Card from "./Card";

const AccountTabContent = () => {
  return (
    <>
      <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between">
        <span className="ml-36">MY next order</span>
        <ChevronDownIcon className="w-5 h-5 " />
      </button>
      <Card />
    </>
  );
};

export default AccountTabContent;
