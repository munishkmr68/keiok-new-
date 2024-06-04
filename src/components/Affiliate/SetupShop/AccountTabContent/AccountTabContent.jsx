"use client";
import React, { useState } from "react";
import { ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Card from "./Card";
import MyNextOrderModal from "./MyNextOrderModal";
import ProductInfo from "../ProductInfo";

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
      <button
        className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between"
        onClick={toggleModal}
      >
        <span className="ml-36">{value || "MY next order"}</span>
        <ChevronDownIcon className="w-5 h-5 " />
      </button>

      {value === "MY lash product info" ? (
        <ProductInfo />
      ) : (
        <>
          <div className="flex gap-2.5 mt-5 items-center shadow-shadow1 border border-gray py-4 px-6 rounded-xl text-t1 text-sm font-medium">
            <CheckCircleIcon
              className="h-5 w-5 text-green"
              aria-hidden="true"
            />
            Your payment method has been updated
          </div>

          <Card />
        </>
      )}
    </>
  );
};

export default AccountTabContent;
