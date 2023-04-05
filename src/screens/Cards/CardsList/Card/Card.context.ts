import { useContext, createContext } from 'react';

import { sliceItem } from '@src/stores/cards';

export type CardContent = ReturnType<typeof sliceItem>;

const CardContext = createContext<CardContent>(
  ['main', 'title', 'option', 'options', 'details'].reduce(
    (acc, item) => ({ ...acc, [item]: [] }),
    {} as CardContent
  )
);

export const useCard = () => useContext(CardContext);
export const { Provider: CardProvider } = CardContext;
