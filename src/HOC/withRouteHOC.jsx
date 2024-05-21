"use client";

import localStorageCall from '@/services/Methods/localstorage.hook';
import { useParams, usePathname, useRouter, useSearchParams, useSelectedLayoutSegment, useSelectedLayoutSegments, notFound } from 'next/navigation';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

function withRouteHOC(Component) {

    const WithRouteHOCComponent = (props) => {
        const [selectedBrandType, setSelectedBrandType] = useState(0)
        let router = useRouter();
        const intl = useIntl()
        const searchParams = useSearchParams();
        const segment = useSelectedLayoutSegment();
        const pathname = usePathname()
        const segments = useSelectedLayoutSegments();
        let isUserLogin = localStorageCall().getSingleItem('Token');
        let params = useParams();
        const dispatch = useDispatch();

        return <Component {...props} {...{
            intl,
            router, params,
            searchParams, dispatch,
            isUserLogin, segment,
            segments, pathname, notFound, setSelectedBrandType, selectedBrandType
        }} />
    }

    return WithRouteHOCComponent;
}

export default withRouteHOC;