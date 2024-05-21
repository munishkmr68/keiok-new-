// import { CircularProgress } from "@mui/material";
import _ from "lodash";
import moment from "moment";
import localStorageCall from "./localstorage.hook";
// import { CUSTOMER_TYPE } from "./normalMethods";


export function _priceTypeForCalculate(section, autoshipProducts = []) {
    let priceType = 1;
    const CUSTOMER_TYPE_CHECKOUT = localStorageCall().getItem('customerTypeDescr');
    // if (!_.includes(['preferred', 'IBO'], CUSTOMER_TYPE_CHECKOUT?.role)) {
    //     // if ((section === 'retail' || section === 'normal')) {
    //     priceType = (autoshipProducts?.length > 0) ? 1 : 1;
    //     // } 
    // } else {
    //     priceType = (autoshipProducts?.length > 0) ? 6 : 3;
    // }
    return priceType;
}

function _commonCheckoutObj(userData, selectedCheck, byPass) {
    return ({
        customerId: localStorageCall().getItem('Token') || 0,
        priceType: userData?.priceType ? userData?.priceType : 1,
        storefrontId: 1,
        currencyCode: 'USD',
        shipCarrierId: selectedCheck?.shipCarrierId || 0,
        shipMethodType: selectedCheck?.shipMethodType || 0,
        country: userData?.shipping_country,
        firstName: userData?.shipping_urname,
        lastName: userData?.shipping_lastname,
        address1: userData?.shipping_street,
        address2: userData?.shipping_street2,
        city: userData?.shipping_city,
        phone: userData?.shipping_phone,
        email: userData?.shipping_email || userData?.emailAddress,
        zip: userData?.shipping_zipcode,
        state: userData?.shipping_state,
        field1: userData?.shipping_delivery,
        field2: "",
        field3: "",
        field4: "",
        field5: "",
        field6: "",
        field7: "",
        field8: "",
        field9: "",
        field10: "",
        shipMethod: {
            "shipCarrierId": selectedCheck?.shipCarrierId || 0,
            "shipMethodType": selectedCheck?.shipMethodType || 0,
            "param1": "",
            "param2": "",
            "param3": "",
            "param4": "",
            "param5": ""
        },
        bypassAddressValidation: byPass,
        payments: [],
    });
}

export const calculateDataUserPayload = (userData, selectedShippingOption, byPass) => ({
    preAuthOrderId: 0,
    companyId: 150,
    company: userData?.shipping_company,
    orderType: 2,
    orderStatusType: 1,
    county: userData?.shipping_country,
    orderStatusSubType: 1,
    userName: userData?.shipping_email,
    orderDate: moment.utc().format(),
    returnAllShipMethods: true,
    taxExemptOverride: true,
    couponCodes: [""],
    sessionId: "",
    ..._commonCheckoutObj(userData, selectedShippingOption['oneTimeSelectedShipping'], byPass)
});

export const calculateReouccringPayload = (userData, selectedShippingOption, byPass) => ({
    recurringOrderType: 1,
    recurringOrderStatusType: 1,
    frequencyType: 1,
    startDate: moment.utc().format(),
    endDate: moment().year(2029).utc().format(),
    paymentMethodId: 0,
    orderType: 1,
    orderStatusType: 2,
    company: userData?.shipping_company,
    priceCountryCode: userData?.shipping_country,
    shipToAddressType: 0,
    ..._commonCheckoutObj(userData, selectedShippingOption['autoshipSelectedShipping'], byPass)
});


export const _paymentPayload = (data, values, section = "normal", selectedPayment) => {

    let payload = {
        "token": data?.id || null,
        "tokenType": 3,
        "phone": values?.shipping_phone || "",
        "email": values?.shipping_email || "",
        "currencyCode": "USD",
        "pointAccountType": 0,
        "country": values?.shipping_country || "",
        "state": values?.shipping_state || "",
        "city": values?.shipping_city || "",
        "address2": values?.shipping_street2 || "",
        "address1": values?.shipping_street || "",
        "lastName": values?.shipping_lastname || "",
        "firstName": values?.shipping_urname || "",
        "paymentType": 1,
        "zip": values?.shipping_zipcode || "",
        "saveToken": section === 'normal' ? false : true,
        "paymentOptionId": selectedPayment?.selectedPaymentDropdown || selectedPayment?.cardValue?.accountType || 1,
    };
    const PAYMENT_PAYLOAD = (selectedPayment?.selectedPaymentDropdown !== 1) ? _.omit(payload, ['token', 'tokenType', 'paymentType']) : payload;
    return section !== "normal" ? { ...PAYMENT_PAYLOAD, recurringPaymentActionType: 1 } : PAYMENT_PAYLOAD;
}

export const OuterLoader = ({ section, msg }) => (
    <div className='order-summary mb-[20px]' style={{ padding: "0" }}>
        {/* <h2>{section} Order Summary</h2> */}
        <div className='order-data loader_order text-center px-0 pt-[30px] pb-[10px] text-center'>
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue border-t-transparent m-[0_auto]"></div>
        </div>
        <p className="text-[18px] m-0 text-center pb-[10px]">{msg ? msg : 'Please complete your shipping information'}</p>
    </div>
);

export const CreateObject = (row) => ({
    id: row?.itemId,
    productName: row?.description,
    image: row?.field1,
    price: row?.itemPrice,
    quantity: row?.quantity,
    itemCode: row?.fullItemCode || row?.itemCode,
});

export const CHECKBOX_CONDITIONS = [
    { name: "termscondition2", checkboxText: "I have read and accepted the", linkText: "Policies and procedures", link: "/assets/pdfs/YoungNRG_P&Ps.pdf" },
    { name: "privacy_policy", checkboxText: "I agree to the", linkText: "Privacy policy", link: "/assets/pdfs/YoungNRG_PrivacyPolicy.pdf" },
    { name: "membershipCharge", checkboxText: "I will be charged for my membership", linkText: "", link: "" },

];

export function _checkoutAddressFormat(userData, formData, useDefaultAddressOrNot, countryState) {
    return ({
        shipping_urname: formData?.shipping_urname || userData?.firstName,
        shipping_lastname: formData?.shipping_lastname || userData?.lastName,
        shipping_delivery: '1234567898',
        shipping_email: formData?.shipping_email || userData?.emailAddress,
        shipping_phone: formData?.shipping_phone || userData?.phoneNumbers?.cellPhone,
        shipping_street: useDefaultAddressOrNot?.address_1 || formData?.shipping_street || userData?.shippingAddress?.address1,
        shipping_street2: formData?.shipping_street2 || userData?.shippingAddress?.address2,
        shipping_city: useDefaultAddressOrNot?.city || formData?.shipping_city || userData?.shippingAddress?.city,
        shipping_zipcode: useDefaultAddressOrNot?.postal_code || formData?.shipping_zipcode || userData?.shippingAddress?.postalCode,
        shipping_country: useDefaultAddressOrNot?.country || countryState?.country || userData?.countryCode,
        shipping_state: useDefaultAddressOrNot?.state_region || countryState?.state || userData?.shippingAddress?.regionProvState,
    })
}