import React from 'react';
import { Button } from '@gedesurya125/surya-ui';
import type { ThemeUIStyleObject } from 'theme-ui';

interface PrimaryButtonProps {
  children?: React.ReactNode;
  sx?: ThemeUIStyleObject;
}
export const PrimaryButton = ({ children, sx }: PrimaryButtonProps) => {
  return (
    <Button
      sx={{
        fontFamily: 'primary',
        fontSize: [null, null, null, null, '1rem'],
        ...sx
      }}
    >
      {children}
    </Button>
  );
};
