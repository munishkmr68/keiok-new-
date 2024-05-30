import { ErrorMessage } from "formik";
import Inputbox from "@/components/inputbox";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import LockCircleIcon from "../../../assets/images/icons/lock-circle.svg";
import CardIcons from "../../../assets/images/icons/card-group-icons.svg";
import { ShippingAddressInitialValues } from "@/services/Methods/validationSchema";

export const AddressIconSection = ({ _handleSteps, title, setFormData, setCountryState }) => (
    <div className="max-w-[484px] mx-auto px-4 pt-12">
        <span
            className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
            onClick={() => {
                setFormData(ShippingAddressInitialValues('shipping'));
                setCountryState((prv) => ({ ...prv, country: '', state: '' }))
                _handleSteps('back');
            }}
        >
            <ChevronLeftIcon className="w-4 h-4" />
        </span>
        <div className="flex items-center flex-col">
            <LockCircleIcon className="mb-6 mt-8" />
            <h3 className="mb-4">{title}</h3>
        </div>
    </div>

)

export const InnerInputComp = ({
    name, label, errors, disabled, handleChange,
    handleBlur, values, setFieldValue, _handleOnValueChange
}) => (
    <div>
        <div className="relative">
            <Inputbox
                name={name}
                id={name}
                placeholder=""
                disabled={disabled}
                onChange={(e) => {
                    handleChange(e);

                    if (name === 'shipping_urname') {
                        setFieldValue('shipping_lastname', _.split(e.target.value, ' ')?.[1] || 'test');
                    }
                }}
                onBlur={(e) => {
                    handleBlur(e);
                    _handleOnValueChange(e, values, setFieldValue)
                }}
                value={values?.[name]}
                className={`
          floating-input peer 
          ${_.isEmpty(errors) ? "" : (errors?.[name]) ? 'invalid' : 'valid'} 
          ${(name === 'shipping_urname') ? 'text-inputcolor border-inputcolor' : ""}
          `}
            />
            <label htmlFor={name} className={`floating-label ${(name === 'shipping_urname') ? 'text-inputcolor' : ""}`}>
                {label}
            </label>
        </div>
        <ErrorMessage name={name} component="p" className="text-sm text-red" />
    </div>
);

export const AddressButtonSection = ({
    saveText = "Add New Address",
    checkoutNormalAddressError,
    checkoutError,
    FieldValues,
    setFormData,
    setCountryState,
    _handleSteps
}) => {
    return (
        <div className="max-w-[484px] mx-auto px-4 ">
            <div className="flex flex-col mt-[30px] gap-2">
                <button
                    type="submit"
                    className="primary-button w-auto font-medium min-w-[124px]"
                    onClick={() => {
                        if (!checkoutNormalAddressError && !checkoutError) {
                            FieldValues?.handleSubmit();
                        }
                    }}
                >
                    {saveText}
                </button>
                <button type="button" className="primary-button-outlined w-auto font-medium" onClick={() => {
                    setFormData(ShippingAddressInitialValues('shipping'));
                    setCountryState({ country: "", countryError: "", state: "", stateError: "" });
                    _handleSteps('back');
                }}>
                    Cancel
                </button>
            </div>
        </div>
    )
}