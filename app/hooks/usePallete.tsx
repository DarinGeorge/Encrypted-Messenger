import {useState} from 'react';
import tw, {RnColorScheme, useAppColorScheme} from 'twrnc';
import {ColorPallete, ThemedColors, ThemeSettings} from '../../types';
import {pallete, defaultTheme} from '../constants/Colors';

export interface PalleteReturn {
  pallete: ColorPallete;
  themed: ThemedColors;
  scheme: RnColorScheme;
  toggleColorScheme(): void;
  setColorScheme(colorScheme: RnColorScheme): void;
  changeThemeSettings(settings: ThemeSettings): void;
}

const light: ThemedColors = defaultTheme.light;
const dark: ThemedColors = defaultTheme.dark;

export default function usePallete(): PalleteReturn {
  const [userSettings, setUserSettings] = useState<ThemeSettings>();
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
  const themed: ThemedColors =
    colorScheme === 'light' ? (userSettings ? userSettings.light : light) : userSettings ? userSettings.dark : dark;

  const changeThemeSettings = (settings: ThemeSettings) => {
    setUserSettings(settings);
  };

  return {
    pallete,
    themed,
    scheme: colorScheme,
    toggleColorScheme,
    setColorScheme,
    changeThemeSettings,
  };
}
