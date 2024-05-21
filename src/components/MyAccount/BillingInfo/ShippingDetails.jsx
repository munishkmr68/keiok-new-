"use client";
import _ from "lodash";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { OrderDatePrice, ShippingCommon, _orderDetailsFunction } from "./CommonSections";

const ShippingDetails = (props) => {
  const { _handleSteps, oneTimeOrders, orderDetailId } = props;
  const { ORDER_DETAILS, PRODUCT_DETAIL } = _orderDetailsFunction(orderDetailId, oneTimeOrders);

  return (
    <div className="max-w-[484px] mx-auto px-4 pt-12">
      <span
        className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
        onClick={() => _handleSteps('back')}
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </span>
      <h3 className="mt-8 mb-6 text-center">Shipping Details</h3>
      <OrderDatePrice {...{ ORDER_DETAILS, PRODUCT_DETAIL }} />
      <div className="border-y border-gray mt-8">
        <div className="flex text-sm sm:text-base text-t4 justify-between py-3">
          <span>Carrier</span>
          <span>{ORDER_DETAILS?.shipCarrierDescription}</span>
        </div>
      </div>
      <ShippingCommon {...{ ORDER_DETAILS, PRODUCT_DETAIL }} />
    </div>
  );
};

export default ShippingDetails;
