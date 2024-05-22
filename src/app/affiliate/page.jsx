'use client'
import React, { useState } from 'react';
import ShopMYLash from "@/components/Affiliate/ShopMYLash";
import Signin from "@/components/Affiliate/ShopMYLash/Signin";
import ChooseMyClub from "@/components/Affiliate/ChooseYouWant/ChooseMyClub";

const Page = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowSignIn = () => {
    setShowSignIn(true); 
  };

  return (
    <>
      {showSignIn ? (
        <Signin />
      ) : (
        <ShopMYLash onSignInClick={handleShowSignIn} />
      )}
      {/* <ChooseMyClub/> */}
    </>
  );
};

export default Page;
