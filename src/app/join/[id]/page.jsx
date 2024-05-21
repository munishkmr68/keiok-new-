// Join.js
'use client'
import React, { useEffect } from 'react';
import ButtonNextStep from "@/common/buttonNextStep";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import withRouteHOC from '@/HOC/withRouteHOC';
import Tabs from '@/components/GettingStartedFlow/Step1/tabs';



const Join = (props) => {
    const { pathname, params, router } = props
    const BrandType = params?.id;
    const onBackClick = () => {
        router.back();
    }
    const onSigninClick = () => {
        router.push('/signin')
    }
    return (
        <>
            <div className='mt-11'>
                <Tabs {...{ BrandType, ...props }} />
            </div>
            <div className="sticky bottom-0 left-0 bg-white z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
                <div className="max-w-[484px] mx-auto px-4 py-8 flex items-center gap-3">
                    <span className='w-[42px] h-[42px] cursor-pointer rounded-full border border-blue text-blue flex items-center justify-center'
                        onClick={onBackClick}
                    >
                        <ChevronLeftIcon className="w-4 h-4 stroke-current" />
                    </span>
                    <ButtonNextStep handleClick={onSigninClick} amt="" label="Sign In to Join" />
                </div>
            </div>
        </>
    );
};

export default withRouteHOC(Join);
