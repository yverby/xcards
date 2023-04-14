import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    pointerEvents: 'none',

    [theme.fn.largerThan('md')]: {
      position: 'absolute',
      top: 0,
      zIndex: 10,
      maxWidth: '100%',
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },
  },
  bar: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      alignItems: 'center',
    },

    '& > *': {
      pointerEvents: 'all',
    },
  },
}));
