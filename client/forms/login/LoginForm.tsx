import React from 'react';

import { Form, Formik } from 'formik';

// Local Components
import { TextInput, PrimaryButton } from 'components';

// Validation Schema
import { LoginFormSchema } from './validationSchema';

export const LoginForm = () => {
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
          Login
        </PrimaryButton>
      </Form>
    </Formik>
  );
};
