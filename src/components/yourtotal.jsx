import { FloatValues } from "@/services/Methods/normalMethods";
import React from "react";

const YourTotal = ({ orderData }) => {

  return (
    <div className="divide-y divide-dashed divide-gray">
      <h6 className="label pb-3">Your Total</h6>
      <div className="flex text-sm sm:text-base text-t4 justify-between py-3">
        <span>Subtotal</span>
        <span>${orderData?.subTotal ? FloatValues(orderData?.subTotal) : 0}</span>
      </div>
      <div className="flex text-t4 justify-between py-3">
        <span>Shipping</span>
        <span>${orderData?.shippingTotal ? FloatValues(orderData?.shippingTotal) : 0}</span>
      </div>
      <div className="flex text-t4 justify-between py-3">
        <span>Tax</span>
        <span>${orderData?.taxTotal ? FloatValues(orderData?.taxTotal) : 0}</span>
      </div>
      <div className="flex text-t4 justify-between py-3">
        <span className="text-blue text-base sm:text-lg font-medium">
          Your Total
        </span>
        <span className="text-blue text-base sm:text-lg font-medium">
          ${orderData?.orderTotal ? orderData?.orderTotal : 0}
        </span>
      </div>
    </div>
  );
};

export default YourTotal;
