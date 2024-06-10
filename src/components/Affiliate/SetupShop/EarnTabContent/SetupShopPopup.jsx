import { Dialog, Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Close from "../../../assets/images/icons/shortCloseRounded.svg";
import GreenCheck from "../../../assets/images/icons/check-with-green.svg";

import React from "react";

import { CheckIcon } from "@heroicons/react/24/solid";
const language = [
  { name: "MY club details", value: "MY club details" },
  { name: "FAQ for MY club", value: "FAQ for MY club" },
  { name: "MY commissions", value: "MY commissions" },
  { name: "Preview MY club", value: "Preview MY club" },
];
const SetupShopPopup = (props) => {
  const { openModal, setOpenModal } = props;
  const [value, setValue] = useState("react");
  const [selected, setSelected] = useState(language[0]);

  const [showChoosePage, setShowChoosePage] = useState(false);
  const handleChoose = () => {
    setShowChoosePage(true);
  };
  function closeModal() {
    setOpenModal(!openModal);
  }
  function showChooseMyClub() {
    closeModal();
    props.setShowChooseMyClubComponent(true);
  }
  return (
    <>
      {/* {showChoosePage ? (
        <ChooseMyClub />
      ) : ( */}
      <>
        <Transition appear show={openModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)]" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="mx-4 sm:mx-0 w-full max-w-[375px] h-80 transform mt-18 p-7 bg-white  text-left align-middle  transition-all rounded-md">
                    <Close
                      className="mb-5 ml-auto cursor-pointer"
                      onClick={closeModal}
                    />
                    <Listbox
                      value={selected}
                      onChange={(data) => {
                        setSelected(data);
                      }}
                    >
                      <div className="relative flex text-left ">
                        <Listbox.Button className="relative w-ful flex justify-between cursor-default selectbox outline-none text-t3 font-medium text-left border-2 border-gray rounded-xl ">
                          <span className="text-left ml-3">
                            {selected.name}
                          </span>
                          <span className="mt-1 -mr-3">
                          <GreenCheck />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={React.Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 top-full  w-full overflow-auto rounded-md  py-1  text-base sm:text-sm">
                            {language.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                  `relative cursor-default text-[16px] font-medium mb-[10px] text-t3 select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? ""
                                      : "text-border-gray-900"
                                  }`
                                }
                                value={person}
                              >
                                {({ selected }) => (
                                  <React.Fragment>
                                    <span
                                       className="block truncate font-medium"
                                    
                                     
                                    >
                                      {person.name}
                                    </span>
                                    {selected ? (
                                      <span className="absolute  inset-y-0 left-0 flex items-center pl-3 ">
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </React.Fragment>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>

                    {/* <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between ">
                      <span className="text-base">
                        setup MY club
                      </span>
                    </button> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      {/* )} */}
    </>
  );
};
export default SetupShopPopup;
