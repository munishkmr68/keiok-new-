import Image from "next/image";
import React from "react";
import PrdImg from "../../assets/images/prd-img.png";
import TruckIcon from "../../assets/images/icons/truck.svg";
import CheckmarkIcon from "../../assets/images/icons/checkmark.svg";

const SubscriptionBar = () => {
    return (
        <div className="bg-white border-t border-gray">
            <div className="mx-auto flex container items-center py-3 px-4 justify-between">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Image
                            className="w-[42px] h-[42px] rounded-full shadow-[0px_1px_4px_0px_rgba(0,0,0,0.24)] border border-bg3"
                            src={PrdImg}
                            alt="user-img"
                        />
                        <div className="font-medium text-t2">
                            <p className="text-xs">MY lash serum</p>
                            <p className="text-sm">$20/Month</p>
                        </div>
                    </div>

                    <ul className="text-bg1 space-y">
                        <li className="flex items-center  gap-2">
                            <CheckmarkIcon className="w-4 h-4" />
                            <span className="text-[10px] font-medium">Cancel anytime</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <TruckIcon className="fill-current w-4 h-4" />
                            <span className="text-[10px] font-medium">Free shipping</span>
                        </li>
                    </ul>
                </div>
                <button className="primary-button  mt-[30px] w-auto px-5">Next</button>
            </div>
        </div>
    );
};

export default SubscriptionBar;
