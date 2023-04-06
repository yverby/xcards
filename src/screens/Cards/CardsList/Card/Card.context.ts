import { useContext, createContext } from 'react';

import { groupCard } from '@src/stores/cards';

export type CardContent = ReturnType<typeof groupCard>;

export const defaultValue = ['main', 'title', 'option', 'options', 'details'].reduce(
  (acc, item) => ({ ...acc, [item]: [] }),
  {} as CardContent
);

const CardContext = createContext<CardContent>(defaultValue);

export const useCard = () => useContext(CardContext);
export const { Provider: CardProvider } = CardContext;
