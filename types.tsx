import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type ColorPallete = {
  white: string;
  black: string;
  lightGray: string;
  mediumGray: string;
  darkGray: string;
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
};

export type ThemedColors = {
  background: string;
  altBackground: string;
  border: string;
  button: string;
  secondaryButton: string;
  altButton: string;
  icon: string;
  iconDisabled: string;
};

export type RootStackParamList = {
  Home: undefined;
};

export type UseRootNavigation = NativeStackNavigationProp<RootStackParamList>;
