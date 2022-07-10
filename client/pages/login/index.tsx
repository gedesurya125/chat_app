import React from 'react';

// Externaln Components
import {
  Box,
  GridTemplate,
  Heading,
  Paragraph,
  useThemeConfig
} from '@gedesurya125/surya-ui';

import { Form, Formik } from 'formik';

// Local Components
import { TextInput, PrimaryButton } from 'components';
import { LoginForm } from 'forms';

const Login = () => {
  return (
    <GridTemplate
      as="section"
      sx={{
        height: '100vh',
        alignItems: 'center'
      }}
    >
      <PageBackground />
      <InformationBlock />
      <LoginCard />
    </GridTemplate>
  );
};

export default Login;

const PageBackground = () => {
  const config = useThemeConfig();
  const marginNormalizer = config.getGridTemplateMarginNormalizers();
  return (
    <Box
      className="page-background"
      sx={{
        bg: 'primary',
        gridColumn: [null, null, null, null, '12 / 25'],
        height: '100%',
        mr: [null, null, null, null, marginNormalizer[4]],
        gridRow: [null, null, null, null, 1]
      }}
    />
  );
};

const InformationBlock = () => {
  return (
    <Box
      sx={{
        gridColumn: [null, null, null, null, '2 / span 7'],
        gridRow: [null, null, null, null, 1]
      }}
    >
      <Heading
        as="h1"
        sx={{
          fontFamily: 'primary',
          fontSize: '2rem',
          lineHeight: 1
        }}
      >
        Welcome to the chat!!
      </Heading>
      <Paragraph
        sx={{
          fontFamily: 'secondary',
          fontSize: '1.3rem',
          lineHeight: 1.1,
          mt: '1rem'
        }}
      >
        Excepteur amet cupidatat dolore ut ex enim dolor. Nostrud ut enim tempor
        sint consequat mollit nostrud consequat. Quis ipsum deserunt tempor
        ipsum laboris sit aute laboris amet ipsum ipsum magna amet. Mollit
        occaecat amet eiusmod fugiat aliquip ut nisi velit velit consectetur
        enim ea.
      </Paragraph>
    </Box>
  );
};

const LoginCard = () => {
  return (
    <CardContainer title="Login">
      <LoginForm />
    </CardContainer>
  );
};

const RegistrationCard = () => {
  return (
    <CardContainer>
      <Box as="form">
        <TextInput
          inputId="username-input"
          label="Username"
          type="text"
          name="username"
        />
      </Box>
    </CardContainer>
  );
};

interface CardContainerProps {
  title?: string;
  children?: React.ReactNode;
}
const CardContainer = ({ title, children }: CardContainerProps) => {
  return (
    <Box
      sx={{
        gridColumn: [null, null, null, null, '15 / span 8'],
        bg: 'Background',
        gridRow: [null, null, null, null, 1],
        borderRadius: 'card',
        p: [null, null, null, null, '3rem']
      }}
    >
      <Heading as="h2" sx={{ fontFamily: 'primary', fontSize: '2rem' }}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};
