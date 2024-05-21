"use client";

import { _paymentPayload, _priceTypeForCalculate, calculateReouccringPayload } from "@/services/Methods/checkoutPayloads";
import localStorageCall from "@/services/Methods/localstorage.hook";
import { _apiAddressPayload, _scrollToUp } from "@/services/Methods/normalMethods";
import { ShippingAddressInitialValues } from "@/services/Methods/validationSchema";
import { ModifyCalculateAutoshipApi, _cancelOrderRecurring, _restoreOrderRecurring } from "@/services/Redux/Reducer/CheckoutSlice";
import { LoginApi, _updateCredentials, customerUpdateApi, getAllCustomerData } from "@/services/Redux/Reducer/LoginSlice";
import { getAutoShipOrders, getOrders } from "@/services/Redux/Reducer/OrderSlice";
import _ from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

export const autoshipProduct = (data, priceType) => _.map(data, (item, index) => ({     /** autoship order */
    parentItemId: 0,
    "parentLineNumber": 0,
    orderLineNumber: index + 1,
    itemId: item?.id || item?.itemId,
    itemCode: item?.fullItemCode || item?.itemCode,
    quantity: item?.quantity,
    priceType: priceType || item?.priceType
}));

const useMyAccountHook = (props) => {

    const { dispatch, isUserLogin, router, intl, setFormData, setCountryState } = props;
    const days = Array.from({ length: 28 }, (_, index) => index + 1);
    const memorizedSelector = createSelector(
        (state) => state?.OrderSlice,
        (state) => state?.LoginSlice,
        (state) => state?.CheckoutSlice,
        (orderData, loginData, checkoutData) => ({
            oneTimeOrders: orderData?.data,
            autoshipOrders: orderData?.autoshiporder,
            isLoading: orderData?.isLoading,

            loginLoading: loginData?.loading,

            normalAddressError: checkoutData?.normalAddressError,
            checkoutError: checkoutData?.error,
            checkoutLoading: checkoutData?.isLoading
        })
    )
    const {
        oneTimeOrders, isLoading, checkoutLoading, loginLoading, autoshipOrders, normalAddressError, checkoutError
    } = useSelector((state) => memorizedSelector(state));

    const [currentAccountSelect, setCurrentAccountSelect] = useState('');
    const [currentSteps, setCurrentSteps] = useState(['step1']);
    const [loginUserData, setLoginUserData] = useState(null);
    const [recurringErrMsg, setRecurringErrMsg] = useState(null);
    const [cancelActiveSuccess, setCancelActiveSuccess] = useState({ cancel: false, active: false });

    function _modifiedReccuringOrder(allData, id, callback) {

        const {
            bypassAddressValidation, shipCountryCode, shipAddress1, payments, shipMethod, shipCity, shipFirstName,
            shipLastName, shipPostalCode, shipRegionProvState, details, frequencyType, priceType
        } = allData;

        const PAYMENTS = (payments?.length > 0) ? payments[0] : {};
        const addressDetails = {
            shipping_urname: shipFirstName,
            shipping_lastname: shipLastName,
            shipping_country: shipCountryCode,
            shipping_street: shipAddress1,
            shipping_city: shipCity,
            shipping_state: shipRegionProvState,
            shipping_zipcode: shipPostalCode,
            shipping_phone: "",
        }
        const selectedAutoshipCheck = { shipCarrierId: shipMethod?.shipCarrierId, shipMethodType: shipMethod?.shipMethodType };
        let autoshipCartPayload = _paymentPayload(null, addressDetails, 'autoship', null);
        autoshipCartPayload['token'] = PAYMENTS?.token;
        autoshipCartPayload['customerAccountId'] = PAYMENTS?.customerAccountId;
        autoshipCartPayload['recurringPaymentActionType'] = 2;
        let calculateAutoshipData = calculateReouccringPayload(addressDetails, selectedAutoshipCheck, bypassAddressValidation)

        calculateAutoshipData = {
            ...calculateAutoshipData,
            priceType: priceType,
            details: autoshipProduct(details, priceType),
            nextProcessDate: !_.isNull(newBillingDay?.value) ?
                moment().date() < newBillingDay?.value ?
                    moment(newBillingDay?.value, 'MMM Do YYYY').format()
                    : moment(newBillingDay?.value, 'MMM Do YYYY').add(1, 'M').format() : moment.utc().format(),
            frequencyType: +frequencyType,
            payments: [autoshipCartPayload]
        };
        // const AUTOSHIP_DATA = autoshipProduct(details, priceType);

        dispatch(ModifyCalculateAutoshipApi(calculateAutoshipData, id, (res) => {
            if (res?.type === 'error') {
                setRecurringErrMsg(res?.data);
                setTimeout(() => setRecurringErrMsg(null), 5000);
                _scrollToUp();
            } else {
                callback(res);
            }
        }));
    }

    // cancellation of subscription ********************************** > 
    const [cancelPopup, setCancelPopup] = useState(false);
    const [cancelStep, setCancelStep] = useState('');

    function _cancellationPopup(sec) {
        if (typeof sec === 'boolean') {
            setCancelPopup(sec);
            setCancelStep('');
        } else {
            setCancelStep(sec);
            setCancelPopup(false);
            _scrollToUp();
        }
    }

    function _onCancelDoneButtton() {
        setCancelStep('');
    }

    function _activeCancelSubsciption(id, action = 'cancel') {
        if (action === 'active') {
            let data = JSON.parse(JSON.stringify(_.find(autoshipOrders, { recurringOrderId: id })));
            if (data) {
                dispatch(_restoreOrderRecurring(isUserLogin, id, (res) => {
                    if (res) {
                        setCancelActiveSuccess({ cancel: false, active: true });
                        dispatch(getAutoShipOrders());
                    }
                }));
            }
        } else {
            dispatch(_cancelOrderRecurring(isUserLogin, id, (res) => {
                if (res) {
                    setCancelActiveSuccess({ cancel: true, active: false });
                    setCancelStep('step21');
                    dispatch(getAutoShipOrders());
                }
            }));
        }
        setTimeout(() => setCancelActiveSuccess({ cancel: false, active: false }), 3000);
    }

    const handleButtonClick = (section) => {
        // Toggle the value of showAccountInfo when the button is clicked
        setCurrentAccountSelect(section);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // handle Steps of billinginfo and accontinfo *********************** >
    function _handleSteps(step, stepsUpdate = []) {
        if (step === 'back') {
            const REJECTED = _.reject(currentSteps, (r) => r === _.last(currentSteps));
            setCurrentSteps(REJECTED);
        } else if (step === 'revert') {
            setCurrentSteps(stepsUpdate);
        } else {
            setCurrentSteps((prv) => ([...prv, step]));
        }
        _scrollToUp();
    }

    // billing info states and functions ****************************** >
    const [orderDetailId, setOrderDetailId] = useState(null);

    function _handleOrderDetail(id) {
        setOrderDetailId(id);
    }

    // account info states and functions ****************************** >
    const [successMsg, setSuccessMsg] = useState('');
    const [emailSuccessMsg, setEmailSuccessMsg] = useState('')

    // change password after checking current password ****************************** >

    const [validCurrentPassword, setValidCurrentPassword] = useState({ valid: false, msg: '' });

    function _checkCurrentPassword(value, setFieldError) {
        if (value) {
            dispatch(LoginApi({ email: loginUserData?.emailAddress, password: value }, (data) => {
                if (data) {
                    setValidCurrentPassword({ valid: true, msg: 'Password is valid' })
                } else {
                    setFieldError('currentpassword', 'Current password is wrong')
                    setValidCurrentPassword({ valid: false, msg: 'Current password is wrong' })
                }
            }))
        }
    }

    function _handleChangePasswordSubmit(values, actions) {
        const ADDITIONAL_DATA = {
            id: +loginUserData?.customerId,
            email: loginUserData?.emailAddress,
            password: values?.password,
        }
        dispatch(_updateCredentials(ADDITIONAL_DATA, (response) => {
            if (response?.data) {
                actions.resetForm({ values: { currentpassword: '', password: '', confirmPassword: '' } });
                setSuccessMsg(intl.formatMessage({ id: 'MyAccount.updatePassword' }));
                setTimeout(() => setSuccessMsg(''), 4000);
                _handleSteps('back');
                _scrollToUp();
            }
        }));
    }

    const _handleChangeEmailSubmit = async (values, actions) => {
        try {
            const ADDITIONAL_DATA = {
                ...loginUserData,
                emailAddress: values?.email,
                userName: values?.email,
            };
            dispatch(customerUpdateApi(ADDITIONAL_DATA, 'addressUpdate', +loginUserData?.customerId, (data) => {
                if (data) {
                    dispatch(_updateCredentials({
                        id: +loginUserData?.customerId,
                        email: values?.email,
                        password: null,
                    }, () => _getLoginUserData()));
                    setEmailSuccessMsg(intl.formatMessage({ id: 'MyAccount.updateEmail' }));
                    _handleSteps('revert', ['step1']);
                    setCurrentAccountSelect('');
                    actions.resetForm({ values: { currentemail: '', email: '' } });
                    setTimeout(() => setEmailSuccessMsg(''), 4000);
                    _scrollToUp();
                }
            }));
        } catch (error) {
            console.error('Error updating email', error);
        }
    };


    const _handleChangePhoneSubmit = async (values, actions) => {
        try {
            const ADDITIONAL_DATA = {
                ...loginUserData,
                phoneNumbers: {
                    cellphone: values?.phoneNumbers,
                },
            };
            dispatch(customerUpdateApi(ADDITIONAL_DATA, 'addressUpdate', +loginUserData?.customerId, (data) => {
                if (data) {
                    _getLoginUserData();
                    setEmailSuccessMsg(intl.formatMessage({ id: 'MyAccount.updatePhone' }));
                    _handleSteps('revert', ['step1']);
                    setCurrentAccountSelect('');
                    actions.resetForm({ values: { currentphonenumber: '', phoneNumbers: '' } });
                    setTimeout(() => setEmailSuccessMsg(''), 4000);
                    _scrollToUp();
                }
            }));
        } catch (error) {
            console.error('Error updating email', error);
        }
    };

    /********************* Shipping Address Change  ***********************/
    const [prefferedAddress, setPrefferedAddress] = useState('shippingAddress');
    const [editPrefferedAddress, setEditPrefferedAddress] = useState('');

    const [allAddressData, setAllAddressData] = useState({
        shippingAddress: '',
        billingAddress: '',
        mailingAddress: '',
        otherAddress1: '',
        otherAddress2: '',
    });

    function _updateAddress(shippingData, callback = null, action = "default") {
        try {
            let message = "";
            switch (action) {
                case 'add':
                    message = 'MyAccount.addressAdd';
                    break
                case 'remove':
                    message = 'MyAccount.addressRemoved';
                    break
                default:
                    message = 'MyAccount.addressChanged';
                    break;
            }
            dispatch(customerUpdateApi(shippingData, 'addressUpdate', isUserLogin, (data) => {
                if (data) {
                    _scrollToUp();
                    if (callback) {
                        callback(data)
                    }
                    setSuccessMsg(intl.formatMessage({ id: message }));
                    setTimeout(() => setSuccessMsg(''), 4000);

                }
            }))
        } catch (err) {
            console.log(err, 'yy')
        }
    }

    function _handleMakeDefault(addressKey) {
        _scrollToUp();
        let AddressChange = JSON.parse(JSON.stringify(allAddressData));
        const shippingData = {
            ...loginUserData, ...AddressChange,
            [addressKey]: AddressChange['shippingAddress'],
            shippingAddress: AddressChange[addressKey],
        }

        try {
            let AUTOSHIP_DATA = JSON.parse(JSON.stringify(autoshipOrders[0]));
            AUTOSHIP_DATA = {
                ...AUTOSHIP_DATA,
                shipAddress1: AddressChange[addressKey]?.address1,
                shipAddress2: AddressChange[addressKey]?.address2,
                shipCity: AddressChange[addressKey]?.city,
                shipCountryCode: AddressChange[addressKey]?.countryCode,
                shipPostalCode: AddressChange[addressKey]?.postalCode,
                shipRegionProvState: AddressChange[addressKey]?.regionProvState
            }
            _modifiedReccuringOrder(_.omit(AUTOSHIP_DATA, ['startDate']), AUTOSHIP_DATA?.recurringOrderId, (res) => {
                _updateAddress(shippingData, (data) => {
                    if (data) setPrefferedAddress(addressKey);
                });
            });
        } catch (err) {
            console.log(err)
        }
    }

    // edit Address
    function _handleEditAddress(addressKey, values = null, action = "defaultset",) {

        if (action === 'submit') {
            _scrollToUp();
            const shippingData = {
                ...loginUserData, [addressKey]: _apiAddressPayload(values),
            }

            _updateAddress(shippingData, () => {
                _handleSteps('back');
                setFormData(ShippingAddressInitialValues('shipping'));
                setCountryState({ stateError: '', countryError: '', country: '', state: '' });
                _getLoginUserData();
            }, 'edit');

        } else {

            let AddressChange = JSON.parse(JSON.stringify(allAddressData));
            setFormData({
                shipping_urname: `${loginUserData?.firstName + ' ' + loginUserData?.lastName}`,
                shipping_lastname: loginUserData?.lastName,
                emailAddress: loginUserData?.emailAddress,
                shipping_country: AddressChange[addressKey]?.countryCode,
                shipping_street: AddressChange[addressKey]?.address1,
                shipping_street2: AddressChange[addressKey]?.address2 || "",
                shipping_city: AddressChange[addressKey]?.city,
                shipping_state: AddressChange[addressKey]?.regionProvState,
                shipping_zipcode: AddressChange[addressKey]?.postalCode,
            });
            setCountryState({
                stateError: '',
                countryError: '',
                country: AddressChange[addressKey]?.countryCode,
                state: AddressChange[addressKey]?.regionProvState
            });
            setEditPrefferedAddress(addressKey);
            _handleSteps('step12');
        }
    }

    // remove address
    function _handleAddressRemove(addressKey) {
        _scrollToUp();
        const shippingData = {
            ...loginUserData, [addressKey]: _apiAddressPayload(null),
        }
        _updateAddress(shippingData, () => {
            _getLoginUserData();
        }, 'remove');
    }

    // Add address
    function _handleAddressAdd(data) {
        let AddressChange = JSON.parse(JSON.stringify(allAddressData));
        let addressKey = "";
        for (const [key, value] of _.entries(allAddressData)) {
            if (!value?.address1) {
                addressKey = key;
                break;
            }
        }
        const shippingData = {
            ...loginUserData, ...AddressChange,
            [addressKey]: _apiAddressPayload(data),
        }

        _updateAddress(shippingData, () => {
            _handleSteps('back');
            setFormData(ShippingAddressInitialValues('shipping'));
            setCountryState({ country: "", countryError: "", state: "", stateError: "" })
            _getLoginUserData();
        }, 'add');
    }

    //useEffect call

    function _getLoginUserData() {
        dispatch(getAllCustomerData((data) => {
            setLoginUserData(data);
            const PICKED_ADDRESS = _.pick(data, ['shippingAddress', 'billingAddress', 'mailingAddress', 'otherAddress1', 'otherAddress2']);
            setAllAddressData(PICKED_ADDRESS);
        }, isUserLogin))
    }

    useEffect(() => {
        if (isUserLogin) {
            dispatch(getOrders())
            dispatch(getAutoShipOrders());
            _getLoginUserData()
        }
    }, [isUserLogin]);

    // Change delivery & billing day

    const [newBillingDay, setNewBillingDay] = useState({ value: null, error: '' });
    const [billingSuccessMessage, setBillingSuccessMessage] = useState(false);
    const _handleReviewBillingDay = () => {
        if (_.isNull(newBillingDay?.value)) {
            setNewBillingDay((prv) => ({ ...prv, error: "Please select a day" }))
        }
        else {
            setNewBillingDay((prv) => ({ ...prv, error: "" }))
        }
    }

    const _handleChangeBillingDay = () => {
        let id = autoshipOrders[0]?.recurringOrderId
        let data = JSON.parse(JSON.stringify(autoshipOrders[0]));
        if (data) {
            _modifiedReccuringOrder(data, id, (res) => {
                _handleSteps('revert', ['step1']);
                setCurrentAccountSelect('');
                setNewBillingDay({ value: null, error: '' })
                setBillingSuccessMessage(true);
                dispatch(getAutoShipOrders(null, null, () => setTimeout(() => setBillingSuccessMessage(false), 3000)));
            });
        }

    }

    return ({
        //constants
        autoshipOrders,
        oneTimeOrders,
        loginLoading,
        isLoading,
        checkoutLoading,
        normalAddressError,
        checkoutError,
        days,

        // states
        loginUserData,
        orderDetailId,
        currentAccountSelect,
        currentSteps,
        validCurrentPassword,
        successMsg,
        emailSuccessMsg,
        recurringErrMsg,
        cancelActiveSuccess,
        allAddressData,
        prefferedAddress,
        editPrefferedAddress,
        newBillingDay,
        billingSuccessMessage,
        cancelPopup,
        cancelStep,

        //function
        _activeCancelSubsciption,
        handleButtonClick,
        _handleSteps,
        _handleOrderDetail,
        _checkCurrentPassword,
        _handleChangePasswordSubmit,
        _handleChangeEmailSubmit,
        _handleChangePhoneSubmit,
        _handleMakeDefault,
        _handleAddressRemove,
        _handleAddressAdd,
        _handleEditAddress,
        setNewBillingDay,
        _handleReviewBillingDay,
        _handleChangeBillingDay,
        _cancellationPopup,
        _onCancelDoneButtton
    });


};

export default useMyAccountHook;
