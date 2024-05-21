"use client"

import useScript from '@/services/Methods/UseScript.hook';
import { _paymentPayload, _priceTypeForCalculate, calculateDataUserPayload, calculateReouccringPayload } from '@/services/Methods/checkoutPayloads';
import { _scriptFunctionCall, loopFunction } from '@/services/Methods/commonPayload';
import localStorageCall from '@/services/Methods/localstorage.hook';
import { _getPrice, _scrollToUp } from '@/services/Methods/normalMethods';
import { ShippingAddressInitialValues } from '@/services/Methods/validationSchema';
import { getAllSingleProduct } from '@/services/Redux/Reducer/AllProductSlice';
import { CalculateApi, CalculateAutoshipApi, CreateAutoshipOrderApi, CreateOrderApi } from '@/services/Redux/Reducer/CheckoutSlice';
import { SignUpFormApi, getAllCustomerData } from '@/services/Redux/Reducer/LoginSlice';
import { _getPaymentHtml, _getPaymentOptions } from '@/services/Redux/Reducer/PaymentSlice';
import _ from 'lodash';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const useGetStartedHook = (props, steps) => {
    const { router, dispatch } = props;

    /*************** STEPS FUNCTIONALITY***************** */
    const [currentStep, setCurrentStep] = useState(0);
    const [signinPopUp, setSignInPopup] = useState(false);
    const [billingAddressSameAsShipping, setBillingAddressSameAsShipping] = useState(false);

    const handleButtonClick = () => {
        // Check if there is a next step
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            setTimeout(() => {
                const element = document.scrollingElement || document.documentElement;
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 500);
        } else {
            // If there are no more steps, you can navigate to another page or perform any other action
            router.push(`/activate?email=${formData?.emailAddress}`); // Change "/next-page" to the desired route
        }
    };


    const handleBackClick = () => {
        // Check if there is a previous step
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setTimeout(() => {
                const element = document.scrollingElement || document.documentElement;
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 400);
        }
    };

    /*************** Single Product Data ***************** */
    const [singleProductData, setSingleProductData] = useState(null)

    const memorizeSelector = createSelector(
        state => state?.AllProductSlice,
        state => state?.CheckoutSlice,
        state => state?.PaymentSlice,
        state => state?.LoginSlice,
        (productState, checkoutState, paymentState, loginState) => ({
            loading: productState?.isLoading,
            productError: productState?.error,

            checkoutError: checkoutState?.error,
            checkoutLoading: checkoutState?.isLoading,
            checkoutCouponErrorData: checkoutState?.couponErrorData,
            checkoutNormalAddressError: checkoutState?.normalAddressError,

            paymentScript: paymentState?.paymentScript,
            paymentOptions: paymentState?.paymentOptions,
            paymentFormHtml: paymentState?.paymentFormHtml,
            iframeLoader: paymentState?.iframeLoader,

            loginLoader: loginState?.loading
        })
    )
    const {
        loading, checkoutError, checkoutLoading, checkoutCouponErrorData, checkoutNormalAddressError,
        paymentOptions, paymentFormHtml, paymentScript, iframeLoader, loginLoader
    } = useSelector((state) => memorizeSelector(state));

    useScript(paymentScript);

    /*********************************** shipping section ************************************** */
    const [formData, setFormData] = useState(ShippingAddressInitialValues('shipping'));
    const [countryState, setCountryState] = useState({
        country: "", countryError: "", state: "", stateError: "",
    });

    const [googleAddressSearch, setGoogleAddressSearch] = useState({ fieldOpen: false, popupClose: false })

    const [shippingMethods, setShippingMethods] = useState({
        autoshipShipMethod: [],
        oneTimeShipMethod: []
    });

    const [selectedShippingOption, setSelectedShippingOption] = useState({
        autoshipSelectedShipping: { shipCarrierId: null, shipMethodType: null },
        oneTimeSelectedShipping: { shipCarrierId: null, shipMethodType: null }
    });

    const [calculatedData, setCalculatedData] = useState({
        autoshipCalculateData: null,
        oneTimeCalculateData: null
    });
    const [useDefaultAddressOrNot, setUseDefaultAddressOrNot] = useState({ bypassOrNot: false, addessData: null });

    let calculteDataUser = calculateDataUserPayload(formData, selectedShippingOption, useDefaultAddressOrNot?.bypassOrNot);
    let calculateAutoshipData = calculateReouccringPayload(formData, selectedShippingOption, useDefaultAddressOrNot?.bypassOrNot);

    // set formData and country state data 
    function _reDefineAddress(ADDRESS, useDefaultAddressOrNot) {
        setFormData((prv) => ({ ...prv, ...ADDRESS }));
        setCountryState({ stateError: '', countryError: '', country: ADDRESS?.shipping_country, state: ADDRESS?.shipping_state });
        calculteDataUser = calculateDataUserPayload({ ...formData, ...ADDRESS }, selectedShippingOption, useDefaultAddressOrNot?.bypassOrNot);
        calculateAutoshipData = calculateReouccringPayload({ ...formData, ...ADDRESS }, selectedShippingOption, useDefaultAddressOrNot?.bypassOrNot);
        _calculateApiCall();
    }

    //checkout main calculation functionality
    function _handleCommonLoader(data, frequency = "oneTime") {
        if (data) {
            setCalculatedData((prv) => ({ ...prv, [`${frequency}CalculateData`]: data?.crmOrder }));

            let CHECK = !_.some(_.map(data?.shipMethods, 'shipMethodDescription'), (r) => r === null);
            setShippingMethods((prv) => ({ ...prv, [`${frequency}ShipMethod`]: CHECK ? data?.shipMethods : [] }));
            setSelectedShippingOption((prv) => ({
                ...prv, section: 'normal',
                [`${frequency}SelectedShipping`]: {
                    shipCarrierId: CHECK ? data?.crmOrder?.shipCarrierId : null,
                    shipMethodType: CHECK ? data?.crmOrder?.shipMethodType : null
                }
            }));
        }
    }

    // function of set savecard and default payment Option
    function _handlePaymentSelectionFunction(selectedId) {
        setSelectedPayment(prv => ({ ...prv, selectedPaymentDropdown: selectedId }))
    }

    // product payload for pass on calculate and checkout api
    const _productPayload = (data, forWhat = "oneTime") => _.map(data, (item, index) => ({
        parentItemId: 0,
        orderLineNumber: index + 1,
        itemId: item?.id,
        itemCode: item?.itemCode,
        quantity: item?.quantity,
        ...(forWhat !== "oneTime") ? { "parentLineNumber": 0 } : {}
    }));

    // calling function for calculate api
    function _calculateApiCall(section, callback = null) {
        // if (autoshipProduct?.length > 0) {
        //     setSavedThisCard((prv) => ({ ...prv, readOnly: true }))
        // }
        const detailsArray = _productPayload([singleProductData]);
        const autoshipProduct = _productPayload([singleProductData]);
        if (detailsArray?.length > 0) {                                           /*************** normal order */
            calculteDataUser["details"] = detailsArray;
            calculteDataUser['priceType'] = _priceTypeForCalculate('normal', autoshipProduct);
            dispatch(CalculateApi(calculteDataUser, (data) => {
                if (data?.name === "addressOption") {
                    setUseDefaultAddressOrNot((prv) => ({ ...prv, addessData: data?.addresses }));
                }
                if (section === 'coupon') {
                    setCouponCode({ ...couponCode, valid: (action === 'add') && !_.isNull(data?.crmOrder?.couponCodes) ? true : false });
                }
                _handleCommonLoader(data);
            }))
        }
        if (autoshipProduct?.length > 0) {
            calculateAutoshipData['details'] = autoshipProduct;  /** autoship order */
            calculateAutoshipData['priceType'] = _priceTypeForCalculate('normal', autoshipProduct)
            dispatch(CalculateAutoshipApi(calculateAutoshipData, (data) => _handleCommonLoader(data, 'autoship')));
        }
    }

    //suggestion Address accept reject function and bypass defined 
    function _acceptOrNotAddressOption(action) {
        if (action === 'accept') {
            const { address_1, city, state_region, postal_code, country } = useDefaultAddressOrNot?.addessData;
            const ADDRESS = {
                shipping_state: state_region,
                shipping_city: city,
                shipping_zipcode: postal_code,
                shipping_country: country,
                shipping_street: address_1
            }
            setUseDefaultAddressOrNot((prv) => ({ ...prv, addessData: null }));
            _reDefineAddress(ADDRESS, { ...useDefaultAddressOrNot, addessData: null });

        } else if (action === 'reject') {
            setUseDefaultAddressOrNot((prv) => ({ bypassOrNot: true, addessData: null }));
            _reDefineAddress(formData, { bypassOrNot: true, addessData: null });
        } else if (action === 'close') {
            setUseDefaultAddressOrNot((prv) => ({ ...prv, addessData: null }));
            // _reDefineAddress(formData, { ...useDefaultAddressOrNot, addessData: null });
        }
    }

    // On field onBlur call function
    function _handleOnValueChange(event, values, section = null) {
        const { country, state } = countryState;
        let USER_DETAILS = {};
        if (event) {
            const { name, value } = event.target;
            USER_DETAILS = { ...values, shipping_country: country, shipping_state: state, [name]: value };
            if (section !== 'placeOrder') {
                setFormData(USER_DETAILS);
            }
        } else {
            USER_DETAILS = values;
        }
        calculteDataUser = calculateDataUserPayload(USER_DETAILS, selectedShippingOption, useDefaultAddressOrNot?.bypassOrNot)
        calculateAutoshipData = calculateReouccringPayload(USER_DETAILS, selectedShippingOption, useDefaultAddressOrNot?.bypassOrNot);
        // if (USER_DETAILS?.shipping_city && country && state) {
        if (!_.includes(['shipping_urname', 'emailAddress'], event?.target?.name)) {
            _calculateApiCall();
        }
        // }
    }

    function _handelGooglePlace(results, section = null, formikMehtod = null) {
        if (results) {
            let ADDRESS = {};
            for (const component of results.address_components) {
                // @ts-ignore remove once typings fixed
                const componentType = component.types[0];
                switch (componentType) {
                    case "street_number":
                        ADDRESS['shipping_street'] = `${component.long_name}`;
                        break;
                    case "route":
                        ADDRESS['shipping_street'] = `${ADDRESS?.shipping_street || ''} ${component.short_name}`;
                        break;
                    case "postal_code":
                        ADDRESS['shipping_zipcode'] = `${component.long_name}`;
                        break;
                    case "postal_code_suffix":
                        ADDRESS['shipping_zipcode'] = `${component.long_name}-${ADDRESS?.shipping_zipcode || ''}`;
                        break;
                    case "locality":
                        ADDRESS['shipping_city'] = component.long_name;
                        break;
                    case "administrative_area_level_1":
                        ADDRESS['shipping_state'] = component.short_name;
                        break;
                    case "country":
                        ADDRESS['shipping_country'] = component.short_name;
                        break;
                }
            }
            if (section === 'placeOrder') {
                if (formikMehtod) {
                    formikMehtod?.setValues({ ...formData, ...ADDRESS }, false);
                }
                setCountryState({ stateError: '', countryError: '', country: ADDRESS?.shipping_country, state: ADDRESS?.shipping_state });
                calculteDataUser = calculateDataUserPayload({ ...formData, ...ADDRESS }, selectedShippingOption, useDefaultAddressOrNot?.bypassOrNot);
                calculateAutoshipData = calculateReouccringPayload({ ...formData, ...ADDRESS }, selectedShippingOption, useDefaultAddressOrNot?.bypassOrNot);
                _calculateApiCall()
                // if (billingAddressSameAsShipping) {

                // }
            } else {
                setGoogleAddressSearch({ fieldOpen: true, popupClose: false });
                _reDefineAddress(ADDRESS);
            }
        }
    }

    const BILLING = _.map(['billing'], r => ({
        [`${r}_urname`]: formData?.shipping_urname,
        [`${r}_lastname`]: formData?.shipping_lastname,
        [`${r}_street`]: formData?.shipping_street,
        [`${r}_street2`]: formData?.shipping_street2,
        [`${r}_city`]: formData?.shipping_city,
        [`${r}_zipcode`]: formData?.shipping_zipcode,
        [`${r}_country`]: formData?.shipping_country,
        [`${r}_state`]: formData?.shipping_state,
        emailAddress: formData?.emailAddress,
    }))

    function _handleGetStartedShipSubmit(values, actions, callback = null) {
        if (values?.emailAddress) {
            try {
                dispatch(getAllCustomerData((data) => {
                    if (data?.length > 0) {
                        actions?.setFieldError('emailAddress', 'Email already exists.');
                        actions.setSubmitting(false);
                        _scrollToUp();
                    } else {
                        if (callback) {
                            callback(values, actions);
                        } else {
                            handleButtonClick();
                            if (billingAddressSameAsShipping) {
                                // _paymentAddress(BILLING[0]);
                                setBillingAddress(BILLING[0]);
                            }
                        }
                    }
                }, null, values?.emailAddress));
            } catch (er) {
                console.log(er)
            }
        }
    }

    /*************************** Payment Section and blling shipping changes ******************************** */
    const ShippingDataClone = JSON.parse(JSON.stringify(ShippingAddressInitialValues('billing')));

    const [billingAddress, setBillingAddress] = useState(ShippingDataClone);
    const [billingCountryState, setBillingCountryState] = useState({
        country: "", countryError: "", state: "", stateError: "",
    });

    const [selectedPayment, setSelectedPayment] = useState({
        cardValue: null,
        selectedPaymentDropdown: null,
        selectedPaymentOption: 2
    });

    const [editAddress, setEditAddress] = useState({ billing: false, shipping: false });

    function _paymentAddress(address, section = 'billing') {
        window.paymentOption?.setBilling({
            street: address[`${section}_street`],
            city: address[`${section}_city`],
            region: address[`${section}_state`],
            postal_code: address[`${section}_zipcode`],
            country: address[`${section}_country`]
        });
    }

    function _handleSameAsBilling(address) {

        return (event) => {
            try {
                if (event?.target?.checked) {
                    setBillingAddressSameAsShipping(event?.target?.checked);
                    _paymentAddress(BILLING[0]);
                } else {
                    setBillingAddressSameAsShipping(event?.target?.checked);
                    if (billingAddress?.billing_street) {
                        _paymentAddress(billingAddress, 'billing');
                    }
                    window.paymentOption?.clearBilling();
                }
            } catch (e) {
                console.log(e);
            }
        }

    }

    const _handleEditShippingClick = (section) => {
        setEditAddress((prv) => ({ ...prv, [section]: !prv[section] }));
    };

    function _handleAddressChangeSubmit(section = 'shipping', { values, actions }, callback = null) {
        _reDefineAddress(values);
        if (callback) {
            callback({ values, actions });
        } else {
            if (billingAddressSameAsShipping) {
                _paymentAddress({ ...formData, ...values }, section);
            }
            _handleEditShippingClick(section)
        }
    }

    /**************************** Place Order ****************************** */
    const [thankYouData, setThankyouData] = useState(null);
    const [startPlaceLoading, setStartPlaceLoading] = useState(false);

    function callBackAutoshipFunction(AutoshipProduct, values, orderid, sucess = false, callBack) {
        if (AutoshipProduct?.length > 0) {
            try {
                let autoshipCartPayload = _paymentPayload(null, values, 'autoship', selectedPayment);
                var date = new Date();
                date.setDate(date.getDate() + (!sucess ? 30 : 60))
                calculateAutoshipData['customerId'] = values?.customerId;
                calculateAutoshipData['startDate'] = moment(date).utc().format();
                calculateAutoshipData['frequencyType'] = !sucess ? 1 : 7;
                calculateAutoshipData["details"] = AutoshipProduct;
                calculateAutoshipData['priceType'] = _priceTypeForCalculate('normal', AutoshipProduct)

                if (selectedPayment?.cardValue) {
                    autoshipCartPayload['token'] = selectedPayment?.cardValue?.token;
                    autoshipCartPayload['customerAccountId'] = selectedPayment?.cardValue?.customerAccountId;
                    autoshipCartPayload['recurringPaymentActionType'] = 2;
                    calculateAutoshipData['payments'] = [{ ...autoshipCartPayload, "maxAmount": +calculatedData?.autoshipCalculateData?.orderTotal }];
                    dispatch(CreateAutoshipOrderApi(calculateAutoshipData, comingFrom, orderid, callBack));

                } else {

                    _scriptFunctionCall(paymentFormHtml, () => {
                        loopFunction(paymentFormHtml, ({ tokenId }) => {
                            if (tokenId) {
                                autoshipCartPayload["token"] = tokenId;
                                autoshipCartPayload['recurringPaymentActionType'] = 1;
                                calculateAutoshipData['payments'] = [{ ...autoshipCartPayload, "maxAmount": +calculatedData?.autoshipCalculateData?.orderTotal, }];
                                dispatch(CreateAutoshipOrderApi(calculateAutoshipData, 'normal', orderid, callBack));
                            }
                        })
                    }, autoshipCartPayload);
                }

            } catch (e) {
                console.log(e)
            }
        }
    }

    const _onHandlePlaceOrder = async (simplecheckoutPayload = null, preAuthOrderId = 0) => {
        const detailsArray = _productPayload([singleProductData]);
        // const autoshipProduct = _productPayload(_.filter(FILTER_PRODUCTS, ({ frequency }) => (frequency === "autoship")));
        const autoshipProduct = _productPayload([singleProductData]);
        let checkoutPayload = _paymentPayload(null, formData, 'normal', selectedPayment);
        calculteDataUser["details"] = detailsArray?.length > 0 && detailsArray;
        calculteDataUser['priceType'] = _priceTypeForCalculate('normal', autoshipProduct);
        calculteDataUser['payments'] = [{ ...checkoutPayload, "maxAmount": +calculatedData?.oneTimeCalculateData?.orderTotal }];
        calculteDataUser['preAuthOrderId'] = +preAuthOrderId;

        if (simplecheckoutPayload?.token || preAuthOrderId) {
            if (detailsArray?.length > 0) {
                setStartPlaceLoading(true);
                // const POINT_DISCOUNT = (usePoint?.wantToUSePoint && usePoint?.paymentObject?.maxAmount) ? [usePoint?.paymentObject] : [];
                // const POINT_AMOUNT = (usePoint?.wantToUSePoint && usePoint?.paymentObject?.maxAmount) ? usePoint?.paymentObject?.maxAmount : 0;
                // calculteDataUser['payments'] = [{
                //     ...simplecheckoutPayload,
                //     "maxAmount": +calculatedData?.oneTimeCalculateData?.orderTotal - POINT_AMOUNT,
                // }, ...POINT_DISCOUNT];
                calculteDataUser['payments'] = [{ ...simplecheckoutPayload, "maxAmount": +calculatedData?.oneTimeCalculateData?.orderTotal }];

                const loginToken = localStorageCall().getItem('Token');
                if (formData?.emailAddress && !loginToken) {
                    dispatch(SignUpFormApi({
                        email: formData?.emailAddress,
                        firstName: formData?.shipping_urname,
                        lastName: formData?.shipping_lastname,
                        country: formData?.shipping_country,
                        state: formData?.shipping_state,
                        city: formData?.shipping_city,
                        ...formData
                    }, 'leadUser', (data) => {
                        setStartPlaceLoading(false);
                        dispatch(CreateOrderApi({ ...calculteDataUser, customerId: +data }, autoshipProduct, (orderid) => {
                            if (orderid) {
                                callBackAutoshipFunction(autoshipProduct, { ...formData, customerId: +data }, orderid, false, (autoshipData) => {
                                    setThankyouData(autoshipData);
                                    handleButtonClick();
                                })

                            }
                        }, { ...formData }, 'normal'))
                    }))
                }
                // else {
                //     // callbackCall(data)
                //     dispatch(CreateOrderApi({ ...calculteDataUser, customerId: null }, autoshipProduct, (orderid) => {
                //         if (orderid) {
                //             handleButtonClick();
                //         }
                //     }, { ...formData }, 'normal'))
                // }
            }
        } else {
            if (selectedPayment?.cardValue && selectedPayment?.selectedOptionForPayment === 1) {
                checkoutPayload = {
                    ...checkoutPayload,
                    saveToken: false,
                    token: selectedPayment?.cardValue?.token,
                    customerAccountId: selectedPayment?.cardValue?.customerAccountId
                }
                _onHandlePlaceOrder(checkoutPayload);
            } else {
                if (selectedPayment?.selectedOptionForPayment === 1) {
                    setOnSelectedCardError('Please select your payment method.');
                    _setTimeOut(() => setOnSelectedCardError(''), 3000);
                } else {
                    _scriptFunctionCall(paymentFormHtml, () => {
                        loopFunction(paymentFormHtml, ({ tokenId, preAuthOrderId }) => {
                            checkoutPayload["token"] = tokenId;
                            checkoutPayload['saveToken'] = true;
                            _onHandlePlaceOrder(checkoutPayload, preAuthOrderId);
                        })

                    }, calculteDataUser);

                }
            }
        }
    };

    console.log("formData", formData);
    // useEffect
    useEffect(() => {
        if (currentStep === 0) {
            dispatch(getAllSingleProduct('normalProduct', (process.env.NEXT_PUBLIC_PRODUCT_ID || 1045), (data) => {
                const CUSTOMER_TYPE = localStorageCall().getItem('customerTypeDescr');
                try {
                    const ProductData = _.map(data, (row) => {
                        // const SECTION_USE = (CUSTOMER_TYPE?.role && section === 'normal') ? CUSTOMER_TYPE?.role : section;
                        let CONDITION = _.includes(['IBO', 'preferred'], CUSTOMER_TYPE?.role) ? (_getPrice(row, 3) && _getPrice(row, 6)) : (_getPrice(row, 1) && _getPrice(row, 1));
                        // if (CONDITION) {
                        let NORMAL_PRICEING = { oneTime: _getPrice(row, 1), autoship: _getPrice(row, 5) }
                        if (_.includes(['preferred', 'IBO'], CUSTOMER_TYPE?.role)) {
                            NORMAL_PRICEING = { oneTime: _getPrice(row, 3), autoship: _getPrice(row, 6) };
                        }
                        return ({
                            id: row?.itemId,
                            images: _.compact([row?.mediumImage, row?.tinyImage, row?.smallImage, row?.largeImage]),
                            otherFields: row?.otherFields,
                            itemId: row?.itemId,
                            image: row?.largeImage,
                            title: row?.title,
                            normal_oneTime: +NORMAL_PRICEING?.oneTime || 0,
                            normal_autoship: +NORMAL_PRICEING?.autoship || 0,
                            retail_oneTime: _getPrice(row, 1),
                            retail_autoship: _getPrice(row, 1),
                            preferred_oneTime: _getPrice(row, 3),
                            preferred_autoship: _getPrice(row, 6),
                            IBO_oneTime: _getPrice(row, 3),
                            IBO_autoship: _getPrice(row, 6),
                            quantity: 1,
                            itemCode: row?.fullItemCode,
                            isEligibleForAutoOrder: row?.isEligibleForAutoOrder,
                            stock: "",
                        });
                        // }
                    });

                    setSingleProductData(ProductData[0]);
                } catch (err) {
                    console.log(err)
                }
            }));
        }
        if (currentStep === 7) {
            dispatch(_getPaymentOptions((data) => {
                if (data[0]?.paymentOptionId) {
                    setSelectedPayment((prv) => ({ ...prv, selectedPaymentDropdown: data[0]?.paymentOptionId }));
                    dispatch(_getPaymentHtml(data[0]?.paymentOptionId));
                }
            }));
        }
    }, [currentStep])

    return {
        // states
        formData, setFormData,
        countryState, setCountryState,
        currentStep, setCurrentStep,
        singleProductData,
        googleAddressSearch, setGoogleAddressSearch,
        signinPopUp, setSignInPopup,
        calculatedData,
        selectedPayment,
        billingAddress,
        billingCountryState, setBillingCountryState,
        billingAddressSameAsShipping, setBillingAddressSameAsShipping,
        editAddress,
        thankYouData,
        startPlaceLoading,

        // functions
        handleButtonClick, handleBackClick, _handleGetStartedShipSubmit, _handelGooglePlace, _handleOnValueChange,
        _acceptOrNotAddressOption, _handlePaymentSelectionFunction, _handleSameAsBilling, _handleAddressChangeSubmit,
        _handleEditShippingClick, _onHandlePlaceOrder,

        // constents
        loading, loginLoader, checkoutError, checkoutLoading, useDefaultAddressOrNot, checkoutCouponErrorData, checkoutNormalAddressError,
        paymentOptions, paymentFormHtml, iframeLoader,
        ...props,
    }
}

export default useGetStartedHook;