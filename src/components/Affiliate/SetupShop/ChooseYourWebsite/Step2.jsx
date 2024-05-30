import Image from "next/image";
import React, { useState } from "react";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import Inputbox from "@/components/inputbox";
import GreenCheck from "../../../../assets/images/icons/check-with-green.svg";
import RedCross from "../../../../assets/images/icons/red-cross.svg";
import _ from "lodash";

export default function Step2(props) {
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
          <h6 className=" text-[18px] text-left">
            <span className="text-darkpink">Choose</span> your website name
          </h6>
        </div>

        <div className="max-w-[484px] mt-0 px-6 mb-5">
          {props?.errorMessage ? (
            <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex text-left  ">
              <span className="mt-1 ">
                <RedCross />
              </span>
              <span className="text-sm ml-3">{props?.errorMessage}</span>
            </button>
          ) : props.websiteName != "" ? (
            <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center   ">
              <span className="mt-1 ">
                <GreenCheck />
              </span>
              <span className="text-sm ml-3">
                Your shop name has been successfully added
              </span>
            </button>
          ) : null}
        </div>
        {props.websiteName == "" ? (
          <span className="text-base sm:text-[15px] pl-6  font-medium">
            <span className="text-t5">name</span>
            <span className="text-t2">.choosemy.club</span>
          </span>
        ) : (
          <span className="text-base sm:text-[15px] pl-6  font-medium">
            <span className="text-t5">Jancy</span>
            <span className="text-t2">.choosemy.club</span>
          </span>
        )}
        <div className="flex flex-col m-6 relative">
          {/* Removed password field and only mapping email field */}
          {_.map(
            [
              {
                name: "email",
                placeholder: "Please provide a valid email address.",
              },
            ],
            ({ name, placeholder }) => (
              <React.Fragment key={name}>
                <Inputbox
                  type="text"
                  name={name}
                  id={name}
                  placeholder=""
                  className={`border-2 border-t5 px-3.5  rounded-xl block w-full placeholder:text-input1 font-medium text-t1 sm:text-[17px] text-base  focus-visible:outline-none focus-visible:border-[#51C96D] peer `}
                  value={props.websiteName}
                  onChange={props.handleInputChange}
                />
                <label htmlFor={name} className="floating-label">
                  Your website name
                </label>
              </React.Fragment>
            )
          )}
        </div>

        {/* <div className="m-6">
          <Inputbox
            name="cardnumber"
            id="cardnumber"
            type="text"
            placeholder="Your website name"
            value={props.websiteName}
            onChange={props.handleInputChange}
            className="border-2 border-t5 px-3.5 pt-4  min-h-[48px] rounded-xl block w-full placeholder:text-input1 font-medium text-t1 sm:text-[17px] text-base  focus-visible:outline-none focus-visible:border-[#51C96D]"
            // onChange={handleCardNumberChange}
          />
        </div> */}
      </div>
    </>
  );
}
