import React from "react";
import Image from "next/image";
import prdimage from "../../../assets/images/instant-result-img.png";
import TextCutt from "../../../assets/images/text-cutt-pattren.svg";

const InstantResult = () => {
  return (
    <div className="border rounded-xl shadow-shadow1 border-gray p-6 overflow-hidden">
      <h5 className="text-t3 font-black"><span className="relative">INSTANT RESULTS 
      <span className="absolute top-1/2 -translate-y-2/4 block"><TextCutt className="w-full" /></span>
      </span>
      </h5>
      <div className="flex relative">
        <div className="absolute bottom-0">
          <ul className="flex flex-col gap-6">
            <li className="flex gap-2">
              <span className="text-[21px]">😄</span>
              <span className="flex flex-col">
                <span className="text-xs text-t5">after</span>
                <span className="label">6 weeks</span>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[21px]">😍</span>
              <span className="flex flex-col">
                <span className="text-xs text-t5">after</span>
                <span className="label">12 weeks</span>
              </span>
            </li>
            <li className="font-medium text-t4 mt-3">..of <span className="text-t1 font-bold">nightly</span> use</li>
          </ul>
        </div>
        <Image
          className="max-h-[440px] relative top-6 left-6"
          src={prdimage}
          alt="user-img"
        />
      </div>
    </div>
  );
};

export default InstantResult;
