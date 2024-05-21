'use client'
import React, { useState } from 'react';
import ShopMYLash from "@/components/Affiliate/ShopMYLash";
import Signin from "@/components/Affiliate/ShopMYLash/Signin";

const Page = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowSignIn = () => {
    setShowSignIn(true); // Changes state to true, which will switch the displayed component
  };

  return (
    <>
      {showSignIn ? (
        <Signin />
      ) : (
        <ShopMYLash onSignInClick={handleShowSignIn} />
      )}
    </>
  );
};

export default Page;
