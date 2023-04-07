import { Root } from 'mdast';
import { create } from 'zustand';

import { splitRoot, groupCard, parseOptions } from './cards.lib';

type Card = ReturnType<typeof groupCard>;
type Options = ReturnType<typeof parseOptions>;

interface CardsState {
  list: Card[];
  options: Options;
  progress: Options;
}

interface CardsActions {
  shiftList: () => void;
  setProgress: (options: Options) => void;
  setList: (root: Root, reset?: boolean) => void;
}

const defaultState: CardsState = {
  list: [],
  options: {},
  progress: {},
};

export const useCardsStore = create<CardsState & CardsActions>((set) => ({
  ...defaultState,
  setList(root) {
    set(() => {
      const list = splitRoot(root).map((item) => groupCard(item));
      return { list, options: parseOptions(list) };
    });
  },
  shiftList() {
    set((state) => {
      const [card, ...cards] = state.list;
      return { list: cards.concat(card) };
    });
  },
  setProgress(options) {
    set((state) => {
      const progress = { ...state.progress, ...options };
      return { progress };
    });
  },
}));
