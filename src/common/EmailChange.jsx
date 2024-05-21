import { ErrorMessage } from "formik";
import Inputbox from "@/components/inputbox";
import Notification from "@/components/notification";

const EmailComponent = (data) => {
    const { fieldValue, changeEmail, setChangeEmail, props } = data;
    const { _validateRefferalFunction, isLoginLoading, isWebAlies, setFormData, formData } = props;
    const onSubmit = () => {
        _validateRefferalFunction(fieldValue?.values?.webAlias, setChangeEmail);
        setFormData((prv) => ({ ...prv, webAlias: fieldValue?.values?.webAlias }))
    }
    const onCancel = () => {
        fieldValue?.setFieldValue('webAlias', formData?.webAlias);
        setChangeEmail(!changeEmail);
    }
    return (
        <>
            <div className="flex flex-col gap-[9px]">
                <label className='text-lg text-[#1C1C1C]'>{fieldValue?.values?.webAlias}.keiok.com</label>
                <Inputbox
                    name="webAlias"
                    id="websitename"
                    autocomplete="websitename"
                    placeholder="Your website name"
                    value={fieldValue?.values?.webAlias}
                    onChange={fieldValue?.handleChange}
                />
            </div>
            <p className="text-sm text-red">{fieldValue?.errors?.webAlias}</p>
            {!fieldValue?.errors?.webAlias && isWebAlies === "Error" && <p className="text-sm text-red" >This name is not available. Please choose a different name.</p>}
            <div className="flex w-3/6 mt-5">
                <button type="button"
                    className="primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white"
                    onClick={() => { !fieldValue?.errors?.webAlias && onSubmit() }}
                >
                    <span>{isLoginLoading ? <div className="h-6 w-6 mr-auto ml-auto animate-spin rounded-full border-2 border-solid border-white border-t-transparent" /> : 'Save'}</span>
                </button>
                <button
                    disabled={fieldValue?.errors?.webAlias || isWebAlies === "Error" ? true : false}
                    className="secondary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-sky-500"
                    onClick={() => onCancel()}
                >
                    <span>Cancel</span>
                </button>
            </div>
        </>
    )
}
export default EmailComponent;