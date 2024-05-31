"use client";
import React from "react";
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import FlagUS from "../../../assets/images/icons/flag-us.svg";
import FlagUK from "../../../assets/images/icons/flag-uk.svg";
import FlagAustralia from "../../../assets/images/icons/flag-australia.svg";
import FlagGermany from "../../../assets/images/icons/flag-germany.svg";
import FlagFrance from "../../../assets/images/icons/flag-france.svg";
import Inputbox from "@/components/inputbox";

const country = [
  { name: "United States (+1)", code: "(+1)", flag: <FlagUS /> },
  { name: "United Kingdom (+44)", code: "(+44)", flag: <FlagUK /> },
  { name: "Australia (+61)", code: "(+61)", flag: <FlagAustralia /> },
  { name: "Germany (+49)", code: "(+49)", flag: <FlagGermany /> },
  { name: "France (+33)", code: "(+33)", flag: <FlagFrance /> },
];

export default function ChangePhoneField({
  label,
  htmlFor,
  id,
  className,
  name,
  disabled,
  field,
  value
}) {
  const [selected, setSelected] = useState(country[0]);

  return (
    <div
      className={`flex border border-input1 rounded-[3px] bg-white ${className}`}
    >
      <Listbox value={selected} onChange={setSelected} disabled={disabled}{...field}>
        <div className="relative flex items-center">
          <Listbox.Button className={`relative w-[118px] px-3.5  cursor-default text-sm text-input1 font-medium gap-2 border-gray outline-none flex items-center ${disabled ? 'text-[#CFCFCF]' : 'text-[#000]'}`}>
            <span className="pointer-events-none flex items-center w-6 h-6">
              {selected.flag}
            </span>
            <span className="block truncate">{selected.code}</span>
            <span className="pointer-events-none flex items-center">
              <ChevronDownIcon
                className="h-4 w-4 text-border-gray-400"
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
            <Listbox.Options className="absolute mt-1 top-full max-h-60  w-[250px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {country.map((person, personIdx) => (
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

      <div className={`relative flex-1 ${disabled && 'text-[#CFCFCF]'}`}>
        <input
          {...field}
          name={name}
          id={id}
          value={value}
          disabled={disabled}
          placeholder=""
          className={`floating-input border-0 border-l focus-visible:border-input1 rounded-none peer ${disabled ? 'text-[#CFCFCF]' : 'text-[#000]'}`}
        />
        <label htmlFor={htmlFor} className={`floating-label ${disabled ? 'text-[#CFCFCF]' : 'text-[#000]'}`}>
          {label}
        </label>
      </div>
    </div >
  );
}
