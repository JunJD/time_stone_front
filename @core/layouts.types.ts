import { Theme } from '@mui/material/styles';
import DefaultPalette from './theme/palette';

export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type ThemePalette = ReturnType<typeof DefaultPalette>;

type ModifyPropertyType<T, K extends keyof T, U> = {
  [P in keyof T]: P extends K ? U : T[P];
};

export type customTheme = ModifyPropertyType<Theme, 'palette', ThemePalette>;
