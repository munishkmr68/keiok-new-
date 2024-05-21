import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Close from "../../assets/images/icons/close-circle.svg";

const checkicon = {
  width: "24px",
  height: "24px",
};

const listingspan = {
  width: "calc(100% - 34px)",
};

const ConfirmModal = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-items-center min-h-screen">
        <button
          type="button"
          onClick={openModal}
          className="rounded-full border border-t2 text-t2 hover:bg-t2 hover:text-white transition ease-in-out  px-4 py-2 mx-auto"
        >
          Fun Fact
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
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
                  <div className="py-4">
                    <h3 className="font-bold">
                      Let&apos;s confirm your address
                    </h3>
                    <p className="text-t4 mb-0 text-base ">
                      Enter your email address below and we will send you an
                      email with instructions on how to reset your password.
                    </p>
                  </div>
                  <div className="mx-auto">
                    <div className="border-[#D8D8D8] border-b py-4 flex items-center gap-2.5 justify-between">
                      <div className="w-full">
                        <h6 className="text-base">
                          You Entered
                          <a
                            href="#"
                            className="font-normal text-xs float-right mt-1"
                          >
                            Change
                          </a>
                        </h6>
                        <p className="text-sm leading-6">
                          3836 E Stiles Ln
                          <br />
                          Gilbert AZ 85295-0150
                        </p>
                      </div>
                    </div>
                    <div className="border-inputcolor py-4 flex items-center gap-2.5 justify-between">
                      <div className="w-full">
                        <h6 className="text-base">We suggest</h6>
                        <p className="text-sm leading-6">
                          3836 E Stiles Ln
                          <br />
                          Gilbert AZ 85295
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    className="primary-button"
                    onClick={() => {
                      // setShowStep8(true); // Set showStep8 to true to display Step8
                      closeModal(); // Close the modal
                      // onContinueClick(); // Optionally call onContinueClick if needed
                    }}

                  >
                    Use suggested address
                  </button>
                  <button className="primary-button-outlined mt-[10px]">
                    Use address you entered
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
export default ConfirmModal;
