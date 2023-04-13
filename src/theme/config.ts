import { rem, ColorScheme, MantineThemeOverride } from '@mantine/core';

import { configureColors } from './lib';
import { globalColors } from './variables';
import * as components from './components';

export function configureOther({ colorScheme }: { colorScheme: ColorScheme }) {
  return {
    colors: configureColors(globalColors, { colorScheme }),
  };
}

export function configureTheme({
  colorScheme,
}: {
  colorScheme: ColorScheme;
}): MantineThemeOverride {
  return {
    components,
    colorScheme,
    defaultRadius: 'md',
    radius: {
      md: rem(12),
    },
    globalStyles(theme) {
      return {
        body: {
          backgroundColor: theme.other.colors.app,
        },
      };
    },
    other: configureOther({ colorScheme }),
  };
}
