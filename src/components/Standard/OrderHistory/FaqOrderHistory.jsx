import React from 'react'
import { Disclosure, Tab } from "@headlessui/react";
import CloseIcon from "../../../assets/images/icons/close.svg";
import PlusIcon from "../../../assets/images/icons/plus.svg";

const FaqOrderHistory = () => {
  return (
    <div className="mt-14 mb-24 ">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="disclosure-button"></Disclosure.Button>
        </>
      )}
    </Disclosure>
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="disclosure-button">
            <span>FAQ for Order History</span>
            <PlusIcon
              className={`${open ? "hidden" : "block"} h-5 w-5`}
            />
            <CloseIcon className={`${open ? "block" : "hidden"} `} />
          </Disclosure.Button>
          <Disclosure.Panel className="py-4 border-b border-gray">
            Sed commodo tincidunt finibus. Proin volutpat sollicitudin
            congue. Nullam fringilla erat quam, vel tincidunt mauris
            commodo vel. Integer vestibulum sapien quis justo efficitur
            mollis
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
  )
}

export default FaqOrderHistory