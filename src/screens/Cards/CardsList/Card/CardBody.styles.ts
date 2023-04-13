import { em, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  body: {
    code: {
      fontSize: em(12),
      backgroundColor: theme.other.colors.code,
    },
  },
}));
