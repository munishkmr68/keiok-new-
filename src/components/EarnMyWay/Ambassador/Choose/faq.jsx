import React from "react";
import { Disclosure } from "@headlessui/react";
import CloseIcon from "../../../../assets/images/icons/close.svg";
import PlusIcon from "../../../../assets/images/icons/plus.svg";

const Faq = () => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="disclosure-button border-t border-gray">
              <span>FAQ for Brand Ambassador</span>
              <PlusIcon className={`${open ? "hidden" : "block"} h-5 w-5`} />
              <CloseIcon className={`${open ? "block" : "hidden"} `} />
            </Disclosure.Button>
            <Disclosure.Panel className="py-4 border-b border-gray">
              Sed commodo tincidunt finibus. Proin volutpat sollicitudin congue.
              Nullam fringilla erat quam, vel tincidunt mauris commodo vel.
              Integer vestibulum sapien quis justo efficitur mollis
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="disclosure-button">
              <span>FAQ for Brand Affiliate</span>
              <PlusIcon className={`${open ? "hidden" : "block"} h-5 w-5`} />
              <CloseIcon className={`${open ? "block" : "hidden"} `} />
            </Disclosure.Button>
            <Disclosure.Panel className="py-4 border-b border-gray">
              Sed commodo tincidunt finibus. Proin volutpat sollicitudin congue.
              Nullam fringilla erat quam, vel tincidunt mauris commodo vel.
              Integer vestibulum sapien quis justo efficitur mollis
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Faq;
