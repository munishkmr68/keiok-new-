"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import ArrowRightIcon from "../assets/images/icons/arrow-right.svg";
import Close from "../assets/images/icons/close-circle.svg";
import Language from "@/components/languageStandAlone";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import localStorageCall from "@/services/Methods/localstorage.hook";
import { _logoutFunction } from "@/services/Methods/normalMethods";
import useMyAccountHook from "../../hooks/useMyAccount.hook";
import useGetStartedHook from "../../hooks/useGetStarted.hook";
import withRouteHOC from "@/HOC/withRouteHOC";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Menu = (props) => {
  const { section, popupOpen } = props;
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const gettingStartedData = useGetStartedHook(props);
  const { autoshipOrders } = useMyAccountHook({
    ...props,
    ...gettingStartedData,
  });
  const IsSubcriptionCheck =
    autoshipOrders?.[0]?.recurringOrderStatusType === 1;
  useEffect(() => {
    if (section === "gettingStarted") {
    }
  }, [popupOpen]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleClick = () => {
    console.log("in signin");
    window.location.assign("/signin");
    setIsOpen(false);
  };
  const isUserLogin = localStorageCall().getItem("Token");
  const data = useSelector((state) => state?.LoginSlice);
  const handleLogout = () => {
    console.log("in logout");
    _logoutFunction("redirect", data?.alluserData);
    setIsOpen(false);
  };
  const _redirectionOnMenu = (section) => {
    if (IsSubcriptionCheck) {
      router.push(isUserLogin ? `/earnmyway/${section}` : `/join/${section}`);
      setIsOpen(false);
    }
  };

  const handleCloseOption = () => {
    router?.push("/");
    setIsOpen(false);
  };

  return (
    <>
      <Bars3Icon onClick={openModal} className="size-8 ml-auto text-t3" />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform mt-24 p-7 bg-white text-left align-middle transition-all">
                  <div className="relative flex items-center">
                    {autoshipOrders?.[0]?.recurringOrderStatusType !== 1 && (
                      <>
                        <div className="bg-transparent absolute w-full min-h-[61px] mt-20 flex justify-center items-left bg-[#ffffff7d]">
                          {isUserLogin && (
                            <p className="text-red text-[14px] font-semibold">
                              No subscription found for the User.
                              {/* Please <a
                            onClick={() => {
                              router.push('/');
                              setIsOpen(false);
                            }} className="cursor-pointer">Subscribe</a> */}
                            </p>
                          )}
                        </div>
                        <Close
                          className="mb-5 sm:mb-24 ml-auto cursor-pointer"
                          onClick={closeModal}
                        />
                      </>
                    )}
                  </div>
                  <div className="divide-y divide-gray border-t border-gray">
                    <div
                      className={`py-6 flex items-center justify-between gap-2 group ${
                        IsSubcriptionCheck && "cursor-pointer"
                      }`}
                      onClick={() => _redirectionOnMenu("ambassador")}
                    >
                      <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium group-hover:text-blue transition ease-in-out">
                        Join as a Brand Ambassador
                      </div>
                      <ArrowRightIcon className="transition ease-in-out group-hover:text-blue" />
                    </div>
                    <div
                      className={`py-6 flex items-center justify-between gap-2 group ${
                        IsSubcriptionCheck && "cursor-pointer"
                      }`}
                      onClick={() => _redirectionOnMenu("affiliate")}
                    >
                      <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium group-hover:text-blue transition ease-in-out ">
                        Join as a Brand Affiliate
                      </div>
                      <ArrowRightIcon className="transition ease-in-out group-hover:text-blue" />
                    </div>
                    <div
                      className={`py-6 flex items-center justify-between gap-2 group ${
                        IsSubcriptionCheck && "cursor-pointer"
                      }`}
                      onClick={() => handleCloseOption()}
                    >
                      <div className="text-t2 mb-0.5 sm:text-lg text-base font-medium group-hover:text-blue transition ease-in-out ">
                        Getting Started
                      </div>
                      <ArrowRightIcon className="transition ease-in-out group-hover:text-blue" />
                    </div>
                  </div>
                  <Language />

                  {isUserLogin ? (
                    <button
                      className="dark-button mt-[30px]"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      className="dark-button mt-[30px]"
                      onClick={handleClick}
                    >
                      Sign in
                    </button>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default withRouteHOC(Menu);
