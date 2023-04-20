import { CSSObject, MantineTheme } from '@mantine/core';

export interface MantineComponentOverride<TProps, TStyles extends string, TParams> {
  defaultProps?: (theme: MantineTheme) => Partial<TProps>;
  styles?: (theme: MantineTheme, params: TParams) => Partial<Record<TStyles, CSSObject>>;
  variants?: Record<string, (theme: MantineTheme) => Partial<Record<TStyles, CSSObject>>>;
}
