import { memo, ReactNode } from 'react';
import { Title } from '@mantine/core';

import { Paper } from '@src/components';
import { CardContent } from '@src/stores/cards';

import { CardBody } from './CardBody';
import { CardDetails } from './CardDetails';
import { CardOptions } from './CardOptions';

import { CardProvider, defaultValue } from './Card.context';

interface CardProps extends CardContent {
  children: ReactNode;
}

export function Card({ children, ...value }: CardProps) {
  const card = { ...defaultValue, ...value };

  return (
    <Paper w="100%" h="100%">
      {children && (
        <CardProvider value={card}>
          <Paper.Header>
            <Title order={2} size={28}>
              #{card.id}
            </Title>
          </Paper.Header>

          <Paper.Section pt={0}>{children}</Paper.Section>
        </CardProvider>
      )}
    </Paper>
  );
}

Card.Body = memo(CardBody);
Card.Details = memo(CardDetails);
Card.Options = memo(CardOptions);
