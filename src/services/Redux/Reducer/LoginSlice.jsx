import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import api from "../../AxiosHelper";
import { CacheHeader, MIDDLE_CREDENTIAL } from "../../Methods/normalMethods";
import { _signUpPayload, _storeCustomerTypes } from '../../Methods/commonPayload';
import localStorageCall from "../../Methods/localstorage.hook";

const LoginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        data: "",
        enrollerId: {},
        alluserData: null,
        errorMsg: "",
        signupData: "",
        loading: false,
        validMerchantProfile: null,
        myaccount: "",
        cashPoints: "",
        emailerror: "",
        validateCustomerToken: 'VALID',
        isValid: false
    },
    reducers: {
        setLoading: (state, action) => {
            state['loading'] = action.payload;
        },
        setLoginData: (state, action) => {
            state['data'] = action.payload?.data?.customerId;
            localStorageCall().setItem('Token', action.payload?.data?.customerId);
        },
        setEnrollerId: (state, action) => {
            // state['enrollerId'] = action.payload?.data;
            // localStorage.setItem('enrollerId', JSON.stringify({ enrollerId: action.payload?.data?.enrollerId, customerId: action.payload?.data?.customerId, fullName: action.payload?.data?.publicProfile?.fullName }));
        },
        setSignUpData: (state, action) => {
            state['signupData'] = action.payload?.data
            localStorageCall().setItem('Token', action.payload?.data);
        },
        setAllUserData: (state, action) => {
            state['alluserData'] = action?.payload?.data;
        },
        setCreateMerchantProfile: (state, action) => {
            state['validMerchantProfile'] = action?.payload?.data
        },
        setCashPoints: (state, action) => {
            state['cashPoints'] = action?.payload?.data
        },
        setError: (state, action) => {
            state['errorMsg'] = action.payload;
        },
        setValidateCustomerToken: (state, action) => {
            state['validateCustomerToken'] = action?.payload;
        },
        setMyaccount: (state, action) => {
            state['myaccount'] = action?.payload?.data?.customerId;
        },
        setEmailError: (state, action) => {
            state['emailerror'] = action.payload;
        }
    },
});

export const {
    setLoading, setLoginData, setEnrollerId, setSignUpData, setAllUserData, setMyaccount, setCreateMerchantProfile, setCashPoints, setEmailError, setError, setValidateCustomerToken,
} = LoginSlice.actions;

const ErrorMsg = (errorResult) => dispatch => {
    if (errorResult?.length > 0) {
        _.map(errorResult, ({ errorMessage }) => {
            if (errorMessage) {
                dispatch(setError(errorMessage));
                setTimeout(() => dispatch(setError("")), 10000);
                return;
            }
        });
    }
}

// ************************** login api **************************//
export const LoginApi = ({ email, password }, callback) => dispatch => {
    const header = { CustomerUsername: email, CustomerPassword: password };
    dispatch(setLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        endpoint: '/Crm/Customers/Authenticate',
        method: "login",
        ...header
    }).success((res) => {
        dispatch(setLoading(false));
        if (res?.data) {
            dispatch(setLoginData(res));
            dispatch(setEnrollerId(res));

            const refferalData = JSON.stringify({ "id": res?.data?.enrollerId, "name": res?.data?.enrollerName, "webalies": res?.data?.enrollerName });
            localStorageCall().setItem('refferal_link', refferalData);
            if (callback) {
                callback(res?.data?.customerId)
            }
        }

    }).error((err) => {
        dispatch(setEmailError(err?.errorMessage));
        // setTimeout(() => dispatch(setEmailError("")), 4000);
        if (callback) {
            callback(null)
        }
        dispatch(setLoading(false));
    }).send();
}

//update credential
export const _updateCredentials = ({ id, email, password }, callback = null) => dispatch => {
    try {
        dispatch(setLoading(true));
        api().setHeaders(MIDDLE_CREDENTIAL).post().data({
            method: "PUT",
            endpoint: `/Crm/Customers/${id}/UpdateCredentials`,
            data: JSON.stringify({
                userName: email,
                userPassword: password
            }),
        }).success((res) => {
            if (callback) {
                callback(res)
            }
            dispatch(setLoading(false));

        }).error((err) => {
            dispatch(setEmailError(err?.errorMessage));
            dispatch(setLoading(false));
        }).send();
    } catch (e) {
        console.log(e)
    }
}


export const getAllCustomerData = (callback, id = null, email = "") => dispatch => {

    const URL = id ? `/Crm/Customers/${id}` : email ? `/Crm/Customers/?emailAddress=eq:${email}` : '/Crm/Customers/';

    dispatch(setLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "GET",
        endpoint: URL,
        ...CacheHeader,
    }).success((res) => {
        dispatch(setLoading(false));
        if (res?.data) {
            dispatch(setAllUserData(res));
            if (callback) {
                callback(res?.data);
            }
            // return res?.data;
        }
    }).error((err) => {
        dispatch(ErrorMsg(err?.errorResults));
        dispatch(setLoading(false));
    }).send();
}
//************************** BO API*************************************** */
export const MyAccoutnAPI = (id = null, customerId) => dispatch => {

    const CUSTOMER_ID = customerId ? customerId : localStorageCall().getItem('Token');
    dispatch(setLoading(true));
    const URL_PATH = id === null && `/Authorize/${CUSTOMER_ID}/RetrieveSSOKey`
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "GET",
        endpoint: URL_PATH,
    }).success((res) => {
        dispatch(setLoading(false));
        dispatch(setMyaccount(res));
        if (res?.data) {
            // var windowSize = "width=" + window.innerWidth + ",height=" + window.innerHeight + ",scrollbars=no";
            // window.open(`${import.meta.env.VITE_ABO_URL}?sso=${res?.data}`, '_blank', windowSize)
            // window.location.href = `${import.meta.env.VITE_ABO_URL}?sso=${res?.data}`;
            window.location.assign(`${import.meta.env.VITE_ABO_URL}?sso=${res?.data}`)
        }
    }).error((err) => {
        const ErrorData = err?.errorResults?.length > 0 ? err?.errorResults : [{ errorMessage: err?.errorMessage }]
        dispatch(ErrorMsg(ErrorData));
        dispatch(setLoading(false));
    }).send();
}

// ************************* create merchantProfile ******************************
export const createMerchantProfile = (CustomerId, data, callback) => dispatch => {

    dispatch(setLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "POST",
        endpoint: `/Money/CustomerAccount/${CustomerId}/${1}/CreateMerchantProfile`,
        ...CacheHeader,
        data: JSON.stringify({
            firstName: data?.firstName,
            lastName: data?.lastName,
            address1: data?.address,
            address2: "data?.address_2",
            city: data?.city,
            state: data?.state,
            zip: data?.zipcode,
            country: data?.country,
            email: data?.email,
            phone: data?.phone
        })
    }).success((res) => {
        dispatch(setLoading(false));
        dispatch(setCreateMerchantProfile(res));
        dispatch(ValidateCustomerProfile(CustomerId, (data) => callback(data)))
    }).error((err) => {
        const ErrorData = err?.errorResults?.length > 0 ? err?.errorResults : [{ errorMessage: err?.errorMessage }]
        dispatch(ErrorMsg(ErrorData));
        dispatch(setLoading(false));
    }).send();
}

// ***************** Customer Otp **************************//
export const ValidateCustomerProfile = (CustomerId, callback) => dispatch => {
    dispatch(setLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "GET",
        endpoint: `/Money/CustomerAccount/${CustomerId}/ValidateCustomerProfile`,
    }).success((res) => {
        dispatch(setLoading(false));
        dispatch(setValidateCustomerToken(res?.data))
        if (callback) {
            callback(res?.data);
        }
    }).error((err) => {
        const ErrorData = err?.errorResults?.length > 0 ? err?.errorResults : [{ errorMessage: err?.errorMessage }]
        dispatch(ErrorMsg(ErrorData));
        if (callback) {
            callback(null);
        }
        dispatch(setLoading(false));
    }).send();
}

// ************** OTP varification Check *****************//

export const AuthenticateProfileCode = (CustomerId, validatekey, code, callback) => dispatch => {

    dispatch(setLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: 'GET',
        endpoint: `/Money/CustomerAccount/${localStorageCall().getSingleItem('Token')}/AuthenticateProfileCode?validationKey=${validatekey}&code=${code}`
    }).success((res) => {
        dispatch(setLoading(false));
        if (callback) {
            callback();
        }
    }).error((err) => {
        dispatch(setError(err?.errorMessage));
        setTimeout(() => dispatch(setError("")), 4000);
        dispatch(setLoading(false));
    }).send();
}

// // ********************* Point Accounts *************************** //

export const PointAccounts = (token, CustomerId) => dispatch => {
    const header = { Authorization: `Bearer ${token}` };
    dispatch(setLoading(true));
    api().setHeaders(header).get(`/Customers/${CustomerId}/${1}/PointAccount`).success((res) => {
        dispatch(setLoading(false));
        dispatch(setCashPoints(res));
    }).error((err) => {
        // dispatch(ErrorMsg(err?.errorResults));
        dispatch(setLoading(false));
    }).send();
}

// ********************** SignUp api ******************************** //

export function _conditionChecked(section) {

    let CUSTOMER_TYPE_CHANGE = 1;
    let CUSTOMER_TYPE = localStorageCall()?.getItem('customerTypeDescr');
    switch (section) {
        case 'normal':
            CUSTOMER_TYPE_CHANGE = 2;
            break;
        case 'brand_affiliate':
            CUSTOMER_TYPE_CHANGE = 3;
            break;
        case 'brand_ambassador':
            CUSTOMER_TYPE_CHANGE = 4;
            break;
        default:
            CUSTOMER_TYPE_CHANGE = CUSTOMER_TYPE?.type || 1;
            break;
    }
    return CUSTOMER_TYPE_CHANGE;

}

export const SignUpFormApi = (data, section, callback) => dispatch => {
    try {
        const CUSTOMER_TYPE_CHANGE = _conditionChecked(section);
        const formData = _signUpPayload(data, CUSTOMER_TYPE_CHANGE, section);
        dispatch(setLoading(true));
        api().setHeaders(MIDDLE_CREDENTIAL).post().data({
            method: 'POST',
            endpoint: '/Crm/Customers',
            data: JSON.stringify(formData),
            ...CacheHeader
        }).success((res) => {
            if (res?.data) {
                if (section !== "leadUser") {
                    dispatch(setSignUpData(res));
                    // localStorageCall().setItem('customerTypeDescr', JSON.stringify({
                    //     type: 1, customerType: 'Lead', priceType: CUSTOMER_TYPE_CHANGE
                    // }), { expires: 60 });
                    dispatch(createMerchantProfile(res?.data, data, (data) => callback(data, res?.data)))
                    _storeCustomerTypes(dispatch, res?.data);
                    // dispatch(setLoading(false));
                    // callback(res?.data);
                } else {
                    callback(res?.data);
                    dispatch(setLoading(false));
                }

            }
        }).error((err) => {
            dispatch(ErrorMsg(err?.errorResults));
            dispatch(setLoading(false));
        }).send();
    } catch (e) {
        console.log(e)
    }
}


// **************** Update Customer detail **********************

export const customerUpdateApi = (data, section, customerId, callback) => dispatch => {
    const CUSTOMER_TYPE_CHANGE = _conditionChecked(section);
    const formData = _.includes(['activateAccount', 'brand_affiliate', 'addressUpdate', 'brand_ambassador'], section) ? data : _signUpPayload(data, CUSTOMER_TYPE_CHANGE, section, 'updated');
    console.log("JSON.stringify(formData)", formData);
    dispatch(setLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        endpoint: `/Crm/Customers/${customerId}`,
        method: "PUT",
        ...CacheHeader,
        data: JSON.stringify(formData)
    }).success((res) => {
        if (["retail", 'brand_affiliate', 'brand_ambassador', 'activateAccount', 'addressUpdate']?.includes(section)) {
            dispatch(setLoading(false));
            if (res?.data) {

                _storeCustomerTypes(dispatch, customerId, null, () => callback(res?.data));
                // localStorage.setItem('customerTypeDescr', JSON.stringify({ type: CUSTOMER_TYPE_CHANGE, customerType: data?.customerTypeDescr, priceType: 3 }), { expires: 60 });
            }
        } else {
            dispatch(createMerchantProfile(res?.data, data, (data) => callback(data)))
            // dispatch(setLoading(false));
        }

    }).error((err) => {
        dispatch(ErrorMsg(err?.errorResults));
        dispatch(setLoading(false));
    }).send();
}

export const activateAccountLaterApi = (values, callback) => dispatch => {
    dispatch(setLoading(true));
    api().root(process.env.NEXT_PUBLIC_COMPANY_TOKEN).setHeaders(MIDDLE_CREDENTIAL).post('/activateaccount.php').data(values)
        .success((res) => {
            dispatch(setLoading(false));
            callback();
        }).error((err) => {
            const ErrorData = err?.errorResults?.length > 0 ? err?.errorResults : [{ errorMessage: err?.errorMessage }]
            dispatch(ErrorMsg(ErrorData));
            dispatch(setLoading(false));
        }).send();
}

export default LoginSlice.reducer;