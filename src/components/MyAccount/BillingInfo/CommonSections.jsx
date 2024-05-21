import moment from "moment";
import { FormattedNumber } from "react-intl";
import PrdImg from "../../../assets/images/prd-img.png";
import Link from "next/link";
import _ from "lodash";


export const _orderDetailsFunction = (orderDetailId, oneTimeOrders) => {

    let ORDER_DETAILS = {};
    if (orderDetailId && oneTimeOrders?.length > 0) {
        ORDER_DETAILS = _.find(oneTimeOrders, { orderId: orderDetailId });
    }
    const PRODUCT_DETAIL = ORDER_DETAILS ? (ORDER_DETAILS?.details?.length > 0) ? ORDER_DETAILS?.details[0] : {} : {};
    const PAYMENT = ORDER_DETAILS ? (ORDER_DETAILS?.payments?.length > 0) ? ORDER_DETAILS?.payments[0] : {} : {};

    return ({ ORDER_DETAILS, PRODUCT_DETAIL, PAYMENT });
}

export const OrderDatePrice = ({ orderId, ORDER_DETAILS, PRODUCT_DETAIL }) => (
    <>
        <div className="divide-y divide-dashed divide-gray border-y border-gray ">
            <div className="flex text-sm sm:text-base text-t4 justify-between py-3">
                <span>Date</span>
                <span>{moment(ORDER_DETAILS?.orderDate).format('MMMM DD, YYYY')}</span>
            </div>
            {orderId &&
                <div className="flex text-t4 justify-between py-3">
                    <span>Order #</span>
                    <span>{ORDER_DETAILS?.orderId}</span>
                </div>
            }
        </div>

        <div className="flex items-center gap-4 pt-8">
            <img
                className="max-w-[121px] min-h-[121px]  shadow-[0_0_1px_#333]"
                src={PRODUCT_DETAIL?.smallImage || PrdImg}
                alt="productImage"
            />
            <div>
                <h6 className="text-lg sm:text-xl text-t4 font-normal ">
                    {PRODUCT_DETAIL?.itemDescr}
                </h6>
                <h6 className="label !font-bold">
                    <FormattedNumber value={PRODUCT_DETAIL?.itemPrice} style="currency" currency={ORDER_DETAILS?.currencyCode} />
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
    </>
)

export const ShippingCommon = ({ ORDER_DETAILS, PRODUCT_DETAIL }) => (
    <>
        <div className="flex flex-col gap-4pb-[30px] mt-[30px]">
            <div>
                <div className="font-medium text-t2 mb-2 flex justify-between items-center">
                    Shipping Address
                </div>
                <p className="text-t4 text-sm">
                    {ORDER_DETAILS?.firstName + ' ' + ORDER_DETAILS?.lastName}
                    <br />
                    {ORDER_DETAILS?.shipCountryCode}
                    <br />
                    {ORDER_DETAILS?.shipAddress1}
                    <br />
                    {ORDER_DETAILS?.shipCity}, {ORDER_DETAILS?.shipRegionProvState} {ORDER_DETAILS?.shipPostalCode}
                    <br />
                    Apt 1
                </p>
            </div>
            <div>
                {console.log('ORDER_DETAILS', ORDER_DETAILS)}
                <div className="font-medium text-t2 mb-2">Email</div>
                <p className="text-t4 text-sm">{ORDER_DETAILS?.emailAddress}</p>
            </div>
        </div>

        <div className="divide-y divide-dashed divide-gray mt-8">
            <div className="flex text-sm sm:text-base text-t4 justify-between py-3 border-y border-gray relative top-px">
                <div className="flex  flex-col gap-1">
                    <span className="font-medium text-t3">Tracking Number</span>
                    <span>{ORDER_DETAILS?.trackingCode1 || '1111111111111111111111111111'}</span>
                </div>
                <Link href={ORDER_DETAILS?.trackingUrl} target="_blank"><span className="text-blue">Track this shipment</span></Link>
            </div>
            {_.map([
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
    </>
)