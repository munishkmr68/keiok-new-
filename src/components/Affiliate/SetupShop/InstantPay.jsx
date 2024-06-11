import React from "react";
import Image from "next/image";
import smileFace from "../../../assets/images/icons/smile-face.png";
import Star from "../../../assets/images/icons/empty-star.svg";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";

const InstantPay = () => {
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
      <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden">
        <div className="max-w-[484px] mt-0  pl-6 py-5">
          <h6 className=" text-t4 text-left">Get paid instantly!</h6>
        </div>
        <div className="bg-pink">
          <div className="pt-4 px-6">
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <h4 className="font-bold"> Instant Pay</h4>
              <h4 className="font-bold"> 28%</h4>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto px-4 p-4 ml-1">
            <ul className="text-t4 space-y-1">
              <li className="flex gap-2">
                <Star className="w-6 h-6 mt-px" />

                <span className="text-base sm:text-lg font-medium">
                  Paid to you in 3 hours
                </span>
              </li>
              <li className="flex gap-2">
                <SubscribeIcone className="w-6 h-6 mt-px" />
                <span className="text-base sm:text-lg font-medium">
                  Includes residuals on subscriptions
                </span>
              </li>
              <li className="flex gap-2">
                <CheckmarkIcon className="w-5 h-6 mt-px" />
                <span className="text-base sm:text-lg font-medium">
                  Affiliate commissions on sales generated
                  <br />
                  from your personal club
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border rounded-xl shadow-shadow1 border-gray  overflow-hidden mt-4">
        <div className="max-w-[484px] mt-0 pl-6 pt-4">
          <h6 className=" text-[13px] text-left">Example:</h6>
        </div>
        <li className="flex gap-4 mt-3 pl-6 pb-4 text-t4">
          <Image
            className="w-[35px] h-[35px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <span className="text-base sm:text-[15px] mt-1 font-medium">
            You sell $100 through your club, you are paid $25 in 3 hours.
          </span>
        </li>
      </div>
    </>
  );
};

export default InstantPay;
