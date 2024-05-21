"use client"
import { _scrollToUp } from '@/services/Methods/normalMethods';
import { NewPasswordApi, ResetEmailApi } from '@/services/Redux/Reducer/CustomerSlice';
import _ from 'lodash';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const useForgetPassword = (props) => {

    const { dispatch, router } = props;

    const memorizedSelector = createSelector(
        (state) => state?.CustomerSlice,
        (customerData) => ({
            errorReset: customerData?.emailerror,
            resetSuccessMsg: customerData?.successmsg,
            loading: customerData?.isLoading,
        })
    )
    const { errorReset, resetSuccessMsg, loading } = useSelector((state) => memorizedSelector(state))

    /****************** Email Varified *********************************/
    const [emailIsValid, setEmailIsValid] = useState({
        emailValid: false,
        sessionID: null,
        errMsg: ""
    });

    function _onHandleChange() {
        setEmailIsValid((prv) => ({ ...prv, errMsg: "" }));
    }

    function _handleForgetPasswordEmail(values, callback = null) {
        if (email) {
            dispatch(ResetEmailApi(values, (data) => {
                if (_.includes(data?.errorMessage, "invalid username")) {
                    setEmailIsValid((prv) => ({ ...prv, errMsg: "No account found with this email address" }));
                } else if (data?.data) {
                    if (callback) {
                        setEmailIsValid({ emailValid: values?.email, sessionID: data?.data, errMsg: '' })
                        callback()
                    }
                } else {
                    setEmailIsValid({ emailValid: null, sessionID: null, errMsg: 'Sorry, something went wrong. Please try again later' })
                }

            }));
        }
    }

    // handle reset Click
    function _handleChangePassword(values, callback = nul) {
        const VALUES_PAYLOAD = {
            passwordKey: values?.key,
            sessionId: emailIsValid?.sessionID,
            password: values?.password
        }
        dispatch(NewPasswordApi(VALUES_PAYLOAD, (res) => {
            if (res) {
                _scrollToUp();
                setTimeout(() => { callback() }, 5000)
            }
        }));
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }

    return ({
        // constants
        errorReset,
        resetSuccessMsg,
        loading, ...props,

        //states 
        emailIsValid,
        forgetEmail: emailIsValid?.emailValid,

        //functions
        _handleForgetPasswordEmail,
        _handleChangePassword,
        _onHandleChange

    })
}

export default useForgetPassword;