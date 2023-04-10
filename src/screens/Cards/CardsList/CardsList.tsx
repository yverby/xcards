import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Stack, Divider } from '@mantine/core';

import { select, shallow } from '@src/lib/store';
import { useCardsStore } from '@src/stores/cards';

import { Card } from './Card';
import { useStyles } from './CardsList.styles';

export function CardsList() {
  const { classes } = useStyles();
  const [active, setActive] = useState(0);

  const { list, options, progress, shiftList, setProgress } = useCardsStore(
    select(['list', 'options', 'progress', 'shiftList', 'setProgress']),
    shallow
  );

  const card = { ...list[0] };
  const option = options[card.id];
  const selection = progress[card.id];

  return (
    <Carousel loop withControls={false} className={classes.list} onSlideChange={setActive}>
      {[0, 1].map((slide) => (
        <Carousel.Slide key={slide} className={classes.item}>
          <Card {...card} mounted={slide === active} onMounted={shiftList}>
            <Stack mih="100%" spacing={0}>
              <Card.Header />
              <Stack spacing="md" className={classes.content}>
                <Card.Body />
                <Stack spacing="md">
                  {selection && <Card.Details />}
                  <Divider className={classes.divider} />
                  <Card.Options option={option} selection={selection} onSelect={setProgress} />
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
