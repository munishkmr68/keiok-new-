"use client";
import SignInPage from "../../components/SignInFlow/SignInPage";
import NeedHelpPage from "../../components/SignInFlow/NeedHelpPage";
import ForgetEmailSent from "../../components/SignInFlow/ForgetEmailSent";
import ActivateEmailSent from "../../components/SignInFlow/ActivateEmailSent";
import EmailSucessTemplate from "../../components/SignInFlow/EmailSucessTemplate";
import DontRemeberEmailPage from "../../components/SignInFlow/DontRemeberEmailPage";
import Step7 from "../../components/SignInFlow/step7";
import Step8 from "../../components/SignInFlow/step8";
import withRouteHOC from "../../HOC/withRouteHOC";
import useSignInHook from "../../../hooks/useSignIn.hook";
import _ from "lodash";
import useActivateHook from "../../../hooks/useActivate.hook";
import useForgetPassword from "../../../hooks/useForgetPassword.hook";
import PasswordRecoveryFields from "../../components/SignInFlow/PasswordRecoveryFields";

// Signin component

const Signin = (props) => {
  // React hooks
  const { currenStteps, ...data } = useSignInHook(props);
  const { _activateAccountLater, emailSuccessState: email, loading } = useActivateHook(props);
  const { forgetEmail, ...forgetPassword } = useForgetPassword(props);

  const EMAIL = currenStteps[currenStteps?.length - 2] === 'need3' ? email : forgetEmail;
  console.log(forgetEmail, 'forgetEmail')
  const steps = {
    'signin': <SignInPage key={1}  {...data} />,
    'need1': <NeedHelpPage key={2}  {...data} />,
    'need2': <ForgetEmailSent key={3}   {...{ ...data, ...forgetPassword }} />,
    'need3': <ActivateEmailSent key={4}  {...{ ...data, _activateAccountLater, loading }} />,
    'need4': <EmailSucessTemplate key={5} {...{ ...data, emailSuccessState: EMAIL }} />,
    'need5': <DontRemeberEmailPage key={5} {...{ ...data, emailSuccessState: EMAIL }} />,
    'need6': <PasswordRecoveryFields key={6} {...{ ...data, ...forgetPassword }} />
    // <Step7 key={7} onContinueClick={data?.handleButtonClick} />,
    // <Step8 key={8} onContinueClick={data?.handleButtonClick} />,
  };
  return (
    <>
      {steps[_.last(currenStteps)]}
    </>
  );
};

export default withRouteHOC(Signin);
