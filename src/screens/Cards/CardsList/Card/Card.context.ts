import { useContext, createContext } from 'react';

import { CardContent } from '@src/stores/cards';

export const defaultValue = ['id', 'body', 'title', 'option', 'options', 'details'].reduce(
  (acc, item) => ({ ...acc, [item]: [], id: 0 }),
  {} as CardContent
);

const CardContext = createContext<CardContent>(defaultValue);

export const useCard = () => useContext(CardContext);
export const { Provider: CardProvider } = CardContext;
