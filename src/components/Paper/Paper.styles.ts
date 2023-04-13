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
  viewport: {
    display: 'flex',
    flexDirection: 'column',

    '& > div': {
      display: 'block !important',
      flex: 1,
    },
  },
  scrollbar: {
    zIndex: 100,
  },
}));
