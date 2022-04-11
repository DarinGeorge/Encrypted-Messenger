import {ColorPallete, ThemedColors, ThemeSettings} from '../../types';

export const pallete: ColorPallete = {
  white: '#FFFFFF',
  black: '#000000',
  lightGray: '#ECEAEC',
  mediumGray: '#333',
  darkGray: '#474747',
  primary: '#009FB7',
  secondary: '#2A0C4E',
  tertiary: '#6E0E0A',
  error: '#FF231F',
};

export const defaultTheme: ThemeSettings = {
  light: {
    background: pallete.white,
    altBackground: pallete.lightGray,
    border: pallete.lightGray,
    button: pallete.primary,
    secondaryButton: pallete.secondary,
    altButton: 'transparent',
    icon: pallete.black,
    iconDisabled: pallete.lightGray,
  },
  dark: {
    background: pallete.black,
    altBackground: pallete.darkGray,
    border: pallete.darkGray,
    button: pallete.primary,
    secondaryButton: pallete.secondary,
    altButton: 'transparent',
    icon: pallete.white,
    iconDisabled: pallete.darkGray,
  },
};
