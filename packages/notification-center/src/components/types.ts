import { CSSInterpolation } from '@emotion/css';

import { ColorScheme } from '../shared/config/colors';
import { ICommonTheme } from '../store/teleflow-theme-provider.context';
import { ITelelfowTheme } from '../store/teleflow-theme.context';

export type CSSFunctionInterpolation = (args: {
  theme: ITelelfowTheme;
  common: ICommonTheme;
  colorScheme: ColorScheme;
}) => CSSInterpolation;

export type CSSFunctionOrObject = CSSFunctionInterpolation | CSSInterpolation;

export type ObjectWithRoot<T = {}> = T & {
  root?: CSSFunctionOrObject;
};
