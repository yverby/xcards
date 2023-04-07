import { useMemo } from 'react';
import { Box, Stack, UnstyledButton } from '@mantine/core';

import { unpack } from '@src/lib/content';

import { useCard } from './Card.context';
import { useStyles } from './Card.styles';
import { cardParser } from './Card.parser';

interface CardOptionsProps {
  option: string;
  selection: string;
  onSelect: (value: Record<number, string>) => void;
}

export function CardOptions({ option, selection, onSelect }: CardOptionsProps) {
  const card = useCard();
  const { classes } = useStyles();

  const options = useMemo(
    () =>
      unpack(card.options, ['list', 'listItem', 'paragraph']).map((item, key) => {
        const [node, ...nodes] = item;
        const clone = structuredClone(node);

        let value = '';

        if (clone.type === 'text') {
          const start = clone.value.indexOf(':');
          value = clone.value.slice(0, start);
          clone.value = clone.value.slice(start + 1);
        }

        const attr = [option, selection].includes(value) && {
          'data-option': value === option,
        };

        return (
          <UnstyledButton
            key={key}
            {...(selection && attr)}
            className={classes.option}
            disabled={Boolean(selection)}
            onClick={() => onSelect({ [card.id]: value })}
          >
            <strong>{value}:</strong>
            <span>{cardParser.getJSX([clone, ...nodes])}</span>
          </UnstyledButton>
        );
      }),
    [classes, selection, card.id, card.options]
  );

  return (
    <Box component="section" className={classes.section}>
      <Stack spacing="sm">{options}</Stack>
    </Box>
  );
}
