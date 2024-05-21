"use client"
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const GoogleAutocomplete = ({
    children,
    onChange,
    manually,
    defaultValue,
    icon,
    label,
    InputClassName,
    LabelClassName,
    autocompleteContainerClass,
    callback
}) => {

    const [address, setAddress] = useState("");
    const handleChangeAddress = (newAddress, data) => {
        setAddress(newAddress);
        if (onChange) {
            onChange(newAddress);
        }
    };
    const handleSelectAddress = (newAddress, placeId, suggestion) => {
        setAddress(newAddress);
        geocodeByAddress(newAddress)
            .then((results) => {
                if (callback) {
                    callback(results[0]);
                }
                return getLatLng(results[0])
            })
            .then((latLng) => console.log("Success", latLng))
            .catch((error) => console.error("Error", error));
    };

    useEffect(() => {
        if (defaultValue) {
            setAddress(defaultValue);
        }
    }, [defaultValue])


    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChangeAddress}
            onSelect={handleSelectAddress}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            {icon}
                        </div>
                        <input
                            {...getInputProps({
                                id: "googleaddress",
                                placeholder: "",
                                // className: {`location-search-input floating-input peer pl-10 ${InputClassName}`}
                                className: "location-search-input floating-input peer pl-10 " + InputClassName
                            })}
                        />
                        <label htmlFor="googleaddress" className={`floating-label pl-6 ${LabelClassName}`}>
                            {label}
                        </label>
                    </div>

                    <div className={`autocomplete-dropdown-container ${autocompleteContainerClass}`}>

                        {/* {loading && <div>Loading...</div>} */}
                        {(suggestions?.length > 0)
                            ?
                            <>
                                {manually &&
                                    <div className='suggestion-item'>
                                        <span>Don`t see your address? <a className='cursor-pointer hover:border-b-2'>Enter address manually</a></span>
                                    </div>
                                }
                                {_.map(suggestions, (suggestion,) => {
                                    const className = suggestion.active ? 'suggestion-item suggestion-item--active cursor-pointer' : 'suggestion-item cursor-pointer';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active ? {} : {};
                                    return (
                                        <div {...getSuggestionItemProps(suggestion, { className, style })} key={suggestion.description} >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </>
                            :
                            <>
                                {children}
                            </>
                        }
                    </div>
                </div>
            )}
        </PlacesAutocomplete>

    );
};

export default GoogleAutocomplete;
