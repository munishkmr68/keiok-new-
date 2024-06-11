"use client";

import Menu from "@/components/menu";
import Image from "next/image";
import React, { useState } from "react";
import clipart from "../../../../assets/images/clipart-img.png";
import Footer from "@/common/Footer";
import ChooseYourProfile from "./ChooseYourProfile";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";
import LashesIcon from "../../../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../../../assets/images/icons/checkmark.svg";
export default function ChooseYourProfileImage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return <ChooseYourProfile />;
}
