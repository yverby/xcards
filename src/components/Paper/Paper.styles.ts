import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.radius.lg,
    backgroundColor: theme.other.colors.paper,
    overflow: 'hidden',
    userSelect: 'none',
  },
  head: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    backgroundColor: theme.fn.rgba(theme.other.colors.paper, 0.96),
  },
  body: {
    flex: 1,
    padding: theme.spacing.md,
  },
  viewport: {
    display: 'flex',
    flexDirection: 'column',

    '& > div': {
      display: 'flex !important',
      flexDirection: 'column',
      flex: 1,
    },
  },
  scrollbar: {
    zIndex: 100,
  },
}));
