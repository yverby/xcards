import { memo, ReactNode } from 'react';
import { Box, Transition } from '@mantine/core';

import { CardMain } from './CardMain';
import { CardTitle } from './CardTitle';
import { CardHeader } from './CardHeader';

import { useStyles } from './Card.styles';
import { CardProvider, CardContent, defaultValue } from './Card.context';

interface CardProps extends CardContent {
  mounted: boolean;
  children: ReactNode;
  onMounted: () => void;
}

export function Card({ mounted, children, onMounted, ...value }: CardProps) {
  const { classes } = useStyles();

  return (
    <Transition mounted={mounted} duration={500} transition="fade" onEnter={onMounted}>
      {(styles) => (
        <Box component="article" style={styles} className={classes.card}>
          <CardProvider value={{ ...defaultValue, ...value }}>{mounted && children}</CardProvider>
        </Box>
      )}
    </Transition>
  );
}

Card.Main = memo(CardMain);
Card.Title = memo(CardTitle);
Card.Header = memo(CardHeader);
