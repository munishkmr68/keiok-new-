import React from 'react';
import { RegionDropdown, CountryDropdown } from "react-country-region-selector";
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

const CountryAndStateInputs = ({ countryCodes, setCountryState, countryState, onChange }) => {
    return (
        <div className='flex gap-[10px]'>
            <div className='country_state_main flex flex-wrap  w-1/2 '>
                <div className={`select ${countryState?.countryError && "error_wrap"} hide-country w-full `}>
                    {/* {(countryCodes?.length > 0) && */}
                    <CountryDropdown
                        value={countryState?.country}
                        priorityOptions={['US', 'CA']}
                        name="country"
                        valueType="short"
                        className="floating-input pt-[4px] bg-white"
                        // whitelist={countryCodes}
                        onChange={(val) => {
                            if (!val) {
                                setCountryState((prv) => ({ ...prv, country: val, countryError: "Please select the country" }));
                            }
                            else {
                                setCountryState((prv) => ({ ...prv, country: val, countryError: "" }));
                            }
                            onChange(val);
                        }} />
                    {/* } */}
                    {/* {countryState?.countryError && <p className="error text-red Mui-error">{countryState?.countryError}</p>} */}
                    <ErrorMessage name='shipping_country' component="p" className="text-sm text-red" />

                </div>
            </div>
            <div className='country_state_main flex flex-wrap  w-1/2'>
                <div className={`select ${countryState?.stateError && "error_wrap"} w-full `}>
                    <RegionDropdown
                        country={countryState?.country || "US"}
                        disabled={!countryState?.country}
                        value={countryState?.state}
                        name="state"
                        valueType="short"
                        defaultOptionLabel={countryState?.country === 'CA' ? 'Province' : "State"}
                        countryValueType="short"
                        className="floating-input pt-[4px] bg-white"
                        onChange={(val) => {
                            if (!val) {
                                setCountryState((prv) => ({ ...prv, state: val, stateError: "Please select the state" }));
                            }
                            else {
                                setCountryState((prv) => ({ ...prv, state: val, stateError: "" }));
                            }
                            onChange(val, 'state');
                        }}
                    />
                    <ErrorMessage name='shipping_state' component="p" className="text-sm text-red" />
                    {/* {countryState?.stateError && <p className="error text-red Mui-error">{countryState?.stateError}</p>} */}
                </div>
            </div>
        </div>
    )
}

CountryAndStateInputs.propTypes = {
    // countryCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
    countryState: PropTypes.shape({
        country: PropTypes.string,
        countryError: PropTypes.string,
        state: PropTypes.string,
        stateError: PropTypes.string
    }).isRequired,
    setCountryState: PropTypes.func.isRequired,
    onChange: PropTypes.func
};

export default CountryAndStateInputs;