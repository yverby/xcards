import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[6],
    overflow: 'hidden',
  },
  scrollbar: {
    zIndex: 10,
  },
}));
