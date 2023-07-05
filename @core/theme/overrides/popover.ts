import { customTheme } from '@/@core/layouts.types';

const Popover = (theme: customTheme) => {
  return {
    MuiPopover: {
      styleOverrides: {
        root: {
          '& .MuiPopover-paper': {
            boxShadow: theme.shadows[6],
          },
        },
      },
    },
  };
};

export default Popover;
