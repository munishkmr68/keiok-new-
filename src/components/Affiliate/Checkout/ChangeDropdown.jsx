import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function ChangeDropdown({ onClick }) {
    return (
        <div className=" text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center items-center text-blue text-xs" onClick={onClick}>
                        Change
                        <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5 text-blue"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item onClick={onClick}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? " text-blue" : "text-t2"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Edit
                                    </button>
                                )}
                            </Menu.Item>

                        </div>
                    </Menu.Items>
                </Transition> */}
            </Menu>
        </div>
    );
}
