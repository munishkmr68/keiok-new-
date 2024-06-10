import { Disclosure, Tab } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import SetupShopPopup from "./SetupShopPopup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MyClubTab from "./MyClubTab";
import AccountTabContent from "./AccountTabContent/AccountTabContent";
import EarnTab from "./EarnTabContent/EarnTab";
import PlusIcon from "../../../assets/images/icons/plus.svg";
import CloseIcon from "../../../assets/images/icons/close.svg";
import DropDownPopUp from "../SetupShop/EarnTabContent/DropDownPopUp";
import EarnDropDownPopUp from "../SetupShop/EarnTabContent/EarnDropDownPopUp";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SetupShopTabs() {
  const [openModal, setOpenModal] = useState(false);
  const [showChooseMyClubComponent, setShowChooseMyClubComponent] =
    useState(false);
  const router = useRouter();
  const [showoption, setShowOption] = useState(1);

  const [openEarnModal, setOpenEarnModal] = useState(false);
  const [value, setValue] = useState("MY club details");
  const [earnValue, setEarnValue] = useState("Manage MY office");

  return (
    <>
      {openModal && (
        <SetupShopPopup
          openModal={openModal}
          setOpenModal={setOpenModal}
          setShowChooseMyClubComponent={setShowChooseMyClubComponent}
        />
      )}

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
        <div className="w-full max-w-[484px] mx-auto px-4">
          <Tab.List className="flex  rounded-md bg-[#f7f7f7] h-[30px]">
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
        <Tab.Panels className="w-full">
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
            <div className="max-w-[484px] mx-auto px-4">
              <button
                className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
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
            <div className="max-w-[484px] mx-auto px-4 mb-3  ">
              <button
                className="tab-button rounded-lg font-[450] text-xl border border-gray text-t4 flex items-center justify-between  "
                onClick={() => {
                  setOpenEarnModal(true);
                }}
              >
                <span className="mx-auto">{earnValue || "Manage MY office"}</span>

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
                      commodo vel. Integer vestibulum sapien quis justo
                      efficitur mollis
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
