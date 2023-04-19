import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, { visible }: { visible: boolean }) => ({
  progress: {
    visibility: visible ? 'visible' : 'hidden',

    circle: {
      '&:first-of-type': {
        stroke: theme.other.colors.paper,
      },
    },
  },
}));
