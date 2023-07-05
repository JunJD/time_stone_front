import { customTheme } from '@/@core/layouts.types';

const Chip = (theme: customTheme) => {
  return {
    MuiChip: {
      styleOverrides: {
        outlined: {
          '&.MuiChip-colorDefault': {
            borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`,
          },
        },
        deleteIcon: {
          width: 18,
          height: 18,
        },
      },
    },
  };
};

export default Chip;
