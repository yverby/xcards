import { useMemo } from 'react';
import { Box, Stack, UnstyledButton } from '@mantine/core';

import { unpack } from '@src/lib/content';

import { useCard } from './Card.context';
import { cardParser } from './Card.parser';
import { useStyles } from './CardOptions.styles';

interface CardOptionsProps {
  option: string;
  selection: { option: string };
  onSelect: (value: Record<number, { option: string }>) => void;
}

export function CardOptions({ option, selection, onSelect }: CardOptionsProps) {
  const card = useCard();
  const { classes } = useStyles();

  const selectOption = (value: string) => onSelect({ [card.id]: { option: value } });

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

        const attr = [option, selection.option].includes(value) && {
          'data-option': value === option,
        };

        return (
          <UnstyledButton
            {...(selection.option && attr)}
            key={key}
            className={classes.option}
            disabled={Boolean(selection.option)}
            onClick={() => selectOption(value)}
          >
            <strong>{value}:</strong>
            <span>{cardParser.getJSX([clone, ...nodes])}</span>
          </UnstyledButton>
        );
      }),
    [classes, card.id, card.options, selection.option]
  );

  return (
    <Box component="section">
      <Stack spacing="sm">{options}</Stack>
    </Box>
  );
}
