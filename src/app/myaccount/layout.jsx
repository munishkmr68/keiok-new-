"use client";

import withRouteHOC from "@/HOC/withRouteHOC";
import Footer from "@/common/Footer";
import Language from "@/components/language";
import { useEffect } from "react";
import localStorageCall from "@/services/Methods/localstorage.hook";

export default withRouteHOC(function MyAccountLayout({ children, ...props }) {
    const { router } = props;

    useEffect(() => {
        const isUserLogin = localStorageCall().getSingleItem('Token');
        console.log('isUserLogin', isUserLogin)
        if (!isUserLogin) {
            router?.back();
        }
    }, []);

    return (
        <div className="main_myAccountLayout">
            {children}
            <div className="max-w-[484px] mx-auto px-4 py-8">
                <div className="mt-16">
                    <Language />
                </div>
            </div>
            <Footer />
        </div>
    );
})
