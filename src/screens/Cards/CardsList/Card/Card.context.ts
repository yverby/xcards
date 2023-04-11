import { useContext, createContext } from 'react';

import { parseCard } from '@src/stores/cards';

export type CardContent = ReturnType<typeof parseCard>;

export const defaultValue = ['id', 'body', 'title', 'option', 'options', 'details'].reduce(
  (acc, item) => ({ ...acc, [item]: [], id: 0 }),
  {} as CardContent
);

const CardContext = createContext<CardContent>(defaultValue);

export const useCard = () => useContext(CardContext);
export const { Provider: CardProvider } = CardContext;
