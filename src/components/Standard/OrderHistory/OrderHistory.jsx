"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import Footer from "@/common/Footer";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import DateChanger from "./DateChanger";
import PaymentTabContent from "./PaymentTabContent";
import OrderTabContent from "./OrderTabContent";
import ShippingTabContent from "./ShippingTabContent";
import FaqOrderHistory from "./FaqOrderHistory";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const OrderHistory = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4 mt-7">
        <div className="border-1 rounded-xl shadow-shadow1 border-gray p-6 pb-0 overflow-hidden">
          <div className="mb-6">
            <DateChanger />
          </div>
          <Tab.Group>
            <div className="w-full max-w-[484px] mx-auto px-4 mb-6">
              <Tab.List className="flex  rounded-md bg-[#f7f7f7] h-[30px]">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-md ",
                      selected ? " text-whiteColor bg-blue" : " hover:text-t3"
                    )
                  }
                >
                  Order
                  <br />
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-md",
                      selected ? " text-whiteColor bg-blue" : " hover:text-t3"
                    )
                  }
                >
                  Shipping
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-md",
                      selected ? " text-whiteColor bg-blue" : " hover:text-t3"
                    )
                  }
                >
                  Payment
                </Tab>
              </Tab.List>
            </div>
            <Tab.Panels className="w-full">
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white ",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <OrderTabContent />
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white ",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ShippingTabContent />
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <PaymentTabContent />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mt-7">
        <FaqOrderHistory />
      </div>

      <Footer />
    </>
  );
};

export default OrderHistory;
