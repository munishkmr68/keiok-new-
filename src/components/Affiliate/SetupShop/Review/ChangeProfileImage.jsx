import React, { useRef, useState } from "react";
import Image from "next/image";
import clipart from "../../../../assets/images/clipart-img.png";
import Camera from "../../../../assets/images/icons/camera.svg";
const ChangeProfileImage = (props) => {
 const [dataImg,setDataImg]=useState(null)
  const handleSave = () => {
    props?.setPhotoPreview(dataImg);
    props?.setShowImage(false);
  };
 
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // setPhotoName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
        setDataImg(e.target.result)
     
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="  overflow-hidden mt-4 ">
        <input
          type="file"
          className="hidden "
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        <div className="text-center  flex items-center gap-4 ">
          {/* Current Profile Photo */}
          <div
            className=" relative"
            style={{ display: !dataImg ? "block" : "none" }}
          >
            <Image
              className="w-[100px] h-[100px] ml-6  rounded-full shadow  "
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
            style={{ display: dataImg ? "block" : "none" }}
          >
            <span
              className="block w-[100px] h-[100px] rounded-full ml-6 shadow"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundImage: `url(${dataImg})`,
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
        <div className="flex flex-2 mt-6 gap-3 max-w-[404px]">
          <button
            className="primary-button items-center "
            onClick={() => {
              handleSave();
            }}
          >
            Save
          </button>
          <button
            className="primary-button-outlined rounded-xl items-center"
            onClick={() => {
              props.setShowImage(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangeProfileImage;
