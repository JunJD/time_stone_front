import { customTheme } from '@/@core/layouts.types';

const Divider = (theme: customTheme) => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: `${theme.spacing(2)} 0`,
        },
      },
    },
  };
};

export default Divider;
