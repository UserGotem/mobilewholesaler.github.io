// NEXT
import { Roboto } from 'next/font/google';

// ==============================|| THEME CONSTANT ||============================== //

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

export const APP_DEFAULT_PATH = '/dashboard/default';
export const HORIZONTAL_MAX_ITEM = 6;
export const DRAWER_WIDTH = 280;
export const MINI_DRAWER_WIDTH = 90;
export const HEADER_HEIGHT = 74;

export const ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

export const MenuOrientation = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal'
};

export const ThemeDirection = {
  LTR: 'ltr',
  RTL: 'rtl'
};

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

// ==============================|| THEME CONFIG ||============================== //

const config = {
  fontFamily: roboto.style.fontFamily,
  i18n: 'en',
  menuOrientation: MenuOrientation.VERTICAL,
  menuCaption: true,
  miniDrawer: false,
  container: false,
  mode: ThemeMode.LIGHT,
  presetColor: 'default',
  themeDirection: ThemeDirection.LTR,
  themeContrast: false
};

export default config;
