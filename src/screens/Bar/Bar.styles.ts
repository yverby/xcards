import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: `0 ${theme.spacing.lg}`,

    [theme.fn.largerThan('md')]: {
      position: 'absolute',
      top: 0,
      zIndex: 10,
      width: '100%',
      padding: theme.spacing.lg,
    },
  },
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    [theme.fn.smallerThan('md')]: {
      alignItems: 'center',
      maxWidth: theme.breakpoints.xs,
    },
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.other.colors.card,
  },
}));
