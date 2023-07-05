import { customTheme } from '@/@core/layouts.types';

const Typography = (theme: customTheme) => {
  return {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: theme.spacing(2),
        },
      },
    },
  };
};

export default Typography;
