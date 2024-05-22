import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg p-4 text-sm font-bold text-t4 shadow-shadow1 border min-h-[86px] border-gray text-left focus:outline-none",
                selected ? " text-t3 bg-lightpink" : " hover:text-darkpink"
              )
            }
          >
            MY club
            <br />
            <span className="text-[13px]">(Most Popular)</span>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg p-4 text-sm font-bold text-t4 shadow-shadow1 border min-h-[86px] border-gray text-left focus:outline-none",
                selected ? " text-t3 bg-lightpink" : " hover:text-darkpink"
              )
            }
          >
            Standard
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg p-4 text-sm font-bold text-t4 shadow-shadow1 border min-h-[86px] border-gray text-left focus:outline-none",
                selected ? " text-t3 bg-lightpink" : " hover:text-darkpink"
              )
            }
          >
            1-time buy
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <ul>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <h3 className="text-sm font-medium leading-5">
                  Does drinking coffee make you smarter?
                </h3>
                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>5h ago</li>
                  <li>&middot;</li>
                  <li>5 comments</li>
                  <li>&middot;</li>
                  <li>2 shares</li>
                </ul>
                <a
                  href="#"
                  className={classNames(
                    "absolute inset-0 rounded-md",
                    "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                  )}
                />
              </li>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <h3 className="text-sm font-medium leading-5">
                  So you've bought coffee... now what?
                </h3>
                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>2h ago</li>
                  <li>&middot;</li>
                  <li>3 comments</li>
                  <li>&middot;</li>
                  <li>2 shares</li>
                </ul>
                <a
                  href="#"
                  className={classNames(
                    "absolute inset-0 rounded-md",
                    "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                  )}
                />
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <ul>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <h3 className="text-sm font-medium leading-5">
                  Is tech making coffee better or worse?
                </h3>
                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>Jan 7</li>
                  <li>&middot;</li>
                  <li>29 comments</li>
                  <li>&middot;</li>
                  <li>16 shares</li>
                </ul>
                <a
                  href="#"
                  className={classNames(
                    "absolute inset-0 rounded-md",
                    "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                  )}
                />
              </li>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <h3 className="text-sm font-medium leading-5">
                  The most innovative things happening in coffee
                </h3>
                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>Mar 19</li>
                  <li>&middot;</li>
                  <li>24 comments</li>
                  <li>&middot;</li>
                  <li>12 shares</li>
                </ul>
                <a
                  href="#"
                  className={classNames(
                    "absolute inset-0 rounded-md",
                    "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                  )}
                />
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <ul>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <h3 className="text-sm font-medium leading-5">
                  Ask Me Anything: 10 answers to your questions about coffee
                </h3>
                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>2d ago</li>
                  <li>&middot;</li>
                  <li>9 comments</li>
                  <li>&middot;</li>
                  <li>5 shares</li>
                </ul>
                <a
                  href="#"
                  className={classNames(
                    "absolute inset-0 rounded-md",
                    "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                  )}
                />
              </li>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <h3 className="text-sm font-medium leading-5">
                  The worst advice we've ever heard about coffee
                </h3>
                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>4d ago</li>
                  <li>&middot;</li>
                  <li>1 comment</li>
                  <li>&middot;</li>
                  <li>2 shares</li>
                </ul>
                <a
                  href="#"
                  className={classNames(
                    "absolute inset-0 rounded-md",
                    "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                  )}
                />
              </li>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
