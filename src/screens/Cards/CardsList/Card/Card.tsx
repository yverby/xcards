import { memo, ReactNode } from 'react';
import { Container, Transition } from '@mantine/core';

import { Paper } from '@src/components';

import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import { CardDetails } from './CardDetails';
import { CardOptions } from './CardOptions';

import { CardProvider, CardContent, defaultValue } from './Card.context';

interface CardProps extends CardContent {
  mounted: boolean;
  children: ReactNode;
  onMounted: () => void;
}

export function Card({ mounted, children, onMounted, ...value }: CardProps) {
  return (
    <Transition mounted={mounted} duration={500} transition="fade" onEnter={onMounted}>
      {(styles) => (
        <Container w="100%" h="100%" size="xs" style={styles}>
          <Paper component="article">
            <CardProvider value={{ ...defaultValue, ...value }}>{mounted && children}</CardProvider>
          </Paper>
        </Container>
      )}
    </Transition>
  );
}

Card.Body = memo(CardBody);
Card.Header = memo(CardHeader);
Card.Details = memo(CardDetails);
Card.Options = memo(CardOptions);
