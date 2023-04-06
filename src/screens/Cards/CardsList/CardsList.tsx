import { useState } from 'react';
import { Stack } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import { select, shallow } from '@src/lib/store';
import { useCardsStore } from '@src/stores/cards';

import { Card } from './Card';
import { useStyles } from './CardsList.styles';

export function CardsList() {
  const { classes } = useStyles();
  const [active, setActive] = useState(0);

  const {
    list: [card],
    shiftList,
  } = useCardsStore(select(['list', 'shiftList']), shallow);

  return (
    <Carousel loop withControls={false} className={classes.list} onSlideChange={setActive}>
      {[0, 1].map((slide) => (
        <Carousel.Slide key={slide} className={classes.item}>
          <Card {...card} mounted={slide === active} onMounted={shiftList}>
            <Card.Header />
            <Stack>
              <Card.Title />
              <Card.Main />
            </Stack>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
