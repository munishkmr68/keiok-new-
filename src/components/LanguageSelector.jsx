"use client";
import Image from "next/image";
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

// Import flag icons or images for each language
import EnglishFlag from "../assets/images/icons/country-flag.png";

import React from "react";

const language = [
  { name: "English — USD", flag: EnglishFlag },
  { name: "German — USD", flag: EnglishFlag },
  { name: "French — USD", flag: EnglishFlag },
  { name: "Hindi — USD", flag: EnglishFlag },
  { name: "Spanish — USD", flag: EnglishFlag },
];

export default function LanguageSelector() {
  const [selected, setSelected] = useState(language[0]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative flex items-center">
          {/* Display the language flag */}
          <Listbox.Button className="relative w-full cursor-default border-y text-base font-medium text-t4 border-gray py-4 outline-none">
            <div className="flex items-center">
              <span className="mr-3">Edition:</span>
              <span className="pointer-events-none">
                <Image
                  src={selected.flag}
                  alt="flag"
                  className="w-5 h-5 mr-2"
                />
              </span>
              <span className="block truncate">{selected.name}</span>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 top-full max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {language.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-sky-100 text-sky-900"
                        : "text-border-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <React.Fragment>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </React.Fragment>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
}
