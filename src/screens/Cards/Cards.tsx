import { useEffect } from 'react';
import { Title, Loader, Center } from '@mantine/core';

import { select, shallow } from '@src/lib/store';
import { useContentStore } from '@src/stores/content';
import { useSettingsStore } from '@src/stores/settings';
import { useCardsStore, useCardsStatus } from '@src/stores/cards';

import { CardsHero } from './CardsHero';
import { CardsList } from './CardsList';

export function Cards() {
  const { hasList, hasFinish } = useCardsStatus();

  const locale = useSettingsStore((state) => state.locale);
  const parseCards = useCardsStore((state) => state.parseCards);

  const { error, content, loading, fetchContent } = useContentStore(
    select(['error', 'loading', 'content', 'fetchContent']),
    shallow
  );

  useEffect(() => {
    locale && fetchContent(locale);
  }, [locale]);

  useEffect(() => {
    content && parseCards(content);
  }, [content]);

  switch (true) {
    case !!error:
      return (
        <Center h="100%">
          <Title>Oops!</Title>
        </Center>
      );
    case loading:
      return (
        <Center h="100%">
          <Loader color="gray" />
        </Center>
      );
    case hasList:
      return <CardsList />;
    case hasFinish:
      return (
        <Center h="100%">
          <Title>Finish!</Title>
        </Center>
      );
    default:
      return <CardsHero />;
  }
}
