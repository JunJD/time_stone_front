import { customTheme } from '@/@core/layouts.types';

const Switch = (theme: customTheme) => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-track': {
            backgroundColor: `rgb(${theme.palette.customColors.main})`,
          },
        },
      },
    },
  };
};

export default Switch;
