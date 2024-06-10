import React, { useState } from "react";
import Image from "next/image";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import GreenCheck from "../../../../assets/images/icons/check-with-green.svg";
import RedCross from "../../../../assets/images/icons/red-cross.svg";
import Inputbox from "@/components/inputbox";
const ChangeWebsiteName = (props) => {
  const [websiteName, setWebsiteName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const firstDotIndex = props?.website.indexOf('.');
  const beforeDot = props?.website.substring(0, firstDotIndex);
  const afterDot = props?.website.substring(firstDotIndex);
  const handleSave = () => {
    props?.setWebsite(websiteName);
     props?.setShowWebsite(false)
  };
  const validateWebsiteName = (name) => {
    // Define your validation logic here
    const validDomain = /^[a-zA-Z0-9]+\.choosemy\.club$/;
    if (!validDomain.test(name)) {
      return "This name is already taken.  Please enter another one and try again";
    }
    return "";
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setWebsiteName(value);
    const error = validateWebsiteName(value);
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
        ) : websiteName != "" ? (
          <button className="tab-button rounded-lg font-[450] text-xl border border-gray mt-[20px] text-t4 flex items-center   ">
            <span className="mt-1 ">
              <GreenCheck />
            </span>
            <span className="text-sm ml-3">
              Your shop name has been successfully added
            </span>
          </button>
        ) : null}
      </div>
      {props?.website == "" ? (
        <span className="text-base sm:text-[15px]  font-medium">
          <span className="text-t5">name</span>
          <span className="text-t2">.choosemy.club</span>
         
          
        </span>
      ) : (
        <span className="text-base sm:text-[15px]  font-medium">
           <span className="text-t5">{beforeDot}</span>
          <span className="text-t2">{afterDot}</span>
        </span>
      )}
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
                value={websiteName}
                onChange={handleInputChange}
              />
              <label htmlFor={name} className="floating-label">
                Your website name
              </label>
              <div className="relative">

              <div className="flex flex-2 mt-6 gap-3 absolute right-20 bottom-4">
                <button className="text-blue items-center text-[13px] font-[450] " onClick={handleSave}>Check</button>
              </div>
              <div className=" absolute right-6 bottom-4">
                <button className=" text-blue items-center text-[13px] font-[450]" onClick={(()=>{
                    props?.setShowWebsite(false)
                })}>Cancel</button>
              </div>
              </div>
            </React.Fragment>
          )
        )}
      </div>
  
    </>
  );
};

export default ChangeWebsiteName;
