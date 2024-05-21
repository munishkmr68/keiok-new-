import _ from 'lodash';
import moment from 'moment';
import { getAllCustomerData } from '../../services/Redux/Reducer/LoginSlice';
import localStorageCall from '../Methods/localstorage.hook';
import { storeAssigned, _dateFormatChange } from '../Methods/normalMethods';

function DATES_VALUES(data, e = false, s = false, d = false) {
    return ({
        entryDate: e ? data?.entryDate : moment.utc().format(),
        signUpDate: s ? data?.signUpDate : moment.utc().format(),
        distributorDate: d ? data?.distributorDate : moment.utc().format(),
    });
}

export const _signUpPayload = (data, customerType = 1, section, commingFrom) => {
    let DATES = {};
    let CUSTOMER_TYPE = localStorageCall()?.getItem('customerTypeDescr');
    if (commingFrom === "updated") {

        if ((CUSTOMER_TYPE?.type === 1 && customerType === 2) || (CUSTOMER_TYPE?.type === 1 && customerType === 3)) {
            DATES = DATES_VALUES(data, true, true, false);

        } else if (CUSTOMER_TYPE?.type === 2 && customerType === 3) {
            DATES = DATES_VALUES(data, true, true, true);

        }
        else if ((CUSTOMER_TYPE?.type === 1 && customerType === 1) || (CUSTOMER_TYPE?.type === 2 && customerType === 2) || (CUSTOMER_TYPE?.type === 3 && customerType === 3)) {
            DATES = DATES_VALUES(data, true, true, true);
        }
        else {
            DATES = DATES_VALUES(data, true, true, true);
        }
    }
    else {
        if (customerType === 1) {
            DATES = DATES_VALUES(data, false, false, true);
        } else if (customerType === 2 || customerType === 3) {
            DATES = DATES_VALUES(data, false, false, false);
        } else {
            DATES = DATES_VALUES(data, true);
        }
    }
    const REFERRAL = localStorageCall().getItem('refferal_link');
    return ({
        ...DATES,
        "customerType": customerType,
        "customerSubType": 1,
        "customerStatusType": 1,
        "customerSubStatusType": 1,
        "birthDate": null,
        "firstName": data?.firstName || data?.email || data?.businessName,
        "lastName": data?.lastName || data?.email || data?.businessName,
        "middleName": "",
        "companyName": data?.company_name || "",
        "fullName": (data?.firstName && data?.lastName) ? (data?.firstName + ' ' + data?.lastName) : "",
        "suffix": "",
        "payToName": "",
        "genderType": 1,
        "userName": data?.email || data?.emailAddress,
        "userPassword": data?.password || '',
        "userCanLogIn": (section === "leadUser") ? false : true,
        "SmsChecked": true,
        "currencyCode": "usd",
        "countryCode": data?.country || storeAssigned().toUpperCase(),
        "membershipRenewalDate": null,
        "phoneNumbers": {
            "cellPhone": data?.phone || '',
            "homePhone": data?.phone || '',
            "workPhone": data?.phone || '',
            "otherPhone1": "",
            "otherPhone2": ""
        },
        "emailAddress": data?.email || '',
        "emailSubscribed": false,
        "emailSubscribedIp": "",
        "emailSubscribedDate": String(moment.utc().format()),
        "emailUnsubscribedDate": String(moment.utc().format()),
        "email2Address": "",
        "email2Subscribed": false,
        "email2SubscribedIp": "",
        "email2SubscribedDate": String(moment.utc().format()),
        "email2UnsubscribedDate": String(moment.utc().format()),
        "mailingAddress": {
            "address1": "",
            "address2": "",
            "address3": "",
            "city": "",
            "regionProvState": "",
            "postalCode": "",
            "countryCode": ""
        },
        "shippingAddress": {
            "address1": data?.shipping_street || '',
            "address2": data?.shipping_street2 || "",
            "address3": "",
            "city": data?.shipping_city || "",
            "regionProvState": data?.shipping_state || "",
            "postalCode": data?.shipping_zipcode || "",
            "countryCode": data?.shipping_country || ""
        },
        "billingAddress": {
            "address1": "",
            "address2": "",
            "address3": "",
            "city": "",
            "regionProvState": "",
            "postalCode": "",
            "countryCode": ""
        },
        "otherAddress1": {
            "address1": data?.businessAddress || "",
            "address2": data?.businessAddress2 || "",
            "address3": "",
            "city": data?.businessCityState || "",
            "regionProvState": data?.businessCityState || "",
            "postalCode": data?.businessZip || "",
            "countryCode": ""
        },
        "otherAddress2": {
            "address1": "",
            "address2": "",
            "address3": "",
            "city": "",
            "regionProvState": "",
            "postalCode": "",
            "countryCode": ""
        },
        "profileLink": "",
        "enrollerId": (data?.refferal === REFERRAL?.id) ? data?.refferal : REFERRAL?.id || 2,
        "enrollerBusinessCenterId": 0,
        "webAlias": data?.webAlias || '',
        "publicProfile": {
            "firstName": data?.firstName || "Test",
            "lastName": data?.lastName || "CommandConcepts",
            "fullName": (data?.firstName && data?.lastName) ? (data?.firstName + ' ' + data?.lastName) : "CommandConcepts",
            "phone": `${data?.phone}`,
            "email": data?.email,
            "city": data?.city || "",
            "regionProvState": data?.state || "",
            "countryCode": data?.country || ""
        },
        "otherFields": {
            "field1": data?.joinAs,
            "field2": moment(data?.businessCreationDate?.$d).format('DD/MM/YYYY'),
        }
    })
};

export function _storeCustomerTypes(dispatch, token, searchParams, callback) {
    dispatch(getAllCustomerData((data) => {
        if (data?.customerType === 3) {
            localStorageCall().setItem('customerTypeDescr', JSON.stringify({ type: data?.customerType, role: 'brand_ambassador', customerType: data?.customerTypeDescr, priceType: 1 }), { expires: 60 });
        } else if (data?.customerType === 2) {
            localStorageCall().setItem('customerTypeDescr', JSON.stringify({ type: data?.customerType, role: 'brand_affiliate', customerType: data?.customerTypeDescr, priceType: 1 }), { expires: 60 });
        } else {
            localStorageCall().setItem('customerTypeDescr', JSON.stringify({ type: data?.customerType, role: 'retail', customerType: data?.customerTypeDescr, priceType: 1 }), { expires: 60 });
        }
        if (callback) {
            callback();
        }

    }, token))
}

export function loopFunction(paymentFormHtml, callBackFunction) {
    let tokenId = localStorage.getItem('order_token') ? localStorage.getItem('order_token') : "";
    let preAuthOrderId = localStorage.getItem('preAuthOrderId') ? localStorage.getItem('preAuthOrderId') : '';
    let errorPayment = localStorage.getItem('error-payment') ? localStorage.getItem('error-payment') : "";
    if (tokenId || preAuthOrderId) {
        if (errorPayment) {
            localStorageCall().removeItem('error-payment');
        }
        callBackFunction({ tokenId, preAuthOrderId });
        localStorage.removeItem('order_token');
        localStorage.removeItem('preAuthOrderId')
    } else if (errorPayment) {
        localStorage.removeItem('error-payment');
        // _scriptFunctionCall(paymentFormHtml, callBackFunction)
    } else {
        setTimeout(() => {
            console.log('dddddddddddddddddddddd')
            loopFunction(paymentFormHtml, callBackFunction);
        }, 2000);
    }
}

export function _scriptFunctionCall(paymentFormHtml, callBackFunction, data) {
    let i = 0;
    if (i < 1) {
        try {
            localStorage.removeItem('order_token');
            localStorage.removeItem('preAuthOrderId')
            i++;
            window.submitHandle(data);
            callBackFunction();
            // loopFunction(paymentFormHtml, callBackFunction);
        } catch (e) {
            console.log(e)
        }
    }


}
export const _upgradePayload = (data, customerType = 1, section, commingFrom) => {
    let DATES = {};
    let CUSTOMER_TYPE = localStorageCall()?.getItem('customerTypeDescr');
    if (commingFrom === "updated") {

        if ((CUSTOMER_TYPE?.type === 1 && customerType === 2) || (CUSTOMER_TYPE?.type === 1 && customerType === 3)) {
            DATES = DATES_VALUES(data, true, true, false);

        } else if (CUSTOMER_TYPE?.type === 2 && customerType === 3) {
            DATES = DATES_VALUES(data, true, true, true);

        }
        else if ((CUSTOMER_TYPE?.type === 1 && customerType === 1) || (CUSTOMER_TYPE?.type === 2 && customerType === 2) || (CUSTOMER_TYPE?.type === 3 && customerType === 3)) {
            DATES = DATES_VALUES(data, true, true, true);
        }
        else {
            DATES = DATES_VALUES(data, true, true, true);
        }
    }
    else {
        if (customerType === 1) {
            DATES = DATES_VALUES(data, false, false, true);
        } else if (customerType === 2 || customerType === 3) {
            DATES = DATES_VALUES(data, false, false, false);
        } else {
            DATES = DATES_VALUES(data, true);
        }
    }
    const REFERRAL = localStorageCall().getItem('refferal_link');
    return ({
        ...DATES,
        "customerType": customerType,
        "customerSubType": 1,
        "customerStatusType": 1,
        "customerSubStatusType": 1,
        "birthDate": moment((data?.selectedMonth + ' ' + data?.selectedDay + ' ' + data?.selectedYear), 'MMM Do YYYY').format(),
        "firstName": data?.firstName || data?.email || data?.businessName,
        "lastName": data?.lastName || data?.email || data?.businessName,
        "middleName": data?.middleName || "",
        "companyName": data?.company_name || "",
        "companyId": data?.companyId || 320,
        "fullName": (data?.firstName && data?.lastName) ? (data?.firstName + ' ' + data?.lastName) : "",
        "suffix": "",
        "payToName": "",
        "genderType": 1,
        "userName": data?.userName,
        "userPassword": data?.password || '',
        "userCanLogIn": (section === "leadUser") ? false : true,
        "SmsChecked": true,
        "currencyCode": "usd",
        "countryCode": data?.country || storeAssigned().toUpperCase(),
        "membershipRenewalDate": null,
        "phoneNumbers": {
            "cellPhone": data?.phoneNumbers?.cellPhone || '',
            "homePhone": data?.phoneNumbers?.homePhone || '',
            "workPhone": data?.phoneNumbers?.workPhone || '',
            "otherPhone1": data?.phoneNumbers?.otherPhone1 || '',
            "otherPhone2": data?.phoneNumbers?.otherPhone2 || '',
        },
        "emailAddress": data?.emailAddress || '',
        "emailSubscribed": data?.emailSubscribed || false,
        "emailSubscribedIp": data?.emailSubscribedIp || "",
        "emailSubscribedDate": data?.emailSubscribedDate || String(moment.utc().format()),
        "emailUnsubscribedDate": data?.emailUnsubscribedDate || String(moment.utc().format()),
        "email2Address": data?.email2Address || "",
        "email2Subscribed": data?.email2Subscribed || false,
        "email2SubscribedIp": data?.email2SubscribedIp || "",
        "email2SubscribedDate": data?.email2SubscribedDate || String(moment.utc().format()),
        "email2UnsubscribedDate": data?.email2UnsubscribedDate || String(moment.utc().format()),
        "mailingAddress": {
            "address1": data?.mailingAddress?.address1 || "",
            "address2": data?.mailingAddress?.address2 || "",
            "address3": data?.mailingAddress?.address3 || "",
            "city": data?.mailingAddress?.city || "",
            "regionProvState": data?.mailingAddress?.regionProvState || "",
            "postalCode": data?.mailingAddress?.postalCode || "",
            "countryCode": data?.mailingAddress?.countryCode || ""
        },
        "shippingAddress": {
            "address1": data?.shippingAddress?.address1 || "",
            "address2": data?.shippingAddress?.address2 || "",
            "address3": data?.shippingAddress?.address3 || "",
            "city": data?.shippingAddress?.city || "",
            "regionProvState": data?.shippingAddress?.regionProvState || "",
            "postalCode": data?.shippingAddress?.postalCode || "",
            "countryCode": data?.shippingAddress?.countryCode || ""
        },
        "billingAddress": {
            "address1": data?.billingAddress?.address1 || "",
            "address2": data?.billingAddress?.address2 || "",
            "address3": data?.billingAddress?.address3 || "",
            "city": data?.billingAddress?.city || "",
            "regionProvState": data?.billingAddress?.regionProvState || "",
            "postalCode": data?.billingAddress?.postalCode || "",
            "countryCode": data?.billingAddress?.countryCode || ""
        },
        "otherAddress1": {
            "address1": data?.businessAddress || "",
            "address2": data?.businessAddress2 || "",
            "address3": "",
            "city": data?.businessCityState || "",
            "regionProvState": data?.businessCityState || "",
            "postalCode": data?.businessZip || "",
            "countryCode": ""
        },
        "otherAddress2": {
            "address1": "",
            "address2": "",
            "address3": "",
            "city": "",
            "regionProvState": "",
            "postalCode": "",
            "countryCode": ""
        },
        "profileLink": data?.profileLink || "",
        "enrollerId": (data?.refferal === REFERRAL?.id) ? data?.refferal : REFERRAL?.id || 2,
        "enrollerName": data?.enrollerName,
        "enrollerBusinessCenterId": 0,
        "webAlias": data?.webAlias || '',
        "publicProfile": {
            "firstName": data?.publicProfile?.firstName || "Test",
            "lastName": data?.publicProfile?.lastName || "CommandConcepts",
            "fullName": (data?.publicProfile?.firstName && data?.publicProfile?.lastName) ? (data?.publicProfile?.firstName + ' ' + data?.publicProfile?.lastName) : "CommandConcepts",
            "phone": `${data?.publicProfile?.phone}`,
            "email": data?.publicProfile?.email,
            "city": data?.publicProfile?.city || "",
            "regionProvState": data?.publicProfile?.state || "",
            "countryCode": data?.publicProfile?.country || ""
        },
        "otherFields": {
            "field1": data?.pathValue,
            "field2": data?.joinAs,
            "field3": moment(data?.businessCreationDate?.$d).format('DD/MM/YYYY'),
        }
    })
};