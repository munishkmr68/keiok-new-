import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import profileImg from "../../../assets/images/profile-pic-needhelp.png";
import star from "../../../assets/images/star.png";
import NortonLogo from "../../../assets/images/norton-logo.png";
import Footer from "@/common/Footer";
import LashesIcon from "../../../assets/images/icons/lashes.svg";
import SubscribeIcone from "../../../assets/images/icons/subscribe.svg";
import CheckmarkIcon from "../../../assets/images/icons/checkmark.svg";
import EncryptionPolicy from "@/components/EncryptionPolicy";
import NeedHelp from "@/components/NeedHelp";

const ThankYou = () => {
  return (
    <>
      <div className="max-w-[484px] mx-auto pt-11 px-4">
        <div className="flex items-center gap-4">
          <Image
            className="w-[140px] h-[140px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <div>
            <h4 className="mb-0.5 text-t4 font-bold leading-tight">
              <span className="text-darkpink">Thank you!</span>
            </h4>
            <p className="font-medium text-sm">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
          </div>
        </div>
        <div className="space-y-1 text-t3 text-[15px] my-8 font-medium">
          <p>Success! Would you like to setup your personal club now?</p>
          <p>It's easy and fast</p>
        </div>
        <button className="primary-button flex flex-1 items-center justify-center gap-4 sm:gap-6 mt-3">
          Setup MY club
          <ChevronRightIcon className="w-4 h-4" />
        </button>
        <p className="font-medium text-[15px] text-blue mt-3 mb-14 underline text-center">
          I`&apos;`ll do it later
        </p>
      </div>
      <div className="max-w-[484px] mx-auto px-4 mb-12">
        <div className="my-24">
          <EncryptionPolicy />
        </div>
        <NeedHelp />
      </div>
      <div className="bg-pink mt-6">
        <div className="max-w-[484px] mx-auto px-4 py-8">
          <ul className="text-t4 space-y-2">
            <li className="flex gap-2">
              <LashesIcon className="w-6 h-6" />
              <span className="text-base font-medium">
                Natural LASHES
                <br />+ BROWS
              </span>
            </li>
            <li className="flex gap-2">
              <SubscribeIcone className="w-6 h-6" />
              <span className="text-base font-medium">
                Subscribe because of our <br />
                Lash Cycle{" "}
                <span className="text-blue text-base font-medium">
                  Learn more
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              <CheckmarkIcon className="w-6 h-6" />
              <span className="text-base font-medium">
                No commitments,
                <br />
                Cancel anytime
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
