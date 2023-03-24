import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    boxShadow: theme.shadows.md,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[6],
    overflowX: 'hidden',
  },
}));
