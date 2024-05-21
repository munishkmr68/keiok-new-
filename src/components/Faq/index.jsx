import React from "react";
import { Disclosure } from "@headlessui/react";
import CloseIcon from "../../assets/images/icons/close.svg";
import PlusIcon from "../../assets/images/icons/plus.svg";
import ForMySerum from "./formyserum";

const Faq = ({ title }) => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="disclosure-button">
              <span>FAQ for {title}</span>
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
              <span>FAQ for shipping & returns</span>
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
              <span>FAQ for subscription</span>
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
              <span>FAQ for payment</span>
              <PlusIcon className={`${open ? "hidden" : "block"} h-5 w-5`} />
              <CloseIcon className={`${open ? "block" : "hidden"} `} />
            </Disclosure.Button>
            <Disclosure.Panel>
              <ForMySerum />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Faq;
