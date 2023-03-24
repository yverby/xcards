import { ColorScheme, MantineThemeOverride } from '@mantine/core';

export function configureTheme({
  colorScheme,
}: {
  colorScheme: ColorScheme;
}): MantineThemeOverride {
  return {
    colorScheme,
    globalStyles(theme) {
      return {
        body: {
          ...(colorScheme === 'light' && { backgroundColor: theme.colors.gray[2] }),
        },
      };
    },
  };
}
