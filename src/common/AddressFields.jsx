"use client"

import CountryAndStateInputs from "@/common/inputs/CountryStateDropdown";
import GoogleAutocomplete from "@/components/GoogleAutocomplete";
import Inputbox from "@/components/inputbox";
import { ShippingAddressInitialValues, ShippingAddressValidationSchema } from "@/services/Methods/validationSchema";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";

const InputFieldValue = ({
    name, label, values, handleChange,
    handleBlur, setFieldValue, _onhandle, section
}) => (
    <div>
        <div className="relative">
            <Inputbox
                name={name}
                value={values?.[name]}
                onChange={(e) => {
                    handleChange(e);
                    if (name === `${section}_urname`) {
                        setFieldValue(`${section}_lastname`, _.split(e.target.value, ' ')?.[1] || 'test');
                    }
                }}
                onBlur={(e) => {
                    handleBlur(e);
                    _onhandle(e, values, 'placeOrder')
                }}
                id={name}
                placeholder=""
                className="floating-input peer"
            />
            <label htmlFor={name} className="floating-label">
                {label}
            </label>
            <ErrorMessage name={name} component='p' className="text-sm text-red" />
        </div>
    </div>
);

const AddressFields = ({
    section,
    addressValues,
    countryState,
    setCountryState,
    onClick,
    onClose,
    _handleOnValueChange,
    _handelGooglePlace,
    checkoutError, checkoutNormalAddressError,
}) => {

    const [additionalAddressFields, setAdditionalAddressFields] = useState(1);

    const handleAddAddressField = () => {
        setAdditionalAddressFields((prevFields) => prevFields + 1);
    };

    return (
        <Formik
            enableReinitialize
            initialValues={addressValues}
            validationSchema={ShippingAddressValidationSchema(section)}
            onSubmit={(values, actions) => onClick({ values, actions })}
        >
            {(fieldValues) => {
                const FieldValues = { ...fieldValues, section, _onhandle: _handleOnValueChange }
                return (
                    <Form>
                        <div className="flex flex-col gap-[9px] mt-6">
                            <InputFieldValue name={`${section}_urname`} label="Full Name" {...FieldValues} />
                            <div className="relative">
                                <GoogleAutocomplete
                                    defaultValue={addressValues?.[`${section}_street`]}
                                    onChange={(val) => {
                                        FieldValues?.setFieldValue(`${section}_street`, val);
                                    }}
                                    manually={false}
                                    label={`Address`}
                                    InputClassName="pl-3.5"
                                    LabelClassName="!pl-0"
                                    callback={(data) => _handelGooglePlace(data, 'placeOrder', FieldValues)}
                                />
                                <ErrorMessage name={`${section}_street`} component="p" className="text-sm text-red" />
                                <p className='text-sm text-red'>{checkoutNormalAddressError || checkoutError || ''}</p>
                            </div>

                            {(additionalAddressFields < 2) &&
                                <span className="text-sm text-blue" onClick={() => handleAddAddressField()}>
                                    +Address {additionalAddressFields + 1} (optional)
                                </span>
                            }
                            {(additionalAddressFields === 2) &&
                                <InputFieldValue name={`${section}_street2`} label="Address 2" {...FieldValues} />
                            }
                            <CountryAndStateInputs {...{
                                countryState, setCountryState, onChange: (val, sec) => {
                                    if (sec === 'state') {
                                        FieldValues?.setFieldValue('shipping_state', val);
                                    } else {
                                        FieldValues?.setFieldValue('shipping_country', val);
                                    }
                                }
                            }} />
                            <InputFieldValue name={`${section}_zipcode`} label="ZIP code" {...FieldValues} />
                            <InputFieldValue name={`${section}_city`} label="City" {...FieldValues} />
                            <div className="flex mt-[30px] gap-4">
                                <button type='button' className="primary-button w-auto font-medium min-w-[124px]"
                                    onClick={() => {
                                        if (!checkoutNormalAddressError && !checkoutError) {
                                            fieldValues?.handleSubmit();
                                        }
                                    }}>
                                    Save
                                </button>
                                <button className="primary-button-text-only w-auto font-medium" onClick={() => onClose(section)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default AddressFields;
