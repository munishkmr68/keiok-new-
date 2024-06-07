"use client";
import React, { useState } from "react";
import Menu from "@/components/menu";
import clipart from "../../assets/images/clipart-img.png";
import Image from "next/image";
import Footer from "@/common/Footer";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import StandardPopup from "./StandardPopup";
import Card from "./AccountTabContent/Card";
import StandardTabs from "./Tabs";
import EncryptionPolicy from "../EncryptionPolicy";
import NeedHelp from "../NeedHelp";
import LashesIcon from "../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import MyNextOrder from "./MyNextOrder";
import MyNextOrderModal from "./MyNextOrderModal";
import ProductInfo from "./ProductInfo";
import ChangeEmail from "./ChangeEmail";
import PaymentInfo from "./PaymentInfo";
import ShippingInfo from "./ShippingInfo";
import OrderHistory from "./OrderHistory/OrderHistory";

function Standard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("MY next order");
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      {openModal && (
        <StandardPopup
          openModal={openModal}
          setOpenModal={setOpenModal}
          setValue={setValue}
        />
      )}
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
      <div className="max-w-[484px] mx-auto px-4 mb-3">
        <button
          className="tab-button rounded-lg font-[450] text-xl border border-gray text-t4 flex items-center justify-between  "
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <span className="ml-36">{value || "MY next order"}</span>

          <ChevronDownIcon className="w-5 h-5 " />
        </button>
      </div>


      {value === "Change email" ? (
        <ChangeEmail />
      ) : value === "MY lash product info" ? (
        <ProductInfo />
      ) : value === "Payment info" ? (
        <PaymentInfo />
      ) : value === "Shipping info" ? (
        <ShippingInfo />
      ) : value === "Order history" ? (
        <OrderHistory />
      ) : (
        <MyNextOrder />
      )}

      
      <Footer />
    </>
  );
}

export default Standard;
