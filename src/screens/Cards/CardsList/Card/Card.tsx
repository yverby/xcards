import { memo, ReactNode } from 'react';
import { Box, Transition } from '@mantine/core';

import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import { CardDetails } from './CardDetails';
import { CardOptions } from './CardOptions';

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

Card.Body = memo(CardBody);
Card.Header = memo(CardHeader);
Card.Details = memo(CardDetails);
Card.Options = memo(CardOptions);
