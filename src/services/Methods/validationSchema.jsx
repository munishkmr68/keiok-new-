import * as Yup from 'yup';
import { REFFERAL_VALUES } from './normalMethods';

export const loginIntialValue = { email: '', password: '' }

export const BrandAffiliateInitialValues = {
    pathValue: "affiliate", selectedDay: "", selectedMonth: "", selectedYear: "", joinAs: "", zipcode: "", address: "", brandAgreement: false, privacyPolicy: false, electronicRecord: false, webAlias: "", businessName: "",
    businessCreationDate: null, businessAddress: "", businessAddress2: "", businessZip: "", businessCityState: "", refferal: REFFERAL_VALUES?.webalies ? REFFERAL_VALUES?.webalies : "",
};

export const BrandAmbassadorInitialValues = {
    pathValue: "ambassador", selectedDay: "", selectedMonth: "", selectedYear: "", joinAs: "", zipcode: "", address: "", brandAgreement: false, privacyPolicy: false, electronicRecord: false, webAlias: "", businessName: "",
    businessCreationDate: null, businessAddress: "", businessAddress2: "", businessZip: "", businessCityState: "", refferal: REFFERAL_VALUES?.webalies ? REFFERAL_VALUES?.webalies : "",
};

export const loginDefaultSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please provide a valid email address.')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'The password must contain between 6 and 60 characters.'),
});


const commonPasswordSchema = ({
    password: Yup.string()
        .required('Password is required')
        .min(6, 'The password must contain between 6 and 60 characters.'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value;
        }),
})
export const resetPasswordVale = { password: '', confirmPassword: '' }
export const resetPasswordDefaultSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Please provide a valid email address.'),
    ...commonPasswordSchema
});

export const forgotPasswordValues = { key: '', password: '', confirmPassword: '' }
export const forgotPasswordDefaultSchema = Yup.object().shape({
    key: Yup.string().required('Temporary key is required'),
    ...commonPasswordSchema
});

export const ChangeMyAccountPasswordSchema = Yup.object().shape({
    currentpassword: Yup.string().trim().required('Please enter current password'),
    ...commonPasswordSchema
});

export const signUpValidationSchema = (activestep, isUserLogin, section) => {
    const validationArray = [
        Yup.object().shape({ pathValue: Yup.string().required('Please select a Path') }),
        Yup.object().shape({
            selectedDay: Yup.number().required('Please select a Day'),
            selectedMonth: Yup.string().required('Please select a Month'),
            selectedYear: Yup.number().required('Please select a Year')
                .max(new Date().getFullYear() - 18, `You must be 18 years or older to enroll as a Brand ${section}`),
        }),
        Yup.object().shape({ email: Yup.string().notRequired() }),
        Yup.object().shape({
            webAlias: Yup.string().required('Website name is required')
                .matches(/^\S*$/, "Website name doesn't allow spaces")
            // .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Website name must be a valid URL')
        }),
        Yup.object().shape({
            joinAs: Yup.string().required('Please choose how would you like to join'),
            webAlias: Yup.string().required('Website name is required')
                .matches(/^\S*$/, "Website name doesn't allow spaces"),
            businessName: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().required('Please enter your business name.') }),
            businessCreationDate: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().nullable().required('Please enter your business creation date.') }).when('joinAs', { is: "Individual", then: () => Yup.string().notRequired() }),
            businessAddress: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().required('Please enter your business address') }),
            businessAddress2: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().notRequired() }),
            businessZip: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().required('Please enter your business Zip code') }),
            businessCityState: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().required('Please enter your business City/State') }),
        }),
        Yup.object().shape({
            brandAgreement: Yup.bool().oneOf([true], `Please read and agree to the keiok Brand ${section} Agreement and Policies.`),
            privacyPolicy: Yup.bool().oneOf([true], `Please read and agree to the keiok Brand ${section} Agreement and Policies.`),
            electronicRecord: Yup.bool().oneOf([true], `Please read and agree to the keiok Brand ${section} Agreement and Policies.`),
            webAlias: Yup.string().required('Website name is required')
                .matches(/^\S*$/, "Website name doesn't allow spaces"),
            businessName: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().required('Please enter your business name.') }),
            businessCreationDate: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().nullable().required('Please enter your business creation date.') }).when('joinAs', { is: "Individual", then: () => Yup.string().notRequired() }),
            businessAddress: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().required('Please enter your business address') }),
            businessAddress2: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().notRequired() }),
            businessZip: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().required('Please enter your business Zip code') }),
            businessCityState: Yup.string().when('joinAs', { is: "Business", then: () => Yup.string().required('Please enter your business City/State') }),
        })
    ];
    return validationArray[activestep];
};

export const ShippingAddressInitialValues = (section) => ({
    [`${section}_urname`]: '',
    [`${section}_lastname`]: '',
    [`${section}_street`]: '',
    [`${section}_street2`]: '',
    [`${section}_city`]: '',
    [`${section}_zipcode`]: '',
    [`${section}_country`]: '',
    [`${section}_state`]: '',
    emailAddress: ''
});

export const ShippingAddressValidationSchema = (section = 'shipping') => {
    return Yup.object().shape({
        [`${section}_urname`]: Yup.string().required('Name is required.'),
        [`${section}_lastname`]: Yup.string().required('Last name is required.'),
        [`${section}_street`]: Yup.string().required('Address 1 is required.'),
        [`${section}_country`]: Yup.string().required('Please select your country.'),
        [`${section}_state`]: Yup.string().required('Please select your state.'),
        [`${section}_street2`]: Yup.string().notRequired(),
        [`${section}_city`]: Yup.string().required('City is required.'),
        [`${section}_zipcode`]: Yup.string().required('Zipcode is required.'),
        emailAddress: (section === 'shipping')
            ?
            Yup.string().required('Email address is required.').email('Please enter valid email.')
            :
            Yup.string().notRequired()
    });
}
