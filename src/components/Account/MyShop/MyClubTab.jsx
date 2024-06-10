import React, { useState } from "react";
import Image from "next/image";
import productLash from "../../../assets/images/product-lash.png";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import clipart from "../../../assets/images/clipart-img.png";
import ChangeWebsiteName from "./ChangeWebsiteName";
import ChangeClubName from "./ChangeClubName";
import ChangeZoomMe from "./ChangeZoomMe";
import ChangeProfileImage from "./ChangeProfileImage";
import ChangeLevelPay from "./ChangeLevelPay";

export default function MyClubTab(props) {
  const [showWebsite, setShowWebsite] = useState(false);
  const [website, setWebsite] = useState("");
  const [showClub, setShowClub] = useState(false);
  const [club, setClub] = useState("");
  const [showZoom, setShowZoom] = useState(false);
  const [zoom, setZoom] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [showLevel, setShowLevel] = useState(false);
  const [level, setLevel] = useState("Activated");
  return (
    <>
      {props?.value != "Preview MY club" ? (
        <div className="max-w-[484px] mx-auto px-4 mb-3">

        <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-[30px]">
          <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden ">
            <div className="max-w-[484px] mt-0 pl-6 pt-4 pb-4">
              {props?.value == "MY club details" ? (
                <>
                  {" "}
                  <div>
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
                        {photoPreview && !showImage ? (
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
                  <div className="max-w-[484px] mt-0 pt-4  ">
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
                </>
              ) : props?.value == "MY commissions" ? (
                <>
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
                </>
              ) : null}
            </div>
          </div>
        </div>
        </div>
      ) : (
        <>
          <div className="max-w-[484px] mx-auto px-4">
            <div className="flex flex-col items-center gap-1 mt-[50px]">
              <Image
                className="w-[140px] h-[140px] rounded-full mb-3"
                src={clipart}
                alt="user-img"
              />
              <p className="label text-t4">Hey friend, welcome to</p>
              <h4 className="font-bold text-darkpink">MY lash club</h4>
              <p className="font-medium">
                <span className="text-[9px]">with</span> Jancy Wade
              </p>
            </div>
          </div>

          <div className="bg-pink my-9 ">
            <div className="max-w-[484px] mx-auto px-4 py-3">
              <ul className="space-y-1 sm:text-base text-sm text-t4 font-medium">
                <li className="flex items-center gap-2">
                  <CheckmarkIcon className="w-4 h-4" />
                  <span>It only works if you use it</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckmarkIcon className="w-4 h-4" />
                  <span>Optional affiliate opportunity</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto px-4">
            <div className="border rounded-xl shadow-shadow1 border-gray p-6 flex items-center">
              <Image
                className="max-w-[200px] rounded-full mb-3"
                src={productLash}
                alt="user-img"
              />
              <div>
                <h2 className="font-bold">MY lash</h2>
                <h6 className="font-bold text-[17px] text-darkpink mb-2">
                  lash + brow serum
                </h6>
                <p className="text-t1">
                  <span className="font-bold">See results</span> for longer
                  <br />
                  and fuller looking
                </p>
                <h6 className="text-darkpink font-bold text-base mb-6">
                  LASHES + BROWS
                </h6>
                <p>Starting at just $20</p>
              </div>
            </div>
            <button
              className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-6"
              onClick={() => {
                router.push("/affiliate/setupshop/leave");
              }}
            >
              shop MY lash
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
