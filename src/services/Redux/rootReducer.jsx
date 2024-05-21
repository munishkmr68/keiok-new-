import { combineReducers } from '@reduxjs/toolkit';
import { LoginSlice, AllProductSlice, OrderSlice, CheckoutSlice, PaymentSlice, CustomerSlice } from './Reducer';


const rootReducer = combineReducers({
    LoginSlice,
    AllProductSlice,
    CheckoutSlice,
    PaymentSlice,
    CustomerSlice,
    OrderSlice
});

export default rootReducer;
