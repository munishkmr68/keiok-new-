"use client";
import Menu from "@/components/menu";
import React, { useState } from "react";
import clipart from "../../../assets/images/clipart-img.png";
import Image from "next/image";
import SetupShopTabs from "./Tabs";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import LashesIcon from "../../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import Footer from "@/common/Footer";

function SetupShop() {
  const [isModalOpen, setModalOpen] = useState(false);

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
          <button
            type="button"
            className="pink-button text-sm uppercase py-1.5 rounded-[6px] font-bold w-auto ml-auto mr-6"
          >
            SHARE
          </button>
          <div>
          <Menu />
          </div>
        </div>
      </header>
      <div className="w-full mx-auto  ">
        <div className="flex flex-col items-center gap-0.5">
          <SetupShopTabs />
        </div>
        <div className="max-w-[484px] mx-auto px-4 mb-3">
          <div className="mt-[250px] mb-[120px]">
            <EncryptionPolicy />
          </div>
          <NeedHelp />
        </div>
        <div className="bg-pink">
          <div className="max-w-[484px] mx-auto px-4 py-8">
            <ul className="text-t4 space-y-1">
              <li className="flex gap-2">
                <LashesIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  Natural LASHES
                  <br />+ BROWS
                </span>
              </li>
              <li className="flex gap-2">
                <SubscribeIcone className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  Subscribe because of our <br />
                  Lash Cycle{" "}
                  <span className="text-blue text-base sm:text-lg font-medium">
                    Learn more
                  </span>
                </span>
              </li>
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  No commitments,
                  <br />
                  Cancel anytime
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SetupShop;
