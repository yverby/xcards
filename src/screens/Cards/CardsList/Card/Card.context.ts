import { useContext, createContext } from 'react';

import { CardContent, CardProgress } from '@src/stores/cards';

export type CardValue = CardContent & { progress: CardProgress };

export const defaultValue = ['body', 'title', 'option', 'options', 'details'].reduce(
  (acc, item) => ({ ...acc, [item]: [] }),
  { id: 0, progress: {} } as CardValue
);

const CardContext = createContext<CardValue>(defaultValue);

export const useCard = () => useContext(CardContext);
export const { Provider: CardProvider } = CardContext;
