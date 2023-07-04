'use client';

import {
  SettingsConsumer,
  SettingsProvider,
} from '@/@core/context/settingsContext';
import ThemeComponent from '@/@core/theme/ThemeComponent';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => {
          return (
            <ThemeComponent settings={settings}>{children}</ThemeComponent>
          );
        }}
      </SettingsConsumer>
    </SettingsProvider>
  );
};

export default Providers;
