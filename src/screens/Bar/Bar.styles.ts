import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: `0 ${theme.spacing.lg}`,
  },
  bar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: theme.breakpoints.xs,
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.other.colors['bg-card'],
  },
}));
