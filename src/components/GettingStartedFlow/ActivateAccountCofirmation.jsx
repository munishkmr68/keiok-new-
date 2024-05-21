"use client";
import Image from "next/image";
import Language from "@/components/language";
import Arrow from "../../assets/images/icons/check-circle-white.svg";
import ArrowRightIcon from "../../assets/images/icons/arrow-right.svg";
import Amex from "../../assets/images/icons/amex.svg";
import Notification from "@/components/notification";
import PrdImg from "../../assets/images/prd-img.png";
import Footer from "@/common/Footer";
import { useRouter } from "next/navigation";

const ActivateAccountCofirmation = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/");
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto px-4">
        <h3 className="mb-4 mt-8">MY Account</h3>
        <Notification
          icon={<Arrow />}
          message="Hey Jancy, your account has been successfully activated."
        />
        <hr className="border-gray my-5" />
        <h6 className="label mb-4">MY Subscription</h6>
        <div className="flex items-center gap-4  mb-5">
          <Image
            className="max-w-[121px]  shadow-[0_0_1px_#333]"
            src={PrdImg}
            alt="user-img"
          />
          <div>
            <h6 className="text-lg sm:text-xl text-t4 font-normal ">
              MY lash serum
            </h6>
            <h6 className="label !font-bold">$58</h6>
            <p className="text-t4 text-sm sm:text-base">
              Delivered & billed every 3 months
            </p>
            <p className="text-t4 text-sm sm:text-base">3 month supply (2mL)</p>
            <p className="text-t4 text-sm sm:text-base">Qty: 1</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-2 py-6 text-t4 border-y border-gray">
            <div>
              <p className=" sm:text-base text-sm font-bold mb-2 flex gap-0.5">
                <Amex /> ... 1002
              </p>
              <div className=" mb-px font-medium">
                MY next delivery and billing date is:
              </div>
              <p> September 16, 2023</p>
            </div>
            <ArrowRightIcon />
          </div>

          <div className="py-6 border-b border-gray flex items-center justify-between gap-2">
            <div>
              <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium">
                Manage Billing Info
              </div>
              <p className="text-t4 text-sm font-medium">
                Payment Info, Order History, Delivery & Billing
              </p>
            </div>
            <ArrowRightIcon />
          </div>
          <div className="py-6 border-b border-gray flex items-center justify-between gap-2">
            <div>
              <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium">
                Manage Billing Info
              </div>
              <p className="text-t4 text-sm font-medium">
                Payment Info, Order History, Delivery & Billing
              </p>
            </div>
            <ArrowRightIcon />
          </div>
          <div className="py-6 border-b border-gray flex items-center justify-between gap-2">
            <div>
              <div className="text-t2 mb-0.5 font-medium">
                Manage Account Info
              </div>
              <p className="text-t4 text-sm font-medium">
                Payment Info, Order History, Delivery & Billing
              </p>
            </div>
            <ArrowRightIcon />
          </div>
        </div>

        <button
          className="primary-button mt-[30px]"
          onClick={handleButtonClick}
        >
          Cancel MY Subscription
        </button>
      </div>

      <div className="max-w-[484px] mx-auto px-4 py-8">
        <div className="mt-16">
          <Language />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActivateAccountCofirmation;
