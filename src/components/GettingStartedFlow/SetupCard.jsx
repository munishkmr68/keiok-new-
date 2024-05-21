"use client";
import React, { useState } from "react";
import AddressFields from '../../common/AddressFields';
import Image from "next/image";
import ShoppingWith from "@/components/shoppingwith";
import YourTotal from "@/components/yourtotal";
import Language from "@/components/language";
import Freeshipping from "@/components/freeshipping";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import NortonLogo from "../../assets/images/norton-logo.png";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import Lock from "../../assets/images/icons/lock-white.svg";
import CardIcons from "../../assets/images/icons/card-group-icons.svg";
import LashesIcon from "../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";
import ChangeDropdown from "./ChangeDropdown";
import Loader from "@/common/Loader";
import { OuterLoader } from "@/services/Methods/checkoutPayloads";
import { _dateFormatChange, cn } from "@/services/Methods/normalMethods";
import _ from "lodash";
import ProductCard from "@/common/ProductCard";
import FunFactModal from "./FunFactModal";

const CommonAddressDisplay = ({ section, addressData, handleEditClick }) => (
    <div className={cn("flex flex-col gap-4 border-b border-gray mt-[30px]", {
        " pb-[30px]": (section === 'shipping'),
        "py-[30px]": (section === 'billing')
    })}>
        <div>
            <div className="font-medium text-t2 mb-2 flex justify-between items-center">
                {_.capitalize(section)} Address
                <ChangeDropdown onClick={() => handleEditClick(section)} />
            </div>
            <p className="text-t4 text-sm">
                {addressData?.[`${section}_urname`]}
                <br />
                {addressData?.[`${section}_country`]}
                <br />
                {addressData?.[`${section}_street`]}
                <br />
                {addressData?.[`${section}_city`]}, {addressData?.[`${section}_state`]} {addressData?.[`${section}_zipcode`]}
                <br />
                {/* Apt 1 */}
            </p>
        </div>
        <div>
            <div className="font-medium text-t2 mb-2">Email</div>
            <p className="text-t4 text-sm">{addressData?.emailAddress}</p>
        </div>
    </div>
)

const SetupCard = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const {
        onContinueClick, billingAddress, billingCountryState, setBillingCountryState, formData, paymentFormHtml,
        calculatedData, iframeLoader, countryState, setCountryState, billingAddressSameAsShipping, singleProductData,
        editAddress, _handleOnValueChange, _handelGooglePlace, checkoutError, checkoutNormalAddressError,
        checkoutLoading, loginLoader, startPlaceLoading,
        _handleAddressChangeSubmit, _handleEditShippingClick, _handleSameAsBilling, _onHandlePlaceOrder
    } = props;

    // const scrollToTop = () => {
    //     // Smooth scroll to the top with a slight delay
    //     setTimeout(() => {
    //         const element = document.scrollingElement || document.documentElement;
    //         element.scrollIntoView({ behavior: "smooth", block: "start" });
    //     }, 100);
    // };

    const handleButtonClick = () => {
        // Call the parent component's function to change the step
        onContinueClick();
        // scrollToTop();
    };

    return (
        <>
            {/* {!checkoutLoading &&
                <div className="absolute top-0 left-0 bottom-0 right-0 z-[999] flex h-full items-center justify-center bg-white">
                    <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue border-t-transparent"></div>
                </div>
            } */}
            <div className="max-w-[484px] mx-auto mb-5 px-4">
                <LockCircleIcon className="mb-6 mt-8" />
                <h3 className="mb-4 mt-5">Set up your credit or debit card</h3>
                <CardIcons />
            </div>
            <div className="max-w-[484px] mx-auto px-4 py-8">
                <div className="border-t border-gray pt-[30px]">
                    <div className="font-medium text-t2 mb-2">Billing Address</div>
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="w-5 flex justify-center">
                            <input
                                id="address"
                                className="accent-blue w-4 h-4"
                                type="checkbox"
                                name="status"
                                checked={billingAddressSameAsShipping}
                                onChange={_handleSameAsBilling(formData)}
                            />
                        </span>
                        <label htmlFor="address" className="text-t3 leading-[21px]">
                            Billing address same as shipping
                        </label>
                    </div>
                </div>
            </div>
            <div className="bg-bg3 py-10 px-4">
                <div className="max-w-[484px] mx-auto">
                    <Image
                        className="max-w-[66px] ml-auto mb-1"
                        src={NortonLogo}
                        alt="logo"
                    />
                    <div className="flex flex-col gap-[9px] h-[770px]">
                        {(!iframeLoader)
                            ?
                            <iframe id="collect_form_pay" src={paymentFormHtml} style={{ width: '100%', height: '100%' }}></iframe>
                            :
                            <div className='order-data loader_order text-center px-0 pt-[30px] pb-[10px]'>
                                <Loader />
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="max-w-[484px] mx-auto px-4 py-8">
                {/* <div className="border-t border-gray pt-[30px]">
                    <div className="font-medium text-t2 mb-2">Billing Address</div>
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="w-5 flex justify-center">
                            <input
                                id="address"
                                className="accent-blue w-4 h-4"
                                type="checkbox"
                                name="status"
                                checked={billingAddressSameAsShipping}
                                onChange={_handleSameAsBilling(formData)}
                            />
                        </span>
                        <label htmlFor="address" className="text-t3 leading-[21px]">
                            Billing address same as shipping
                        </label>
                    </div>
                </div> */}
                {/* {!editAddress?.billing && (
                    <CommonAddressDisplay section="billing" {...{ addressData: billingAddress, handleEditClick: _handleEditShippingClick }} />
                )}
                {editAddress?.billing &&
                    <AddressFields section="billing" {...{
                        addressValues: billingAddress,
                        countryState: billingCountryState,
                        setCountryState: setBillingCountryState,
                        onClick: (data) => _handleAddressChangeSubmit('billing', data),
                        onClose: (section) => _handleEditShippingClick(section)
                    }} />
                } */}
                {!editAddress?.shipping && (
                    <CommonAddressDisplay section="shipping" {...{ addressData: formData, handleEditClick: _handleEditShippingClick }} />
                )}
                {editAddress?.shipping && (
                    <AddressFields section="shipping" {...{
                        addressValues: formData,
                        countryState, setCountryState,
                        _handleOnValueChange,
                        _handelGooglePlace,
                        checkoutError, checkoutNormalAddressError,
                        onClick: (data) => _handleAddressChangeSubmit('shipping', data),
                        onClose: (section) => _handleEditShippingClick(section)
                    }} />
                )}
            </div>

            <div className="bg-pink">
                <div className="max-w-[484px] mx-auto px-4 py-8">
                    <ul className="text-t4 space-y-1">
                        <li className="flex gap-2">
                            <LashesIcon className="w-6 h-6" />
                            <span className="text-base sm:text-lg font-medium">
                                Get LASHES in as little as 6 weeks
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <SubscribeIcone className="w-6 h-6" />
                            <span className="text-base sm:text-lg font-medium">
                                Subscribe because of your <u onClick={() => setOpenModal(!openModal)} className="cursor-pointer">lash cycle</u>
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <CheckmarkIcon className="w-6 h-6" />
                            <span className="text-base sm:text-lg font-medium">
                                Cancel anytime
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[484px] mx-auto px-4 py-8">
                <div className="border-t border-gray pt-[30px] pb-[18px]">
                    {calculatedData?.autoshipCalculateData
                        ?
                        <YourTotal orderData={calculatedData?.autoshipCalculateData} />
                        :
                        <OuterLoader section="oneTime" />
                    }
                </div>
                <div className="border-b border-gray mb-[30px]">
                    <Freeshipping />
                </div>
                <h6 className="label pb-4">Your Subscription</h6>
                <ProductCard {...{ singleProductData }} />
            </div>

            <div className="bg-pink">
                <div className="max-w-[484px] mx-auto  px-4 py-8">
                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                        <div>
                            <h6 className="flex items-center gap-2 text-lg font-medium text-2 mb-2.5">
                                <SubscribeIcone className="w-6 h-6" />
                                Delivered & Billed
                            </h6>
                            <ul className="flex flex-col gap-1.5 pl-[30px]">
                                <li className="text-xs text-t4">
                                    First Delivery & Billing Date
                                </li>
                                <li className="text-xs text-t4">
                                    Next Delivery & Billing Date
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="flex items-center gap-2 text-lg font-medium text-2 mb-2.5">
                                <SubscribeIcone className="w-6 h-6" />
                                Every 3 Months
                            </h6>
                            <ul className="flex flex-col gap-1.5 pl-[30px] sm:text-right">
                                <li className="text-xs text-t4">Today</li>
                                <li className="text-xs text-t4">
                                    {_dateFormatChange(new Date().setDate(new Date().getDate() + 30), 'MMM Do, YYYY')}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && <FunFactModal openModal={openModal} setOpenModal={setOpenModal} />}
            <div className="max-w-[484px] mx-auto px-4 py-8">
                <ShoppingWith />
                <div className="mt-24">
                    <Language />
                </div>
            </div>

            <Footer />
            <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
                <div className="max-w-[484px] mx-auto px-4 py-8">
                    <ButtonNextStep
                        type='button'
                        disabled={!!startPlaceLoading || !!checkoutLoading || !!loginLoader}
                        icon={<Lock />}
                        handleClick={() => _onHandlePlaceOrder()}
                        amt=""
                        label={(startPlaceLoading || checkoutLoading || loginLoader) ? "Processing ..." : 'Place Order'}
                        iconClassName="hidden"
                    />
                </div>
            </div>
        </>
    );
};

export default SetupCard;
