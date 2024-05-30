import React from "react";
import Image from "next/image";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";

export default function MyClubTab() {
  return (
    <>
      <div className="max-w-[484px] mx-auto ">
        <div className="flex items-center mt-[30px] gap-4">
          <Image
            className="w-[140px] h-[140px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <div>
            <h4 className="mb-0.5 text-t4 font-bold leading-tight">
              Want to <span className="text-darkpink">finish</span> setting
              <br />
              up your club?
            </h4>

            <p className="font-medium text-sm">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
          </div>
        </div>

        <div className="text-[15px] text-t4 text-sm mt-6 font-[420] p-0 ">
          Your personal 'MY club' website is included with your MY lash
          membership.
        </div>

        <div className=" text-t3 text-sm mt-3 text-[15px] font-[420] p-0">
          <p>No commitments</p>
          <p>No fees</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-6">
          <div className="max-w-[484px] mt-0 pl-6 pt-4 pb-4">
            <h6 className="text-[15px] text-t2 font-[450] font-bold leading-5">
              I hate paperwork, too.
              <br />
              Just 4 more steps
            </h6>
            <ol className="text-t4 text-[15px]  mb-6  font-[420] text-justify">
              <li className="flex gap-2 items-center">
                <CheckmarkIcon className="w-3 h-3" />
                <span className="text-base sm:text-[15px] font-[450] font-bold">
                  <span className="text-darkpink">Choose </span>
                  your commissions
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <CheckmarkIcon className="w-3 h-3" />
                <span className="text-base sm:text-[15px] font-[450] font-bold">
                  <span className="text-darkpink">Choose </span>
                  your website
                </span>
              </li>
              <li className="flex gap-2 items-center">
                3.
                <span className="text-base sm:text-[15px] font-[450] font-bold">
                  <span className="text-darkpink">Choose </span>
                  your club name
                </span>
              </li>
              <li className="flex gap-2 items-center">
                4.
                <span className="text-base sm:text-[15px] font-[450] font-bold">
                  <span className="text-darkpink">Choose </span>
                  your profile image
                </span>
              </li>
              <li className="flex gap-2 items-center">
                5.
                <span className="text-base sm:text-[15px] font-[450] font-bold">
                  <span className="text-darkpink">Choose </span>
                  your ZoomMe
                </span>
              </li>
              <li className="flex gap-2 items-center">
                6.
                <span className="text-base sm:text-[15px] font-[450] font-bold">
                  Get ready to 
                  <span className="text-darkpink"> get paid </span>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <button
        className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
        onClick={() => {
          router.push("/affiliate/setupshop/review");
        }}
      >
       setup MY club
        <ChevronRightIcon className="w-4 h-4" />
      </button>
      <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-[90px]">
        <div className="max-w-[484px] mt-0 pl-6 pt-4 pb-4">
          <h6 className=" text-[13px] text-left ">
            <span className="font-bold">MY personal sales commission</span>
            <br />
            28%
          </h6>
          <div className="w-full max-w-[400px] mt-6">
            <hr className="text-gray" />
          </div>
          <div className="max-w-[484px] mt-0 pt-4 ">
            <h6 className=" text-[13px] text-left flex flex-2 justify-between ">
              <span>
                <p className="font-bold">MY Level Pay</p>
                Activated
              </span>
              <span className="flex mr-6 text-blue">
                <p>Change</p>
                <ChevronDownIcon className="w-3 h-4 ml-[3px] mt-2" />
              </span>
            </h6>
          </div>
          <div className="w-full max-w-[400px] mt-6">
            <hr className="text-gray" />
          </div>
          <div className="max-w-[484px] mt-0 pt-4 ">
            <h6 className=" text-[13px] text-left flex flex-2 justify-between ">
              <span>
                <p className="font-bold">MY website name</p>
                Jancy.choosemy.club
              </span>
              <span className="flex mr-6 text-blue">
                <p>Change</p>
                <ChevronDownIcon className="w-3 h-4 ml-[3px] mt-2" />
              </span>
            </h6>
          </div>
        
        </div>
      </div>
    </>
  );
}
