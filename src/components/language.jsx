"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import LockIcon from "../assets/images/icons/lock.svg";
import NortonLogo from "../assets/images/norton-logo.png";
import BbbLogo from "../assets/images/bbb-logo.png";
import EnglishFlag from "../assets/images/icons/country-flag.png";

import React from "react";
import { useLanguageContext } from "@/lang/IntlProvider";

const language = [
  { name: "English — USD", value: 'en', flag: EnglishFlag },
  { name: "German — USD", value: 'gr', flag: EnglishFlag },
  { name: "French — USD", value: 'fr', flag: EnglishFlag },
  { name: "Hindi — USD", value: 'ar', flag: EnglishFlag },
  { name: "Spanish — USD", value: 'sp', flag: EnglishFlag },
];

export default function Language() {
  const [selected, setSelected] = useState(language[0]);
  const { setSelectedLanguage } = useLanguageContext();
  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage)
  };

  return (
    <>
      <Listbox value={selected} onChange={(data) => {
        setSelected(data); handleLanguageChange(data.value)
      }}>
        <div className="relative flex items-center">
          <Listbox.Button className="relative w-full cursor-default border-y text-base border-[#D8D8D8] py-6 font-normal outline-none">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              <Image src={selected.flag} alt="flag" className="w-5 h-5 mr-2" />
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <ChevronDownIcon
                className="h-5 w-5 text-border-gray-400"
                aria-hidden="true"
              />
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
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                      ? "bg-sky-100 text-sky-900"
                      : "text-border-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <React.Fragment>
                      <span
                        className={`block truncate ${selected ? "font-medium" : "font-normal"
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
      <div className="flex gap-2.5 mt-6 items-baseline">
        <span className="flex-auto">
          <LockIcon />
        </span>
        Industry-standard encryption to protect the confidentiality of your
        personal information.
      </div>
      <div className="flex items-center gap-4 sm:gap-[33px] border-y py-6 mt-6 border-gray justify-center">
        <Image
          className="max-h-[60px] sm:w-auto object-contain w-full"
          src={NortonLogo}
          alt="logo"
        />
        <Image
          className="max-h-[60px] sm:w-auto object-contain w-full"
          src={BbbLogo}
          alt="logo"
        />
      </div>
    </>
  );
}
