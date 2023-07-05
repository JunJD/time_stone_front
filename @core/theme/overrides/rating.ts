import { customTheme } from '@/@core/layouts.types';

const Rating = (theme: customTheme) => {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.warning.main,
        },
      },
    },
  };
};

export default Rating;
