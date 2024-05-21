import React from 'react'
import Image from "next/image";
import profileImg from "../assets/images/profile-pic-needhelp.png";

const NeedHelp = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="w-[140px] h-[140px] rounded-full"
        src={profileImg}
        alt="user-img"
      />
      <div>
        <h6 className="mb-0.5 text-t4 font-bold">Need some help?</h6>
        <p className='text-t4 text-sm font-medium'>hello@mylash.com</p>
      </div>
    </div>
  )
}

export default NeedHelp