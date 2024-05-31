"use client";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-customizable.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";


const BillingInfo = (props) => {

  const { _handleSteps, handleButtonClick } = props;

  return (
    <div className="max-w-[484px] mx-auto px-4 pt-12">
      <span
        className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
        onClick={() => handleButtonClick('')}
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </span>
      <h3 className="mt-8 mb-6">Manage Billing Info</h3>
      <div>
        {_.map([
          { label: 'Manage Payment Info', step: 'step2' },
          { label: 'Order History', step: 'step3' },
          { label: 'Change Delivery & Billing Day', step: 'step4' }
        ], (row) => (
          <div key={row?.step} className="py-6 border-t border-b border-gray flex items-center justify-between gap-2 group cursor-pointer"
            onClick={() => _handleSteps(row?.step)}>
            <div>
              <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium  group-hover:text-blue transition ease-in-out">
                {row?.label}
              </div>
            </div>
            <ArrowRightIcon className="text-t2  group-hover:text-blue" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingInfo;
