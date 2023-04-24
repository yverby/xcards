import { memo, ReactNode } from 'react';
import { Badge, Title, Group } from '@mantine/core';

import { Paper } from '@src/components';

import { CardBody } from './CardBody';
import { CardDetails } from './CardDetails';
import { CardOptions } from './CardOptions';

import { CardValue, CardProvider, defaultValue } from './Card.context';

interface CardProps extends CardValue {
  children: ReactNode;
}

export function Card({ children, progress, ...value }: CardProps) {
  const card = { ...defaultValue, ...value, progress };

  return (
    <Paper w="100%" h="100%">
      {children && (
        <CardProvider value={card}>
          <Paper.Header>
            <Group position="apart">
              <Title order={2} size={28}>
                #{card.id}
              </Title>

              {progress.option && (
                <Badge size="lg" radius={8} sx={{ opacity: 0.75 }}>
                  {new Date((progress.time ?? 0) * 1000).toISOString().slice(14, 19)}
                </Badge>
              )}
            </Group>
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
