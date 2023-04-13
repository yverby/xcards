import { CSSObject, MantineTheme } from '@mantine/core';

export interface MantineComponentOverride<Props, Styles extends string, Params> {
  defaultProps?: (theme: MantineTheme) => Partial<Props>;
  styles?: (theme: MantineTheme, params: Params) => Partial<Record<Styles, CSSObject>>;
}
