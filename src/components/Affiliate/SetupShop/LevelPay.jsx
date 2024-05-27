import React from "react";
import Image from "next/image";
import smileFace from "../../../assets/images/icons/smile-face.png";
import Star from "../../../assets/images/icons/empty-star.svg";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";

const LevelPay = () => {
  return (
    <>
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
          <span className="text-base sm:text-[15px] font-medium">
            I <span className="text-darkpink">choose</span> to earn Level Pay
          </span>
        </li>
      </div>
      <div className="border rounded-xl shadow-shadow1 border-gray mt-3 overflow-hidden">
        <div className="max-w-[484px] mt-0  pl-6 py-5">
          <h6 className="text-[18px] text-t4 text-left">
            Do you want Level Pay?
          </h6>
        </div>
        <div className="pl-6 -mt-3 mb-5">
          <fieldset className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="w-5 flex justify-center">
                <input
                  id="draft"
                  className="accent-blue checked:w-5 checked:h-5"
                  type="radio"
                  name="pathValue"
                  value="ambassador"
                />
              </span>
              <span className="text-base text-t4 font-bold">
                <span className="text-darkpink">Choose</span> level pay
              </span>
            </div>
            <div className="flex gap-2 -mt-2 items-center">
              <span className="w-5 flex justify-center">
                <input
                  id="published"
                  className="accent-blue checked:w-5 checked:h-5"
                  type="radio"
                  name="pathValue"
                  value="affiliate"
                />
              </span>
              <span className="">Do not choose level pay</span>
            </div>
          </fieldset>
        </div>
        <div className="bg-pink">
          <div className="pt-4 px-6">
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <h4 className="font-bold"> Level Pay</h4>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto px-4 p-4 ml-1">
            <ul className="text-t4 space-y-1">
              <li className="flex gap-2">
                <Star className="w-6 h-6 mt-px" />

                <span className="text-base sm:text-lg font-medium">
                  Commissions on your customers clubs
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
                  Paid monthly on the 8th
                </span>
              </li>
            </ul>
          </div>
          <div>
            <table class="border-collapse w-full ">
              <thead>
                <tr>
                  <th class="border text-t3 border-[#000000]  bg-[#FFBFE6] text-sm p-2  w-[175px]">
                    Monthly Personal Sales
                  </th>
                  <th class="border text-t3 border-[#000000] bg-[#FFBFE6] text-sm  th-medium">
                    $20 +
                  </th>
                  <th class="border text-t3 border-[#000000] text-sm bg-[#FFBFE6] th-medium">
                    $100 +
                  </th>
                  <th class="border text-t3 border-[#000000] text-sm bg-[#FFBFE6] th-medium">
                    $600 +
                  </th>
                </tr>
              </thead>
              <tbody className="text-t3 ">
                <tr className="border-t-4 border-black-500">
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    Level 1 Pay
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    2%
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    5%
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    8%
                  </td>
                </tr>
                <tr>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold ">
                    Level 2 Pay
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold ">
                    1%
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold ">
                    3%
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold ">
                    5%
                  </td>
                </tr>
                <tr>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    Level 3 Pay
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    1%
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    2%
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    2%
                  </td>
                </tr>
                <tr>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    Level 3 Pay
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    1%
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    2%
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    2%
                  </td>
                </tr>
                <tr>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold ">
                    Level 4 Pay
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold "></td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold ">
                    1%
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold ">
                    2%
                  </td>
                </tr>
                <tr>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    Level 5 Pay
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]"></td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    1%
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-[450] bg-[#FFF7FC]">
                    2%
                  </td>
                </tr>
                <tr>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold ">
                    Level 6 Pay
                  </td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold "></td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold "></td>
                  <td className="border text-t3  border-[#000000] text-sm p-2 font-bold ">
                    1%
                  </td>
                </tr>
              </tbody>
            </table>
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
          <span className="text-base sm:text-[15px] -mt-1 font-medium">
            If Ali enrolls as an affiliate through your club then she <br />
            becomes your Level 1. If Lisa signs up through Ali's club then Lisa
            becomes your Level 2.
          </span>
        </li>
      </div>
    </>
  );
};

export default LevelPay;
