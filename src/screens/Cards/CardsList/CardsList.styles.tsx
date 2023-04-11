import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  list: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',

    '& [class*=Carousel]': {
      width: 'inherit',
      height: 'inherit',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `0 ${theme.spacing.lg}`,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: theme.spacing.lg,
    paddingTop: 0,

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.md,
      paddingTop: 0,
    },
  },
  divider: {
    borderColor: theme.other.colors.prism,
  },
}));
