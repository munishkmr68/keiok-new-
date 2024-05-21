import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import api from "../../AxiosHelper";
import localStorageCall from "../../Methods/localstorage.hook";
import { MIDDLE_CREDENTIAL, REFFERAL_VALUES, storeAssigned } from "../../Methods/normalMethods";
import { getAllCustomerData } from "./LoginSlice";
import { _storeCustomerTypes } from "../../Methods/commonPayload";

const CustomerSlice = createSlice({
    name: "customerSlice",
    initialState: {
        webAliseFilterData: [],
        savedCards: [],
        isLoading: false,
        userAccount: "",
        errorMsg: "",
        resetEmail: "",
        resetPass: "",
        emailerror: "",
        successmsg: null,
        countryData: []
    },
    reducers: {
        setWebAliesFilter: (state, action) => {
            state['webAliseFilterData'] = action?.payload;
        },
        setLoading: (state, action) => {
            state['isLoading'] = action?.payload;
        },
        setError: (state, action) => {
            state['errorMsg'] = action.payload;
        },
        setSavedCards: (state, action) => {
            state['savedCards'] = action.payload?.data;
        },
        setResetEmail: (state, action) => {
            state['resetEmail'] = action.payload?.data;
        },
        setResetPassword: (state, action) => {
            state['resetPass'] = action.payload?.data;
        },
        setSuccessMsg: (state, action) => {
            state['successmsg'] = action.payload;
        },
        setEmailError: (state, action) => {
            state['emailerror'] = action.payload;
        },
        setCountryData: (state, action) => {
            state['countryData'] = action.payload?.data
        }
    }
});

export const {
    setWebAliesFilter, setLoading, setError, setSavedCards, setUserAccount, setResetEmail, setResetPassword, setEmailError, setCountryData,
    setSuccessMsg
} = CustomerSlice?.actions;

const ErrorMsg = (errorResult) => dispatch => {
    if (errorResult?.length > 0) {
        _.map(errorResult, ({ errorMessage }) => {
            if (errorMessage) {
                dispatch(setError(errorMessage));
                setTimeout(() => dispatch(setError("")), 4000);
                return;
            }
        });
    }
}

export const getCustomerRefferal = (callback, webAlies = null) => dispatch => {
    const URL = `/Crm/Customers/?WebAlias=eq:${webAlies}`;
    dispatch(setLoading(true));
    api().post().data({
        method: "GET",
        endpoint: URL
    }).success((res) => {
        dispatch(setLoading(false));
        if (res?.data) {
            if (callback) {
                callback(res?.data);
            }
            dispatch(setWebAliesFilter(res));
            return res?.data;
        }
    }).error((err) => {
        dispatch(ErrorMsg(err?.errorResults));
        dispatch(setLoading(false));
    }).send();
}

export const getCustomerSavedCard = (id = null, callback,) => dispatch => {
    const URL = `/Crm/Customers/${id}/AccountBilling`;
    dispatch(setLoading(true));
    api().post().data({
        method: "GET",
        endpoint: URL
    }).success((res) => {
        dispatch(setLoading(false));
        if (res?.data) {
            dispatch(setSavedCards(res));
            if (callback) {
                callback(res?.data);
            }
        }
    }).error((err) => {
        dispatch(ErrorMsg(err?.errorResults));
        dispatch(setLoading(false));
    }).send();
}

//
export const getUserCredentialApi = (ssokey, navigate, REDIRECT_PAGE) => dispatch => {
    dispatch(setLoading(true));
    api().post().data({
        method: "GET",
        endpoint: `/Authorize/DecryptSSOKey?ssokey=${ssokey}`
    }).success((res) => {
        dispatch(setLoading(false));
        // dispatch(setUserAccount(res));
        localStorageCall().setItem('Token', res?.data);
        dispatch(getAllCustomerData((data) => {
            _storeCustomerTypes(dispatch, data?.customerId);
            const refferalData = JSON.stringify({ "id": data?.enrollerId, "name": data?.enrollerName, "webalies": data?.enrollerName });
            localStorageCall().setItem('refferal_link', refferalData);
            navigate(REDIRECT_PAGE ? `/${storeAssigned()}${REDIRECT_PAGE}` : `/${storeAssigned()}`)
        }, res?.data));
    }).error((err) => {
        navigate(`/${storeAssigned()}`)
        dispatch(ErrorMsg(err?.errorResults));
        dispatch(setLoading(false));
    }).send();
}

//*************reset email**************************************************

export const ResetEmailApi = ({ email }, callback = null) => dispatch => {
    const header = { CustomerUsername: email };
    dispatch(setLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        endpoint: '/Crm/Customers/PasswordRecovery',
        method: "resetPassword",
        ...header
    }).success((res) => {
        dispatch(setLoading(false));
        dispatch(setResetEmail(res));
        if (callback) {
            callback(res);
        }
        // localStorageCall().setItem('TokenEmail', action.payload?.data);
        // window.location.assign(`/${storeAssigned()}/reset_password/?sessionId=${res?.data}`)

    }).error((err) => {
        dispatch(setEmailError(err?.errorMessage));
        setTimeout(() => dispatch(setEmailError('')), 2000);
        if (callback) {
            callback(err);
        }
        dispatch(setLoading(false));
    }).send();
}
//**********************************reset password******************************************/

export const NewPasswordApi = ({ password, sessionId, passwordKey }, callback = null) => dispatch => {

    dispatch(setLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({
        method: "updatePassword",
        endpoint: `/Crm/Customers/SubmitPasswordRecovery?sessionId=${sessionId}&key=${passwordKey}`,
        CustomerPassword: password
    }).success((res) => {
        dispatch(setLoading(false));
        dispatch(setResetPassword(res));
        dispatch(setSuccessMsg('You have changed your password successfully'));
        setTimeout(() => dispatch(setSuccessMsg('')), 4000);
        if (callback) {
            callback(res)
        }
        // localStorageCall().removeItem("PasswordKey")
        // localStorageCall().removeItem("TokenEmail")
        // setTimeout(() => window.location.assign(`/`), 3000);
    }).error((err) => {
        dispatch(setEmailError(err?.errorMessage));
        setTimeout(() => dispatch(setEmailError('')), 3000);
        dispatch(setLoading(false));
    }).send();
}

// contact us api


export const ContactUsApi = (values, callback) => dispatch => {
    // dispatch(setLoading(true));
    api().root(import.meta.env.VITE_COMPANY_TOKEN).setHeaders(MIDDLE_CREDENTIAL).post('/contactusprovizion.php').data(values)
        .success((res) => {
            if (res?.status === 1) {
                // dispatch(setLoading(false));
                callback(res?.status)
            }
        }).error(() => { }).send()
}

export const _unilevelTreeUpdate = (customerId, treeType = 3) => dispatch => {
    try {
        const TreeMoveData = localStorageCall().getItem('TreeMoveData');
        api().post().data({
            method: "POST",
            endpoint: `/Crm/Customers/${customerId}/TreeMove`,
            data: JSON.stringify({
                "treeType": TreeMoveData ? TreeMoveData?.treeType : treeType,
                //"parentId": TreeMoveData ? TreeMoveData?.pid : REFFERAL_VALUES?.id || 2,
                //"placementId": TreeMoveData ? TreeMoveData?.placementId : 0
                "parentId": TreeMoveData ? TreeMoveData?.pid : REFFERAL_VALUES?.id || 2,
                "placementId": 0,
                "placementType": 2,
                "subPlacementType": TreeMoveData ? TreeMoveData?.placementId : 0
            })
        }).success((res) => {
            dispatch(setLoading(false));
        }).error((err) => {
            dispatch(setEmailError(err?.errorMessage));
            dispatch(setLoading(false));
        }).send();
    } catch (e) {
        console.log(e)
    }
}

//********************************** country fetching api call ******************************************/
export const _getCountryCodeApi = (callback) => dispatch => {
    dispatch(setLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({ method: "GET", endpoint: `/Settings/Countries` }).success((res) => {
        dispatch(setLoading(false));
        dispatch(setCountryData(res));
        if (res?.data?.length > 0 && callback) {
            callback(res?.data)
        }
    }).error((err) => dispatch(setLoading(false))).send();
}

//********************************** priceType according customerType fetching api call ******************************************/
export const _getCusotmerPriceType = (callback, customerTypeDesc) => dispatch => {
    dispatch(setLoading(true));
    api().setHeaders(MIDDLE_CREDENTIAL).post().data({ method: "GET", endpoint: `/Settings/PriceTypes` }).success((res) => {
        dispatch(setLoading(false));
        if (res?.data?.length > 0 && callback) {
            const PRICE_TYPES = _.find(res?.data, (row) => _.includes(_.split(_.lowerCase(customerTypeDesc), ' ')?.[0], _.lowerCase(row?.description)));
            callback(PRICE_TYPES)
        }
    }).error((err) => dispatch(setLoading(false))).send();
}


export default CustomerSlice?.reducer;

