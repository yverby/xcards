import { useMemo } from 'react';
import { Box, Title, Center, RingProgress } from '@mantine/core';

import { partition } from '@src/lib/common';
import { select, shallow } from '@src/lib/store';
import { useCardsStore } from '@src/stores/cards';

import { useStyles } from './BarProgress.styles';

export function BarProgress() {
  const { theme, classes } = useStyles();

  const { list, cards, options, progress } = useCardsStore(
    select(['list', 'cards', 'options', 'progress']),
    shallow
  );

  const [success, failure] = useMemo(() => {
    if (!cards.length) {
      return [0, 0];
    }

    const [truthy, falsy] = partition(
      Object.keys(progress),
      (id: any) => progress[id] === options[id]
    );

    return [
      Math.round((truthy.length / cards.length) * 100),
      Math.round((falsy.length / cards.length) * 100),
    ];
  }, [progress]);

  const sections = [
    { value: failure, color: failure ? theme.other.colors.failure : 'transparent' },
    { value: success, color: success ? theme.other.colors.success : 'transparent' },
  ];

  const label = (
    <Center>
      <Title order={3}>{list.length || 'X'}</Title>
    </Center>
  );

  return (
    <Box className={classes.root}>
      <RingProgress
        m={-8}
        size={80}
        roundCaps
        label={label}
        thickness={5}
        sections={sections}
        className={classes.progress}
      />
    </Box>
  );
}
