import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { select } from '@src/lib/store';
import { STORAGE } from '@src/constants';

import { CardsState, CardsActions } from './cards.types';
import { splitContent, parseCard, parseOptions } from './cards.lib';

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
          const list = cards.filter((card) => !state.progress[card.id]?.option);

          const options = parseOptions(cards);

          return { list, cards, options };
        });
      },
      shiftList() {
        set((state) => {
          const [card, ...cards] = state.list;
          const list = state.progress[card.id]?.option ? cards : [...cards, card];

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
