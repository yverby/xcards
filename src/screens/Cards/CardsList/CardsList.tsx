import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { rem, Title, Transition } from '@mantine/core';

import { Card } from '@src/components';
import { useCardsStore } from '@src/stores';
import { select, shallow } from '@src/utils/store';

import { useStyles } from './CardsList.styles';

export function CardsList() {
  const { classes } = useStyles();

  const [active, setActive] = useState(0);
  const { list, shiftList } = useCardsStore(select(['list', 'shiftList']), shallow);

  const [[content = []]] = list;

  // @ts-ignore
  const id = parseInt(content[0]?.children?.[0]?.value ?? 0, 10);

  return (
    <Carousel loop withControls={false} className={classes.list} onSlideChange={setActive}>
      {[0, 1].map((slide) => (
        <Carousel.Slide key={slide} className={classes.item}>
          <Transition mounted={slide === active} transition="fade" onEnter={shiftList}>
            {(style) => (
              <Card maw={rem(600)} mah={rem(800)} style={style}>
                {slide === active && <Title p="xl">#{id}</Title>}
              </Card>
            )}
          </Transition>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
