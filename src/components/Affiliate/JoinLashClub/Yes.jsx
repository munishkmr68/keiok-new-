import React from "react";
import Image from "next/image";
import ClipartImg from "../../../assets/images/clipart-img.png";
import FlagIcon from "../../../assets/images/us-flag-circle-icon.png";

const Yes = () => {
  return (
    <div className="border rounded-xl shadow-shadow1 border-gray p-6 overflow-hidden">
      <div className="relative sm:py-10">
        <h5 className="text-[22px] text-darkpink font-bold text-center">Yessss</h5>
        <div className="flex mt-14 justify-evenly">
          <div className="flex flex-col items-center gap-2">
            <Image
              className="max-w-[56px] w-full"
              src={ClipartImg}
              alt="user-img"
            />
            <p className="text-t4 text-center font-medium">
              Made <span className="text-darkpink font-black">Clean</span> in
              <br />
              the USA
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              className="max-w-[56px] w-full"
              src={FlagIcon}
              alt="user-img"
            />
            <p className="text-t4 text-center font-medium">
              Cruelty free
              <br />
              <span className="text-darkpink font-black">+</span> vegan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yes;
