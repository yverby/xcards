import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',

    '& [class*=Carousel]': {
      width: 'inherit',
      height: 'inherit',
    },
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
