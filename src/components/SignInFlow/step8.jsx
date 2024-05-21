"use client";
import Tabs from "@/components/tabs";
import Footer from "@/common/Footer";
import { Disclosure } from "@headlessui/react";
import CloseIcon from "@/assets/images/icons/close.svg";
import PlusIcon from "@/assets/images/icons/plus.svg";
import ForMySerum from "@/components/Faq/formyserum";
import Language from "@/components/language";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg"
import { FormattedMessage } from "react-intl";
import ButtonNextStep from "@/common/buttonNextStep";

function Step9(props) {
  const { onContinueClick } = props
  const handleButtonClick = () => {
    onContinueClick()
  }
  const tabsData = [
    {
      label: 'Brand Ambassador',
      content: (
        <div>
          <div className="max-w-[484px] mx-auto  px-4">
            <h3 className="mt-5 mb-3">
              <FormattedMessage id="inviteBrandAmbassador" />
            </h3>
          </div>
          <div className="bg-pink">
            <div className="max-w-[484px] mx-auto  px-4 py-2">
              <span className="text-base sm:text-lg font-medium">
                <FormattedMessage id="joiningFree" />
              </span>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto  px-4 pt-7 pb-[30px]">
            <ul className="text-t4 space-y-1">
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  <FormattedMessage id="kiokHandlesText" />
                </span>
              </li>
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  <FormattedMessage id="noOrderMinimum" defaultMessage="No order minimums" />

                </span>
              </li>
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  <FormattedMessage id="noCommitments" defaultMessage="No commitments" />
                </span>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      ),
    },
    {
      label: 'Brand Affiliate',
      content: (
        <div>
          <div className="max-w-[484px] mx-auto  px-4">
            < h3 className="mt-5 mb-3" >
              <FormattedMessage id="inviteBrandAmbassador" />
            </h3 >
          </div >
          <div className="bg-pink">
            <div className="max-w-[484px] mx-auto  px-4 py-2">
              <span className="text-base sm:text-lg font-medium">
                <FormattedMessage id="joiningFree" />
              </span>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto  px-4 pt-7 pb-[30px]">
            <ul className="text-t4 space-y-1">
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  <FormattedMessage id="kiokHandlesText" />

                </span>
              </li>
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  <FormattedMessage id="noOrderMinimum" defaultMessage="No order minimums" />
                </span>
              </li>
              <li className="flex gap-2">
                <CheckmarkIcon className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">
                  <FormattedMessage id="noCommitments" defaultMessage="No commitments" />
                </span>
              </li>
            </ul>
          </div>
          <div></div>
        </div >
      ),
    },
  ];

  return (
    <>
      <div className="py-12">
        <div className="">
          <Tabs tabs={tabsData} />
          <div className="max-w-[484px] mx-auto px-4">
            <div className='border-t border-[#D8D8D8]'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="disclosure-button">
                      <span>
                        <FormattedMessage id="faqBrandAmbassador" defaultMessage="FAQ for Brand Ambassador" />
                      </span>
                      <PlusIcon className={`${open ? "hidden" : "block"} h-5 w-5`} />
                      <CloseIcon className={`${open ? "block" : "hidden"} `} />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ForMySerum />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="disclosure-button">
                      <span>
                        <FormattedMessage id="faqBrandAffiliate" defaultMessage="FAQ for Brand Affiliate" />
                      </span>
                      <PlusIcon className={`${open ? "hidden" : "block"} h-5 w-5`} />
                      <CloseIcon className={`${open ? "block" : "hidden"} `} />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ForMySerum />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto px-4">
            <div className="mt-24">
              <Language />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ButtonNextStep handleClick={handleButtonClick} amt="" label="Continue" />
        </div>
      </div>
    </>
  );
}
export default Step9;