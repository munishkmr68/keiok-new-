import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import api from '../../AxiosHelper';
import { CacheHeader, storeAssigned, _convertStringKeyValueInObject, _setTimeOut, MIDDLE_CREDENTIAL } from '../../Methods/normalMethods';
import { SignUpFormApi, customerUpdateApi } from './LoginSlice';
import localStorageCall from '../../Methods/localstorage.hook';

const CheckoutSlice = createSlice({
    name: "checkoutSlice",
    initialState: {
        calculateData: [],
        autoshipCalculateData: [],
        orderData: [],
        error: '',
        isLoading: false,
        errorAddressData: null,
        couponErrorData: null,
        normalAddressError: null,
        useDefaultOrNot: false
    },
    reducers: {
        setCalculateData: (state, action) => {
            state['calculateData'] = action.payload;
            state['totalCount'] = action.payload?.totalRecords
        },
        setAutoshipCalculateData: (state, action) => {
            state['autoshipCalculateData'] = action.payload;
            state['totalCount'] = action.payload?.totalRecords
        },
        setErrorAddressData: (state, action) => {
            if (action.payload?.section === "object") {
                state['errorAddressData'] = action.payload?.objectData;
                state['normalAddressError'] = null;

            } else if (action.payload?.section === "normal_error") {
                state['normalAddressError'] = action.payload?.errorMessage;
            }
        },
        setIsLoading: (state, action) => {
            state['isLoading'] = action.payload;
        },
        setErrorData: (state, action) => {
            state['error'] = action?.payload
        },
        setCouponErrorData: (state, action) => {
            state['couponErrorData'] = action?.payload
        },
    }

});

export const { isLoading, setIsLoading, setCalculateData, setErrorData, setErrorAddressData, setAutoshipCalculateData, setCouponErrorData } = CheckoutSlice.actions;

const ErrorMsg = (errorResult, callback) => dispatch => {
    if (errorResult?.length > 0) {
        _.map(errorResult, ({ errorMessage }) => {
            if (errorMessage) {
                if (_.includes(errorMessage, 'Postal Code') && !_.includes(errorMessage, 'Invalid ZIP')) {
                    const objectData = _convertStringKeyValueInObject(errorMessage);
                    dispatch(setErrorAddressData({ objectData, section: "object" }));
                    if (callback) {
                        callback({ name: 'addressOption', addresses: objectData });
                    }
                } else if (_.includes(errorMessage, 'Address Validation Error')) {
                    dispatch(setErrorAddressData({ errorMessage, section: "normal_error" }));
                    if (callback) callback({});
                } else {
                    dispatch(setErrorData(errorMessage));
                    if (callback) callback({});
                    // _setTimeOut(() => dispatch(setErrorData('')), 6000);
                }
                return;
            }
        });
    }
}
// ************************ Normal product order API ******************************/

export const CalculateApi = (data, callback) => dispatch => {
    const URL_PATH = "/Crm/CrmOrder/Calculate";
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "POST",
        endpoint: URL_PATH,
        data: JSON.stringify(data),
        ...CacheHeader
    }).success((res) => {
        dispatch(setCalculateData(res));
        dispatch(setErrorData(''))
        if (_.some(data?.couponCodes, (item) => typeof item === 'string' && item.length > 0)) {
            if (_.isNull(res?.data?.crmOrder?.couponCodes)) {
                dispatch(setCouponErrorData('This coupon is invalid'));
            }
            else if (res?.data?.crmOrder?.couponCodes?.[0] === "FreeMembership") {
                if (data?.couponCodes?.[0] === "FreeMembership") {
                    dispatch(setCouponErrorData(''));
                }
                else {
                    dispatch(setCouponErrorData(`This coupon is invalid. ${res?.data?.crmOrder?.couponCodes} coupon is applied `));
                }
            }
            else {
                dispatch(setCouponErrorData(''));
            }
        }
        else {
            dispatch(setCouponErrorData(''));
        }
        dispatch(setErrorAddressData({ errorMessage: '', section: "normal_error" }));
        if (callback) { callback(res?.data); }
    }).error((err) => {
        const ErrorData = err?.errorResults?.length > 0 ? err?.errorResults : { errorMessage: err?.errorMessage }
        dispatch(ErrorMsg(ErrorData, (data) => callback(data)));
        if (callback) { callback({}); }
    }).send();
};

//autoship  check and redirect function ***************/
function _autoshipCheckAndRedirect(autoship, orderId, callbackCall) {
    if (autoship === undefined || autoship?.length === 0) {
        // localStorageCall().removeItem(`${section}Products`)
        // localStorage.removeItem('selectedMemberShip');
        window.location.assign(`/${storeAssigned()}/thankyou?orderId=${orderId}`);
    } else {
        callbackCall(orderId);
    }
}

export const CreateOrderApi = (data, autoship, callbackCall, signupData = {}, section) => dispatch => {
    dispatch(setIsLoading(true));
    const URL_PATH = "/Crm/CrmOrder/Create";
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "POST",
        endpoint: URL_PATH,
        data: JSON.stringify(data),
        ...CacheHeader
    }).success((res) => {
        dispatch(setErrorData(''));
        if (res) {
            // callbackCall(res?.data);
            if (signupData?.shipping_urname) {
                let CUSTOMER_TYPE = localStorageCall()?.getItem('customerTypeDescr') || null;
                if ((section === "normal" && CUSTOMER_TYPE?.type === 1) || ["preferred", "IBO"]?.includes(section)) {
                    dispatch(customerUpdateApi(signupData, section, data?.customerId, () => {
                        // localStorageCall().removeItem(`${section}Products`)
                        _autoshipCheckAndRedirect(autoship, res?.data?.crmOrder?.orderId, (orderId) => callbackCall(orderId));
                    }));
                } else {
                    _autoshipCheckAndRedirect(autoship, res?.data?.crmOrder?.orderId, (orderId) => callbackCall(orderId));
                }
            } else {
                _autoshipCheckAndRedirect(autoship, res?.data?.crmOrder?.orderId, (orderId) => callbackCall(orderId));
            }
        }
    }).error((err) => {
        const ErrorData = err?.errorResults?.length > 0 ? err?.errorResults : { errorMessage: err?.errorMessage }
        dispatch(ErrorMsg(ErrorData));
        // setTimeout(() => dispatch(setErrorData('')), 6000)
        dispatch(setIsLoading(false));
    }).send();
};

// ************************ Autoship product order API ******************************/

export const CalculateAutoshipApi = (data, callback) => dispatch => {
    const URL_PATH = `/Crm/${data?.customerId}/OrderRecurring/Calculate`;
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "POST",
        endpoint: URL_PATH,
        data: JSON.stringify(data),
        ...CacheHeader
    }).success((res) => {
        dispatch(setErrorData(''));
        dispatch(setAutoshipCalculateData(res));
        dispatch(setErrorAddressData({ errorMessage: '', section: "normal_error" }));
        if (callback) { callback(res?.data); }

    }).error((err) => {
        if (_.includes(err?.errorMessage, 'Postal Code')) {
            const objectData = _convertStringKeyValueInObject(err?.errorMessage);
            dispatch(setErrorAddressData({ objectData, section: "object" }));
        } else {
            if (_.includes(err?.errorMessage, 'Address Validation Error')) {
                dispatch(setErrorAddressData({ errorMessage: err?.errorMessage, section: "normal_error" }));
                dispatch(setErrorData(err?.errorMessage));
            }
        }
        if (callback) { callback({}); }
    }).send();
};

export const CreateAutoshipOrderApi = (data, section, orderid, callBack) => dispatch => {
    dispatch(setIsLoading(true));
    const URL_PATH = `/Crm/OrderRecurring/${data?.customerId}`;
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "POST",
        endpoint: URL_PATH,
        data: JSON.stringify(data),
        ...CacheHeader
    }).success((res) => {
        dispatch(setErrorData(''));
        if (res) {
            // localStorageCall().removeItem(`${section}Products`)
            if (orderid) {
                if (callBack) {
                    callBack(res?.data);
                } else {
                    window.location.assign(`/${storeAssigned()}/thankyou?orderId=${orderid}&autoshipId=${res?.data?.recurringOrderId}`)
                }
            } else {
                if (callBack) {
                    callBack(res?.data);
                } else {
                    window.location.assign(`/${storeAssigned()}/thankyou?autoshipId=${res?.data?.recurringOrderId}`)
                }
            }
        }
        dispatch(setIsLoading(false));
    }).error((err) => {
        dispatch(ErrorMsg(err?.errorResults));
        // setTimeout(() => dispatch(setErrorData('')), 6000)
        dispatch(setIsLoading(false));
    }).send();
};


export const ModifyCalculateAutoshipApi = (data, recurringOrderId, callback) => dispatch => {
    const URL_PATH = `/Crm/OrderRecurring/${data?.customerId}/Modify/${recurringOrderId}`;
    dispatch(setIsLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "PUT",
        endpoint: URL_PATH,
        data: JSON.stringify(data),
        ...CacheHeader
    }).success((res) => {
        dispatch(setIsLoading(false));
        dispatch(setErrorData(''));
        dispatch(setIsLoading(false));
        if (callback) { callback({ type: 'success', data: res }); }

    }).error((err) => {
        dispatch(setIsLoading(false));
        dispatch(ErrorMsg(err?.errorResults));
        if (callback) { callback({ type: 'error', data: err?.errorMessage }); }
    }).send();
};

export const _cancelOrderRecurring = (customerId, recurringOrderId, callback) => dispatch => {
    const URL_PATH = `/Crm/OrderRecurring/${customerId}/Cancel/${recurringOrderId}`;
    dispatch(setIsLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "PUT",
        endpoint: URL_PATH,
        data: JSON.stringify({ customerId, recurringOrderId }),
        ...CacheHeader
    }).success((res) => {
        dispatch(setErrorData(''));
        dispatch(setIsLoading(false));
        if (callback) { callback(res); }
    }).error((err) => {
        if (callback) { callback(null); }
        dispatch(setIsLoading(false));
        dispatch(setErrorData(err?.errorMessage));
    }).send();
};

export const _restoreOrderRecurring = (customerId, recurringOrderId, callback) => dispatch => {
    const URL_PATH = `/Crm/OrderRecurring/${customerId}/Restore/${recurringOrderId}`;
    dispatch(setIsLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "PUT",
        endpoint: URL_PATH,
        data: JSON.stringify({ customerId, recurringOrderId }),
        ...CacheHeader
    }).success((res) => {
        dispatch(setErrorData(''));
        dispatch(setIsLoading(false));
        if (callback) { callback(res); }
    }).error((err) => {
        if (callback) { callback(null); }
        dispatch(setIsLoading(false));
        dispatch(setErrorData(err?.errorMessage));
    }).send();
};

export default CheckoutSlice.reducer;
