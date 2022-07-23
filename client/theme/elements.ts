const buttonDefaults = {
  cursor: 'pointer'
};

export const buttons = {
  primary: {
    ...buttonDefaults
  },
  clear: {
    ...buttonDefaults,
    p: 0,
    bg: 'transparent',
    fontFamily: 'primary',
    color: 'inherit'
  }
};
