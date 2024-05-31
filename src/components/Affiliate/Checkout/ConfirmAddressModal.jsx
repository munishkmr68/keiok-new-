import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Close from "../../../assets/images/icons/close-circle.svg";

const checkicon = {
  width: "24px",
  height: "24px",
};

const listingspan = {
  width: "calc(100% - 34px)",
};

const ConfirmAddressModal = (props) => {
  const { openModal, setOpenModal, onUseSuggestedAddress } = props;

  function closeModal() {
    setOpenModal(!openModal);
  }
  return (
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
                <Dialog.Panel className="mx-4 sm:mx-0 w-full max-w-[375px] transform mt-24 p-7 bg-white  text-left align-middle  transition-all rounded-md">
                  <div>
                    <Close
                      className="mb-1 ml-auto cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>

                  <h6 className="font-bold mb-1">Let`&apos;`s confirm your address</h6>
                  <p className="text-t4 font-medium text-[15px]">
                    USPS was unable to verify the address you entered, but we
                    found a close a match.
                  </p>
                  <div className="shadow-shadow1 border border-gray rounded-xl text-t3 px-6 py-4 mt-6 font-medium text-[15px] flex justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold">You Entered</span>
                      <p>
                        2134 Oak Bluff Dr
                        <br />
                        Davenport, FL 33837-3691
                      </p>
                    </div>
                    <div className="text-xs text-blue font-normal">Change</div>
                  </div>
                  <p className="font-medium text-[15px] text-blue my-4 underline text-center">
                    Use address you entered
                  </p>
                  <div className=" bg-pink shadow-shadow1  rounded-xl text-t3 px-6 py-4 mt-6 font-medium text-[15px] flex justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold">We suggest</span>
                      <p>
                        2134 Oak Bluff Dr
                        <br />
                        Davenport, FL 33837
                      </p>
                    </div>
                  </div>
                  <button
                    className="primary-button mt-6"
                    onClick={onUseSuggestedAddress}
                  >
                    Use suggested address
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default ConfirmAddressModal;
