import React from 'react';
import { Input, Box, Label, Paragraph } from '@gedesurya125/surya-ui';
import type { InputProps, ThemeUIStyleObject } from 'theme-ui';
import { useField } from 'formik';

interface TextInputProps extends InputProps {
  name: string;
  inputId: string;
  label?: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password';
}
export const TextInput: React.FC<TextInputProps> = ({
  name,
  inputId,
  label,
  type = 'text',
  sx
}) => {
  const [field, meta] = useField(name);
  return (
    <Box sx={{ mt: '0.5rem', ...sx }}>
      <InputLabel sx={{ visibility: 'hidden' }}>hidden</InputLabel>
      <Box
        sx={{
          position: 'relative'
        }}
      >
        <Input
          id={inputId}
          type={type}
          sx={{
            position: 'relative',
            borderWidth: '0 0 0.1rem 0',
            p: '0 0 0.5rem 0',
            borderRadius: 0,
            outline: 'none',
            fontFamily: 'secondary',
            fontSize: '1.2rem',
            zIndex: 1,
            '&:focus ~ .input-label, :not(:placeholder-shown) ~ .input-label': {
              bottom: '100%'
            }
          }}
          placeholder=" "
          {...field}
        />

        {!!label && (
          <InputLabel
            htmlFor={inputId}
            sx={{
              position: 'absolute',
              bottom: '0.6rem',
              transition: 'all 0.3s ease'
            }}
          >
            {label}
          </InputLabel>
        )}
      </Box>
      {meta.touched && !!meta.error && (
        <Paragraph sx={{ fontFamily: 'secondary', color: 'red' }}>
          {meta.error}
        </Paragraph>
      )}
    </Box>
  );
};

interface InputLabelProps {
  id?: string;
  htmlFor?: string;
  sx?: ThemeUIStyleObject;
  children?: React.ReactNode;
}
export const InputLabel = ({ id, htmlFor, sx, children }: InputLabelProps) => {
  return (
    <Label
      id={id}
      className="input-label"
      htmlFor={htmlFor}
      sx={{
        fontFamily: 'primary',
        fontSize: [null, null, null, null, '1rem'],
        ...sx
      }}
    >
      {children}
    </Label>
  );
};
