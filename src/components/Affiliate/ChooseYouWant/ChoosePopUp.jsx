import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import Close from "../../../assets/images/icons/shortCloseRounded.svg";
import profileImg from "../../../assets/images/profile-product-img.png";
import Image from "next/image";
import subscribeLash from "../../../assets/images/i-subscribe-lash.png";
import productLash from "../../../assets/images/product-lash.png";
import ChooseMyClub from "./ChooseMyClub";

const checkicon = {
  width: "24px",
  height: "24px",
};

const listingspan = {
  width: "calc(100% - 34px)",
};

const ChoosePopUp = (props) => {
  const { openModal, setOpenModal } = props;
  const [showChoosePage, setShowChoosePage] = useState(false);
  const handleChoose = () => {
    setShowChoosePage(true);
  };
  function closeModal() {
    setOpenModal(!openModal);
  }

  return (
    <>
    {showChoosePage ? (
      <ChooseMyClub/>
          ) : (
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
                <Dialog.Panel className="mx-4 sm:mx-0 w-full max-w-[375px] transform mt-18 p-7 bg-white  text-left align-middle  transition-all rounded-md">
                 
                    <Close
                      className="mb-5 ml-auto cursor-pointer"
                      onClick={closeModal}
                    />
                  <div className="max-w-[484px] mt-0 px-4">
                    <div className="flex flex-col items-center gap-0.5  ">
                      <Image
                        className="w-[167px] h-[100px] mb-1"
                        src={profileImg}
                        alt="user-img"
                      />
                      
                    </div>
                      <p className="font-medium text-center ">
                        <span className="text-[9px]">with</span> Ashley Jackson
                      </p>
                  </div>
                  <div className="max-w-[400px]  mx-auto mt-6">
                    <div className="border rounded-xl shadow-shadow1 border-gray p-6 flex items-center relative h-72">
                      <Image
                        className="max-w-[150px] rounded-full mb-3"
                        src={subscribeLash}
                        alt="lash-img"
                      />
                      <div className="">
                        <div className="absolute right-18 top-6">
                          <h6 className="text-[16px] leading-5">I subscribe</h6>
                          <h6 className="text-[16px] leading-5">
                            {" "}
                            because of our
                          </h6>
                          <h3 className="font-bold text-[22px] text-darkpink mb-2">
                            Lash Cycle
                          </h3>
                        </div>

                        <div className="bottom-6 right-16 absolute">
                          <h3 className="font-bold text-[22px] text-darkpink mb-2 leading-5">
                            Every 12 weeks
                          </h3>
                          <h6 className="text-[16px] leading-5">
                            we naturally shed and
                          </h6>
                          <h6 className="text-[16px] leading-5">
                            replace all of our lashes
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="primary-button mt-[30px]"
                    onClick={handleChoose}
                  >
                    Got it!
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
     )}
     </>
  );
};
export default ChoosePopUp;
