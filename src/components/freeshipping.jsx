import React from "react";
import TruckIcon from "../assets/images/icons/truck.svg";

const Freeshipping = () => {
  return (
    <div className="flex gap-2.5 items-baseline border-t py-6 border-gray">
      <TruckIcon className="text-t2 fill-current" />
      <div>
        <h6 className="label mb-1">Free Shipping</h6>
        <p className="text-sm">Arrives between Wed, Sep 06 - Mon, Sep 11</p>
      </div>
    </div>
  );
};

export default Freeshipping;
