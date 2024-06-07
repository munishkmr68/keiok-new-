import React from "react";
import Image from "next/image";
import NightRoutineImage from "../../../../assets/images/night-routine-image.png";
import FlagIcon from "../../../../assets/images/us-flag-circle-icon.png";

const NightlyRoutine = () => {
  return (
    <div className="border rounded-xl shadow-shadow1 border-gray p-6 sm:p-10 !pb-0 overflow-hidden">
      <div className="relative">
        <p className="font-medium text-center">
          MY 
          <span className="text-[22px] text-darkpink font-bold"> nightly </span>
          routine
        </p>
        <ol class="list-decimal list-inside mt-10 text-t4 text-sm font-medium flex flex-col gap-1 max-w-[190px]">
          <li>Cleanse and dry skin</li>
          <li>Wipe off any excess serum along the inner tube</li>
          <li>Carefully apply to the skin (lash roots) of your upper lashes</li>
          <li>Do not apply to lower lash line</li>
          <li>Wait 2-3 min for the serum to dry before going to bed</li>
        </ol>
        <div className="mt-8 -mx-6 sm:-mx-10">
          <Image src={NightRoutineImage} alt="user-img" />
        </div>
      </div>
    </div>
  );
};

export default NightlyRoutine;
