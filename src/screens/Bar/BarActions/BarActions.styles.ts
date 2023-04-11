import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.other.colors.card,
  },
}));
