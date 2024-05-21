"use client";
import React, { useState } from "react";
import Footer from "@/common/Footer";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import Image from "next/image";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";
import productLash from "../../../assets/images/product-lash.png";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Menu from "@/components/menu";
import SignInModal from "./SignInModal";
import JoinLashClub from "../JoinLashClub";

const ShopMYLash = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showJoinLashClub, setShowJoinLashClub] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleJoinLashClubClick = () => {
    setShowJoinLashClub(true);
  };

  if (showJoinLashClub) {
    return <JoinLashClub />;
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-white">
        <div className="mx-auto flex container items-center py-[18px] px-4">
          <button
            onClick={toggleModal}
            className="flex items-center gap-1 text-sm font-medium text-t4"
            href="/"
          >
            Sign In
          </button>
          <Menu />
        </div>
      </header>
      <div className="max-w-[484px] mx-auto px-4">
        <div className="flex flex-col items-center gap-1">
          <Image
            className="w-[140px] h-[140px] rounded-full mb-3"
            src={profileImg}
            alt="user-img"
          />
          <p className="label text-t4">Hey friend, welcome to</p>
          <h4 className="font-bold text-darkpink">MY lash club</h4>
          <p className="font-medium">
            <span className="text-[9px]">with</span> Ashley Jackson
          </p>
        </div>
      </div>
      <div className="bg-pink my-9">
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
        <button
          className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
          onClick={handleJoinLashClubClick}
        >
          shop MY lash
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="my-24">
          <EncryptionPolicy />
        </div>
        <NeedHelp />
      </div>
      <Footer />
      {isModalOpen && <SignInModal onClose={toggleModal} />}
    </>
  );
};

export default ShopMYLash;
