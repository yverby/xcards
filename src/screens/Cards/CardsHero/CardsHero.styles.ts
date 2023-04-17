import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  action: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.other.colors.paper,
  },
}));
