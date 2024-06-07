import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const DateChanger = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="rounded-lg bg-t3 text-white w-[57px] h-[32px] flex items-center justify-center">
        <ChevronLeftIcon className="size-4" />
      </span>
      <div className="flex flex-col text-center">
        <span className="font-medium text-4 text-[9px]">2024</span>
        <span className="font-medium text-t1">January</span>
      </div>
      <span className="rounded-lg bg-t3 text-white w-[57px] h-[32px] flex items-center justify-center">
        <ChevronRightIcon className="size-4" />
      </span>
    </div>
  );
};

export default DateChanger;
