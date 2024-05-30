"use client";
import Menu from "@/components/menu";
import React, { useState } from "react";
import clipart from "../../../../assets/images/clipart-img.png";
import Image from "next/image";

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import LashesIcon from "../../../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";
import Footer from "@/common/Footer";
import productLash from "../../../../assets/images/product-lash.png";
import SuccessTabs from "./Tabs";
import { useRouter } from "next/navigation";


function Success() {
  const [isModalOpen, setModalOpen] = useState(false);
const router=useRouter()
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <header className="sticky top-0 z-40 bg-white">
        <div className="mx-auto flex container items-center py-[18px] px-4">
          <div
            onClick={toggleModal}
            className="inline-flex content-center gap-3 text-sm font-medium text-t4"
          >
            <Image
              className="w-[24px] h-[24px] rounded-full border-[0.5px] border-bg3 shadow boxShadow "
              src={clipart}
              alt="user-img"
            />
            <span className="text-t3 text-[14px]">Jancy Wade</span>
          </div>
    
          <Menu />
        </div>
      </header>
      <div className="flex flex-col items-center gap-0.5 px-4">
        <SuccessTabs />
      </div>
      <div className="bg-pink my-9 ">
        <div className="max-w-[484px] mx-auto px-4 py-3">
          <ul className="space-y-1 sm:text-base text-sm text-t4 font-medium">
            <li className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4" />
              <span>It only works if you use it</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4" />
              <span>Optional affiliate opportunity</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4">
        <div className="border rounded-xl shadow-shadow1 border-gray p-6 flex items-center">
          <Image
            className="max-w-[200px] rounded-full mb-3"
            src={productLash}
            alt="user-img"
          />
          <div>
            <h2 className="font-bold">MY lash</h2>
            <h6 className="font-bold text-[17px] text-darkpink mb-2">
              lash + brow serum
            </h6>
            <p className="text-t1">
              <span className="font-bold">See results</span> for longer
              <br />
              and fuller looking
            </p>
            <h6 className="text-darkpink font-bold text-base mb-6">
              LASHES + BROWS
            </h6>
            <p>Starting at just $20</p>
          </div>
        </div>
        <button className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"  onClick={() => {
                    router.push("/affiliate/setupshop/leave");
                  }}>
          shop MY lash
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="w-full mx-auto  ">
        <div className="max-w-[484px] mx-auto px-4 mb-3">
          <div className="mt-[250px] mb-[120px]">
            <EncryptionPolicy />
          </div>
          <div className="flex items-center gap-4">
            <Image
              className="w-[140px] h-[140px] rounded-full"
              src={clipart}
              alt="user-img"
            />
            <div>
              <h6 className="mb-0.5 text-t4 font-bold">Need some help?</h6>
              <p className="text-t4 text-sm font-medium">hello@mylash.com</p>
            </div>
          </div>
        </div>
        <div className="bg-pink  ">
          <div className="max-w-[484px] mx-auto px-4 py-3">
            <ul className="space-y-1 sm:text-base text-sm text-t4 font-medium">
              <li className="flex items-center gap-2">
                <CheckmarkIcon className="w-4 h-4" />
                <span>It only works if you use it</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckmarkIcon className="w-4 h-4" />
                <span>Optional affiliate opportunity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div className="max-w-[484px] mx-auto  p-4 flex flex-col gap-1.5 items-center">
          <ol className="inline-flex items-center justify-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center text-xs font-medium text-t4">
              © choose MY shop 2024
            </li>
            <li>
              <div className="flex items-center">
                <span className="text-t4">|</span>
                <a
                  href="#"
                  className="ms-1 text-xs font-medium text-t4 underline"
                >
                  Privacy Policy
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="text-t4">|</span>
                <span className="ms-1 text-xs font-medium text-t4 underline">
                  Terms of Service
                </span>
              </div>
            </li>
          </ol>

          <p className="text-xs font-medium text-t4 text-center underline">
            Do Not Sell My Personal Information
          </p>
          <Image className="max-w-[58px] mt-1" src={clipart} alt="user-img" />
        </div>
      </footer>
    </>
  );
}

export default Success;
