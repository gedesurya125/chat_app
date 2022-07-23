import React from 'react';

// Externaln Components
import {
  Box,
  Button,
  GridTemplate,
  Heading,
  Paragraph,
  useThemeConfig
} from '@gedesurya125/surya-ui';
import useTranslation from 'next-translate/useTranslation';

// Local Components
import { LoginForm, ReagistrationForm } from 'forms';

const Login = () => {
  const [showRegistration, setShowRegistration] = React.useState(false);

  const handleShowRegistrationCard = () => setShowRegistration(true);
  const handleShowLoginCard = () => setShowRegistration(false);

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
      {showRegistration ? (
        <RegistrationCard handleShowLoginCard={handleShowLoginCard} />
      ) : (
        <LoginCard handleShowRegistrationCard={handleShowRegistrationCard} />
      )}
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
  const { t } = useTranslation('login');
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
        {t('title')}
      </Heading>
      <Paragraph
        sx={{
          fontFamily: 'secondary',
          fontSize: '1.3rem',
          lineHeight: 1.1,
          mt: '1rem'
        }}
      >
        {t('description')}
      </Paragraph>
    </Box>
  );
};

type LoginCardProps = {
  handleShowRegistrationCard: Function;
};
const LoginCard = ({ handleShowRegistrationCard }: LoginCardProps) => {
  const { t } = useTranslation('login');
  return (
    <CardContainer title="Login">
      <LoginForm />
      <CardFooter isLogin handleClick={handleShowRegistrationCard} />
    </CardContainer>
  );
};

interface RegistrationCardProps {
  handleShowLoginCard: Function;
}
const RegistrationCard = ({ handleShowLoginCard }: RegistrationCardProps) => {
  return (
    <CardContainer>
      Registration form
      <ReagistrationForm />
      <CardFooter isLogin={false} handleClick={handleShowLoginCard} />
    </CardContainer>
  );
};

// Reausable Components
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

interface CardFooterProps {
  isLogin: boolean;
  handleClick: Function;
}
const CardFooter = ({ isLogin, handleClick }: CardFooterProps) => {
  const { t } = useTranslation('login');

  return (
    <Paragraph
      sx={{
        fontFamily: 'secondary',
        fontSize: '1rem',
        mt: '1rem'
      }}
    >
      {t(isLogin ? 'noAccountQuestion' : 'haveAccountQuestion')},{' '}
      <Button onClick={() => handleClick()} variant="clear">
        {t(isLogin ? 'createAccount' : 'login')}
      </Button>
    </Paragraph>
  );
};
