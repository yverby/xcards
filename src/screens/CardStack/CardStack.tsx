import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { rem, Title, Transition } from '@mantine/core';

import { Card } from '@src/components';

import { useStyles } from './CardStack.styles';

function range(amount: number) {
  return Array(amount)
    .fill(null)
    .map((_, index) => index);
}

export function CardStack() {
  const { classes } = useStyles();

  const [active, setActive] = useState(0);
  const [[card], setCards] = useState(() => range(10));

  const handleChangeSlide = (slide: number) => {
    setActive(() => slide);
    setCards((cards) => cards.slice(1).concat(cards[0]));
  };

  return (
    <Carousel
      loop
      withControls={false}
      className={classes.slider}
      onSlideChange={handleChangeSlide}
    >
      {range(2).map((slide) => (
        <Carousel.Slide key={slide} className={classes.slide}>
          <Transition mounted={slide === active} transition="fade">
            {(style) => (
              <Card p="xl" maw={rem(600)} mah={rem(800)} style={style}>
                <Title>#{card}</Title>
              </Card>
            )}
          </Transition>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
