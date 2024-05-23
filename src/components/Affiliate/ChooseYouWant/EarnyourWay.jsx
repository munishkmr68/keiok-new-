import React from "react";

const EarnyourWay = () => {
  return (
    <div className="border rounded-xl shadow-shadow1 border-gray p-6 overflow-hidden">
      <h4 className="font-bold text-t4 text-left">
        <span className="text-darkpink"> Earn </span>
        your way
      </h4>
      <ul className="flex flex-col gap-3 mt-2">
        <li className="flex gap-2">
          <span className="flex flex-row ">
            <span className="text-sm text-t5">✨</span>
            <span className="text-sm text-t4 font-medium ">
            28% commission on personal sales
            </span>
          </span>
        </li>
        <li className="flex gap-2">
          <span className="flex flex-row  ">
            <span className="text-sm text-t5 ">✨</span>
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
