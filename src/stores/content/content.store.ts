import { Root } from 'mdast';
import { create } from 'zustand';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

import { API } from '@src/constants';

interface ContentState {
  root: Root | null;
  error: any;
  loading: boolean;
}

interface ContentActions {
  fetchRoot: (locale: keyof typeof API.CONTENT) => void;
}

const defaultState: ContentState = {
  root: null,
  error: null,
  loading: false,
};

export const useContentStore = create<ContentState & ContentActions>((set) => ({
  ...defaultState,
  async fetchRoot(locale) {
    set(() => ({ ...defaultState, loading: true }));

    try {
      const res = await fetch(API.CONTENT[locale]);
      const text = await res.text();

      if (text.startsWith('404')) {
        throw new Error();
      }

      const root = unified()
        .use(remarkParse)
        .parse(text.slice(text.indexOf('######') + 1));

      set(() => ({ ...defaultState, root }));
    } catch (error) {
      set(() => ({ ...defaultState, error }));
    }
  },
}));
