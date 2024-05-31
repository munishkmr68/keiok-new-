"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import _ from "lodash";
import { FormattedNumber } from "react-intl";
import { OrderDatePrice, _orderDetailsFunction } from "./CommonSections";

const OrderDetails = (props) => {
  const { _handleSteps, oneTimeOrders, orderDetailId } = props;

  const { ORDER_DETAILS, PRODUCT_DETAIL } = _orderDetailsFunction(orderDetailId, oneTimeOrders);

  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 pt-12">
        <span
          className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
          onClick={() => _handleSteps('back')}
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </span>
        <h3 className="mt-8 mb-6 text-center">Order Details</h3>
        <OrderDatePrice {...{ orderId: true, ORDER_DETAILS, PRODUCT_DETAIL }} />
        <div className="border-t border-gray mt-8">
          <div className="divide-y divide-dashed divide-gray">
            <h6 className="label py-3">Your Total</h6>
            <div className="flex text-sm sm:text-base text-t4 justify-between py-3">
              <span>{ORDER_DETAILS?.priceTypeDescription || 'Brand Ambassador'}</span>
              <span>{ORDER_DETAILS?.firstName + ' ' + ORDER_DETAILS?.lastName}</span>
            </div>
            {_.map([
              { label: 'Market', value: 'U.S.' },
              { label: 'Total Items', value: PRODUCT_DETAIL?.quantity },
              { label: 'Subtotal', value: <FormattedNumber value={ORDER_DETAILS?.subTotal} style="currency" currency={ORDER_DETAILS?.currencyCode} /> },
              { label: 'Shipping', value: <FormattedNumber value={ORDER_DETAILS?.shippingTotal} style="currency" currency={ORDER_DETAILS?.currencyCode} /> },
              { label: 'MD State Tax (0.06%)', value: <FormattedNumber value={ORDER_DETAILS?.taxTotal} style="currency" currency={ORDER_DETAILS?.currencyCode} /> }
            ], ({ label, value }) => (
              <div key={label} className="flex text-t4 justify-between py-3">
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}

            <div className="flex text-t4 justify-between py-3">
              <span className="text-blue text-base sm:text-lg font-medium">
                Your Total
              </span>
              <span className="text-blue text-base sm:text-lg font-medium">
                <FormattedNumber value={ORDER_DETAILS?.orderTotal} style="currency" currency={ORDER_DETAILS?.currencyCode} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
