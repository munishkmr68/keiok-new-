import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import api from '../../AxiosHelper';
import localStorageCall from '../../Methods/localstorage.hook';
import { CacheHeader, MIDDLE_CREDENTIAL } from '../../Methods/normalMethods';

const OrderSlice = createSlice({
    name: "allProductPage",
    initialState: {
        data: [],
        autoshiporder: [],
        totalCount: 0,
        error: '',
        isLoading: false,
        colors: [],
        errorMsg: ""
    },
    reducers: {
        setAllOrder: (state, action) => {
            state['data'] = action.payload?.data;
        },
        setAutoShipOrder: (state, action) => {
            state['autoshiporder'] = action.payload?.data;
        },
        setIsLoading: (state, action) => {
            state['isLoading'] = action.payload;
        },
        setError: (state, action) => {
            state['errorMsg'] = action.payload;
        }
    }
});

export const { setIsLoading, setAllOrder, setError, setAutoShipOrder } = OrderSlice.actions;

export const getOrders = (id = null, customerId) => dispatch => {
    const CUSTOMER_ID = customerId ? customerId : localStorageCall().getSingleItem('Token');
    dispatch(setIsLoading(true));
    const URL_PATH = id === null ? `/Crm/Customers/${CUSTOMER_ID}/Orders` : `/Crm/Customers/${CUSTOMER_ID}/Orders?orderId=eq:${id}`;
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: 'GET',
        endpoint: URL_PATH,
        ...CacheHeader
    }).success((res) => {
        dispatch(setAllOrder(res));
        dispatch(setIsLoading(false));
    }).error((err) => {
        dispatch(setIsLoading(false));
    }).send()
};

export const getAutoShipOrders = (id = null, customerId, callback, recurringOrderStatusType) => dispatch => {
    const CUSTOMER_ID = customerId ? customerId : localStorageCall().getSingleItem('Token');
    dispatch(setIsLoading(true));
    let URL_PATH = `/Crm/${CUSTOMER_ID}/OrderRecurring`;
    if (id) {
        URL_PATH = `/Crm/${CUSTOMER_ID}/OrderRecurring/?recurringOrderId=eq:${id}`
    } else if (recurringOrderStatusType) {
        URL_PATH = `/Crm/${CUSTOMER_ID}/OrderRecurring/?recurringOrderStatusType=eq:${recurringOrderStatusType}`
    }
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: 'GET',
        endpoint: URL_PATH,
        ...CacheHeader
    }).success((res) => {
        dispatch(setAutoShipOrder(res));
        if (callback) {
            callback(res);
        }
        dispatch(setIsLoading(false));
    }).error((err) => {
        dispatch(setIsLoading(false));
    }).send()
};

export default OrderSlice.reducer;
