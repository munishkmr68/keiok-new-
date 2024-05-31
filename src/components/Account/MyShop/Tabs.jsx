import { Disclosure, Tab } from "@headlessui/react";

import {
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  LockClosedIcon,

} from "@heroicons/react/24/solid";
import { useState } from "react";

import { useRouter } from "next/navigation";
import MyClubTab from "./MyClubTab";
import DropDownPopUp from "./DropDownPopUp";
import EarnDropDownPopUp from "./EarnDropDownPopUp";
import EarnTab from "./EarnTab";
import CloseIcon from "../../../assets/images/icons/close.svg";
import PlusIcon from "../../../assets/images/icons/plus.svg";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyShopTabs() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [openEarnModal, setOpenEarnModal] = useState(false);
  const [value, setValue] = useState("My shop details");
  const [earnValue, setEarnValue] = useState("Manage MY office");

  return (
    <>
      {openModal && (
        <DropDownPopUp
          openModal={openModal}
          setOpenModal={setOpenModal}
          setValue={setValue}
          value={value}
        />
      )}
    {openEarnModal && (
        <EarnDropDownPopUp
          openModal={openEarnModal}
          setOpenModal={setOpenEarnModal}
          setValue={setEarnValue}
          value={earnValue}
        />
      )}
      <Tab.Group>
        <div className="max-w-[484px] mx-auto px-4 mb-3">
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
        </div>
        <Tab.Panels className="mt-5 ">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white ",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <div className="max-w-[484px] mx-auto px-4">

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
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white ",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <div className="max-w-[484px] mx-auto px-4 mb-3  ">
              <button
                className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between  "
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <span className="ml-36">{value || "MY club details"}</span>

                <ChevronDownIcon className="w-5 h-5 " />
              </button>
            </div>

            <MyClubTab value={value} />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
              <div className="max-w-[484px] mx-auto px-4 mb-3  ">
              <button
                className="tab-button rounded-lg font-[450] text-xl border border-gray text-t4 flex items-center justify-between  "
                onClick={() => {
                  setOpenEarnModal(true);
                }}
              >
                <span className="ml-36">{earnValue || "Manage MY office"}</span>

                <ChevronDownIcon className="w-5 h-5 " />
              </button>
            </div>

            <EarnTab value={earnValue} />
            <div className="max-w-[484px] mx-auto px-4 mt-24 mb-24 ">
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
                    <span>FAQ for Instant Pay</span>
                    <PlusIcon
                      className={`${open ? "hidden" : "block"} h-5 w-5`}
                    />
                    <CloseIcon className={`${open ? "block" : "hidden"} `} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="py-4 border-b border-gray">
                    Sed commodo tincidunt finibus. Proin volutpat sollicitudin
                    congue. Nullam fringilla erat quam, vel tincidunt mauris
                    commodo vel. Integer vestibulum sapien quis justo efficitur
                    mollis
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
