import React from "react";
import { Disclosure } from "@headlessui/react";
import CloseIcon from "../../../assets/images/icons/close.svg";
import PlusIcon from "../../../assets/images/icons/plus.svg";
import Image from "next/image";
import ClipartImg from "../../../assets/images/clipart-img.png";
import FlagIcon from "../../../assets/images/us-flag-circle-icon.png";

const Faq = () => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={`${open ? "border-b-0" : ""} disclosure-button border-t border-gray`}>
              <span>Benefits</span>
              <PlusIcon className={`${open ? "hidden" : "block"} h-5 w-5`} />
              <CloseIcon className={`${open ? "block" : "hidden"} `} />
            </Disclosure.Button>
            <Disclosure.Panel className="py-4 border-b border-gray text-center">
              <p className="text-t4 text-[13px]">Feel more confident in your</p>
              <h2 className="text-darkpink font-bold">NATURAL</h2>
              <h6 className="text-t1">lashes + brows</h6>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={`${open ? "border-b-0" : ""} disclosure-button`}>
              <span>Ingredients</span>
              <PlusIcon className={`${open ? "hidden" : "block"} h-5 w-5`} />
              <CloseIcon className={`${open ? "block" : "hidden"} `} />
            </Disclosure.Button>
            <Disclosure.Panel className="py-4 border-b border-gray text-center">
              <div className="flex flex-col gap-1">
                {" "}
                <p className="text-t4 font-medium">
                  Made with{" "}
                  <span className="text-darkpink text-[24px] font-bold">
                    integrity
                  </span>
                </p>
                <p className="max-w-[210px] mx-auto text-t4 text-[15px] font-medium">
                  Formulated to eliminate ingredients that are proven harmful
                </p>
              </div>

              <div className="flex mt-14 justify-evenly">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    className="max-w-[56px] w-full"
                    src={ClipartImg}
                    alt="user-img"
                  />
                  <p className="text-t4 text-center font-medium">
                    Made{" "}
                    <span className="text-darkpink font-black">'Clean'</span> in
                    <br />
                    the USA
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    className="max-w-[56px] w-full"
                    src={FlagIcon}
                    alt="user-img"
                  />
                  <p className="text-t4 text-center font-medium">
                    Cruelty free
                    <br />
                    <span className="text-darkpink font-black">+</span> vegan
                  </p>
                </div>
              </div>
              <ul className="text-xs text-t1 mt-8 leading-5">
                <li>
                  Purified Water, Glycerin, Sodium Hyaluronate, Panthenol
                  (Vitamin B5), Biotin, Panax
                </li>
                <li>
                  (South Korean) Ginseng Root Extract, Arctostaphylos Uva-Ursi
                  (of Bearberry) Leaf Extract,
                </li>
                <li>
                  Chamomilla Recutita (of a Matricaria) Flower Extract,
                  Isopropyl Cloprostenate (an analog of
                </li>
                <li>
                  prostaglandin) Hydroxypropyl Methylcellulose, Glucitol, Sodium
                  PCA, Lactic Acid, Butylene
                </li>
                <li>
                  Glycol, 1,2 - Hexanediol, p-acetyl-p-Hydroxyphenyl methyl
                  ketone
                </li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="disclosure-button">
              <span>Getting started?</span>
              <PlusIcon className={`${open ? "hidden" : "block"} h-5 w-5`} />
              <CloseIcon className={`${open ? "block" : "hidden"} `} />
            </Disclosure.Button>
            <Disclosure.Panel className="py-4 border-b border-gray text-center flex flex-col gap-1">
              <p className="text-t4 font-medium">
                Walk,{" "}
                <span className="text-darkpink text-[24px] font-bold">
                  then run
                </span>{" "}
              </p>
              <p className="max-w-[210px] mx-auto text-t4 text-[15px] font-medium">
                Like any beauty product, our skin needs time to get use to it
              </p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="disclosure-button">
              <span>FAQ for MY lash</span>
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
