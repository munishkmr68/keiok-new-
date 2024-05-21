"use client";
import Image from "next/image";
import Language from "@/components/language";
import Footer from "@/common/Footer";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../assets/images/norton-logo.png";
import { FormattedMessage } from "react-intl";
import ButtonNextStep, { ButtonPreviousStep } from "@/common/buttonNextStep";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';
import Loader from "@/common/Loader";
import NotificationMsg from "@/common/NotificationMsg";
import { forgotPasswordDefaultSchema, forgotPasswordValues } from "@/services/Methods/validationSchema";


const InnerInputComp = ({ name, label, handleChange, handleBlur, values }) => (
    <div>
        <div className="relative">
            <Inputbox
                type={(name === 'key') ? 'text' : 'password'}
                name={name}
                id={name}
                value={values?.[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                autocomplete={name}
                placeholder=""
                className="floating-input peer"
            />
            <label htmlFor={name} className="floating-label">
                {label}
            </label>
        </div>
        <ErrorMessage name={name} component="p" className="text-sm text-red" />
    </div>
);

const PasswordRecoveryFields = (props) => {
    const { _handleChangePassword, loading, errorReset, resetSuccessMsg, setCurrentSteps } = props

    return (
        <>
            {loading
                ?
                <Loader />
                :
                <>
                    <Formik
                        initialValues={forgotPasswordValues}
                        validationSchema={forgotPasswordDefaultSchema}
                        onSubmit={(values) => _handleChangePassword(values, () => {
                            setCurrentSteps(['signin'])
                        })}
                    >
                        {(FieldValues) => (
                            <Form>
                                <div className="max-w-[484px] mx-auto px-4 py-12 pb-[30px]">
                                    <h3 className="font-bold">
                                        <FormattedMessage id="resetEmail" defaultMessage="Reset Email / Password" />
                                    </h3>
                                    {(errorReset || resetSuccessMsg) &&
                                        <NotificationMsg icon={false} msg={resetSuccessMsg || errorReset} error={!!errorReset} />
                                    }
                                    <p className="text-t4 mb-0 text-base mt-3 text-[#f00]">
                                        <FormattedMessage id="dontRefresh" />
                                    </p>
                                    <p className="text-t4 mb-0 text-base mt-1">
                                        <FormattedMessage id="temporaryWarnText" component="p" />
                                    </p>
                                    <strong>(it may be in your spam folder)</strong>
                                </div>
                                <div className="bg-bg3 py-8 pt-3 sm:px-4">
                                    <div className="max-w-[484px] mx-auto px-4">
                                        <Image
                                            className="max-w-[66px] ml-auto mb-1"
                                            src={NortonLogo}
                                            alt="logo"
                                        />
                                        <div className="flex flex-col gap-[10px]">
                                            <InnerInputComp name="key" label="Temporary Key" {...FieldValues} />
                                            <InnerInputComp name="password" label="New Password" {...FieldValues} />
                                            <InnerInputComp name="confirmPassword" label="Confirm Password" {...FieldValues} />
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[484px] mx-auto px-4 mb-12">
                                    <div className="mt-24 border-b border-gray">
                                        <Language />
                                    </div>
                                </div>
                                <Footer />
                                <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
                                    <div className="flex max-w-[484px] mx-auto px-4 py-8">
                                        <ButtonNextStep type='submit' amt="" label="Reset Your Password" />
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </>
            }
        </>
    );
}

export default PasswordRecoveryFields;
