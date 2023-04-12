import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    backgroundColor: theme.fn.rgba(theme.other.colors.paper, 0.96),
  },
}));
