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

export default function GetOrderModal({ onClose }) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    onClose();
  }

  function handleSendOrder() {
    closeModal();
  }
  

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <Close
                      className="mb-1 ml-auto cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>
                  <div className="py-4  flex items-center justify-between gap-2 group">
                    <h3 className="font-bold">Get your order now</h3>
                  </div>
                  <p className="mb-6 text-[15px] text-t4 font-medium">
                    If you get your order now you’ll be charged immediately, and
                    you won’t be able to make any further changes to your order.
                  </p>
                  <div className="flex flex-col gap-3">
                    <button type="button" className="primary-button">
                      Send this order now
                    </button>
                    <button
                      className="primary-button-text-only text-darkpink sm:text-lg text-base font-bold"
                      onClick={handleSendOrder}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
