import Image from "next/image";
import PaymentIcon from "../assets/images/icons/payment-group.png";
import ArrowRightIcon from "../assets/images/icons/arrow-right.svg";
import _ from "lodash";
import { cn } from "@/services/Methods/normalMethods";

const CrditDebitPay = ({
  paymentOptions,
  selectedPayment,
  _handlePaymentSelectionFunction,
}) => {

  return (
    _.map(paymentOptions, (row) => {
      return (
        <button
          key={row?.paymentOptionId}
          type="button"
          className={cn("border border-inputcolor  flex items-center w-full gap-2.5 justify-between rounded-[3px] mb-1.5", 'null', {
            "border-2 border-[#51C96D]": (selectedPayment?.selectedPaymentDropdown === row?.paymentOptionId),
            "p-4": _.includes(row?.description, 'Credit')
          })}
          onClick={() => _handlePaymentSelectionFunction(+row?.paymentOptionId)}
        >
          <div className="text-left">
            <p className="text-base sm:text-lg text-t3 mb-2">
              {row?.description}
            </p>
            {_.includes(row?.description, 'Credit') &&
              <Image className="max-w-[159px]" src={PaymentIcon} alt="img" />
            }
          </div>
          <ArrowRightIcon />
        </button>
      )
    }))

};
{/* <button className="border border-inputcolor rounded-[3px] w-full py-2.5 px-4 sm:px-6 flex items-center gap-2.5">
            <span className="mx-auto">
              <ApplePay />
            </span>
            <ArrowRightIcon className="stroke-current" />
          </button> */}
export default CrditDebitPay;
