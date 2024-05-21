const EnrollmentTypeChange = (data) => {
    const { fieldValue, changeEnrollmentType, setChangeEnrollmentType, setEditBusinessAddress, props } = data;
    const { formData, setFormData } = props;

    const onSave = () => {
        setFormData((prv) => ({ ...prv, joinAs: fieldValue?.values?.joinAs }))
        setChangeEnrollmentType(!changeEnrollmentType)
    }
    const onCancel = () => {
        fieldValue?.setFieldValue('joinAs', formData?.joinAs);
        setChangeEnrollmentType(!changeEnrollmentType)
    }
    return (
        <fieldset className="flex flex-col gap-4 mt-3">
            <div className="flex gap-2 items-center">
                <span className="w-5 flex justify-center ">
                    <input
                        id="individual"
                        className="accent-blue checked:w-5 checked:h-5"
                        type="radio"
                        name="joinAs"
                        checked={fieldValue?.values?.joinAs === 'Individual'}
                        onChange={(e) => {
                            fieldValue?.handleChange(e);
                            setEditBusinessAddress(false)
                        }}
                        value="Individual"
                    />
                </span>
                <label htmlFor="individual" className="text-t1">
                    Individual
                </label>
            </div>
            <div className="flex gap-2 items-center">
                <span className="w-5 flex justify-center">
                    <input
                        id="business"
                        className="accent-blue checked:w-5 checked:h-5"
                        type="radio"
                        name="joinAs"
                        checked={fieldValue?.values?.joinAs === 'Business'}
                        onChange={(e) => {
                            fieldValue?.handleChange(e);
                            setEditBusinessAddress(true)
                        }}
                        value="Business"
                    />
                </span>
                <label htmlFor="business" className="text-t1">
                    Business
                </label>
            </div>
            <div className="flex w-3/6 mt-5">
                <button
                    className="primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white"
                    onClick={() => onSave()}
                >
                    <span>Save</span>
                </button>
                <button
                    className="secondary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-sky-500"
                    onClick={() => onCancel()}
                >
                    <span>Cancel</span>
                </button>
            </div>
        </fieldset>
    )
}
export default EnrollmentTypeChange;