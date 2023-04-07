import { em, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    width: 'inherit',
    height: 'inherit',
    maxWidth: theme.breakpoints.xs,
    paddingBottom: theme.spacing.xl,
    borderRadius: theme.radius.md,
    backgroundColor: theme.other.colors['bg-card'],
    overflow: 'hidden',
    overflowY: 'auto',
    userSelect: 'none',
    [theme.fn.smallerThan('sm')]: {
      paddingBottom: theme.spacing.lg,
    },
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    backgroundColor: theme.fn.rgba(theme.other.colors['bg-card'], 0.98),
    [theme.fn.smallerThan('sm')]: {
      padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    },
  },
  section: {
    padding: `0 ${theme.spacing.xl}`,
    [theme.fn.smallerThan('sm')]: {
      padding: `0 ${theme.spacing.lg}`,
    },
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderWidth: em(1),
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: theme.spacing.xs,
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
  code: {
    borderWidth: em(1),
    borderRadius: em(6),
    borderStyle: 'solid',
    borderColor: theme.other.colors['bg-accent'],
    backgroundColor: theme.other.colors['bg-card'],
  },
  prism: {
    '[class*=code]': {
      backgroundColor: `${theme.other.colors['bg-code']} !important`,
    },
  },
}));
