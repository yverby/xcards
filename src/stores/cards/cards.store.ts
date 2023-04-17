import { Root } from 'mdast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { select } from '@src/lib/store';
import { STORAGE } from '@src/constants';

import { splitContent, parseCard, parseOptions } from './cards.lib';

type Card = ReturnType<typeof parseCard>;
type Options = ReturnType<typeof parseOptions>;
type Progress = Record<number, { option: string }>;

interface CardsState {
  list: Card[];
  cards: Card[];
  options: Options;
  progress: Progress;
}

interface CardsActions {
  shiftList: () => void;
  resetCards: () => void;
  parseCards: (content: Root) => void;
  setProgress: (options: Progress) => void;
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
      setProgress(options) {
        set((state) => {
          const progress = { ...state.progress, ...options };

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
