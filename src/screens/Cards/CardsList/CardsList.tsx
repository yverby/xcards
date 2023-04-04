import { useMemo, useState } from 'react';
import { Prism } from '@mantine/prism';
import { Code, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import { partition } from '@src/lib/common';
import { select, shallow } from '@src/lib/store';
import { useCardsStore } from '@src/stores/cards';
import { createContentParser, defaultContentElements } from '@src/lib/content';

import { CardsItem } from './CardsItem';

import { useStyles } from './CardsList.styles';

const parser = createContentParser({
  ...defaultContentElements,
  inlineCode: (props) => <Code>{props.children}</Code>,
  heading: (props) => <Title order={3}>{props.children}</Title>,
  code: (props) => (
    <Prism noCopy language={props.lang} scrollAreaComponent="div">
      {props.children}
    </Prism>
  ),
});

export function CardsList() {
  const { classes } = useStyles();

  const [active, setActive] = useState(0);
  const { list, shiftList } = useCardsStore(select(['list', 'shiftList']), shallow);

  const card = useMemo(() => {
    const [[content = []]] = list;
    const [head, main] = partition(content, (node) => ['heading', 'list'].includes(node.type));
    const title = head.filter((node) => node.type === 'heading');

    return {
      id: parseInt(parser.getString(title), 10),
      main: parser.getJSX(main),
      title: parser.getJSX(title),
    };
  }, [list]);

  return (
    <Carousel loop withControls={false} className={classes.list} onSlideChange={setActive}>
      {[0, 1].map((slide) => (
        <Carousel.Slide key={slide} className={classes.item}>
          <CardsItem {...card} mounted={slide === active} onMounted={shiftList} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
