"use Client"
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import Close from "../../assets/images/icons/close-circle.svg";
import Loader from '@/common/Loader';
import Inputbox from '@/components/inputbox';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import withRouteHOC from '@/HOC/withRouteHOC';
import Link from 'next/link';
import useRefferalHook from '../../../hooks/useRefferal.hook';

function RefferalPopup(props) {

    const { isOpen, isLoadingTrue, refferalValue, closeModal, _handleSubmitRefferal } = useRefferalHook(props);

    return (
        <>
            {/* <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Open dialog
                </button>
            </div> */}

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => console.log('false')}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)]" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {/* <div>
                                        <Close
                                            className="mb-1 ml-auto cursor-pointer"
                                            onClick={closeModal}
                                        />
                                    </div> */}
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Please provide the referral code from the person who introduced you to Keiok Global
                                    </Dialog.Title>
                                    <Formik
                                        enableReinitialize
                                        initialValues={refferalValue}
                                        validationSchema={Yup.object().shape({
                                            refferal: Yup.string().trim().required('Please enter referral code.')
                                        })}
                                        onSubmit={(values, actions) => _handleSubmitRefferal(values, actions)}
                                    >
                                        {(({ handleChange, handleBlur, values, errors }) => (
                                            <Form>
                                                <div className="py-4 relative">
                                                    {isLoadingTrue &&
                                                        <div className='absolute left-0 right-0 bg-[#ffffffab] h-[170px]'>
                                                            <div className="m-[0_auto] h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue border-t-transparent"></div>
                                                        </div>
                                                    }
                                                    <>
                                                        <Inputbox
                                                            name='refferal'
                                                            placeholder="Referral Code (xxxxxx)"
                                                            className={_.isEmpty(errors) ? "" : errors?.refferal ? 'invalid' : 'valid'}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values?.refferal}
                                                        />
                                                        <ErrorMessage name='refferal' component="p" className="text-sm text-red" />
                                                    </>
                                                </div>
                                                <div className="pt-0 pb-2">
                                                    <p className="text-t4 mb-0 text-base ">
                                                        You are already a user please <Link href='/signin'>Sign In</Link>
                                                    </p>
                                                </div>

                                                <button type='submit' className="primary-button"> Verify your referral</button>
                                            </Form>
                                        ))}
                                    </Formik>

                                    {/* <button className="primary-button-outlined mt-[10px]">
                                        Use address you entered
                                    </button> */}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default withRouteHOC(RefferalPopup);