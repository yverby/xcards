import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Stack, Container, Transition } from '@mantine/core';

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

  return (
    <Carousel loop withControls={false} classNames={classes} onSlideChange={setActive}>
      {[0, 1].map((slide) => (
        <Carousel.Slide key={slide}>
          <Transition
            duration={500}
            transition="fade"
            onEnter={shiftList}
            mounted={slide === active}
          >
            {(styles) => (
              <Container size="xs" w="100%" h="100%" style={styles}>
                <Card {...card} progress={{ ...progress[card.id] }}>
                  {slide === active && (
                    <Stack h="100%" spacing="md" justify="space-between">
                      <Card.Body />
                      <Stack spacing="md">
                        <Card.Details />
                        <Card.Options option={options[card.id]} onProgress={setProgress} />
                      </Stack>
                    </Stack>
                  )}
                </Card>
              </Container>
            )}
          </Transition>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
