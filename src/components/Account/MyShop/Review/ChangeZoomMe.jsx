import React, { useState } from "react";
import Image from "next/image";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import GreenCheck from "../../../../assets/images/icons/check-with-green.svg";
import RedCross from "../../../../assets/images/icons/red-cross.svg";
import Inputbox from "@/components/inputbox";
const ChangeZoomMe = (props) => {
    const [zoomMe, setZoomMe] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleSave = () => {
        props?.setZoom(zoomMe);
         props?.setShowZoom(false)
      };
    const validateclubName = (name) => {
      // Define your validation logic here
      const validDomain = /^[a-zA-Z0-9]{6,30}$/;
      if (!validDomain.test(name)) {
        return "This name is already taken.  Please enter another one and try again";
      }
      return "";
    };
    const handleInputChange = (event) => {
      const value = event.target.value;
      setZoomMe(value);
      const error = validateclubName(value);
      setErrorMessage(error);
    };
  return (
    <>
      <div className="max-w-[404px] mt-0 mb-5">
        {errorMessage ? (
          <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex text-left  ">
            <span className="mt-1 ">
              <RedCross />
            </span>
            <span className="text-sm ml-3">{errorMessage}</span>
          </button>
        )  : null}
      </div>
    
      <div className="flex flex-col mt-3 relative">
        {/* Removed password field and only mapping email field */}
        {_.map(
          [
            {
              name: "email",
              placeholder: "Please provide a valid email address.",
            },
          ],
          ({ name, placeholder }) => (
            <React.Fragment key={name} >
              <Inputbox
                type="text"
                name={name}
                id={name}
                placeholder=""
                className={`border-2 border-t5 px-3.5 w-[280px] sm:w-[350px] rounded-xl block  placeholder:text-input1 font-medium text-t1 sm:text-[17px] text-base  focus-visible:outline-none focus-visible:border-[#51C96D] peer `}
                value={zoomMe}
                onChange={handleInputChange}
              />
              <label htmlFor={name} className="floating-label">
                ZoomMe
              </label>
              <div className="relative">

              <div className="flex flex-2 mt-6 gap-3 absolute right-20 bottom-4">
                <button className="text-blue items-center text-[13px] font-[450] " onClick={handleSave}>Confirm</button>
              </div>
              <div className=" absolute right-6 bottom-4">
                <button className=" text-blue items-center text-[13px] font-[450]" onClick={(()=>{
                    props?.setShowZoom(false)
                })}>Cancel</button>
              </div>
              </div>
            </React.Fragment>
          )
        )}
      </div>
      <div className="border max-w-[404px]  rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-6">
        <div className="mt-0 pl-6 pt-4">
          <h6 className=" text-[14px] text-left">Example:</h6>
        </div>
        <li className="flex gap-4 mt-3 pl-6 pb-4 text-t4">
          <Image
            className="w-[35px] h-[35px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <span className="text-base sm:text-[15px] -mt-1 font-medium">
            MY ZoomMe <br />{" "}
            <span className="text-darkpink">{"@ashlash"}</span>
          </span>
        </li>
      </div>
    </>
  );
};

export default ChangeZoomMe;
