import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";
import Close from "../../../../assets/images/icons/close-circle.svg";

const checkicon = {
  width: "24px",
  height: "24px",
};

const listingspan = {
  width: "calc(100% - 34px)",
};

const GetOrderModal = (props) => {
  const { openGetOrderModal, setopenGetOrderModal } = props

  function closeModal() {
    setopenGetOrderModal(!openGetOrderModal);
  }

  return (
    <>
      <Transition appear show={openGetOrderModal} as={Fragment}>
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
                <Dialog.Panel className="mx-4 sm:mx-0 w-full max-w-[375px] transform mt-24 p-7 bg-white  text-left align-middle  transition-all rounded-md">
                  <div>
                    <Close
                      className="mb-1 ml-auto cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>
                  <div className="py-4  flex items-center justify-between gap-2 group">
                    <h3 className="font-bold">Fun fact:</h3>
                  </div>
                  <ul className="space-y-1 mb-6 sm:text-md text-base text-t4">
                    <li className="flex flex-wrap gap-2 mb-2">
                      <CheckmarkIcon style={checkicon} />
                      <span style={listingspan}>
                        Your eyelashes fall out and replace themselves every
                        8-12 weeks.{" "}
                      </span>
                    </li>
                    <li className="flex flex-wrap gap-2 mb-2">
                      <CheckmarkIcon style={checkicon} />
                      <span style={listingspan}>
                        Because of the Lash Cycle, if you stop using MY lash
                        serum, your lashes will gradually go back to their
                        natural look.
                      </span>
                    </li>
                  </ul>

                  <button className="primary-button mt-[30px]" onClick={closeModal}>Got it!</button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default GetOrderModal;
