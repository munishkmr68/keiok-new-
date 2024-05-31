// AccountInfo.js
"use client";
import React from "react";
import ArrowRightIcon from "../../assets/images/icons/arrow-right-customizable.svg";
import Amex from "../../assets/images/icons/amex.svg";
import AccountInfo from "@/components/MyAccount/AccountInfo/AccountInfo";
import useMyAccountHook from "../../../hooks/useMyAccount.hook";
import withRouteHOC from "@/HOC/withRouteHOC";
import BillingInfo from "@/components/MyAccount/BillingInfo/BillingInfo";
import _ from "lodash";
import PaymentInfo from "@/components/MyAccount/BillingInfo/PaymentInfo";
import ShippingInfo from "@/components/MyAccount/AccountInfo/ShippingInfo";
import ChangeEmail from "@/components/MyAccount/AccountInfo/ChangeEmail";
import ChangePhone from "@/components/MyAccount/AccountInfo/ChangePhone";
import ChangePassword from "@/components/MyAccount/AccountInfo/ChangePassword";
import AddPaymentInfo from "@/components/MyAccount/BillingInfo/AddPaymentInfo";
import SetupCard from "@/components/MyAccount/BillingInfo/SetupCard";
import OrderHistory from "@/components/MyAccount/BillingInfo/OrderHistory";
import ChangeBilling from "@/components/MyAccount/BillingInfo/ChangeBilling";
import OrderDetails from "@/components/MyAccount/BillingInfo/OrderDetails";
import ShippingDetails from "@/components/MyAccount/BillingInfo/ShippingDetails";
import PaymentDetails from "@/components/MyAccount/BillingInfo/PaymentDetails";
import Loader from "@/common/Loader";
import { FormattedMessage, FormattedNumber } from "react-intl";
import moment from "moment";
import LetsConfirm from "@/components/MyAccount/BillingInfo/LetsConfirm";
import AddNewShippingAddress from "@/components/MyAccount/AccountInfo/AddNewShippingAddress";
import SentSmsCode from "@/components/MyAccount/AccountInfo/SentSmsCode";
import SmsChangeEmail from "@/components/MyAccount/AccountInfo/SmsChangeEmail";
import ChangeAccountInfoBilling from "@/components/MyAccount/AccountInfo/ChangeBilling";
import Notification from "@/components/notification";
import Arrow from "../../assets/images/icons/check-circle-white.svg";
import SentEmailCode from "@/components/MyAccount/AccountInfo/SentEmailCode";
import useGetStartedHook from "../../../hooks/useGetStarted.hook";
import EditShippingAddress from "@/components/MyAccount/AccountInfo/EditShippingAddress";
import { FirstCancellation, SecondCancellation, ThirdCancellation } from "@/common/CancellationSteps";

const CommonSelectionDiv = ({ handleButtonClick, label, para }) => (
  <div className="py-6 border-b border-gray flex items-center justify-between gap-2  group cursor-pointer"
    onClick={handleButtonClick}
  >
    <div>
      <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium group-hover:text-blue transition ease-in-out">
        {label}
      </div>
      <p className="text-t4 text-sm font-medium">
        {para}
      </p>
    </div>
    <ArrowRightIcon className="text-t2  group-hover:text-blue" />
  </div>
)


const AccountInfoPage = (props) => {

  const gettingStartedData = useGetStartedHook(props);
  const {
    currentAccountSelect, autoshipOrders, currentSteps, cancelPopup, _cancellationPopup, cancelStep,
    _activeCancelSubsciption, cancelActiveSuccess, billingSuccessMessage, emailSuccessMsg,
    _onCancelDoneButtton,
    ...data
  } = useMyAccountHook({ ...props, ...gettingStartedData });

  const Component = {
    'billingInfo': {
      // billingInfoInnerStep
      'step1': <BillingInfo {...data} />,
      'step2': <PaymentInfo  {...data} />,
      'step3': <OrderHistory  {...data} />,
      'step4': <ChangeBilling  {...{ ...data, autoshipOrders }} />,

      //paymentInfoInnerpage
      'step5': <AddPaymentInfo {...data} />,
      'step6': <SetupCard {...data} />,

      //OrderHistoryInnerPage
      'step7': <OrderDetails {...data} />,
      'step8': <ShippingDetails {...data} />,
      'step9': <PaymentDetails {...data} />,

      // changeBillingInnerPage
      'step10': <LetsConfirm {...data} />,
    },
    'accountInfo': {
      'step1': <AccountInfo  {...data} />,
      'step2': <ShippingInfo  {...data} />,
      'step3': <ChangeEmail  {...data} />,
      'step4': <ChangePhone  {...data} />,
      'step5': <ChangePassword  {...data} />,

      // shippingInfoInnerpage
      'step6': <AddNewShippingAddress {...{ ...data, ...gettingStartedData }} />,
      'step12': <EditShippingAddress {...{ ...data, ...gettingStartedData }} />,


      //changeEmail
      'step7': <SentSmsCode {...data} />,
      'step8': <SmsChangeEmail {...data} />,
      'step10': <SentEmailCode {...data} />,
      // 'step11': <SentCardCode {...data} />,

      //changePhoneInnerPage
      'step9': <ChangeAccountInfoBilling {...data} />,

    }
  }

  // cancellation steps
  const CancelSteps = {
    'step20': <SecondCancellation loading={data?.checkoutLoading} onClose={_cancellationPopup} onCancel={() => {
      const ID = _.slice(autoshipOrders, 0, 1)[0];
      _activeCancelSubsciption(ID?.recurringOrderId);
    }} />,
    'step21': <ThirdCancellation onDone={() => {
      _onCancelDoneButtton();
    }} email={data?.loginUserData?.emailAddress} onClose={_cancellationPopup} />
  }

  if (cancelStep) {
    return CancelSteps[cancelStep];
  }


  return (
    <>
      {currentAccountSelect

        ?
        Component[currentAccountSelect]?.[_.last(currentSteps)]
        :
        <>
          <div className="max-w-[484px] mx-auto px-4">
            <h3 className="mb-4 mt-8">MY Account</h3>

            <hr className="border-gray my-5" />
            {emailSuccessMsg &&
              <div className="mb-5">
                <Notification
                  icon={<Arrow />}
                  message={emailSuccessMsg}
                />
              </div>
            }
            {(cancelActiveSuccess?.cancel) &&
              <div className="mb-5">
                <Notification
                  icon={<Arrow />}
                  message={props?.intl.formatMessage({ id: "MyAccount.cancelSubscription" })}
                />
              </div>
            }
            {(billingSuccessMessage) &&
              <div className="mb-5">
                <Notification
                  icon={<Arrow />}
                  message={props?.intl.formatMessage({ id: "MyAccount.addressChanged" })}
                />
              </div>}
            <h6 className="label mb-4">MY Subscription</h6>
            {/* {(_.filter(autoshipOrders, { recurringOrderStatusType: 1 })?.length > 0) */}
            {(autoshipOrders?.length > 0)
              ?
              _.map(_.slice(autoshipOrders, 0, 1), (r) => {
                const PRODUCT_DETAIL = (r?.details?.length > 0) ? r?.details[0] : {};
                const PAYMENT = (r?.payments?.length > 0) ? r?.payments[0] : {};
                return (
                  <React.Fragment key={r?.recurringOrderId}>
                    <div className="flex items-center gap-4  mb-5">

                      <div className="relative min-w-[121px]">
                        {(r?.recurringOrderStatusType !== 1) &&
                          <div className="bg-transparent absolute w-full max-w-[121px] min-h-[121px] flex flex-col justify-center items-center bg-[#ffffff7d]">
                            <p className="text-red text-[14px] font-semibold">Subscription</p>
                            <p className="text-red text-[14px] font-semibold">canceled</p>
                          </div>
                        }
                        <img
                          className="max-w-[121px] min-h-[121px]  shadow-[0_0_1px_#333]"
                          src={gettingStartedData?.singleProductData?.image}
                          alt="productImage"
                        />
                      </div>
                      <div>
                        <h6 className="text-lg sm:text-xl text-t4 font-normal ">
                          {PRODUCT_DETAIL?.title}
                        </h6>
                        <h6 className="label !font-bold">
                          <FormattedNumber value={+PRODUCT_DETAIL?.priceEach} style="currency" currency={r?.currencyCode} />
                        </h6>
                        <p className="text-t4 text-sm sm:text-base">
                          Delivered & billed every 3 months
                        </p>
                        <p className="text-t4 text-sm sm:text-base">
                          3 month supply (2mL)
                        </p>
                        <p className="text-t4 text-sm sm:text-base">Qty: {PRODUCT_DETAIL?.quantity}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-2 py-6 text-t4 border-y border-gray group">
                        <div>
                          <p className=" sm:text-base text-sm font-bold mb-2 flex gap-0.5">
                            <Amex /> {PAYMENT?.creditCardDisplay}
                          </p>
                          <div className=" mb-px font-medium group-hover:text-blue transition ease-in-out">
                            MY next delivery and billing date is:
                          </div>
                          <p>{moment(r?.nextProcessDate).format('MMMM DD, YYYY')}</p>
                        </div>
                        {/* <ArrowRightIcon className="text-t2  group-hover:text-blue" /> */}
                      </div>
                      <CommonSelectionDiv label='Manage Billing Info' para="Payment Info, Order History, Delivery & Billing" handleButtonClick={() => {
                        data?.handleButtonClick('billingInfo')
                      }} />
                      <CommonSelectionDiv label='Manage Account Info' para="Shipping Info, Password, Email, Phone Number" handleButtonClick={() => {
                        data?.handleButtonClick('accountInfo')
                      }} />
                    </div>
                    {(r?.recurringOrderStatusType === 1)
                      ?
                      <button type="button" className="primary-button mt-[30px]" onClick={() => _cancellationPopup(true)}>
                        Cancel MY Subscription
                      </button>
                      :
                      <button type="button" className="primary-button mt-[30px]" onClick={() => _activeCancelSubsciption(r?.recurringOrderId, 'active')}>
                        Restart MY Subscription
                      </button>
                    }
                    <FirstCancellation isOpen={cancelPopup} onClose={(sec) => _cancellationPopup(sec)}
                    />
                  </React.Fragment>
                )
              })

              :
              data?.isLoading
                ?
                <Loader />
                :
                <FormattedMessage id='MyAccount.notFond' defaultMessage='notFound' />
            }
          </div>
        </>
      }

    </>
  );
};

export default withRouteHOC(AccountInfoPage);
