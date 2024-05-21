"use client";
import Image from "next/image";
import Freeshipping from "@/components/freeshipping";
import ShoppingWith from "@/components/shoppingwith";
import Language from "@/components/language";
import SubscribeIcone from "../../assets/images/icons/subscribe.svg";
import Notification from "@/components/notification";
import LockCircleIcon from "../../assets/images/icons/lock-circle.svg";
import ProductImg from "../../assets/images/prd-img.png";
import YourTotal from "@/components/yourtotal";
import Arrow from "../../assets/images/icons/check-circle-white.svg";
import Footer from "@/common/Footer";
import ButtonNextStep from "@/common/buttonNextStep";
import Lock from "../../assets/images/icons/lock-white.svg";
import ActivateAccountLaterModal from "./ActivateAccountLaterModal";
import ProductCard from "@/common/ProductCard";
import { _dateFormatChange } from "@/services/Methods/normalMethods";
import { OuterLoader } from "@/services/Methods/checkoutPayloads";

const Step9 = (props) => {
  const { thankYouData, onContinueClick, formData, calculatedData, singleProductData } = props;

  return (
    <>
      <div className="max-w-[484px] mx-auto  px-4">
        <LockCircleIcon className="mb-6 mt-8" />
        <Notification
          icon={<Arrow />}
          message={`Thank you, ${formData?.shipping_urname}! You have subscribed to MY lash serum.`}
        />
        <h3 className="mb-4 mt-5">Are you ready to activate your account?</h3>
        <p className="text-t4 mb-6 text-base ">
          Activate your account and easily manage or cancel your subscription.
        </p>
        <p className="text-t4 sm:text-lg text-base font-bold mb-2.5">
          Activate account later?
        </p>
        <p className="text-t4 text-base  mb-2">
          A link to active your account has been sent to:
        </p>
        <p className="text-t4 text-base  font-bold  pb-[30px] border-b border-gray">
          {formData?.emailAddress}
        </p>
        <div className="divide-y divide-gray mt-24">
          <div className="pb-[30px]">
            <h3 className="mb-4">Order Confirmation</h3>
            <div className="flex flex-col gap-3.5 text-t4 text-base">
              <p>
                Thank you, {thankYouData?.shipFirstName}! We are processing your order and have sent a
                confirmation to your email:
              </p>
              <p className="text-t4 text-base  font-bold">{formData?.emailAddress}</p>
              <p>
                If you don&apos;t see the confirmation email within your inbox
                within an hour, please check your spam folder.
              </p>
              <p>
                Tracking information will be emailed to you within 48-72 hours.
              </p>
              <p>
                If you have inquiries or concerns regarding your order, kindly{" "}
                <a href="mailto:hello@keiok.com">email us.</a>
              </p>
            </div>
          </div>

          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Order Number:
            </div>
            <p className="text-t4 text-sm">{thankYouData?.recurringOrderId}</p>
          </div>
          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Tracking Number:
            </div>
            <p className="text-t4 text-sm">
              We&apos;ll email you as soon as we have your tracking number.
            </p>
          </div>
          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Shipping Method:
            </div>
            <p className="text-t4 text-sm">Free shipping (standard)</p>
          </div>
          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Estimated Delivery:
            </div>
            <p className="text-t4 text-sm">Wed, Sep 06 - Mon, Sep 11</p>
          </div>
          <div className="py-[30px]">
            <div className="text-t2 mb-0.5 font-medium text-base">
              Shipping Address:
            </div>
            <p className="text-t4 text-sm">
              {formData?.shipping_urname}
              <br />
              {thankYouData?.shipCountryCode}
              <br />
              {thankYouData?.shipAddress1}
              <br />
              Apt 1<br />
              {thankYouData?.shipCity}, {thankYouData?.shipRegionProvState} {thankYouData?.shipPostalCode}
            </p>
          </div>
        </div>

        {calculatedData?.autoshipCalculateData
          ?
          <YourTotal orderData={calculatedData?.autoshipCalculateData} />
          :
          <OuterLoader section="oneTime" msg="please wait..............." />
        }
        <Freeshipping />
        <h6 className="label mb-4 mt-5">Your Subscription</h6>
        <ProductCard {...{ singleProductData }} />
      </div>
      <div className="bg-pink">
        <div className="max-w-[484px] mx-auto  px-4 py-5">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <h6 className="label mb-4">Your Subscription</h6>
              <h6 className="flex items-center gap-2 text-base sm:text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Delivered & Billed
              </h6>
              <ul className="flex flex-col gap-0 sm:gap-1.5 pl-[30px]">
                <li className="text-[10px] sm:text-xs text-t4">
                  First Delivery & Billing Date
                </li>
                <li className="text-[10px] sm:text-xs text-t4">
                  Next Delivery & Billing Date
                </li>
              </ul>
            </div>
            <div>
              <h6 className="flex items-center gap-2 text-base sm:text-lg font-medium text-2 mb-2.5">
                <SubscribeIcone className="w-6 h-6" />
                Every 3 Months
              </h6>
              <ul className="flex flex-col gap-0 gap-1.5 pl-[30px] sm:text-right">
                <li className="text-[10px] sm:text-xs text-t4">Today</li>
                <li className="text-[10px] sm:text-xs text-t4">
                  {_dateFormatChange(new Date().setDate(new Date().getDate() + 30), 'MMM Do, YYYY')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
            icon={<Lock />}
            handleClick={onContinueClick}
            amt=""
            label="Activate MY Account"
          />
          <ActivateAccountLaterModal name={formData?.shipping_urname} email={formData?.emailAddress} />
        </div>
      </div>
    </>
  );
};

export default Step9;
