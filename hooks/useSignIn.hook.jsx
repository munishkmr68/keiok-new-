"use client";
import { _storeCustomerTypes } from "@/services/Methods/commonPayload";
import { ContextData, _scrollToUp } from "@/services/Methods/normalMethods";
import { getAllCustomerData, LoginApi } from "@/services/Redux/Reducer/LoginSlice";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const useSignInHook = (props) => {
    const { router, dispatch, isUserLogin } = props;
    let { setLoading } = useContext(ContextData);

    const [currentStep, setCurrentStep] = useState(0);
    const [currenStteps, setCurrentSteps] = useState(['signin'])

    const selectorData = createSelector(
        (state) => state?.LoginSlice,
        ({ emailerror, loading }) => ({ emailerror, loading })
    );
    const { emailerror, loading } = useSelector(selectorData);


    useEffect(() => {
        if (isUserLogin) {
            router.push('/')
        }
    }, [isUserLogin]);


    // handle Steps of steps
    function _handleSteps(step) {
        if (step !== 'back') {
            setCurrentSteps((prv) => ([...prv, step]));
            _scrollToUp();
        } else {
            const REJECTED = _.reject(currenStteps, (r) => r === _.last(currenStteps));
            setCurrentSteps(REJECTED);
        }

    }

    // Event handler for button click
    const handleButtonClick = () => {
        if (currentStep === steps.length - 1) {
            router.push("/activate");
            return;
        }
        setCurrentStep((prevStep) => prevStep + 1);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
    };

    /************* signin onsubmit page *************** */

    function _handleAuthanticedSubmit(values) {
        setLoading(true);
        dispatch(LoginApi(values, (data) => {
            if (data) {
                _storeCustomerTypes(dispatch, data, null, () => {
                    router.push('/myaccount')
                });
                // dispatch(getAllCustomerData(null, data))
            }
        }));
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    return {
        // selector Data
        emailerror, loading,

        // states 
        currentStep, setCurrentStep,
        currenStteps, setCurrentSteps,

        // functions
        _handleAuthanticedSubmit, handleButtonClick, _handleSteps, ...props
    }
};

export default useSignInHook;