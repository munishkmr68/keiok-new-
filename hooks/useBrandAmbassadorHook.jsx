"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import { createSelector } from 'reselect';
import { BrandAmbassadorInitialValues } from '../src/services/Methods/validationSchema';
import { getCustomerRefferal } from '../src/services/Redux/Reducer/CustomerSlice';
import { customerUpdateApi, getAllCustomerData, _conditionChecked } from '../src/services/Redux/Reducer/LoginSlice';
import { _upgradePayload } from '@/services/Methods/commonPayload';

const useBrandAmbassadorHook = (props) => {
    const section = 'brand_ambassador';
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const months = [
        { name: "January", value: 1, },
        { name: "February", value: 2, },
        { name: "March", value: 3, },
        { name: "April", value: 4, },
        { name: "May", value: 5, },
        { name: "June", value: 6, },
        { name: "July", value: 7, },
        { name: "August", value: 8, },
        { name: "September", value: 9, },
        { name: "October", value: 10, },
        { name: "November", value: 11, },
        { name: "December", value: 12, },
    ];
    const currentYear = new Date().getFullYear();

    const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
    const isUserLogin = false;
    const router = useRouter();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(BrandAmbassadorInitialValues);
    const [googleAddressSearch, setGoogleAddressSearch] = useState({ fieldOpen: false, popupClose: false })
    const [countryState, setCountryState] = useState({
        country: "", countryError: "", state: "", stateError: "",
    });
    const [currentStep, setCurrentStep] = useState(0);
    const [isWebAlies, setIsWebAlies] = useState("");

    const memoRizedSelector = createSelector(
        (state) => state?.LoginSlice,
        (state) => state?.CustomerSlice,
        (loginState, customerData) => ({
            isLoginLoading: customerData?.isLoading,
            validateCustomerToken: loginState?.validateCustomerToken,
            enrollApiErrorMsg: loginState?.errorMsg,
            alluserData: loginState?.alluserData
        })
    )

    const { isLoginLoading, enrollApiErrorMsg, alluserData } = useSelector((state) => memoRizedSelector(state));
    const scrollToTop = () => {
        // Smooth scroll to the top with a slight delay
        setTimeout(() => {
            const element = document.scrollingElement || document.documentElement;
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    useEffect(() => {
        dispatch(getAllCustomerData(null, props?.isUserLogin));
    }, [])

    function _validateRefferalFunction(refferal, callBack) {
        dispatch(getCustomerRefferal((data) => {
            if (data?.length !== 0) {
                setIsWebAlies("Error");
                return;
            } else {
                setIsWebAlies("Success");
                callBack(false);
            }
        }, refferal));
    };

    const _handleSubmit = (values, actions, allUserData) => {
        const data = { ...{ ...values, ...allUserData } }
        const CUSTOMER_TYPE_CHANGE = _conditionChecked(section);
        const formadata = _upgradePayload(data, CUSTOMER_TYPE_CHANGE, section, 'updated')
        console.log("DataInHook", formadata);
        dispatch(customerUpdateApi({ ...formadata, refferal: '' }, section, props?.isUserLogin, (res) => {
            setCurrentStep(6);
            scrollToTop();
        }));
    }

    function _handelGooglePlace(results, section = null, formikMehtod = null) {
        if (results) {
            let ADDRESS = {};
            for (const component of results.address_components) {
                // @ts-ignore remove once typings fixed
                const componentType = component.types[0];
                switch (componentType) {
                    case "street_number":
                        ADDRESS['businessAddress'] = `${component.long_name}`;
                        break;
                    case "route":
                        ADDRESS['businessAddress'] = `${ADDRESS?.businessAddress || ''} ${component.short_name}`;
                        break;
                    case "postal_code":
                        ADDRESS['businessZip'] = `${component.long_name}`;
                        break;
                    case "postal_code_suffix":
                        ADDRESS['businessZip'] = `${component.long_name}-${ADDRESS?.businessZip || ''}`;
                        break;
                    case "locality":
                        ADDRESS['businessCityState'] = component.long_name;
                        break;
                    case "administrative_area_level_1":
                        ADDRESS['businessState'] = component.short_name;
                        break;
                    case "country":
                        ADDRESS['businessCountry'] = component.short_name;
                        break;
                }
            }
            setGoogleAddressSearch({ fieldOpen: true, popupClose: false });
            setFormData((prv) => ({ ...prv, ...ADDRESS }));
            setCountryState({ stateError: '', countryError: '', country: ADDRESS?.businessCountry, state: ADDRESS?.businessState });
        }
    }

    return ({
        //states && variables
        currentStep, days, months, years, isUserLogin, formData, isWebAlies, enrollApiErrorMsg, currentYear, alluserData, isLoginLoading, googleAddressSearch, countryState,

        //functions
        setCurrentStep, router, setFormData, scrollToTop, _validateRefferalFunction, setIsWebAlies, _handleSubmit, setGoogleAddressSearch, setCountryState, _handelGooglePlace
    });
}

export default useBrandAmbassadorHook;