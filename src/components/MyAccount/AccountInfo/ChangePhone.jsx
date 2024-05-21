import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import ChangePhoneField from './ChangePhoneField';
import NortonLogo from '../../../assets/images/norton-logo.png';

const ChangePhoneSchema = Yup.object().shape({
  phoneNumbers: Yup.string().required('Please provide a valid phone number.')
    .test('is-valid-format', 'Invalid phone number', (value) => {
      const ValidateNumberValue = value?.replace(/\s/g, '');
      return /^(?:\+?[0-9]{1,3}[-‑. ]?)?(?:\([0-9]{3}\)|[0-9]{3})[-‑. ]?[0-9]{3}[-‑. ]?[0-9]{4}$/.test(ValidateNumberValue) ||
        /^\d{10,14}$/.test(ValidateNumberValue);
    })
});

const ChangePhone = (props) => {
  const { _handleSteps, _handleChangePhoneSubmit, loginLoading, loginUserData } = props;
  return (
    <Formik
      initialValues={{ currentphonenumber: '', phoneNumbers: '' }}
      validationSchema={ChangePhoneSchema}
      onSubmit={(values, actions) => _handleChangePhoneSubmit(values, actions)}
    >{(fieldValues) => (
      <Form>
        <div className="max-w-[484px] mx-auto px-4 pt-12">
          <span
            className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
            onClick={() => _handleSteps('back')}
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </span>
          <h3 className="mt-8 mb-6">Change Phone Number </h3>
        </div>

        <div className="bg-bg3 py-8 sm:px-4">
          <div className="max-w-[484px] mx-auto px-4">
            <Image
              className="max-w-[66px] ml-auto mb-1"
              src={NortonLogo}
              alt="logo"
            />
            <div className="flex flex-col gap-2">
              <Field name="currentphonenumber">
                {({ field, form }) => (
                  <ChangePhoneField
                    field={field}
                    className="relative z-30"
                    label="Current Phone Number"
                    id="currentphonenumber"
                    htmlFor="currentphonenumber"
                    name="currentphonenumber"
                    disabled={true}
                    value={loginUserData?.phoneNumbers?.cellPhone}
                    disable={true}
                  />
                )}
              </Field>
              <Field name="phoneNumbers">
                {({ field, form }) => (
                  <>
                    <ChangePhoneField
                      field={field}
                      className="relative z-20"
                      label="Phone number"
                      id="phoneNumbers"
                      htmlFor="phoneNumbers"
                      name="phoneNumbers"
                    />
                    <ErrorMessage name="phoneNumbers" component="div" className="text-red" />
                  </>
                )}
              </Field>
            </div>
          </div>
        </div>
        <div className="max-w-[484px] mx-auto px-4">
          <div className="flex flex-col mt-[30px] gap-4">
            <button type="submit" className="primary-button w-auto font-medium min-w-[124px]">
              {loginLoading ? <div className="h-6 w-6 mr-auto ml-auto animate-spin rounded-full border-2 border-solid border-white border-t-transparent" /> : 'Save'}
            </button>
            <button type="button" className="primary-button-outlined w-auto font-medium">
              Cancel
            </button>
          </div>
        </div>
      </Form>
    )}
    </Formik>
  );
};

export default ChangePhone;
