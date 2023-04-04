import { rem, ColorScheme, MantineThemeOverride } from '@mantine/core';

import { cs } from './variables';

export function configureTheme({
  colorScheme,
}: {
  colorScheme: ColorScheme;
}): MantineThemeOverride {
  return {
    colorScheme,
    defaultRadius: 'md',
    radius: { md: rem(12) },
    globalStyles(theme) {
      return {
        body: {
          backgroundColor: theme.other.vars.cs(theme, 'bg'),
        },
      };
    },
    other: {
      vars: {
        cs(theme, key) {
          return cs[key][colorScheme](theme);
        },
      },
    },
  };
}
