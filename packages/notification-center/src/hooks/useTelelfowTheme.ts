import { useContext } from 'react';
import { ColorScheme, ICommonTheme } from '../index';
import { ITelelfowTheme, ThemeContext } from '../store/teleflow-theme.context';

export function useTelelfowTheme(): {
  theme: ITelelfowTheme;
  common: ICommonTheme;
  colorScheme: ColorScheme;
} {
  const { colorScheme, theme, common } = useContext(ThemeContext);

  return {
    colorScheme,
    theme,
    common,
  };
}
