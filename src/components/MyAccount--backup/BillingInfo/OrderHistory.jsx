"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import _ from "lodash";
import { FormattedNumber } from "react-intl";
import moment from "moment";
import { cn } from "@/services/Methods/normalMethods";
import Loader from "@/common/Loader";

const OrderHistory = (props) => {

    const { _handleSteps, oneTimeOrders, _handleOrderDetail } = props;
    return (
        <div className="max-w-[484px] mx-auto px-4 pt-12">
            <span
                className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
                onClick={() => _handleSteps('back')}
            >
                <ChevronLeftIcon className="w-4 h-4" />
            </span>
            <h3 className="mt-8 mb-6">Order history</h3>

            {(oneTimeOrders?.length > 0)
                ?
                _.map(oneTimeOrders, (row, i) => {
                    const PRODUCT_DETAIL = (row?.details?.length > 0) ? row?.details[0] : {};
                    return (
                        <div key={row?.orderId} className={cn("border border-gray px-4 py-[18px] pb-0 shadow-[0px_2px_4px_0px_rgba(48,48,48,0.12)]", { 'mt-4': (i > 0) })}>
                            <div className="flex items-center justify-between gap-1">
                                <span className="text-t2 font-medium">{moment(row?.orderDate).format('DD/MM/YY')}</span>
                                <span className="text-t2 font-medium">
                                    <FormattedNumber value={row?.orderTotal} style="currency" currency={row?.currencyCode} />
                                </span>
                            </div>

                            <div className="flex items-center gap-4  py-5 border-b border-gray">
                                <img
                                    className="max-w-[121px] min-h-[121px]  shadow-[0_0_1px_#333]"
                                    src={PRODUCT_DETAIL?.smallImage}
                                    alt="productImage"
                                />
                                <div>
                                    <h6 className="text-lg sm:text-xl text-t4 font-normal ">
                                        {PRODUCT_DETAIL?.itemDescr}
                                    </h6>
                                    <h6 className="label !font-bold">
                                        <FormattedNumber value={PRODUCT_DETAIL?.itemPrice} style="currency" currency={row?.currencyCode} />
                                    </h6>
                                    <p className="text-t4 text-sm sm:text-base">
                                        Delivered & billed every 3 months
                                    </p>
                                    <p className="text-t4 text-sm sm:text-base">
                                        3 month supply (2mL)
                                    </p>
                                    <p className="text-t4 text-sm sm:text-base">Qty: {PRODUCT_DETAIL?.quantity}</p>
                                </div>
                            </div>

                            <div className="divide-y divide-gray">
                                {_.map([
                                    { label: 'View order details', step: 'step7', type: 'orderDetail' },
                                    { label: 'View shipping details', step: 'step8', type: 'shippingDetail' },
                                    { label: 'View payment details', step: 'step9', type: 'paymentDetail' }
                                ], (r) => (
                                    <div className="py-5 " key={r?.step}>
                                        <button
                                            onClick={() => {
                                                _handleSteps(r?.step);
                                                _handleOrderDetail(row?.orderId);
                                            }}
                                            className="sm:text-lg text-base flex items-center w-full justify-between gap-2 text-blue"
                                        >
                                            {r?.label}
                                            <ChevronRightIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })
                :
                <Loader />
            }

            <p className="text-sm text-t5 mb-2 mt-8">
                Subscription fees are billed at the beginning of each period and
                may take a few days after the billing date to appear on your
                account. Sales tax may apply.
            </p>
            <p className="text-sm text-t5">
                NOTE: We only show up to 1 year of billing history
            </p>
        </div>

    );
};

export default OrderHistory;
