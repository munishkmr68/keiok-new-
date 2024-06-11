import { useState } from "react";
import Image from "next/image";
import { Disclosure, Tab } from "@headlessui/react";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";
import InstantResult from "./InstantResult";
import InstantPay from "./InstantPay";
import LevelPay from "./LevelPay";
import ChooseYourWebsite from "./ChooseYourWebsite/ChooseYourWebsite";
import ChooseClubName from "./ChooseClubName";
import ChooseYourProfileImage from "./ChooseYourProfileImage";
import Main from "./Main";
import Review from "./Review";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  LockClosedIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

export default function MyClubTab() {
  const [showoption, setShowOption] = useState(1);

  return (
    <>
      {/* <div className="max-w-[484px] mx-auto px-4">
        <div className="flex items-center mt-[30px] gap-4">
          <Image
            className="w-[140px] h-[140px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <div>
            <span className="text-t4 text-[10px] font-bold flex items-center gap-1">
              <span className="text-t5">STEP</span> 1{" "}
              <span className="text-t5">OF</span> 5
            </span>
            {showoption === 3 ? (
              <h4 className="mb-0.5 text-t4 font-bold leading-tight">
                Do you want
                <br />
                <span className="text-darkpink">Level </span>
                Pay?
              </h4>
            ) : (
              <h4 className="mb-0.5 text-t4 font-bold leading-tight">
                Ready to <span className="text-darkpink">setup</span>
                <br /> your club?
              </h4>
            )}
            <p className="font-medium text-sm">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
          </div>
        </div>

        {showoption === 3 ? (
          <div className="text-t4 text-sm mt-[24px] font-[420] p-0">
            Level pay is optional. It is included with your membership if you
            want it.
          </div>
        ) : (
          <div className="text-t4 text-sm mt-[24px] font-[420] p-0">
            Your personal <span className="tracking-[0.3px]">MY club</span>{" "}
            website is included with your MY lash membership.
          </div>
        )}
        <div className="text-t3 text-sm mt-3 mb-6 text-[15px] font-[420] p-0">
          <p>No commitments</p>
          <p>No fees</p>
        </div>
      </div> */}

      <div className="mt-8 max-w-[484px] mx-auto px-4">
        {showoption === 1 && <InstantResult />}
        {showoption === 2 && <InstantPay />}
        {showoption === 3 && <LevelPay />}
        {showoption === 4 && <ChooseYourWebsite />}
        {showoption === 5 && <ChooseClubName />}
        {showoption === 6 && <ChooseYourProfileImage />}
        {showoption === 7 && <Main />}
        {showoption === 8 && <Review />}

        {showoption === 1 ? (
          <button
            className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
            onClick={() => {
              setShowOption(2);
            }}
          >
            setup MY club
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        ) : showoption === 2 ? (
          <button
            className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
            onClick={() => {
              setShowOption(3);
            }}
          >
            Next
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        ) : showoption === 3 ? (
          <button
            className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
            onClick={() => {
              setShowOption(4);
            }}
          >
            Next
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        ) : showoption === 4 ? (
          <button
            className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
            onClick={() => {
              setShowOption(5);
            }}
          >
            Next
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        ) : showoption === 5 ? (
          <button
            className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
            onClick={() => {
              setShowOption(6);
            }}
          >
            Next
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        ) : showoption === 6 ? (
          <button
            className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
            onClick={() => {
              setShowOption(7);
            }}
          >
            Next
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        ) : showoption === 7 ? (
          <button
            className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
            onClick={() => {
              setShowOption(8);
            }}
          >
            Secure Checkout
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        ) : showoption === 8 ? (
          <button
            className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
            onClick={() => {
              setShowOption(9);
            }}
          >
            publish MY club
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        ) : null}

        {showoption === 3 ? (
          <div className="border rounded-xl shadow-shadow1 border-gray overflow-hidden mt-[90px]">
            <div className="max-w-[484px] mt-0 pl-6 pt-4 pb-4">
              <h6 className="text-[13px] text-left">
                MY personal sales commission
                <br />
                28%
              </h6>
            </div>
          </div>
        ) : null}

        {showoption === 4 ? (
          <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-[90px]">
            <div className="p-6">
              <h6 className=" text-[13px] text-left ">
                <span className="font-bold">MY personal sales commission</span>
                <br />
                28%
              </h6>
              <div className="w-full mt-6">
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
            </div>
          </div>
        ) : null}

        {showoption === 6 ? (
          <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-[90px]">
            <div className="p-6">
              <h6 className=" text-[13px] text-left ">
                <span className="font-bold">MY personal sales commission</span>
                <br />
                28%
              </h6>
              <div className="w-full mt-6">
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
              <div className="w-full mt-6">
                <hr className="text-gray" />
              </div>
              <div className="max-w-[484px] mt-0 pt-4">
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
              <div className="w-full mt-6">
                <hr className="text-gray" />
              </div>
              <div className="max-w-[484px] mt-0 pt-4 py-4">
                <h6 className=" text-[13px] text-left flex flex-2 justify-between ">
                  <span>
                    <p className="font-bold">MY club name</p>
                    Jancy Wade
                  </span>
                  <span className="flex mr-6 text-blue">
                    <p>Change</p>
                    <ChevronDownIcon className="w-3 h-4 ml-[3px] mt-2" />
                  </span>
                </h6>
              </div>
            </div>
          </div>
        ) : null}

        {showoption === 7 ? (
          <>
            <div className="mt-[90px] mb-[90px] ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="disclosure-button"></Disclosure.Button>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="disclosure-button">
                      <span className="text-t4 text-[15px]">
                        FAQ for ZoomMe
                      </span>
                      <PlusIcon
                        className={`${open ? "hidden" : "block"} h-5 w-5`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-4 border-b border-gray">
                      Sed commodo tincidunt finibus. Proin volutpat sollicitudin
                      congue. Nullam fringilla erat quam, vel tincidunt mauris
                      commodo vel. Integer vestibulum sapien quis justo
                      efficitur mollis
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-[90px]">
              <div className="p-6">
                <h6 className=" text-[13px] text-left ">
                  <span className="font-bold">
                    MY personal sales commission
                  </span>
                  <br />
                  28%
                </h6>
                <div className="mt-6">
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
                <div className="mt-6">
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
                <div className="mt-6">
                  <hr className="text-gray" />
                </div>
                <div className="max-w-[484px] mt-0 pt-4 ">
                  <h6 className=" text-[13px] text-left flex flex-2 justify-between ">
                    <span>
                      <p className="font-bold">MY club name</p>
                      Jancy Wade
                    </span>
                    <span className="flex mr-6 text-blue">
                      <p>Change</p>
                      <ChevronDownIcon className="w-3 h-4 ml-[3px] mt-2" />
                    </span>
                  </h6>
                </div>
                <div className="mt-6">
                  <hr className="text-gray" />
                </div>
                <div className="max-w-[484px] mt-0 pt-4 py-4 pb-6">
                  <h6 className=" text-[13px] text-left flex flex-2 justify-between ">
                    <span>
                      <p className="font-bold">MY profile image</p>
                      <Image
                        className="w-[42px] h-[42px] rounded-full mt-3"
                        src={profileImg}
                        alt="user-img"
                      />
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
        ) : null}
      </div>
    </>
  );
}
