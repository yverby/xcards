import { em, rem, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    width: 'inherit',
    height: 'inherit',
    maxWidth: theme.breakpoints.xs,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.other.colors.card,
    overflow: 'hidden',
    overflowY: 'scroll',
    userSelect: 'none',
  },
  link: {
    color: theme.other.colors.success,
  },
  code: {
    borderWidth: rem(1),
    borderStyle: 'solid',
    borderRadius: em(7.5),
    borderColor: 'transparent',
    backgroundColor: theme.other.colors.code,
  },
  list: {
    fontSize: 'inherit',
    listStylePosition: 'unset',
  },
  html: {
    img: {
      maxWidth: '100%',
      borderRadius: theme.spacing.xs,
    },
  },
}));
