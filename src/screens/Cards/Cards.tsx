import { useEffect } from 'react';
import { Center, Loader, Title } from '@mantine/core';

import { useCardsStore } from '@src/stores/cards';
import { useContentStore } from '@src/stores/content';

import { CardsList } from './CardsList';

export function Cards() {
  const content = useContentStore();
  const setList = useCardsStore((state) => state.setList);

  useEffect(() => {
    content.fetchRoot('EN');
  }, []);

  useEffect(() => {
    content.root && setList(content.root);
  }, [content.root]);

  if (content.loading) {
    return (
      <Center h="100%">
        <Loader color="gray" />
      </Center>
    );
  }

  if (content.error) {
    return (
      <Center h="100%">
        <Title>Oops!</Title>
      </Center>
    );
  }

  return <CardsList />;
}
