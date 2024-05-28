import { Disclosure, Tab } from "@headlessui/react";
import MyClub from "./MyClub";
import Youchoose from "./Youchoose";
import EarnyourWay from "./EarnyourWay";
import PersonalWebsite from "./PersonalWebsite";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import CloseIcon from "../../../assets/images/icons/close.svg";
import PlusIcon from "../../../assets/images/icons/plus.svg";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="w-full max-w-md px-2 py-6 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg p-4 text-sm font-bold text-t4 shadow-shadow1 border min-h-[86px] border-gray text-left focus:outline-none",
                selected ? " text-t3 bg-lightpink" : " hover:text-darkpink"
              )
            }
          >
            MY club
            <br />
            <span className="text-[13px]">(Most Popular)</span>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg p-4 text-sm font-bold text-t4 shadow-shadow1 border min-h-[86px] border-gray text-left focus:outline-none",
                selected ? " text-t3 bg-lightpink" : " hover:text-darkpink"
              )
            }
          >
            Standard
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg p-4 text-sm font-bold text-t4 shadow-shadow1 border min-h-[86px] border-gray text-left focus:outline-none",
                selected ? " text-t3 bg-lightpink" : " hover:text-darkpink"
              )
            }
          >
            1-time buy
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-5 ">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white ",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <MyClub />
            <div className="mt-4">
              <Youchoose />
            </div>
            <div className="mt-4">
              <EarnyourWay />
            </div>
            <div className="mt-4">
              <PersonalWebsite />
            </div>
            <div className="mt-4">
              <div className="flex gap-2.5 it items-start shadow-shadow1 border border-gray py-4 px-6 rounded-xl text-sm">
                <span className="text-[13px] leading-[18px]">
                  I<span className="text-darkpink"> choose</span> to subscribe
                  because of<span className="text-darkpink"> our</span> Lash
                  Cycle and I can <span className="text-darkpink"> choose</span>{" "}
                  to cancel anytime
                </span>
              </div>
            </div>
            <Link
              className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
              href="/affiliate/checkout"
            >
              Secure Checkout
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
            <div className="mt-24 mb-24 ">
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
                      <span>FAQ for MY lash</span>
                      <PlusIcon
                        className={`${open ? "hidden" : "block"} h-5 w-5`}
                      />
                      <CloseIcon className={`${open ? "block" : "hidden"} `} />
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
  );
}
