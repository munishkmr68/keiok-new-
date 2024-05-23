import Image from "next/image";
import React from "react";
import star from '../../../assets/images/star.png'
const EarnyourWay = () => {
  return (
    <div className="border rounded-xl shadow-shadow1 border-gray p-6 overflow-hidden">
      <h4 className="font-bold text-t4 text-left">
        <span className="text-darkpink"> Earn </span>
        your way
      </h4>
      <ul className="flex flex-col gap-3 mt-4">
        <li className="flex gap-2">
          <span className="flex flex-row ">
          <span className="text-sm text-t5 w-[20px] mr-2 "><Image
            src={star}
            alt="user-img"
          /> </span>
            <span className="text-sm text-t4 font-medium ">
            28% commission on personal sales
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
            Want to earn more? Activate level bonuses  <br />and get earn commissions from your team.
             
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default EarnyourWay;
