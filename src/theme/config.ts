import { rem, ColorScheme, MantineThemeOverride } from '@mantine/core';

import { createColors } from './variables';

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
          backgroundColor: theme.other.colors['bg-app'],
        },
      };
    },
    other: {
      colors: createColors({ colorScheme }),
    },
  };
}
