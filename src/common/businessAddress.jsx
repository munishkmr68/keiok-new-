import { ErrorMessage } from "formik";
import Inputbox from "@/components/inputbox";
import { DatePicker } from "antd";
import _ from "lodash";
import moment from "moment";

const BusinessAddressComponent = (data) => {
    const { fieldValue, editBusinessAddress, setEditBusinessAddress, props } = data;
    const { formData, setFormData } = props;
    const onSave = () => {
        setFormData((prv) => ({
            ...prv,
            businessName: fieldValue?.values?.businessName,
            businessCreationDate: fieldValue?.values?.businessCreationDate,
            businessAddress: fieldValue?.values?.businessAddress,
            businessAddress2: fieldValue?.values?.businessAddress2,
            businessZip: fieldValue?.values?.businessZip,
            businessCityState: fieldValue?.values?.businessCityState,
        }))
        setEditBusinessAddress(!editBusinessAddress)
    }
    const onClose = () => {
        fieldValue?.setFieldValue('businessName', formData?.businessName);
        fieldValue?.setFieldValue('businessCreationDate', formData?.businessCreationDate);
        fieldValue?.setFieldValue('businessAddress', formData?.businessAddress);
        fieldValue?.setFieldValue('businessAddress2', formData?.businessAddress2);
        fieldValue?.setFieldValue('businessZip', formData?.businessZip);
        fieldValue?.setFieldValue('businessCityState', formData?.businessCityState);
        setEditBusinessAddress(!editBusinessAddress)
    }
    return (<>
        <Inputbox
            name="businessName"
            className={`max-h-[54px] mb-2.5 peer ${!!fieldValue?.errors?.businessName ? 'invalid' : 'valid'}`}
            id="businessName"
            placeholder="Business Name"
            value={fieldValue?.values?.businessName}
            onChange={fieldValue?.handleChange}
            onBlur={fieldValue?.handleBlur}
        />
        <p className="text-sm text-red" >{fieldValue?.errors?.businessName}</p>
        <DatePicker
            name="businessCreationDate"
            format="DD/MM/YYYY"
            value={fieldValue?.values?.businessCreationDate}
            disabledDate={(current) => {
                return current && current > moment(new Date());
            }}
            onChange={(date, dateString) => {
                console.log("date", date, "dateString", dateString)
                fieldValue?.setFieldValue("businessCreationDate", date)
            }}
            allowClear={true}
            status={!!fieldValue?.errors?.businessCreationDate && 'error'}
            style={{ width: '100%', maxHeight: '54px', height: '54px', borderColor: !fieldValue?.errors?.businessCreationDate && '#51c96d', marginBottom: '10px' }}
            placeholder={['Business Creation Date (DD/MM/YYYY)']}
        />
        <p className="text-sm text-red" >{fieldValue?.errors?.businessCreationDate}</p>
        <Inputbox
            name="businessAddress"
            className={`max-h-[54px] mb-2.5 peer ${!!fieldValue?.errors?.businessAddress ? 'invalid' : 'valid'}`}
            id="businessAddress"
            placeholder="Business Address"
            value={fieldValue?.values?.businessAddress}
            onChange={fieldValue?.handleChange}
            onBlur={fieldValue?.handleBlur}
        />
        <p className="text-sm text-red" >{fieldValue?.errors?.businessAddress}</p>
        <Inputbox
            name="businessAddress2"
            className={`max-h-[54px] mb-2.5 peer ${fieldValue?.values?.businessAddress2 ? 'valid' : ''}`}
            id="businessAddress2"
            placeholder="Apt, suite, company, c/o (optional)"
            value={fieldValue?.values?.businessAddress2}
            onChange={fieldValue?.handleChange}
            onBlur={fieldValue?.handleBlur}
        />
        <p className="text-sm text-red" >{fieldValue?.errors?.businessAddress2}</p>
        <Inputbox
            name="businessZip"
            className={`max-h-[54px] mb-2.5 peer ${!!fieldValue?.errors?.businessZip ? 'invalid' : 'valid'}`}
            id="businessZip"
            placeholder="Business ZIP"
            value={fieldValue?.values?.businessZip}
            onChange={fieldValue?.handleChange}
            onBlur={fieldValue?.handleBlur}
        />
        <p className="text-sm text-red" >{fieldValue?.errors?.businessZip}</p>
        <Inputbox
            name="businessCityState"
            className={`max-h-[54px] mb-2.5 peer ${!!fieldValue?.errors?.businessCityState ? 'invalid' : 'valid'}`}
            id="businessCityState"
            placeholder="Business City/State"
            value={fieldValue?.values?.businessCityState}
            onChange={fieldValue?.handleChange}
            onBlur={fieldValue?.handleBlur}
        />
        <p className="text-sm text-red" >{fieldValue?.errors?.businessCityState}</p>
        <div className="flex w-3/6 mt-2">
            <button
                className="primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white"
                onClick={() => !_.includes(['businessName', 'businessCreationDate', 'businessAddress', 'businessAddress2', 'businessZip', 'businessCityState'], fieldValue?.errors) && onSave()}
            >
                <span>Save</span>
            </button>
            <button
                disabled={_.includes(['businessName', 'businessCreationDate', 'businessAddress', 'businessAddress2', 'businessZip', 'businessCityState'], fieldValue?.errors) ? true : false}
                className="secondary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-sky-500"
                onClick={() => onClose()}
            >
                <span>Cancel</span>
            </button>
        </div>
    </>)
}
export default BusinessAddressComponent;