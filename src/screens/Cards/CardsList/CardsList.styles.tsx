import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  list: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '*[class*=Carousel]': {
      width: 'inherit',
      height: 'inherit',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `0 ${theme.spacing.xl}`,
    [theme.fn.smallerThan('sm')]: {
      padding: `0 ${theme.spacing.lg}`,
    },
  },
}));
