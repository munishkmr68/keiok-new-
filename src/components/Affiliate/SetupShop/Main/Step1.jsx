import Image from "next/image";
import React, { useState } from "react";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import Inputbox from "@/components/inputbox";
import GreenCheck from "../../../../assets/images/icons/check-with-green.svg";
import RedCross from "../../../../assets/images/icons/red-cross.svg";
import Coinzoom from "../../../../assets/images/icons/zoom.svg";
import AppStore from "../../../../assets/images/icons/app-store.svg";
import PlayStore from "../../../../assets/images/icons/play-store.svg";

import _ from "lodash";
export default function Step1() {
  const [clubName, setclubName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const validateclubName = (name) => {
    // Define your validation logic here
    const validDomain = /^[a-zA-Z0-9]{6,30}$/;
    if (!validDomain.test(name)) {
      return "We could not confirm your ZoomMe.  Please check and try again";
    }
    return "";
  };
  const name = "club";
  const handleInputChange = (event) => {
    const value = event.target.value;
    setclubName(value);
    const error = validateclubName(value);
    setErrorMessage(error);
  };
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
            MY ZoomMe <br />{" "}
            <span className="text-darkpink text-[14px]">@ashlash</span>
          </span>
        </li>
      </div>

      <div className="  overflow-hidden mt-4">
        <div className=" mt-0  pt-4">
          <h6 className=" text-[18px] font-[450] font-bold text-left">
            How to setup <span className="text-darkpink">your</span> ZoomMe
          </h6>
          <ol className="text-t4 text-[15px] ps-5 mb-6 list-decimal font-[420] text-justify">
            <li className="mt-4"> Download the CoinZoom app</li>
            <li> Create a CoinZoom account</li>
            <li>
              {" "}
              You will choose your ZoomMe name when <br />
              you setup your CoinZoom account
            </li>
            <li> Confirm your ZoomMe name below</li>
          </ol>
        </div>

        <div className=" mt-0  mb-5">
          {errorMessage ? (
            <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] mb-[30px] text-t4 flex text-left  ">
              <span className="mt-1 ">
                <RedCross />
              </span>
              <span className="text-sm ml-3">{errorMessage}</span>
            </button>
          ) :clubName !=""? (
            <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] mb-[30px] text-t4 flex items-center   ">
              <span className="mt-1 ">
                <GreenCheck />
              </span>
              <span className="text-sm ml-3">
              Your ZoomMe has been successfully added
              </span>
            </button>
          ):null
          
          }
        </div>

        <div className="flex flex-col relative">
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
                  value={clubName}
                  onChange={handleInputChange}
                />
                <label htmlFor={name} className="floating-label">
                  Your ZoomMe name
                </label>
              </React.Fragment>
            )
          )}
        </div>
        <div className=" mt-8 flex justify-center gap-2  ">
          <h6 className=" text-[22px] font-[420] text-t2 text-left">Get</h6>
          <div>
            <Coinzoom />
          </div>
        </div>
        <div className=" mt-6 flex justify-center gap-2  ">
          <AppStore />
          <PlayStore />
        </div>
        <div className="border rounded-xl shadow-shadow1 text-center border-gray  overflow-hidden mt-[52px]">
          <h6 className="pt-6 text-[22px] font-[450] text-darkpink">MY shop</h6>

          <h6 className="text-base text-t2 font-[420] sm:text-[14px] ">
            Affiliate agreement
          </h6>

          <div className="flex flex-wrap gap-2 mt-3 mb-6 justify-center">
            <span className="w-5 ">
              <input
                id="brandaffiliate"
                className="accent-blue"
                type="checkbox"
                name="brandAgreement"
              />
            </span>
            <label
              htmlFor="brandaffiliate"
              className="text-t2  text-base leading-[20px]"
            >
              I have <span className="text-blue">read</span> & agree
            </label>
          </div>
        </div>
        
      </div>
    </>
  );
}
