"use client"
import Image from "next/image";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import Step2 from "./ChooseStep2";
import { useRouter } from "next/navigation";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ChooseYourWebsite() {
  const [openModal, setOpenModal] = useState(false);
  const [showChooseMyClubComponent, setShowChooseMyClubComponent] =
    useState(false);
  const [showoption, setShowOption] = useState(1);
  const [websiteName, setWebsiteName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const validateWebsiteName = (name) => {
    // Define your validation logic here
    const validDomain = /^[a-zA-Z0-9]+\.choosemy\.club$/;
    if (!validDomain.test(name)) {
      return "This name is already taken.  Please enter another one and try again";
    }
    return "";
  };
  const [earnValue, setEarnValue] = useState("Manage MY office");
  const [openEarnModal, setOpenEarnModal] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setWebsiteName(value);
    const error = validateWebsiteName(value);
    setErrorMessage(error);
  };
  return (
    <>
      {/* {openEarnModal && (
        <EarnDropDownPopUp
          openModal={openEarnModal}
          setOpenModal={setOpenEarnModal}
          setValue={setEarnValue}
          value={earnValue}
        />
      )} */}
      <div className="max-w-[484px] mx-auto ">
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
              <span className="text-t5">STEP</span> 2{" "}
              <span className="text-t5">OF</span> 5
            </span>

            <h4 className="mb-0.5 text-t4 font-bold leading-tight">
              <span className="text-darkpink">Choose</span> your
              <br /> website name
            </h4>

            <p className="font-medium text-sm">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
          </div>
        </div>

        <div className="text-t4 text-sm mt-[24px] font-[420] p-0 ">
          You can change your website name anytime.
        </div>

        <div className=" text-t3 text-sm mt-3 mb-6 text-[15px] font-[420] p-0">
          <p>No commitments</p>
          <p>No fees</p>
        </div>
      </div>
      <div className="mt-8">
        <Step2
          handleInputChange={handleInputChange}
          websiteName={websiteName}
          setWebsiteName={setWebsiteName}
          errorMessage={errorMessage}
        />
      </div>
      {/* {showoption == 1 ? (
        <button
          className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
          onClick={() => {
            router.push("/affiliate/setupshop/chooseyourshop");
          }}
        >
          Next
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      ) : null} */}

      
    </>
  );
}
