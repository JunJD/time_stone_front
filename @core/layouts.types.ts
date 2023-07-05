import { Theme } from '@mui/material/styles';
import DefaultPalette from './theme/palette';

// 主题相关
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

// 导航相关
export type NavLinkType = {
  path?: string;
  title: string;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  icon?: string | string[] | React.ReactNode;
  badgeColor?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';
};

// export type NavSectionTitle = {
//   sectionTitle: string;
// };

export type NavItemsType = NavLinkType[];
