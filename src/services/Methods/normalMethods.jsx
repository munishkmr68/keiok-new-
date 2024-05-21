import _ from "lodash";
import localStorageCall from "./localstorage.hook";
import { createContext } from "react";
import moment from "moment";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const ContextData = createContext();

export function _scrollToUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function _dateFormatChange(date, format) {
    return moment(date).format(format).toLocaleString();
}

/****** current store of product ******/
export function storeAssigned() {
    const CURRENT_STORE = localStorageCall().getSingleItem('store') || 'us';
    return CURRENT_STORE;
}

export const CUSTOMER_TYPE = localStorageCall().getItem('customerTypeDescr') ? localStorageCall().getItem('customerTypeDescr') : { priceType: 1, customerType: 'Retail Customer (RC)' };
export const MIDDLE_CREDENTIAL = { 'Content-Type': 'multipart/form-data' };
export const CacheHeader = { 'Cache-control': 'no-cache' };
export const REFFERAL_VALUES = localStorageCall().getItem('refferal_link');  /*** get Refferal value from cookiee ***/

/******* get Login user token ********/
export function _getToken() {
    try {
        const token = localStorageCall().getSingleItem('Token') ? localStorageCall().getSingleItem('Token') : false;
        return token;
    } catch (e) {
        return null;
    }
};

export function _setTimeOut(callback, seconds = 3000) {   /****** setTime out function ******/
    setTimeout(() => callback(), seconds);
}

export const FloatValues = (value, count = 2) => {
    if (!_.includes(String(value), '.')) {
        return parseFloat(value)?.toFixed(count);
    } else {
        const roundedValue = Math.floor(parseFloat(value) * 100) / 100;
        return roundedValue.toFixed(count);
    }
};


/****** logout user function ******/
export function _logoutFunction(status = "redirect", userData) {
    // console.log('run');
    if (status === 'redirect') {
        const CUSTOMER_TYPE = localStorageCall().getItem('customerTypeDescr');
        const userdata = JSON.stringify({ "id": userData?.customerId, "name": userData?.fullName, "webalies": userData?.webAlias });
        if (CUSTOMER_TYPE?.role !== 'retail' && userData?.webAlias) {
            localStorageCall().setItem('refferal_link', userdata);
        }
    }
    localStorageCall().removeItem('Token');
    localStorageCall().removeItem('customerTypeDescr');
    if (status === "redirect") {
        setTimeout(() => window.location.assign(`/signin`), 1000);
    }
}

// form 
export function _getPrice(row, id) {
    return _.find(row?.itemPricing, (row) => (row?.countryCode === `US` && row?.priceType === id))?.itemPrice
}


export function _convertStringKeyValueInObject(errorMessage) {
    const objectData = {};
    _.forEach(_.compact(errorMessage?.split("\r\n")), (value) => {
        const INNER_SPLIT = _.split(value, ":");
        _.assign(objectData, { [_.lowerCase(INNER_SPLIT[0])?.replaceAll(/\s/g, "_")]: INNER_SPLIT[1]?.trim() });
    });
    return objectData;
}

export function cn(...twclasses) {
    return twMerge(clsx(twclasses));
}

//formdata_converter
export function _getFormDataConvert(valuesObj) {
    const data = _.entries(valuesObj);
    const formdata = new FormData();
    _.forEach(data, ([key, value]) => { formdata.append(key, value); })
    return formdata;
}


/****** Product price based on customer  profile type ******/
export function _productPrice(priceList, selectedPrice, isEligibleForAutoOrder) {
    const CUSTOMER_TYP = localStorageCall().getItem('customerTypeDescr') || {};
    // console.log(CUSTOMER_TYP?.priceType, isEligibleForAutoOrder);
    let bb = (CUSTOMER_TYP?.priceType && CUSTOMER_TYP?.priceType !== 1 && isEligibleForAutoOrder) ? CUSTOMER_TYP?.priceType : (selectedPrice === "autoship" && isEligibleForAutoOrder) ? 5 : 1;
    const PRICE = _.find(priceList, ({ countryCode, priceType }) => {
        // console.log(priceList, priceType, countryCode, 'PRICE >> >> > >> > > > > >> > ')
        return (countryCode === _.upperCase('us') && priceType === bb)
    })?.itemPrice || 0;
    return FloatValues(PRICE);
}

export function _handleValidDateCheck(values, actions, months, method, setFormData) {
    const monthSelected = months.find(val => val.name === values.selectedMonth)
    const isValidDate = (year, month, day) => {
        const date = new Date(year, month - 1, day);
        return (
            !isNaN(date.getTime()) &&
            date.getDate() === parseInt(day, 10) &&
            date.getMonth() === parseInt(month, 10) - 1 &&
            date.getFullYear() === parseInt(year, 10)
        );
    };
    if (!isValidDate(values.selectedYear, monthSelected?.value, values.selectedDay)) {
        actions?.setFieldError('selectedYear', 'Date is invalid');
        return;
    }
    const selectedDate = new Date(values.selectedYear, monthSelected.value - 1, values.selectedDay);
    const currentDate = new Date();
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(currentDate.getFullYear() - 18);
    if (selectedDate > eighteenYearsAgo) {
        actions?.setFieldError('selectedYear', 'Age must be 18 years or older');
        // actions.isSubmitting
        return;
    } else {
        method();
    }
    setFormData((prv) => ({ ...prv, selectedYear: values?.selectedYear, selectedMonth: values?.selectedMonth, selectedDay: values?.selectedDay }))
}

export function _apiAddressPayload(values) {
    return ({
        address1: values?.shipping_street || '',
        "address2": values?.shipping_street2 || "",
        "address3": "",
        city: values?.shipping_city || "",
        regionProvState: values?.shipping_state || "",
        postalCode: values?.shipping_zipcode || "",
        countryCode: values?.shipping_country || ""
    })
}
