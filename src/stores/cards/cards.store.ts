import { Root } from 'mdast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { select } from '@src/lib/store';
import { STORAGE } from '@src/constants';

import { splitContent, parseCard, parseOptions } from './cards.lib';

export type CardContent = ReturnType<typeof parseCard>;
export type CardsOptions = ReturnType<typeof parseOptions>;
export type CardsProgress = Record<number, { option: string }>;

interface CardsState {
  list: CardContent[];
  cards: CardContent[];
  options: CardsOptions;
  progress: CardsProgress;
}

interface CardsActions {
  shiftList: () => void;
  resetCards: () => void;
  parseCards: (content: Root) => void;
  setProgress: (values: CardsProgress) => void;
}

const defaultState: CardsState = {
  list: [],
  cards: [],
  options: {},
  progress: {},
};

export const useCardsStore = create<CardsState & CardsActions>()(
  persist(
    (set) => ({
      ...defaultState,
      resetCards() {
        set(() => ({ ...defaultState }));
      },
      parseCards(content) {
        set((state) => {
          const groups = splitContent(content);

          const cards = groups.map((group) => parseCard(group));
          const list = cards.filter((card) => !state.progress[card.id]);

          const options = parseOptions(cards);

          return { list, cards, options };
        });
      },
      shiftList() {
        set((state) => {
          const [card, ...cards] = state.list;
          const list = state.progress[card.id] ? cards : [...cards, card];

          return { list };
        });
      },
      setProgress(values) {
        set((state) => {
          const progress = { ...state.progress, ...values };

          return { progress };
        });
      },
    }),
    {
      name: STORAGE.KEYS.CARDS,
      partialize: select(['progress']),
    }
  )
);
