import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Inputbox from "@/components/inputbox";
import NortonLogo from "../../../assets/images/norton-logo.png";
import { _updateCredentials } from '@/services/Redux/Reducer/LoginSlice';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please provide a valid email address.').required('Please provide a valid email address.'),
});

const SmsChangeEmail = (props) => {
  const { _handleSteps, _handleChangeEmailSubmit, loginUserData, loginLoading } = props;

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => _handleChangeEmailSubmit(values, actions)}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-[484px] mx-auto px-4 pt-12">
          <span
            className="w-[42px] h-[42px] rounded-full border border-blue text-blue flex items-center justify-center cursor-pointer"
            onClick={() => _handleSteps('back')}
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </span>
          <div className="flex flex-col items-center text-center mt-8">
            <h3 className="mb-4">Change Email</h3>
          </div>

          <div className="bg-bg3 py-10 px-4">
            <div className="max-w-[484px] mx-auto">
              <Image
                className="max-w-[66px] ml-auto mb-1"
                src={NortonLogo}
                alt="logo"
              />
              <div className="flex flex-col gap-[9px]">
                <div className="relative">
                  <Inputbox
                    name="currentemail"
                    className="max-h-[54px] pt-7 disabled:!border-inputcolor disabled:placeholder:text-inputcolor disabled:text-inputcolor peer"
                    id="currentemail"
                    disabled={true}
                    autoComplete="current email"
                    value={loginUserData?.emailAddress}
                  />
                  <label
                    htmlFor="currentemail"
                    className="font-bold absolute top-[2px] left-3.5 peer-disabled:text-inputcolor"
                  >
                    Current Email
                  </label>
                </div>

                <Field name="email">
                  {({ field, form }) => (
                    <div className="relative">
                      <input
                        {...field}
                        id="email"
                        type="email"
                        placeholder=""
                        className="floating-input peer"
                      />
                      <label htmlFor="email" className="floating-label">
                        Email
                      </label>
                      <ErrorMessage name="email" component="div" className="text-red" />
                    </div>
                  )}
                </Field>
              </div>
            </div>
          </div>
          <div className="max-w-[484px] mx-auto px-4">
            <div className="flex flex-col mt-[30px] gap-4">
              <button
                type="submit"
                className="primary-button w-auto font-medium min-w-[124px]"
                disabled={loginLoading ? true : false}
              >
                {loginLoading ? <div className="h-6 w-6 mr-auto ml-auto animate-spin rounded-full border-2 border-solid border-white border-t-transparent" /> : 'Save'}
              </button>
              <button type="reset" className="primary-button-text-only w-auto font-medium">
                Cancel
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SmsChangeEmail;
