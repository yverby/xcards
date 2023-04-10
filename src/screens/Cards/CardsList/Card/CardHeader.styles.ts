import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    backgroundColor: theme.fn.rgba(theme.other.colors['bg-card'], 0.96),

    [theme.fn.smallerThan('sm')]: {
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    },
  },
}));
