import { _handleValidDateCheck } from "@/services/Methods/normalMethods";
import { ErrorMessage } from "formik";
import React from "react";
import Day from "../components/EarnMyWay/Affiliate/BirthDate/Day";
import Month from "../components/EarnMyWay/Affiliate/BirthDate/Month";
import Year from "../components/EarnMyWay/Affiliate/BirthDate/Year";


const BirthdateComponent = (data) => {
    const { fieldValue, setChangeBirthDay, changeBirthDay, props } = data;
    const { months, formData, setFormData } = props;
    const onSubmit = () => {
        setChangeBirthDay(!changeBirthDay)
    }
    const onCancel = () => {
        fieldValue?.setFieldValue('selectedDay', formData?.selectedDay);
        fieldValue?.setFieldValue('selectedMonth', formData?.selectedMonth);
        fieldValue?.setFieldValue('selectedYear', formData?.selectedYear);
        setChangeBirthDay(!changeBirthDay)
    }
    return (
        <div className="flex flex-col gap-[9px]">
            <div className="">
                <Day props={props} fieldValue={fieldValue} />
                <p className="text-sm text-red mt-3">{fieldValue?.errors?.selectedDay}</p>
            </div>
            <div className="">
                <Month props={props} fieldValue={fieldValue} />
                <p className="text-sm text-red mt-3">{fieldValue?.errors?.selectedMonth}</p>
            </div>
            <div className="">
                <Year props={props} fieldValue={fieldValue} />
                <p className="text-sm text-red mt-3" >{fieldValue?.errors?.selectedYear}</p>
            </div>
            <div className="flex w-3/6">
                <button
                    type="button"
                    className="primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white"
                    onClick={() => _handleValidDateCheck(fieldValue?.values, fieldValue, months, onSubmit, setFormData)}
                >
                    <span>Save</span>
                </button>
                <button
                    disabled={fieldValue?.errors?.selectedYear ? true : false}
                    type="button"
                    className="secondary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-sky-500"
                    onClick={() => onCancel()}
                >
                    <span>Cancel</span>
                </button>
            </div>
        </div>
    )
}
export default BirthdateComponent;