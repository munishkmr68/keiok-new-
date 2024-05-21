import { Tab } from "@headlessui/react";
import { useState } from "react";

const tabListStyle = {
  // Style for the tab list
  display: "flex",
  listStyle: "none",
  padding: 0,
  margin: 0,
  borderRadius: "24px",
  border: "1px solid #1990C6",
};

const tabButtonStyle = {
  // Style for individual tab buttons
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  backgroundColor: "#ddd",
  color: "#333",
  fontWeight: "bold",
  marginRight: "0px",
  outline: "none", // Remove outline on tab buttons
};

const tabbutton = {
  borderRadius: "24px",
};

function MyTabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <Tab.Group>
        <div className="max-w-[484px] mx-auto px-4">
          <Tab.List style={tabListStyle}>
            {tabs.map((tab, index) => (
              <Tab className="w-1/2 outline-0" style={tabbutton} key={index}>
                {({ selected }) => (
                  <div
                    style={{
                      ...tabButtonStyle,
                      backgroundColor: selected ? "#1990C6" : "#fff",
                      color: selected ? "#fff" : "#1990C6",
                      borderRadius: "24px",
                      fontWeight: 400,
                    }}
                    onClick={() => setSelectedTab(index)}
                  >
                    {tab.label}
                  </div>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels>
          {tabs.map((tab, index) => (
            <Tab.Panel key={index}>
              {selectedTab === index && <div>{tab.content}</div>}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default MyTabs;
