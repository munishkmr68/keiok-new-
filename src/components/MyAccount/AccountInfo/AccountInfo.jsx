"use client";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-customizable.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Arrow from "../../../assets/images/icons/check-circle-white.svg";
import Notification from "@/components/notification";

const AccountInfo = (props) => {
  const { _handleSteps, successMsg, handleButtonClick } = props;
  return (
    <div className="max-w-[484px] mx-auto px-4 pt-12">
      <span
        className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
        onClick={() => handleButtonClick('')}
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </span>
      <div className="mt-5">
        {successMsg &&
          <Notification
            icon={<Arrow />}
            message={successMsg}
          />
        }
      </div>
      <h3 className="mt-8 mb-6">Manage Account Info</h3>
      <div>
        {_.map([
          { label: 'Manage Shipping Info', step: 'step2' },
          { label: 'Change Email', step: 'step3' },
          { label: 'Change Phone Number', step: 'step4' },
          { label: 'Change Password', step: 'step5' }
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

export default AccountInfo;
