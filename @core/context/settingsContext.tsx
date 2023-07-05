'use client';

import { createContext, useState, ReactNode } from 'react';

// ** 导入 Mui
import { PaletteMode } from '@mui/material';

// ** 导入 ThemeConfig
import themeConfig from '@/@core/configs/themeConfig';

// ** 导入 Types
import { ThemeColor } from '@/@core/layouts.types';

export type Settings = {
  mode: PaletteMode;
  themeColor: ThemeColor;
  navVisible: boolean;
};

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  navVisible: false,
};

// ** 创建 settingContext
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  // ** 维护状态
  const [settings, setSettings] = useState<Settings>({ ...initialSettings });

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
