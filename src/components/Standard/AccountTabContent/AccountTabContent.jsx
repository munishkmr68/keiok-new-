import React from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Card from "./Card";

const AccountTabContent = (props) => {
  
  return (
    <>
   
      <Card setShowRestart={props?.setShowRestart}/>
    </>
  );
};

export default AccountTabContent;
