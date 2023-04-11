import { Root } from 'mdast';
import { create } from 'zustand';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

import { API } from '@src/constants';

interface ContentState {
  content: Root | null;
  error: any;
  loading: boolean;
}

interface ContentActions {
  fetchContent: (locale: keyof typeof API.CONTENT) => void;
}

const defaultState: ContentState = {
  content: null,
  error: null,
  loading: false,
};

export const useContentStore = create<ContentState & ContentActions>((set) => ({
  ...defaultState,
  async fetchContent(locale) {
    set(() => ({ ...defaultState, loading: true }));

    try {
      const res = await fetch(API.CONTENT[locale]);
      const text = await res.text();

      if (text.startsWith('404')) {
        throw new Error();
      }

      const content = unified()
        .use(remarkParse)
        .parse(text.slice(text.indexOf('######') + 1));

      set(() => ({ ...defaultState, content }));
    } catch (error) {
      set(() => ({ ...defaultState, error }));
    }
  },
}));
