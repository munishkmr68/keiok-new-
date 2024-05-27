import Image from "next/image";
import React from "react";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import Inputbox from "@/components/inputbox";

export default function Step1() {
  return (
    <>
      <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-4">
        <div className="max-w-[484px] mt-0 pl-6 pt-4">
          <h6 className=" text-[13px] text-left">Example:</h6>
        </div>
        <li className="flex gap-4 mt-3 pl-6 pb-4 text-t4">
          <Image
            className="w-[35px] h-[35px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <span className="text-base sm:text-[15px] -mt-1 font-medium">
            MY website name is <br />{" "}
            <span className="text-darkpink">ashley.choosemy.club</span>
          </span>
        </li>
      </div>

      <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-4">
        <div className="max-w-[484px] mt-0 pl-6 pt-4">
          <h6 className=" text-[13px] text-left">
            <span className="text-darkpink">Choose</span> your website name
          </h6>
        </div>

        <span className="text-base sm:text-[15px] pl-6  font-medium">
          <span className="text-t5">name</span>
          <span className="text-t2">.choosemy.club</span>
        </span>
        <div className="m-6">
          <Inputbox
            name="cardnumber"
            id="cardnumber"
            type="text"
            placeholder="Your website name"
            className="border-2 border-t5 px-3.5 pt-4  min-h-[48px] rounded-xl block w-full placeholder:text-input1 font-medium text-t1 sm:text-[17px] text-base  focus-visible:outline-none focus-visible:border-blue"
            // onChange={handleCardNumberChange}
          />
        </div>
      </div>
    </>
  );
}
