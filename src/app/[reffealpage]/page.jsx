'use client'

import React from 'react';
import withRouteHOC from '@/HOC/withRouteHOC';
import useRefferalHook from '../../../hooks/useRefferal.hook';
import Loader from '@/common/Loader';
import Link from 'next/link';

const RefferalURLCheck = (props) => {
    console.log("use client<<<<<<<<<", props)
    const { pageNotFound, _checkRefferalCode } = useRefferalHook(props, 'urlRefferalCheck');

    return (
        <>
            {pageNotFound
                ?
                <div className='text-center h-screen flex justify-center flex-col'>
                    <h1>404</h1>
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link href="/">Return Home</Link>
                </div>
                :
                <Loader />
            }
        </>
    )
}

export default withRouteHOC(RefferalURLCheck);