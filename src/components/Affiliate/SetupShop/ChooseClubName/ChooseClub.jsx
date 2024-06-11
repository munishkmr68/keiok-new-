import { Tab } from "@headlessui/react";
import Image from "next/image";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import { useRouter } from "next/navigation";
import Step1 from "./Step1";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ChooseClub() {
  const router = useRouter();
  const [showoption, setShowOption] = useState(1);

  return (
    <>
      {/* <button
          className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between  "
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <span className="mx-auto">
            setup
            <span className="text-darkpink"> MY club</span>
          </span>

          <ChevronDownIcon className="w-5 h-5 " />
        </button> */}

      <div className="flex items-center mt-[30px] gap-4">
        <Image
          className="w-[140px] h-[140px] rounded-full"
          src={profileImg}
          alt="user-img"
        />
        <div>
          <span className="text-t4 text-[10px] font-bold flex items-center gap-1">
            <span className="text-t5">STEP</span> 3{" "}
            <span className="text-t5">OF</span> 5
          </span>

          <h4 className="mb-0.5 text-t4 font-bold leading-tight">
            <span className="text-darkpink">Choose</span> your
            <br /> club name
          </h4>

          <p className="font-medium text-sm">
            <span className="text-[9px]">with</span> Ashley Jackson
          </p>
        </div>
      </div>

      <div className="text-t4 text-sm mt-[24px] font-[420] p-0 ">
        You can change your club name anytime.
      </div>

      <div className=" text-t3 text-sm mt-3 mb-6 text-[15px] font-[420] p-0">
        <p>No commitments</p>
        <p>No fees</p>
      </div>

      <div className="mt-8">{showoption == 1 ? <Step1 /> : null}</div>
      {/* {showoption == 1 ? (
        <button
          className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
          onClick={() => {
            router.push("/affiliate/setupshop/chooseyourprofile");
          }}
        >
          Next
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      ) : null} */}

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
          <div className="max-w-[484px] mt-0 pt-4 py-4">
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
