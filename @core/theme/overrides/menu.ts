import { customTheme } from '@/@core/layouts.types';

const Menu = (theme: customTheme) => {
  return {
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiMenu-paper': {
            borderRadius: 5,
            boxShadow:
              theme.palette.mode === 'light'
                ? theme.shadows[8]
                : theme.shadows[9],
          },
        },
      },
    },
  };
};

export default Menu;
