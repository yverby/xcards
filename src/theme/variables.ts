import { MantineTheme } from '@mantine/core';

export const cs = {
  bg: {
    dark: (theme: MantineTheme) => theme.colors.dark[8],
    light: (theme: MantineTheme) => theme.colors.gray[2],
  },
  'bg-card': {
    dark: (theme: MantineTheme) => theme.colors.dark[6],
    light: (theme: MantineTheme) => theme.white,
  },
};
