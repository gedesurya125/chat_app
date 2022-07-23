import React from 'react';
import { Formik, Form } from 'formik';
import { TextInput, PrimaryButton } from 'components';
import { registrationInitialValue, RegistrationFormSchema } from './utils';
import useTranslation from 'next-translate/useTranslation';

export const ReagistrationForm = () => {
  const { t } = useTranslation('login');
  return (
    <Formik
      enableReinitialize
      validationSchema={RegistrationFormSchema}
      onSubmit={() => {}}
      initialValues={registrationInitialValue}
    >
      <Form>
        <TextInput
          name="firstName"
          inputId="fist-name"
          label="First Name"
          type="text"
        />
        <TextInput
          name="middleName"
          inputId="middle-name"
          label="Middle Name"
          type="text"
        />
        <TextInput
          name="lastName"
          inputId="last-name"
          label="Last Name"
          type="text"
        />
        <TextInput name="email" inputId="email" label="Email" type="email" />
        <TextInput
          name="phoneNumber"
          inputId="phone-number"
          label="Phone Number"
          type="tel"
        />
        <PrimaryButton
          sx={{
            mt: '1rem'
          }}
        >
          {t('continue')}
        </PrimaryButton>
      </Form>
    </Formik>
  );
};
