const ChoosePathComponent = (data) => {

    const { fieldValue, setChangePath, changePath, formData, setFormData } = data;
    const onSave = () => {
        setFormData((prv) => ({ ...prv, pathValue: fieldValue?.values?.pathValue }))
        setChangePath(!changePath)
    }
    const onCancel = () => {
        fieldValue?.setFieldValue('pathValue', formData?.pathValue);
        setChangePath(!changePath)
    }

    return (
        <>
            <fieldset className="flex flex-col gap-4 mt-4">
                <div className="flex gap-2 items-center">
                    <span className="w-5 flex justify-center">
                        <input
                            id="draft"
                            className="accent-blue checked:w-5 checked:h-5"
                            type="radio"
                            name="pathValue"
                            checked={fieldValue?.values?.pathValue === 'ambassador'}
                            onChange={fieldValue?.handleChange}
                            value="ambassador"
                        />
                    </span>
                    <label htmlFor="draft" className="text-t1">
                        Brand Ambassador
                    </label>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="w-5 flex justify-center">
                        <input
                            id="published"
                            className="accent-blue checked:w-5 checked:h-5"
                            type="radio"
                            name="pathValue"
                            checked={fieldValue?.values?.pathValue === 'affiliate'}
                            onChange={fieldValue?.handleChange}
                            value="affiliate"
                        />
                    </span>
                    <label htmlFor="published" className="text-t1">
                        Brand Affiliate
                    </label>
                </div>
            </fieldset>
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
        </>
    )
}
export default ChoosePathComponent;