import React from 'react';
import { ITeleflowPopoverTheme, ITelelfowTheme, ThemeContext } from './teleflow-theme.context';
import { ColorScheme } from '../index';
import { getDefaultTheme } from '../utils/defaultTheme';

export interface ITelelfowThemePopoverProvider {
  light?: ITeleflowPopoverTheme;
  dark?: ITeleflowPopoverTheme;
  common?: ICommonTheme;
}

export interface ITelelfowThemeProvider {
  light?: ITelelfowTheme;
  dark?: ITelelfowTheme;
  common?: ICommonTheme;
}

export interface ICommonTheme {
  fontFamily?: string;
}

interface ITelelfowThemeProviderProps {
  children: React.ReactNode;
  colorScheme: ColorScheme;
  theme: ITelelfowThemeProvider;
}

export function TelelfowThemeProvider(props: ITelelfowThemeProviderProps) {
  const { theme, common } = getDefaultTheme({ colorScheme: props.colorScheme, theme: props.theme });

  return (
    <ThemeContext.Provider value={{ colorScheme: props.colorScheme, theme: { ...theme }, common: { ...common } }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
