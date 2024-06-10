import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import Close from "../../../../assets/images/icons/shortCloseRounded.svg";
import clipart from "../../../../assets/images/clipart-img.png";
import Camera from "../../../../assets/images/icons/camera.svg";

import Image from "next/image";
import subscribeLash from "../../../../assets/images/i-subscribe-lash.png";

const MyShopPopup = (props) => {
  const { openModal, setOpenModal } = props;
  const [showChoosePage, setShowChoosePage] = useState(false);
  const [dataImg, setDataImg] = useState(null);

  const handleChoose = () => {
    setShowChoosePage(true);
  };
  function closeModal() {
    setOpenModal(!openModal);
  }
  function showChooseMyClub() {
    closeModal();
   
  }
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // setPhotoName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      setDataImg(e.target.result);
    };
    reader.readAsDataURL(file);
  };

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
                  <Dialog.Panel className="mx-4 sm:mx-0 w-full max-w-[375px] transform mt-18 p-7 bg-white  text-left align-middle  transition-all rounded-md">
                    <Close
                      className="mb-5 ml-auto cursor-pointer"
                      onClick={closeModal}
                    />
                    <p className="font-bold text-t3">Change Progile Picture</p>

                    <div className="  overflow-hidden mt-4 ">
                      <input
                        type="file"
                        className="hidden "
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />

                      <div className="text-center  flex items-center justify-center  gap-4 ">
                        {/* Current Profile Photo */}
                        <div
                          className=" relative"
                          style={{ display: !dataImg ? "block" : "none" }}
                        >
                          <Image
                            className="w-[140px] h-[140px] ml-6  rounded-full shadow  "
                            src={clipart}
                            alt="Current Profile"
                          />
                          <div className=" absolute top-1 left-[125px]  ">
                            <Camera />
                          </div>
                        </div>
                        {/* New Profile Photo Preview */}
                        <div
                          className=" relative"
                          style={{ display: dataImg ? "block" : "none" }}
                        >
                          <span
                            className="block w-[140px] h-[140px] rounded-full ml-6 shadow"
                            style={{
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center center",
                              backgroundImage: `url(${dataImg})`,
                            }}
                            onClick={() => fileInputRef.current.click()}
                          ></span>
                          <div className=" absolute top-1 left-[125px]  ">
                            <Camera />
                          </div>
                        </div>
                      </div>
                      {/* <div className="flex flex-2 mt-6 gap-3 max-w-[404px]">
                        <button
                          className="primary-button items-center "
                          onClick={() => {
                            handleSave();
                          }}
                        >
                          Save
                        </button>
                        <button
                          className="primary-button-outlined rounded-xl items-center"
                          onClick={() => {
                            props.setShowImage(false);
                          }}
                        >
                          Cancel
                        </button>
                      </div> */}
                    </div>
                    <button
                      className="primary-button mt-[30px] "
                      // onClick={handleChoose}
                      onClick={() => {
                        handleChoose();
                        // showChooseMyClub();
                        fileInputRef.current.click()

                      }}
                    >
                      Choose from library
                    </button>
                    <button
                      className="primary-button-outlined border-[#B80000] text-[#B80000] font-medium border-2 font-[450] hover:bg-white hover:text-[#B80000] mt-3 "
                      // onClick={handleChoose}
                      onClick={() => {
                        handleChoose();
                        showChooseMyClub();
                        setDataImg(null)
                      }}
                    >
                      Remove picture
                    </button>
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
export default MyShopPopup;
