import { useMemo, useEffect } from 'react';
import { Box, Stack, Button, Divider } from '@mantine/core';
import { useWindowEvent, useDocumentVisibility } from '@mantine/hooks';

import { unpack } from '@src/lib/content';
import { CardsProgress } from '@src/stores/cards';
import { useTimer, useEvent } from '@src/lib/hooks';

import { useCard } from './Card.context';
import { cardParser } from './Card.parser';
import { useStyles } from './CardOptions.styles';

interface CardOptionsProps {
  option: string;
  onProgress: (values: CardsProgress) => void;
}

export function CardOptions({ option, onProgress }: CardOptionsProps) {
  const { theme, classes } = useStyles();
  const { progress, ...card } = useCard();

  const visible = useDocumentVisibility();

  const time = useTimer(1000, {
    pause: [!!progress.option, visible === 'hidden'].some((cond) => cond),
  });

  const setProgress = useEvent((value?: string) => {
    if (!progress.option) {
      onProgress({
        [card.id]: {
          option: value ?? progress.option,
          time: (progress.time ?? 1) + time(),
        },
      });
    }
  });

  useEffect(() => setProgress, []);
  useWindowEvent('beforeunload', () => setProgress());

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

        const attr = [option, progress.option].includes(value) && {
          'data-option': value === option,
        };

        return (
          <Button
            key={key}
            variant="secondary"
            classNames={classes}
            onClick={() => setProgress(value)}
            disabled={Boolean(progress.option)}
            {...(progress.option && attr)}
          >
            <strong>{value}:</strong>
            <span>{cardParser.getJSX([clone, ...nodes])}</span>
          </Button>
        );
      }),
    [classes, card.id, card.options, progress.option]
  );

  return (
    <Box component="section">
      <Stack spacing="md">
        <Divider color={theme.other.colors.prism} />
        <Stack spacing="sm">{options}</Stack>
      </Stack>
    </Box>
  );
}
