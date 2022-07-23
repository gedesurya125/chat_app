import React from 'react';

// External Component
import { Form, Formik } from 'formik';
import useTranslation from 'next-translate/useTranslation';
// Local Components
import { TextInput, PrimaryButton } from 'components';

// Validation Schema
import { LoginFormSchema } from './validationSchema';

export const LoginForm = () => {
  const { t } = useTranslation('login');
  return (
    <Formik
      enableReinitialize
      validationSchema={LoginFormSchema}
      initialValues={{
        username: '',
        password: ''
      }}
      onSubmit={(values) => {}}
    >
      <Form>
        <TextInput
          inputId="username-input"
          label="Username"
          type="text"
          name="username"
        />
        <TextInput
          inputId="password-input"
          label="Password"
          type="password"
          name="password"
        />
        <PrimaryButton
          sx={{
            mt: '1rem'
          }}
        >
          {t('login')}
        </PrimaryButton>
      </Form>
    </Formik>
  );
};
