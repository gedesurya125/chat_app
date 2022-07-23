import React from 'react';
import { Formik, Form } from 'formik';
import { TextInput, PrimaryButton } from 'components';
import { registrationInitialValue, RegistrationFormSchema } from './utils';
import useTranslation from 'next-translate/useTranslation';

import { useMutation, gql } from '@apollo/client';

const USER_REGISTRATION = gql`
  mutation Mutation($input: UserRegistration) {
    userRegistration(input: $input) {
      code
      error
      message
      user {
        firstName
        middleName
        lastName
        email
        phone
      }
    }
  }
`;

export const ReagistrationForm = () => {
  const [registrateUser, { data, loading, error }] =
    useMutation(USER_REGISTRATION);

  const { t } = useTranslation('login');

  if (loading) {
    console.log('submitting');
  }

  if (error) {
    console.log(
      'this is the errro',
      // @ts-ignore
      error?.networkError?.result?.errors[0].message
    );
  }

  if (data) {
    console.log('datanya mass', data);
  }
  return (
    <Formik
      enableReinitialize
      validationSchema={RegistrationFormSchema}
      onSubmit={(values) => {
        registrateUser({
          variables: {
            input: values
          }
        });
      }}
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
          name="phone"
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
