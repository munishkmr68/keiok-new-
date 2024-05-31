import { Tab } from "@headlessui/react";
import Image from "next/image";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";
import InstantResult from "./InstantResult";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import SetupShopPopup from "./SetupShopPopup";
import { useState } from "react";
import InstantPay from "./InstantPay";
import LevelPay from "./LevelPay";
import { useRouter } from "next/navigation";
import AccountTabContent from "./AccountTabContent/AccountTabContent";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SetupShopTabs() {
  const [openModal, setOpenModal] = useState(false);
  const [showChooseMyClubComponent, setShowChooseMyClubComponent] =
    useState(false);
    const router = useRouter()
  const [showoption, setShowOption] = useState(1);
  return (
    <>
      {openModal && (
        <SetupShopPopup
          openModal={openModal}
          setOpenModal={setOpenModal}
          setShowChooseMyClubComponent={setShowChooseMyClubComponent}
        />
      )}

      <div className="w-full max-w-md px-2 py-6 sm:px-0">
        <Tab.Group>
          <Tab.List className="mb-5 flex  rounded-md bg-[#f7f7f7] h-[30px]">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md ",
                  selected ? " text-whiteColor bg-blue" : " hover:text-t3"
                )
              }
            >
              Account
              <br />
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md",
                  selected ? " text-whiteColor bg-blue" : " hover:text-t3"
                )
              }
            >
              MY club
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md",
                  selected ? " text-whiteColor bg-blue" : " hover:text-t3"
                )
              }
            >
              Earn
            </Tab>
          </Tab.List>

          <Tab.Panels className="mt-5 ">
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white ",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <AccountTabContent />
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white ",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="max-w-[484px] mx-auto ">
                <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between  " onClick={(()=>{
                  setOpenModal(true)
                })}>
                  <span className="ml-36">
                    setup
                    <span className="text-darkpink"> MY club</span>
                  </span>

                  <ChevronDownIcon className="w-5 h-5 " />
                </button>
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
                    {showoption == 3 ? (
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

                {showoption == 3 ? (
                  <div className="text-t4 text-sm mt-[24px] font-[420] p-0 ">
                    Level pay is optional. It is included with your membership
                    if you want it.
                  </div>
                ) : (
                  <div className="text-t4 text-sm mt-[24px] font-[420] p-0 ">
                    Your personal{" "}
                    <span className="tracking-[0.3px]">MY club</span> website is
                    included with your MY lash membership.
                  </div>
                )}
                <div className=" text-t3 text-sm mt-3 mb-6 text-[15px] font-[420] p-0">
                  <p>No commitments</p>
                  <p>No fees</p>
                </div>
              </div>
              <div className="mt-8">
                {showoption == 1 ? (
                  <InstantResult />
                ) : showoption == 2 ? (
                  <InstantPay />
                ) : (
                  <LevelPay />
                )}
              </div>
              {showoption == 1 ? (
                <button
                  className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
                  onClick={() => {
                    setShowOption(2);
                  }}
                >
                  setup MY club
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              ) : showoption == 2 ? (
                <button
                  className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
                  onClick={() => {
                    setShowOption(3);
                  }}
                >
                  Next
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              ) : showoption == 3 ? (
                <button
                  className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
                  onClick={() => {
                    router.push("/affiliate/setupshop/chooseyourwebsite");
                  }}
                >
                  Next
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              ) : null}

              {showoption == 3 ? (
                <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-[90px]">
                  <div className="max-w-[484px] mt-0 pl-6 pt-4 pb-4">
                    <h6 className=" text-[13px] text-left">
                      MY personal sales commission
                      <br />
                      28%
                    </h6>
                  </div>
                </div>
              ) : null}
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                <li className="relative rounded-md p-3 hover:bg-gray-100">
                  <h3 className="text-sm font-medium leading-5">
                    Ask Me Anything: 10 answers to your questions about coffee
                  </h3>
                  <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                    <li>2d ago</li>
                    <li>&middot;</li>
                    <li>9 comments</li>
                    <li>&middot;</li>
                    <li>5 shares</li>
                  </ul>
                  <a
                    href="#"
                    className={classNames(
                      "absolute inset-0 rounded-md",
                      "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                    )}
                  />
                </li>
                <li className="relative rounded-md p-3 hover:bg-gray-100">
                  <h3 className="text-sm font-medium leading-5">
                    The worst advice we ve ever heard about coffee
                  </h3>
                  <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                    <li>4d ago</li>
                    <li>&middot;</li>
                    <li>1 comment</li>
                    <li>&middot;</li>
                    <li>2 shares</li>
                  </ul>
                  <a
                    href="#"
                    className={classNames(
                      "absolute inset-0 rounded-md",
                      "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                    )}
                  />
                </li>
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
