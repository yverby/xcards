import { rem, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderWidth: rem(1),
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundColor: theme.other.colors.prism,
    fontWeight: 'inherit',

    '&:disabled': {
      backgroundColor: theme.other.colors.prism,
      pointerEvents: 'none',
    },

    '&[data-option]': {
      opacity: 1,
    },

    '&[data-option=true]': {
      borderColor: theme.other.colors.success,

      strong: {
        color: theme.other.colors.success,
      },
    },

    '&[data-option=false]': {
      borderColor: theme.other.colors.failure,

      strong: {
        color: theme.other.colors.failure,
      },
    },
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    width: '100%',
  },
}));
