import React from "react";
import Image from "next/image";
import LockIcon from "../assets/images/icons/lock.svg";
import NortonLogo from "../assets/images/norton-logo.png";
import BbbLogo from "../assets/images/bbb-logo.png";

export default function EncryptionPolicy() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2.5 it items-start shadow-shadow1 border border-gray py-4 px-6 rounded-xl text-xs">
        <span className="flex-auto">
          <LockIcon />
        </span>
        Industry-standard encryption to protect the confidentiality of your personal information.
      </div>
      <div className="flex items-center gap-4 sm:gap-[33px] justify-center shadow-shadow1 border border-gray py-4 px-6 rounded-xl">
        <Image
          className="max-h-[34px] sm:w-auto object-contain w-full"
          src={NortonLogo}
          alt="logo"
        />
        <Image
          className="max-h-[34px] sm:w-auto object-contain w-full"
          src={BbbLogo}
          alt="logo"
        />
      </div>
    </div>
  );
}
