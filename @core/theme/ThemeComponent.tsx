'use client';

import { ReactNode } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

import { Settings } from '@/@core/context/settingsContext';

import themeConfig from '@/@core/configs/themeConfig';

// ** Theme Override Imports
import overrides from './overrides';
import typography from './typography';

// ** Theme
import themeOptions from './ThemeOptions';

// ** Global Styles
import GlobalStyling from './globalStyles';
import { customTheme } from '../layouts.types';

interface Props {
  settings: Settings;
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  // ** Props
  const { settings, children } = props;

  // ** Merged ThemeOptions of Core and User
  const coreThemeConfig = themeOptions(settings);

  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig);

  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: { ...overrides(theme as unknown as customTheme) },
    typography: { ...typography(theme as unknown as customTheme) },
  });

  // ** 创建一个响应式的、支持自适应字体大小的主题
  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={() => GlobalStyling(theme as unknown as customTheme)}
      />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
