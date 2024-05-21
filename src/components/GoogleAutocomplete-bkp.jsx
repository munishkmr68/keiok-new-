import React, { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

const GoogleAutocomplete = ({
    icon,
    label,
    InputClassName,
    LabelClassName,
}) => {
    const [address, setAddress] = useState('');

    const handleChange = (newAddress) => {
        setAddress(newAddress);
    };

    const handleSelect = (selectedAddress) => {
        geocodeByAddress(selectedAddress)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => console.log('Success', latLng))
            .catch((error) => console.error('Error', error));
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
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
                        <label
                            htmlFor="googleaddress"
                            className={`floating-label pl-6 ${LabelClassName}`}
                        >
                            {label}
                        </label>
                    </div>
                    <div className="autocomplete-dropdown-container">
                        <div className="autocomplete-dropdown-container-inner">

                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                    ? 'suggestion-item suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? {}
                                    : {};
                                return (
                                    <div
                                        key={index}
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
};

export default GoogleAutocomplete;
