import { useMemo, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { rem, Title, Transition } from '@mantine/core';

import { Card } from '@src/components';
import { useCardsStore } from '@src/stores';
import { select, shallow } from '@src/lib/store';
import { createContentParser } from '@src/lib/content';

import { useStyles } from './CardsList.styles';

const parser = createContentParser({
  text: 'span',
  heading: 'h2',
});

export function CardsList() {
  const { classes } = useStyles();

  const [active, setActive] = useState(0);
  const cards = useCardsStore(select(['list', 'shiftList']), shallow);

  const card = useMemo(() => {
    const [[content = []]] = cards.list;
    const title = content.slice(0, 1);

    return {
      id: parseInt(parser.getString(title), 10),
    };
  }, [cards.list]);

  return (
    <Carousel loop withControls={false} className={classes.list} onSlideChange={setActive}>
      {[0, 1].map((slide) => (
        <Carousel.Slide key={slide} className={classes.item}>
          <Transition
            duration={500}
            transition="fade"
            onEnter={cards.shiftList}
            mounted={slide === active}
          >
            {(style) => (
              <Card maw={rem(600)} mah={rem(800)} style={style}>
                {slide === active && <Title p="xl">#{card.id}</Title>}
              </Card>
            )}
          </Transition>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
