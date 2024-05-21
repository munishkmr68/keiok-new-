"use client";
import { useState } from "react";
import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/solid";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import RemoveShippingAddressModal from "./RemoveShippingAddressModal";
import Notification from "@/components/notification";
import Arrow from "../../../assets/images/icons/check-circle-white.svg";
import Cross from "../../../assets/images/icons/close-circle.svg";
import _ from "lodash";
import { cn } from "@/services/Methods/normalMethods";
import Loader from "@/common/Loader";

const ShippingInfo = (props) => {
  const {
    isLoading, checkoutLoading, checkoutError, successMsg, recurringErrMsg, loginLoading, _handleSteps, allAddressData, prefferedAddress,
    _handleMakeDefault, _handleAddressRemove, _handleEditAddress
  } = props;

  const [isRemoveShippingAddressModalOpen, setIsRemoveShippingAddressModalOpen] = useState(null);

  const openRemoveShippingAddressModal = (addressKey) => {
    setIsRemoveShippingAddressModalOpen(addressKey);
  };

  const closeRemoveShippingAddressModal = () => {
    setIsRemoveShippingAddressModalOpen(null);
  };


  return (
    <>
      {(isLoading || loginLoading || checkoutLoading)
        ?
        <Loader />
        :
        <div className="max-w-[484px] mx-auto px-4 pt-12">
          <span
            className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
            onClick={() => _handleSteps('back')}
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </span>
          {successMsg &&
            <div className="mt-5">
              <Notification
                icon={<Arrow />}
                message={successMsg}
              />
            </div>
          }
          {recurringErrMsg &&
            <div className="mt-5">
              <Notification
                backgroundColor="#f00"
                icon={<Cross />}
                message={checkoutError || recurringErrMsg}
              />
            </div>
          }
          <div className="flex flex-col items-center text-center">
            <LockCircleIcon className="mb-6 mt-8" />
            <h3 className="mb-4">Manage Shipping Info</h3>
            <p className="text-t4 mb-8 text-base ">
              Edit your payment details, add a backup, or switch{" "}
              <br className="sm:block hidden" /> your preferred payment
              method.
            </p>
          </div>
          {_.map(_.entries(allAddressData), ([key, value], i) => {
            if (value?.address1) {
              return (
                <div key={key} className={cn("border border-gray px-4 py-[18px] shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)]", { 'mt-4': i > 0 })}>
                  <p className="mb-2 text-t4">
                    {value?.firstName} {value?.lastName}
                    <br />
                    {value?.countryCode}
                    <br />
                    {value?.address1}
                    <br />
                    {value?.city}, {value?.regionProvState} {value?.postalCode}
                    <br />
                    {value?.address2}
                  </p>
                  {(prefferedAddress === key) ? <p className="mb-3 text-t5">To remove, add another shipping address first</p> : ''}
                  <div className="flex">
                    {(prefferedAddress === key)
                      ?
                      <button type="button" className="font-bold text-t2 border border-t2 rounded-[20px] py px-2.5 tracking-wider">
                        PREFERRED
                      </button>
                      :
                      <button type="button" className="text-sm  text-blue" onClick={() => _handleMakeDefault(key)}>Make preferred</button>
                    }
                    <button className="text-sm  text-blue ml-auto" onClick={() => _handleEditAddress(key)}>Edit</button>
                    {(prefferedAddress !== key) &&
                      <button
                        className="text-sm  text-blue ml-auto"
                        onClick={() => openRemoveShippingAddressModal(key)}
                      >
                        Remove
                      </button>
                    }
                  </div>
                </div>
              )
            }
          })}
          {(_.find(_.values(allAddressData), { address1: '' })) &&
            <button
              className="primary-button-outlined mt-8 flex items-center gap-4 justify-center"
              onClick={() => _handleSteps('step6')}
            >
              <PlusIcon className="w-4 h-4 stroke-current" /> Add New Address
            </button>
          }
        </div>
      }
      <RemoveShippingAddressModal
        _handleAddressRemove={_handleAddressRemove}
        isOpen={isRemoveShippingAddressModalOpen}
        onClose={closeRemoveShippingAddressModal}
      />
    </>
  );
};

export default ShippingInfo;
