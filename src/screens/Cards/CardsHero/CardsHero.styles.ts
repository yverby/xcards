import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  locales: {
    borderRadius: theme.radius.md,
    backgroundColor: theme.other.colors.prism,
  },
}));
