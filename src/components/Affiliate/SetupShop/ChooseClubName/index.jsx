"use client";

import Menu from "@/components/menu";
import Image from "next/image";
import React, { useState } from "react";
import clipart from "../../../../assets/images/clipart-img.png";
// import ChooseYourWebsiteTabs from './Tabs';
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import LashesIcon from "../../../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";
import Footer from "@/common/Footer";
import ChooseClubNameTabs from "./ChooseClub";
export default function ChooseClubName() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="w-full mx-auto  ">
        <ChooseClubNameTabs />
      </div>
    </>
  );
}
