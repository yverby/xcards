import { Root } from 'mdast';
import { create } from 'zustand';

import { splitContent, parseCard, parseOptions } from './cards.lib';

type Card = ReturnType<typeof parseCard>;
type Options = ReturnType<typeof parseOptions>;

interface CardsState {
  list: Card[];
  cards: Card[];
  options: Options;
  progress: Options;
}

interface CardsActions {
  shiftList: () => void;
  setProgress: (options: Options) => void;
  parseCards: (content: Root, reset?: boolean) => void;
}

const defaultState: CardsState = {
  list: [],
  cards: [],
  options: {},
  progress: {},
};

export const useCardsStore = create<CardsState & CardsActions>((set) => ({
  ...defaultState,
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
}));
