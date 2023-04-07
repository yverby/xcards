import { ColorScheme, DEFAULT_THEME as theme } from '@mantine/core';

export function createColors({ colorScheme }: { colorScheme: ColorScheme }) {
  return {
    'bg-app': colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    'bg-card': colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    'bg-code': colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    'bg-accent': colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
    failure: colorScheme === 'dark' ? theme.colors.orange[5] : theme.colors.red[9],
    success: colorScheme === 'dark' ? theme.colors.teal[4] : theme.colors.lime[9],
  };
}
