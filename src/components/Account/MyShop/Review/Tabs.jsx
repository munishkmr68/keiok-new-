import { Disclosure, Tab } from "@headlessui/react";
import Image from "next/image";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import clipart from "../../../../assets/images/clipart-img.png";

import {
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  LockClosedIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import { useRouter } from "next/navigation";
import ChangeLevelPay from "./ChangeLevelPay";
import ChangeWebsiteName from "./ChangeWebsiteName";
import ChangeClubName from "./ChangeClubName";
import ChangeProfileImage from "./ChangeProfileImage";
import ChangeZoomMe from "./ChangeZoomMe";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ReviewTabs() {
  const router = useRouter();
  const [showLevel, setShowLevel] = useState(false);
  const [level, setLevel] = useState("Activated");
  const [showWebsite, setShowWebsite] = useState(false);
  const [website, setWebsite] = useState("");
  const [showClub, setShowClub] = useState(false);
  const [club, setClub] = useState("");
  const [showZoom, setShowZoom] = useState(false);
  const [zoom, setZoom] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);
  return (
    <>
      <div className="w-full max-w-md px-2 py-6 sm:px-0">
        <Tab.Group>
          <Tab.List className="mb-5 flex rounded-md bg-[#f7f7f7] h-[30px]">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md ",
                  selected ? " text-whiteColor bg-blue" : " hover:text-t3"
                )
              }
            >
              Account
              <br />
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md",
                  selected ? " text-whiteColor bg-blue" : " hover:text-t3"
                )
              }
            >
              MY club
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md",
                  selected ? " text-whiteColor bg-blue" : " hover:text-t3"
                )
              }
            >
              Earn
            </Tab>
          </Tab.List>

          <Tab.Panels className="mt-5 ">
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white ",
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
                "rounded-xl bg-white ",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="max-w-[484px] mx-auto ">
                <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center justify-between  ">
                  <span className="mx-auto">
                    setup
                    <span className="text-darkpink"> MY club</span>
                  </span>

                  <ChevronDownIcon className="w-5 h-5 " />
                </button>
                <div className="flex items-center mt-[30px] gap-4">
                  <Image
                    className="w-[140px] h-[140px] rounded-full"
                    src={profileImg}
                    alt="user-img"
                  />
                  <div>
                    <span className="text-t4 text-[10px] font-bold flex items-center gap-1">
                      <span className="text-t5 font-[450]">REVIEW</span>
                    </span>

                    <h4 className="mb-0.5 text-t4 font-bold leading-tight">
                      Does everything
                      <br />
                      look right?
                    </h4>

                    <p className="font-medium text-sm">
                      <span className="text-[9px]">with</span> Ashley Jackson
                    </p>
                  </div>
                </div>
                <div className="text-t4 text-sm mt-6 font-[420] p-0 ">
                  You can change your profile image anytime.
                </div>

                <div className=" text-t3 text-sm mt-3 text-[15px] font-[420] p-0">
                  <p>No commitments</p>
                  <p>No fees</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden ">
                  <div className="max-w-[484px] mt-0 pl-6 pt-4 pb-4">
                    <h6 className=" text-[13px] text-left ">
                      <span className="font-bold">
                        MY personal sales commission
                      </span>
                      <br />
                      28%
                    </h6>
                    <div className="w-full max-w-[400px] mt-6">
                      <hr className="text-gray" />
                    </div>
                    <div className="max-w-[484px] mt-0 pt-4 ">
                      <h6 className=" text-[13px] text-left flex flex-2 justify-between ">
                        <span>
                          <p className="font-bold">MY Level Pay</p>
                          {level}
                        </span>
                        <span
                          className="flex mr-6 text-blue"
                          onClick={() => {
                            setShowLevel(!showLevel);
                          }}
                        >
                          <p>Change</p>
                          {!showLevel ? (
                            <ChevronDownIcon className="w-3 h-4 ml-[3px] mt-2" />
                          ) : (
                            <ChevronUpIcon className="w-3 h-4 ml-[3px] mt-2" />
                          )}
                        </span>
                      </h6>
                      {showLevel && (
                        <>
                          <div className="pr-6 sm:p-0">
                            <ChangeLevelPay
                              setLevel={setLevel}
                              level={level}
                              setShowLevel={setShowLevel}
                            />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="w-full max-w-[400px] mt-6">
                      <hr className="text-gray" />
                    </div>
                    <div className="max-w-[484px] mt-0 pt-4 ">
                      <h6 className=" text-[13px] text-left flex flex-2 justify-between ">
                        <span>
                          <p className="font-bold">MY website name</p>
                          {website || "Jancy.choosemy.club"}
                        </span>
                        <span
                          className="flex mr-6 text-blue"
                          onClick={() => {
                            setShowWebsite(!showWebsite);
                          }}
                        >
                          <p>Change</p>
                          {!showWebsite ? (
                            <ChevronDownIcon className="w-3 h-4 ml-[3px] mt-2" />
                          ) : (
                            <ChevronUpIcon className="w-3 h-4 ml-[3px] mt-2" />
                          )}
                        </span>
                      </h6>
                      {showWebsite && (
                        <>
                          <div className="pr-6 sm:p-0">
                            <ChangeWebsiteName
                              setShowWebsite={setShowWebsite}
                              website={website}
                              setWebsite={setWebsite}
                            />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="w-full max-w-[400px] mt-6">
                      <hr className="text-gray" />
                    </div>
                    <div className="max-w-[484px] mt-0 pt-4 ">
                      <h6 className=" text-[13px] text-left flex flex-2 justify-between ">
                        <span>
                          <p className="font-bold">MY club name</p>
                          {club || "Jancy Wade"}
                        </span>
                        <span
                          className="flex mr-6 text-blue"
                          onClick={() => {
                            setShowClub(!showClub);
                          }}
                        >
                          <p>Change</p>
                          {!showClub ? (
                            <ChevronDownIcon className="w-3 h-4 ml-[3px] mt-2" />
                          ) : (
                            <ChevronUpIcon className="w-3 h-4 ml-[3px] mt-2" />
                          )}
                        </span>
                      </h6>
                      {showClub && (
                        <>
                          <div className="pr-6 sm:p-0">
                            <ChangeClubName
                              setShowClub={setShowClub}
                              club={club}
                              setClub={setClub}
                            />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="w-full max-w-[400px] mt-6">
                      <hr className="text-gray" />
                    </div>
                    <div className="max-w-[484px] mt-0 pt-4 py-4 ">
                      <h6 className=" text-[13px] text-left flex flex-2 justify-between ">
                        <span>
                          <p className="font-bold">MY profile image</p>
                          {!showImage && !photoPreview ? (
                            <Image
                              className="w-[42px] h-[42px] rounded-full mt-3"
                              src={clipart}
                              alt="user-img"
                            />
                          ) : null}
                          {photoPreview ? (
                            <span
                              className="block w-[35px] h-[35px] rounded-full "
                              style={{
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                backgroundImage: `url(${photoPreview})`,
                              }}
                            ></span>
                          ) : null}
                        </span>
                        <span
                          className="flex mr-6 text-blue"
                          onClick={() => {
                            setShowImage(!showImage);
                          }}
                        >
                          <p>Change</p>
                          {!showImage ? (
                            <ChevronDownIcon className="w-3 h-4 ml-[3px] mt-2" />
                          ) : (
                            <ChevronUpIcon className="w-3 h-4 ml-[3px] mt-2" />
                          )}
                        </span>
                      </h6>
                      {showImage && (
                        <>
                          <div className="pr-6 sm:p-0">
                            <ChangeProfileImage
                              setShowImage={setShowImage}
                              setPhotoPreview={setPhotoPreview}
                              photoPreview={photoPreview}
                            />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="w-full max-w-[400px] mt-4">
                      <hr className="text-gray" />
                    </div>
                    <div className="max-w-[484px] mt-0 pt-4 pb-6 ">
                      <h6 className=" text-[13px] text-left flex flex-2 justify-between ">
                        <span>
                          <p className="font-bold">MY ZoomMe</p>
                          {zoom || "@jancy"}
                        </span>
                        <span
                          className="flex mr-6 text-blue"
                          onClick={() => {
                            setShowZoom(!showZoom);
                          }}
                        >
                          <p>Change</p>
                          {!showZoom ? (
                            <ChevronDownIcon className="w-3 h-4 ml-[3px] mt-2" />
                          ) : (
                            <ChevronUpIcon className="w-3 h-4 ml-[3px] mt-2" />
                          )}
                        </span>
                      </h6>
                      {showZoom && (
                        <>
                          <div className="pr-6 sm:p-0">
                            <ChangeZoomMe
                              setShowZoom={setShowZoom}
                              zoom={zoom}
                              setZoom={setZoom}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
                onClick={() => {
                  router.push("/affiliate/setupshop/success");
                }}
              >
                publish MY club
              </button>
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
                    The worst advice we ve ever heard about coffee
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
    </>
  );
}
