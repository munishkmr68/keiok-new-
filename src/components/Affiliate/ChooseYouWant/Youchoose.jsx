import React from "react";
import star from '../../../assets/images/star.png'
import Image from "next/image";
const Youchoose = () => {
  return (
    <div className="border rounded-xl shadow-shadow1 border-gray p-6 overflow-hidden">
      <h4 className="font-bold text-t4 text-left">
        You
        <span className="text-darkpink"> choose </span>
      </h4>
      <ul className="flex flex-col gap-3 mt-4">
        <li className="flex gap-2">
          <span className="flex flex-row ">
          <span className="text-sm text-t5 w-[20px] mr-2 "><Image
            src={star}
            alt="user-img"
          /> </span>
            <span className="text-sm text-t4 font-medium ">
              Setup your MY club after you checkout
            </span>
          </span>
        </li>
        <li className="flex gap-2">
          <span className="flex flex-row  ">
          <span className="text-sm text-t5 w-[20px] mr-2 "><Image
            src={star}
            alt="user-img"
          /> </span>
            <span className="text-sm text-t4 font-medium ">
              No commitments — save on MY lash
              <br />
              just being enrolled as an affiliate
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Youchoose;
