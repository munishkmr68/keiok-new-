import React, { useState } from "react";
import Image from "next/image";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";
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

export default function MyClubTab() {
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
      <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-[30px]">
        <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden ">
          <div className="max-w-[484px] mt-0 pl-6 pt-4 pb-4">
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
          </div>
        </div>
      </div>
    </>
  );
}
