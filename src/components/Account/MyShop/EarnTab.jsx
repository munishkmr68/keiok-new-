import React, { useState } from "react";
import Image from "next/image";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";
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
import InstantPay from "./InstantPay";
import LevelPay from "./LevelPay";

export default function EarnTab(props) {

  const [showLevel, setShowLevel] = useState(false);
  const [level, setLevel] = useState("Activated");
  return (
    <>
    
        <div className="max-w-[484px] mx-auto px-4 mb-3">

      
            <div className="mt-[30px]">
              {props?.value == "Personal sales pay" ? (
                <>
                  {" "}
                 
                
               <InstantPay/>
                  
                  
                 
                 
                </>
              ) : props?.value == "Level pay" ? (
                <>
                <LevelPay/>
                </>
              ) : null}
            </div>
          </div>
       
     
    </>
  );
}
