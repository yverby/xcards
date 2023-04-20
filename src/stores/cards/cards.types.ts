import { Root } from 'mdast';

import { parseCard, parseOptions } from './cards.lib';

export type CardContent = ReturnType<typeof parseCard>;
export type CardsOptions = ReturnType<typeof parseOptions>;

export interface CardProgress {
  option?: string;
}

export type CardsProgress = Record<number, CardProgress>;

export interface CardsState {
  list: CardContent[];
  cards: CardContent[];
  options: CardsOptions;
  progress: CardsProgress;
}

export interface CardsActions {
  shiftList: () => void;
  resetCards: () => void;
  parseCards: (content: Root) => void;
  setProgress: (values: CardsProgress) => void;
}
