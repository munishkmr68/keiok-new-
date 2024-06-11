import React from "react";
import Image from "next/image";
import smileFace from "../../../assets/images/icons/smile-face.png";
import TextCutt from "../../../assets/images/text-cutt-pattren.svg";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";

const InstantResult = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto px-4">
        <div className="flex items-center gap-4 pb-6">
          <Image
            className="w-[140px] h-[140px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <div>
            <span className="text-t4 text-[10px] font-bold flex items-center gap-1">
              <span className="text-t5">STEP</span> 1{" "}
              <span className="text-t5">OF</span> 5
            </span>

            <h4 className="mb-0.5 text-t4 font-bold leading-tight">
              Ready to <span className="text-darkpink">setup</span>
              <br /> your club?
            </h4>

            <p className="font-medium text-sm">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
          </div>
        </div>
        <div className="text-t4 text-sm font-[420]">
            Your personal <span className="tracking-[0.3px]">MY club</span>{" "}
            website is included with your MY lash membership.
          </div>
          <div className="text-t3 text-sm mt-3 mb-6 text-[15px] font-[420] p-0">
          <p>No commitments</p>
          <p>No fees</p>
        </div>
      </div>

      <div className="border rounded-xl h-[375px] w-full shadow-shadow1 border-gray p-6 overflow-hidden">
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
    </>
  );
};

export default InstantResult;
