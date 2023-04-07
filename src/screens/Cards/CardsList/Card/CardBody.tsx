import { useMemo } from 'react';
import { Box, Title, Stack } from '@mantine/core';

import { unpack } from '@src/lib/content';

import { useCard } from './Card.context';
import { useStyles } from './Card.styles';
import { cardParser } from './Card.parser';

export function CardBody() {
  const card = useCard();
  const { classes } = useStyles();

  const title = useMemo(
    () =>
      unpack(card.title, ['heading']).map((item, key) => {
        const [node, ...nodes] = item;
        const clone = structuredClone(node);

        if (clone.type === 'text') {
          const start = clone.value.indexOf('.');
          clone.value = clone.value.slice(start + 1);
        }

        return (
          <Title key={key} order={3}>
            {cardParser.getJSX([clone, ...nodes])}
          </Title>
        );
      }),
    [card.title]
  );

  const body = useMemo(() => cardParser.getJSX(card.body), [card.body]);

  return (
    <Box component="section" className={classes.section}>
      <Stack spacing="sm">
        {title}
        {body}
      </Stack>
    </Box>
  );
}
