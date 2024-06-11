import { Disclosure, Tab } from "@headlessui/react";
import Image from "next/image";
import profileImg from "../../../../assets/images/profile-pic-needhelp.png";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  LockClosedIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import { useRouter } from "next/navigation";
import Step1 from "./Step1";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainContent() {
  const router = useRouter();
  const [showoption, setShowOption] = useState(1);

  return (
    <>
      <div className="max-w-[484px] mx-auto w-full">

        <div className="flex items-center mt-[30px] gap-4">
          <Image
            className="w-[140px] h-[140px] rounded-full"
            src={profileImg}
            alt="user-img"
          />
          <div>
            <span className="text-t4 text-[10px] font-bold flex items-center gap-1">
              <span className="text-t5">STEP</span> 5{" "}
              <span className="text-t5">OF</span> 5
            </span>

            <h4 className="mb-0.5 text-t4 font-bold leading-tight">
              <span className="text-darkpink">Setup</span> your ZoomMe
              <br />
              and be ready to get paid
            </h4>

            <p className="font-medium text-sm">
              <span className="text-[9px]">with</span> Ashley Jackson
            </p>
          </div>
        </div>

        <div className=" text-t4 text-sm mt-6 mb-4 text-[15px] font-[420] p-0">
          <p>Commissions are your paid to your ZoomMe on CoinZoom.</p>
          <p>
            CoinZoom is like Venmo or Paypal. You are paid in USD, not crypto 😊
          </p>
        </div>


        <div className="mt-8">
        <Step1 />{" "}
      </div>

      
      

      </div>
    </>
  );
}
