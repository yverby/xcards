import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  list: {
    width: '100%',
    height: '100%',

    '*[class*="Carousel"]': {
      width: 'inherit',
      height: 'inherit',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
  },
}));
