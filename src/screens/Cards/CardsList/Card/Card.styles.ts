import { em, rem, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
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
