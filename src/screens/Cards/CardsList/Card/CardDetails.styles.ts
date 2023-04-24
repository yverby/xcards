import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  content: {
    p: {
      margin: 0,
    },

    '& [class*=Prism-root]': {
      backgroundColor: theme.other.colors.paper,
    },
  },
}));
