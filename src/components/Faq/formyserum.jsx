import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const ForMySerum = () => {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="disclosure-button-inner">
              <span>How to Use</span>
              <ChevronUpIcon
                className={`${open ? "" : "rotate-180 transform"} h-5 w-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="py-4 border-b border-gray">
              <div className="mb-4">
                <iframe
                  className="w-full aspect-video"
                  title="How to Use Video"
                  src="https://www.youtube.com/embed/8So9OCr_HEA?si=7qNwGnq0aM3kt0Wp"
                  allowFullScreen
                ></iframe>
              </div>
              <ul className="text-t4">
                <li>step1:</li>
                <li>step3:</li>
                <li>step2:</li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="disclosure-button-inner">
              <span>Ingredients</span>
              <ChevronUpIcon
                className={`${open ? "" : "rotate-180 transform"} h-5 w-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="py-4 border-b border-gray">
              <div className="mb-4 text-t2">Title</div>
              <p className="text-t4">
                Nam vel diam dignissim, aliquam justo quis, vehicula nulla.
                Vivamus porttitor nunc ac ipsum accumsan, at hendrerit enim
                ultricies. Nunc sit amet metus laoreet,{" "}
              </p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="disclosure-button-inner">
              <span>When to Use</span>
              <ChevronUpIcon
                className={`${open ? "" : "rotate-180 transform"} h-5 w-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="py-4 border-b border-gray">
              <div className="mb-4 text-t2">Title</div>
              <p className="text-t4">
                Nam vel diam dignissim, aliquam justo quis, vehicula nulla.
                Vivamus porttitor nunc ac ipsum accumsan, at hendrerit enim
                ultricies. Nunc sit amet metus laoreet,{" "}
              </p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ForMySerum;
