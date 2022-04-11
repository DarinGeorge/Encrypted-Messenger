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

export type ThemeSettings = {
  light: ThemedColors;
  dark: ThemedColors;
};

export type User = {
  id: string;
  username: string;
  avatar?: string;
};

export type Message = {
  id: string;
  author: User;
  text?: string;
  audio?: string;
  video?: string;
  status: MessageStatus;
  createdAt: string;
};

export enum MessageStatus {
  PENDING = 'Pending',
  DELIVERED = 'Delivered',
  READ = 'Read',
  NOT_DELIVERED = 'Not Delivered',
}
