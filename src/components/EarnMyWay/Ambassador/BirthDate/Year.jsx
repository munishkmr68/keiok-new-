"use client";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import SelectArrow from "../../../../assets/images/icons/select-arrow.svg";
import React from "react";

export default function Year({ props, fieldValue }) {
  const { years, currentYear, setFormData } = props;
  return (
    <>
      <Listbox
        name="selectedYear"
        value={fieldValue?.values?.selectedYear}
        onChange={(data) => {
          fieldValue?.setFieldValue("selectedYear", data);
          setFormData((prv) => ({ ...prv, selectedYear: data }))
        }}>
        <div className="relative flex items-center z-10">
          <Listbox.Button className="relative w-full cursor-default selectbox outline-none text-left">
            <span className="truncate">{fieldValue?.values?.selectedYear ? fieldValue?.values?.selectedYear : "Select Year"}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5">
              <SelectArrow />
            </span>
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 top-full max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {years.map((year, yearIdx) => (
                year <= (currentYear - 18) && <Listbox.Option
                  key={yearIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4  ${active
                      ? "bg-sky-100 text-sky-900"
                      : "text-border-gray-900"
                    }`
                  }
                  value={year}
                >
                  {({ selectedYear }) => (
                    <React.Fragment>
                      <span
                        className={`block truncate ${selectedYear ? "font-medium" : "font-normal"
                          }`}
                      >
                        {year}
                      </span>
                      {selectedYear ? (
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
