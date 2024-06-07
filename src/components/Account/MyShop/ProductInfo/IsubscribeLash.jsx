import React from "react";
import Image from "next/image";
import prdimage from "../../../../assets/images/i-subscribe-lash.png";
import TextCutt from "../../../../assets/images/text-cutt-pattren.svg";

const IsubscribeLash = () => {
  return (
    <div className="border rounded-xl shadow-shadow1 border-gray p-6 overflow-hidden">
      <div className="relative">
        <Image
          className="max-h-[352px] w-auto relative -left-6"
          src={prdimage}
          alt="user-img"
        />
        <div className="absolute top-0 right-[1rem] sm:right-[4.375rem]">
          <p className="text-t4 leading-tight font-medium">
            I subscribe
            <br />
            because of our
          </p>
          <h5 className="text-[22px] text-darkpink font-bold">Lash Cycle</h5>
        </div>
        <div className="absolute bottom-0 right-[1rem] sm:right-[6.563rem]">
          <h5 className="text-[22px] text-darkpink font-bold">
            Every 12 weeks
          </h5>
          <p className="text-t4 leading-tight font-medium">
            we naturally shed and
            <br />
            replace all of our lashes
          </p>
        </div>
      </div>
    </div>
  );
};

export default IsubscribeLash;
