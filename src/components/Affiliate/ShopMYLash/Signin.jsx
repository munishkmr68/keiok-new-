import React, { useState } from "react";
import LanguageSelector from "../../../components/LanguageSelector";
import JoinLashClub from "../JoinLashClub";

const Signin = () => {
  const [showJoinLashClub, setShowJoinLashClub] = useState(false);

  const handleSignInClick = () => {
    setShowJoinLashClub(true); // This will toggle the visibility of the JoinLashClub component
  };

  return (
    <>
      {!showJoinLashClub && (
        <div className="h-[calc(100vh-68px)] flex items-center justify-center">
          <div className="max-w-[484px] w-full mx-auto px-4">
            <LanguageSelector />
            <button className="primary-button mt-6" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
        </div>
      )}
      {showJoinLashClub && <JoinLashClub />}
    </>
  );
};

export default Signin;
