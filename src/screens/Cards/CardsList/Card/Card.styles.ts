import { rem, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  const backgroundColor = theme.other.vars.cs(theme, 'bg-card');

  return {
    card: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      maxWidth: theme.breakpoints.xs,
      maxHeight: rem(800),
      paddingBottom: theme.spacing.xl,
      borderRadius: theme.radius.md,
      backgroundColor,
      overflow: 'hidden',
      overflowY: 'auto',
    },
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: `${theme.spacing.md} ${theme.spacing.xl}`,
      backgroundColor: theme.fn.rgba(backgroundColor, 0.8),
      backdropFilter: `blur(${rem(5)})`,
    },
    section: {
      padding: `0 ${theme.spacing.xl}`,
    },
  };
});
