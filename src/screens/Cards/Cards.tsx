import { useEffect } from 'react';
import { Center, Loader, Title } from '@mantine/core';

import { shallow } from '@src/lib/store';
import { useCardsStore } from '@src/stores/cards';
import { useContentStore } from '@src/stores/content';

import { CardsList } from './CardsList';

export function Cards() {
  const { content, error, loading, fetchContent } = useContentStore();

  const { hasList, parseCards } = useCardsStore(
    (state) => ({ hasList: !!state.list.length, parseCards: state.parseCards }),
    shallow
  );

  useEffect(() => {
    fetchContent('EN');
  }, []);

  useEffect(() => {
    content && parseCards(content);
  }, [content]);

  if (loading) {
    return (
      <Center h="100%">
        <Loader color="gray" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="100%">
        <Title>😯 Oops!</Title>
      </Center>
    );
  }

  if (!hasList) {
    return (
      <Center h="100%">
        <Title>🎉 Finish!</Title>
      </Center>
    );
  }

  return <CardsList />;
}
