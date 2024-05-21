import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import api from "../../AxiosHelper";
import { MIDDLE_CREDENTIAL, storeAssigned, _setTimeOut } from "../../Methods/normalMethods";

const PaymentSlice = createSlice({
    name: "productSlice",
    initialState: {
        paymentOptions: [],
        paymentFormHtml: "",
        paymentScript: "",
        iframeLoader: false,
    },
    reducers: {
        setPaymentOptions: (state, actions) => { state['paymentOptions'] = actions?.payload; },
        setFormHtml: (state, actions) => { state['paymentFormHtml'] = actions.payload; },
        setScriptFunction: (state, actions) => { state['paymentScript'] = actions.payload; },
        setIframeLoader: (state, action) => { state['iframeLoader'] = action?.payload }
    }
});
export const { setPaymentOptions, setFormHtml, setScriptFunction, setIframeLoader } = PaymentSlice?.actions;

export const _getPaymentOptions = (callback) => dispatch => {
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "GET",
        endpoint: `/Money/PaymentOptions/${_.upperCase(storeAssigned())}/USD`
    }).success((res) => {
        if (res?.data?.length > 0) {
            dispatch(setPaymentOptions(res?.data))
            callback(res?.data)
        }
    }).error((err) => {

    }).send();
}

export const _getPaymentHtml = (paymentOptionId, data = null) => dispatch => {
    dispatch(setIframeLoader(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "POST",
        endpoint: `/Money/PaymentOptions/Form`,
        data: JSON.stringify({
            "paymentOptionId": paymentOptionId,
            "frameId": "collect_form_pay",
            "formSubmitFunctionName": 'submitHandle',
            "onSuccessFunctionName": 'onSucessFunciton',
            "onErrorFunctionName": 'onErrorFunction',
            "url": window.location.origin,
            // "url": "http://localhost:3000",
            "customCSS": "string"
        })
    }).success((res) => {
        if (res?.data) {
            dispatch(setScriptFunction(res?.data?.scriptRaw))
            dispatch(setFormHtml(res?.data?.frameSource));
            _setTimeOut(() => dispatch(setIframeLoader(false)), 4000);
        } else {
            dispatch(setIframeLoader(false));
        }
    }).error((err) => {
        dispatch(setIframeLoader(false));
    }).send();
}


export default PaymentSlice?.reducer;