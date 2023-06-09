import { useMemo } from 'react';
import { Title, Center, RingProgress } from '@mantine/core';

import { partition } from '@src/lib/common';
import { select, shallow } from '@src/lib/store';
import { useCardsStore, useCardsStatus } from '@src/stores/cards';

import { useStyles } from './BarProgress.styles';

export function BarProgress() {
  const { hasList, hasFinish } = useCardsStatus();
  const { theme, classes } = useStyles({ visible: hasList || hasFinish });

  const { list, cards, options, progress } = useCardsStore(
    select(['list', 'cards', 'options', 'progress']),
    shallow
  );

  const [failure, success] = useMemo(() => {
    if (!cards.length) {
      return [0, 0];
    }

    const [falsy, truthy] = partition(
      Object.keys(progress).filter((id: any) => progress[id].option),
      (id: any) => progress[id].option !== options[id]
    );

    return [
      Math.round((falsy.length / cards.length) * 100),
      Math.round((truthy.length / cards.length) * 100),
    ];
  }, [cards, progress]);

  return (
    <RingProgress
      m={-8}
      size={80}
      roundCaps
      thickness={5}
      className={classes.progress}
      sections={[
        { value: failure, color: failure ? theme.other.colors.failure : 'transparent' },
        { value: success, color: success ? theme.other.colors.success : 'transparent' },
      ]}
      label={
        <Center>
          <Title order={3}>{list.length || 'X'}</Title>
        </Center>
      }
    />
  );
}
