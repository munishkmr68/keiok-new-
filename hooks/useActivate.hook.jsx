"use client";
import { _storeCustomerTypes } from "@/services/Methods/commonPayload";
import { LoginApi, _updateCredentials, activateAccountLaterApi, customerUpdateApi, getAllCustomerData } from "@/services/Redux/Reducer/LoginSlice";
import { useEffect, useState } from "react";
import { createSelector } from "reselect";
import { resetPasswordVale } from "@/services/Methods/validationSchema";
import { _scrollToUp, _setTimeOut } from "@/services/Methods/normalMethods";
import { useSelector } from "react-redux";
import localStorageCall from "@/services/Methods/localstorage.hook";

const useActivateHook = (props) => {

    const { dispatch, router, searchParams, isUserLogin, section } = props;

    const customerData = createSelector(
        state => state?.LoginSlice,
        ({ errorMsg, alluserData, loading }) => ({ errorMsg, alluserData, loading })
    );
    const { errorMsg, loading } = useSelector(customerData);

    const [emailSuccessState, setEmailSuccessState] = useState('')
    const [activateAccountValue, setActivateAccountValue] = useState({ email: '', ...resetPasswordVale });
    const [storeCustomerData, setStoreCustomerData] = useState({});

    // temprary success message
    const [messageDisplay, setMessageDisplay] = useState('');
    const [activateSuccess, setActivateSuccess] = useState(false);

    useEffect(() => {
        const EmailSearch = searchParams.get('email');
        if (EmailSearch) {
            dispatch(getAllCustomerData((data) => {
                localStorageCall().removeItem('Token')
                setStoreCustomerData(data[0]);
                setActivateAccountValue((prv) => ({ ...prv, email: EmailSearch }))
            }, null, EmailSearch))
        }
        else {
            if (isUserLogin) {
                dispatch(getAllCustomerData((data) => {
                    setStoreCustomerData(data);
                    setActivateAccountValue((prv) => ({ ...prv, email: data?.emailAddress }))
                }, isUserLogin))

            }
        }
    }, [isUserLogin, searchParams]);


    function _checkUserAvailable(email, successCallback = null, errorCallback) {
        dispatch(getAllCustomerData((data) => {
            if (data?.length > 0) {
                if (successCallback) {
                    successCallback();
                }
            } else {
                if (errorCallback) {
                    errorCallback();
                }
            }
        }, null, email));
    }


    function _handleActiveSubmit(values, actions) {
        _checkUserAvailable(
            values?.email,
            () => {
                try {
                    setActivateAccountValue(values);
                    const ADDITIONAL_DATA = {
                        id: +storeCustomerData?.customerId,
                        email: values?.email,
                        password: values?.password,
                    }
                    dispatch(_updateCredentials(ADDITIONAL_DATA, (response) => {
                        _scrollToUp();
                        if (response?.data) {
                            const CUSTOMER_DATA = {
                                ...storeCustomerData,
                                userCanLogIn: true,
                            }
                            setStoreCustomerData(CUSTOMER_DATA);
                            dispatch(customerUpdateApi(CUSTOMER_DATA, "activateAccount", +storeCustomerData?.customerId, (response) => {
                                if (response) {
                                    dispatch(LoginApi({
                                        email: values?.email,
                                        password: values?.password
                                    }, (data) => {
                                        if (data) {
                                            setMessageDisplay(`Hey ${storeCustomerData?.firstName}, your account has been successfully activated.`);
                                            setActivateSuccess(true);
                                            _setTimeOut(() => router.push('/myaccount'), 3000);
                                        }
                                    }))
                                }
                            }));

                        }
                    }));
                } catch (e) {
                    console.log(e, 'dddddddddddddddddddd')
                }
            },
            () => {
                actions?.setFieldError('email', 'No account found with this email address.');
                actions.setSubmitting(false);
                _scrollToUp();
            }
        )

    }

    function _activateAccountLater(values, actions, callback) {
        const formData = {
            name: storeCustomerData?.fullName,
            email: values?.email,
            link: `${process.env.NEXT_PUBLIC_ACTIVATE_URL}/activate?email=${values?.email}`
        }
        _checkUserAvailable(
            values?.email,
            () => {
                dispatch(activateAccountLaterApi(formData, (response) => {
                    setMessageDisplay('Activate link sent.');
                    setEmailSuccessState(values?.email)
                    setTimeout(() => {
                        callback(), setMessageDisplay('')
                    }, 5000)
                }))
            },
            () => {
                actions?.setFieldError('email', 'Email already exists.');
                actions.setSubmitting(false);
                _scrollToUp();
            })
    }

    // useEffect(() => {
    //     dispatch(ValidateCustomerProfile(isUserLogin, (data) => {
    //         setLoginData(data)
    //     }))
    // }, []);

    return {
        // selector data
        errorMsg, messageDisplay, loading, emailSuccessState, loading,

        // states
        activateAccountValue, setActivateAccountValue, activateSuccess,

        // functions
        _handleActiveSubmit, _activateAccountLater,
        ...props
    }
}

export default useActivateHook;