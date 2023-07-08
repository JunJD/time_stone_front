'use client';

import {
  SettingsConsumer,
  SettingsProvider,
} from '@/@core/context/settingsContext';
import { SnackbarProvider } from 'notistack';
import ThemeComponent from '@/@core/theme/ThemeComponent';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>{children}</ThemeComponent>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </SnackbarProvider>
  );
};

export default Providers;
