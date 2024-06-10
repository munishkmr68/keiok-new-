"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import MyNextOrder from "./MyNextOrder";
import MyNextOrderModal from "./MyNextOrderModal";
import ProductInfo from "../ProductInfo";
import ChangeEmail from "./ChangeEmail";
import PaymentInfo from "./PaymentInfo";
import ShippingInfo from "./ShippingInfo";
import OrderHistory from "./OrderHistory/OrderHistory";

const AccountTabContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <MyNextOrderModal
          openModal={isModalOpen}
          setOpenModal={setIsModalOpen}
          setValue={setValue}
        />
      )}
      <div className="max-w-[484px] mx-auto px-4">
        <button
          className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between"
          onClick={toggleModal}
        >
          <span className="mx-auto">{value || "MY next order"}</span>
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
    </>
  );
};

export default AccountTabContent;
