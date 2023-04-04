import { rem, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  const backgroundColor = theme.other.vars.cs(theme, 'bg-card');

  return {
    card: {
      position: 'relative',
      width: '100%',
      height: '100%',
      maxWidth: theme.breakpoints.xs,
      maxHeight: rem(800),
      borderRadius: theme.radius.md,
      backgroundColor,
      overflow: 'hidden',
      overflowY: 'auto',
    },
    title: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: theme.fn.rgba(backgroundColor, 0.8),
      backdropFilter: `blur(${rem(5)})`,
      fontSize: rem(28),
      fontWeight: 900,
    },
  };
});
