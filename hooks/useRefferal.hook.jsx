"use client"

import { getCustomerRefferal } from "@/services/Redux/Reducer/CustomerSlice";
import localStorageCall from "@/services/Methods/localstorage.hook";
import { useEffect, useState } from "react";

const useRefferalHook = (props, section) => {

    const { pathname, router, notFound, dispatch, params } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isLoadingTrue, setIsLoadingTrue] = useState(false);
    const [refferalValue, setRefferalValue] = useState({ refferal: '' });
    const [pageNotFound, setPageNotFound] = useState(false);

    useEffect(() => {
        if (section === 'urlRefferalCheck') {
            _checkRefferalCode(params?.reffealpage, section);
        } else {
            const RefferalCode = localStorageCall().getItem('refferal_link');
            if (RefferalCode?.id || pathname === '/signin') {
                closeModal();
            } else {
                openModal();
            }
        }
    }, [pathname]);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function _checkRefferalCode(refferal, section = "refferalPopup", errorCallback) {
        dispatch(getCustomerRefferal((data) => {
            if (data?.length === 0) {
                if (section === 'refferalPopup') {
                    errorCallback();
                } else {
                    setPageNotFound(true);
                }
            } else {
                closeModal();
                const refferalData = JSON.stringify({ "id": data[0]?.customerId, "name": data[0]?.publicProfile?.fullName, "webalies": data[0]?.webAlias });
                localStorageCall().setItem("refferal_link", refferalData);
                if (section === 'refferalPopup') {
                    setRefferalValue({ refferal: '' });
                    router.refresh();
                } else {
                    router.push('/');
                }
            }

        }, refferal));
    }

    function _handleSubmitRefferal({ refferal }, actions) {
        setIsLoadingTrue(true);
        _checkRefferalCode(refferal, 'refferalPopup', () => {
            setRefferalValue({ refferal: '' });
            setIsLoadingTrue(false);
            actions?.setFieldError('refferal', 'Referral code is not found');
            actions.setSubmitting(false);
        });
    }

    return ({
        isOpen, isLoadingTrue, refferalValue, pageNotFound,
        _checkRefferalCode, _handleSubmitRefferal, closeModal
    })
};

export default useRefferalHook;