import { Root } from 'mdast';
import { create } from 'zustand';

import { splitRoot, groupCard } from './cards.lib';

interface CardsState {
  list: ReturnType<typeof groupCard>[];
}

interface CardsActions {
  shiftList: () => void;
  setList: (root: Root, reset?: boolean) => void;
}

const defaultState: CardsState = {
  list: [],
};

export const useCardsStore = create<CardsState & CardsActions>((set) => ({
  ...defaultState,
  shiftList() {
    set((state) => ({
      list: state.list.slice(1).concat(state.list.slice(0, 1)),
    }));
  },
  setList(root) {
    set(() => ({
      list: splitRoot(root).map((item) => groupCard(item)),
    }));
  },
}));
