import { rem, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  option: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderWidth: rem(1),
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.other.colors['bg-code'],
    fontSize: theme.fontSizes.sm,

    '&:disabled': {
      opacity: 0.4,
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
}));
