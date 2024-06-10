import { Disclosure, Tab } from "@headlessui/react";
import Image from "next/image";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  LockClosedIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import { useRouter } from "next/navigation";
import Step1 from "./Step1";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainTabs() {
  const router = useRouter();
  const [showoption, setShowOption] = useState(1);

  return (
    <>
      <div className="w-full max-w-md px-2 py-6 sm:px-0">
        <Tab.Group>
          <Tab.List className="mb-5 flex rounded-md bg-[#f7f7f7] h-[30px]">
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
              <ul>
                <li className="relative rounded-md p-3 hover:bg-gray-100">
                  <h3 className="text-sm font-medium leading-5">
                    Is tech making coffee better or worse?
                  </h3>
                  <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                    <li>Jan 7</li>
                    <li>&middot;</li>
                    <li>29 comments</li>
                    <li>&middot;</li>
                    <li>16 shares</li>
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
                    The most innovative things happening in coffee
                  </h3>
                  <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                    <li>Mar 19</li>
                    <li>&middot;</li>
                    <li>24 comments</li>
                    <li>&middot;</li>
                    <li>12 shares</li>
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
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white ",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="max-w-[484px] mx-auto ">
                <button
                  className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between  "
                 
                >
                  <span className="mx-auto">
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
                      <span className="text-t5">STEP</span> 5{" "}
                      <span className="text-t5">OF</span> 5
                    </span>

                    <h4 className="mb-0.5 text-t4 font-bold leading-tight">
                      <span className="text-darkpink">Setup</span> your ZoomMe
                      <br />
                      and be ready to get paid
                    </h4>

                    <p className="font-medium text-sm">
                      <span className="text-[9px]">with</span> Ashley Jackson
                    </p>
                  </div>
                </div>

                <div className=" text-t4 text-sm mt-6 mb-4 text-[15px] font-[420] p-0">
                  <p>Commissions are your paid to your ZoomMe on CoinZoom.</p>
                  <p>
                    CoinZoom is like Venmo or Paypal. You are paid in USD, not
                    crypto 😊
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Step1 />{" "}
              </div>
              {showoption == 1 ? (
                <button
                  className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
                  onClick={() => {
                    router.push("/affiliate/setupshop/review");
                  }}
                >
                  Secure Checkout
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              ) : null}
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
                        Sed commodo tincidunt finibus. Proin volutpat
                        sollicitudin congue. Nullam fringilla erat quam, vel
                        tincidunt mauris commodo vel. Integer vestibulum sapien
                        quis justo efficitur mollis
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-[90px]">
                <div className="max-w-[484px] mt-0 pl-6 pt-4 pb-4">
                  <h6 className=" text-[13px] text-left ">
                    <span className="font-bold">
                      MY personal sales commission
                    </span>
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
                  <div className="w-full max-w-[400px] mt-6">
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
                  <div className="w-full max-w-[400px] mt-6">
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
