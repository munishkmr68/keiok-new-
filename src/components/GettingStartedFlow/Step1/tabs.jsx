import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Ambassador from "./ambassador";
import Affiliate from "./affiliate";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = (props) => {
  const { BrandType, selectedBrandType, setSelectedBrandType, router } = props;
  const handleTabChange = () => {
    if (selectedBrandType === 0) {
      setSelectedBrandType(1)
    }
    else {
      setSelectedBrandType(0)
    }
  }
  useEffect(() => {
    if (BrandType === "affiliate") {
      setSelectedBrandType(1)
    }
    else {
      setSelectedBrandType(0)
    }
  }, [])
  return (
    <Tab.Group selectedIndex={selectedBrandType} onChange={handleTabChange}>
      <div className="max-w-[484px] mx-auto px-4">
        <Tab.List className="flex">
          <Tab
            className={({ selected }) =>
              classNames(
                "tab-button -mr-4",
                "",
                selected ? "tab-button-selected" : ""
              )
            }
          >
            Brand Ambassador
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "tab-button -ml-4",
                "",
                selected ? "tab-button-selected" : ""
              )
            }
          >
            Brand Affiliate
          </Tab>
        </Tab.List>
      </div>
      <Tab.Panels>
        <Tab.Panel
          className={classNames(
            "rounded-xl bg-white",
            "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          )}
        >
          <Ambassador />
        </Tab.Panel>

        <Tab.Panel
          className={classNames(
            "rounded-xl bg-white",
            "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          )}
        >
          <Affiliate />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
