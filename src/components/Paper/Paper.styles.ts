import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    width: 'inherit',
    height: 'inherit',
    borderRadius: theme.radius.lg,
    backgroundColor: theme.other.colors.paper,
    overflow: 'hidden',
    overflowY: 'auto',
    userSelect: 'none',
  },
}));
