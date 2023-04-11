import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {},
  progress: {
    circle: {
      '&:first-of-type': {
        stroke: theme.other.colors.card,
      },
    },
  },
}));
