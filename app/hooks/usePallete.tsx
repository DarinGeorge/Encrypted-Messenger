import tw, {RnColorScheme, useAppColorScheme} from 'twrnc';
import {ColorPallete, ThemedColors} from '../../types';
import {pallete} from '../constants/Colors';

export interface PalleteReturn {
  pallete: ColorPallete;
  themed: ThemedColors;
  scheme: RnColorScheme;
  toggleColorScheme(): void;
  setColorScheme(colorScheme: RnColorScheme): void;
}

export default function usePallete(): PalleteReturn {
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);

  const themed: ThemedColors = {
    background: colorScheme === 'light' ? pallete.white : pallete.black,
    altBackground: colorScheme === 'light' ? pallete.lightGray : pallete.darkGray,
    border: colorScheme === 'light' ? pallete.lightGray : pallete.darkGray,
    button: pallete.primary,
    secondaryButton: pallete.secondary,
    altButton: 'transparent',
    icon: colorScheme === 'light' ? pallete.black : pallete.white,
    iconDisabled: colorScheme === 'light' ? pallete.lightGray : pallete.darkGray,
  };

  return {
    pallete,
    themed,
    scheme: colorScheme,
    toggleColorScheme,
    setColorScheme,
  };
}
