"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import _ from "lodash";
import moment from "moment";
import Day from "./Day";

const ChangeBilling = (props) => {
  const { _handleSteps, _handleReviewBillingDay, newBillingDay, autoshipOrders } = props;
  return (
    <div className="max-w-[484px] mx-auto px-4 pt-12">
      <span
        className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center  cursor-pointer"
        onClick={() => _handleSteps('back')}
      >
        <ChevronLeftIcon className="w-4 h-4 stroke-current" />
      </span>
      <h3 className="mb-4 mt-8">Choose a new delivery & billing day</h3>
      <p className="text-t4 mb-0 text-base ">
        Currently your subscription delivers and is billed on the{" "}
        <b>{moment(autoshipOrders?.[0]?.nextProcessDate).format('Do')}, every 3 months.</b> If you want, you can change the
        delivery and billing day below.
      </p>
      <div className="mt-6 w-full mb-2 text-t5 text-xs">
        Your new delivery and billing day
      </div>

      <div className="flex gap-4 items-center">
        <div className="max-w-[172px] w-full">
          <Day {...props} />
        </div>
        <span className="text-t4">every 3 months</span>
      </div>
      {newBillingDay?.error && <p className="text-md text-red mt-3">{newBillingDay?.error}</p>}

      <button type="button" className="primary-button mt-8" onClick={() => _.isNull(newBillingDay?.value) ? _handleReviewBillingDay() : _handleSteps('step10')}>
        Review & Confirm
      </button>
      <button type="button" className="primary-button-outlined mt-2" onClick={() => _handleSteps('back')}>Cancel</button>
    </div >

  );
};

export default ChangeBilling;
