import React from "react";
import Image from "next/image";
import smileFace from "../../../assets/images/icons/smile-face.png";
import TextCutt from "../../../assets/images/text-cutt-pattren.svg";

const InstantResult = () => {
  return (
    <div className="border rounded-xl h-[375px] w-[452px] shadow-shadow1 border-gray p-6 overflow-hidden">
      <div className="relative sm:py-10">
        <div className="flex justify-evenly pt-[63px]">
          <h5 className="text-t3 font-black ">
            <span className="relative">
              INSTANT SETUP
              <span className="absolute top-1/2 -translate-y-2/4 block">
                <TextCutt className="w-full" />
              </span>
            </span>
          </h5>
        </div>
        <div className="flex justify-center mt-3.5 text-[18px] font-[420]">
        

          <p className="text-t3 text-center font-medium">
          The paperwork ends,
          </p>
        </div>
        <div className="flex justify-center mt-2.5 text-[18px] font-[420]">
          

          <p className="text-t3 text-center font-medium">
          your commissions dont
          </p>
        </div>
        <div className="flex justify-center mt-2.5">
          

        <Image
            className="w-[24px] h-[24px] rounded-full mb-3"
            src={smileFace}
            alt="smile-face"
          />
        </div>
      </div>
    </div>
  );
};

export default InstantResult;
