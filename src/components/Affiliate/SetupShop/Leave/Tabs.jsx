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
import MyClubTab from "./MyClubTab";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LeaveTabs() {
  const router = useRouter();

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
                <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between  ">
                  <span className="mx-auto">
                    setup
                    <span className="text-darkpink"> MY club</span>
                  </span>

                  <ChevronDownIcon className="w-5 h-5 " />
                </button>
              </div>

              <MyClubTab />
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
