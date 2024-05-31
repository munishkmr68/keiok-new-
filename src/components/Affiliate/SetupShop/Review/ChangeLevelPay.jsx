import React, { useState } from "react";
import Image from "next/image";

import profileImg from "../../../../assets/images/profile-pic-needhelp.png";

const ChangeLevelPay = (props) => {
  const [levelChange, setLevelChange] = useState("");
  const handleSave = () => {
    props?.setLevel(levelChange);
  };
  return (
    <>
      <div className=" mt-3 overflow-hidden">
        <div className=" ">
          <fieldset className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="w-5 flex justify-center">
                <input
                  id="draft"
                  className="accent-blue checked:w-5 checked:h-5"
                  type="radio"
                  name="pathValue"
                  value="ambassador"
                  onClick={() => {
                    setLevelChange("Activated");
                  }}
                />
              </span>
              <span className="text-base text-t4 font-bold">
                <span className="text-darkpink">Choose</span> level pay
              </span>
            </div>
            <div className="flex gap-2 -mt-2 items-center">
              <span className="w-5 flex justify-center">
                <input
                  id="published"
                  className="accent-blue checked:w-5 checked:h-5"
                  type="radio"
                  name="pathValue"
                  value="affiliate"
                  onClick={() => {
                    setLevelChange("Not activated");
                  }}
                />
              </span>
              <span className="">Do not choose level pay</span>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="border max-w-[404px]  rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-6">
        <div className="mt-0 pl-6 pt-4">
          <h6 className=" text-[14px] text-left">Example:</h6>
        </div>
        <li className="flex gap-4 mt-3 pl-6 pb-4 text-t4">
          <Image
            className="w-[35px] h-[35px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <span className="text-base text-t5 sm:text-[15px] -mt-1 font-medium">
            If Ali enrolls as an affiliate through your club then she becomes
            your Level 1. If Lisa signs up through Ali`&apos;`s club then Lisa becomes
            your Level 2.
          </span>
        </li>
      </div>
      <div className="flex flex-2 mt-6 gap-3 max-w-[404px]">
        <button
          className="primary-button items-center "
          onClick={() => {
            handleSave();
            props.setShowLevel(false);
          }}
        >
          Save
        </button>
        <button
          className="primary-button-outlined rounded-xl items-center"
          onClick={() => {
            props.setShowLevel(false);
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default ChangeLevelPay;
