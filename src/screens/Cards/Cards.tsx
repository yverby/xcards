import { useEffect } from 'react';
import { Title, Center } from '@mantine/core';

import { select, shallow } from '@src/lib/store';
import { useContentStore } from '@src/stores/content';
import { useSettingsStore } from '@src/stores/settings';
import { useCardsStore, useCardsStatus } from '@src/stores/cards';

import { CardsHero } from './CardsHero';
import { CardsList } from './CardsList';

export function Cards() {
  const { hasList, hasFinish } = useCardsStatus();
  const { parseCards, resetCards } = useCardsStore(select(['parseCards', 'resetCards']), shallow);

  const locale = useSettingsStore((state) => state.locale);

  const { error, content, loading, fetchContent } = useContentStore(
    select(['error', 'loading', 'content', 'fetchContent']),
    shallow
  );

  useEffect(() => {
    locale ? fetchContent(locale) : resetCards();
  }, [locale]);

  useEffect(() => {
    content && parseCards(content);
  }, [content]);

  switch (true) {
    case !!error:
      return (
        <Center h="100%">
          <Title>Oops...</Title>
        </Center>
      );
    case loading:
      return (
        <Center h="100%">
          <Title order={2} size={27}>
            Loading...
          </Title>
        </Center>
      );
    case hasList:
      return <CardsList />;
    case hasFinish:
      return (
        <Center h="100%">
          <Title order={2} size={27}>
            Finish!
          </Title>
        </Center>
      );
    default:
      return <CardsHero />;
  }
}
