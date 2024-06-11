import { Tab } from "@headlessui/react";
import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import clipart from "../../../../assets/images/clipart-img.png";

import Camera from "../../../../assets/images/icons/camera.svg";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ChooseYourProfile() {
  const router = useRouter();

  const [photoName, setPhotoName] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // setPhotoName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotoPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="max-w-[484px] mx-auto w-full">

        <div className="flex items-center mt-[30px] gap-4">
          <Image
            className="w-[140px] h-[140px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <div>
            <span className="text-t4 text-[10px] font-bold flex items-center gap-1">
              <span className="text-t5">STEP</span> 4{" "}
              <span className="text-t5">OF</span> 5
            </span>

            <h4 className="mb-0.5 text-t4 font-bold leading-tight">
              <span className="text-darkpink">Choose</span> your
              <br /> profile image
            </h4>

            <p className="font-medium text-sm">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
          </div>
        </div>

        <div className="text-t4 text-sm mt-[24px] font-[420] p-0 ">
          You can change your profile image anytime.
        </div>

        <div className=" text-t3 text-sm mt-3 mb-6 text-[15px] font-[420] p-0">
          <p>No commitments</p>
          <p>No fees</p>
        </div>

        <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-4">
          <div className="max-w-[484px] mt-0 pl-6 pt-4">
            <h6 className=" text-[13px] text-left">Example:</h6>
          </div>
          <li className="flex flex-col gap-2 mt-3 pl-6 pb-4 text-t4">
            <span className="text-base sm:text-[14px] font-medium">
              <span className="text-darkpink">MY profile image is</span>
            </span>
            {!photoPreview ? (
              <Image
                className="w-[35px] h-[35px] rounded-full"
                src={profileImg}
                alt="user-img"
              />
            ) : (
              <span
                className="block w-[35px] h-[35px] rounded-full "
                style={{
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundImage: `url(${photoPreview})`,
                }}
              ></span>
            )}
          </li>
        </div>
        <div className="border rounded-xl  shadow-shadow1 border-gray  overflow-hidden mt-4 ">
          <div className=" mt-0 pl-6 pt-5">
            <span className="text-[18px] text-t4 font-[420]">
              <span className="text-darkpink">Choose </span>
              your profile image
            </span>
          </div>
          {/* Photo File Input */}

          <input
            type="file"
            className="hidden "
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          <div className="text-center mt-6 flex items-center gap-4 ">
            {/* Current Profile Photo */}
            <div
              className=" relative"
              style={{ display: !photoPreview ? "block" : "none" }}
            >
              <Image
                className="w-[100px] h-[100px] ml-6 mb-6 rounded-full shadow  "
                src={clipart}
                alt="Current Profile"
                onClick={() => fileInputRef.current.click()}
              />
              <div className=" absolute top-1 left-24  ">
                <Camera />
              </div>
            </div>
            {/* New Profile Photo Preview */}
            <div
              className=" relative"
              style={{ display: photoPreview ? "block" : "none" }}
            >
              <span
                className="block w-[100px] h-[100px] rounded-full ml-6 mb-6 shadow"
                style={{
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundImage: `url(${photoPreview})`,
                }}
                onClick={() => fileInputRef.current.click()}
              ></span>
              <div className=" absolute top-1 left-24  ">
                <Camera />
              </div>
            </div>
            <div
              className="text-blue"
              onClick={() => fileInputRef.current.click()}
            >
              Edit Image
            </div>
          </div>
        </div>


        
      </div>
    </>
  );
}
