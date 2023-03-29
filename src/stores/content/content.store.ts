import { Root } from 'mdast';
import { create } from 'zustand';
import { unified } from 'unified';
import remark from 'remark-parse';

import { API } from '@src/constants';

interface ContentStore {
  root: Root | null;
  data: string | null;
  error: any;
  loading: boolean;
  fetch: (locale: keyof typeof API.CONTENT) => void;
}

const initial = {
  root: null,
  data: null,
  error: null,
  loading: false,
};

export const useContentStore = create<ContentStore>((set) => ({
  ...initial,
  async fetch(locale) {
    set(() => ({ ...initial, loading: true }));

    try {
      const data = await (await fetch(API.CONTENT[locale])).text();
      const root = unified().use(remark).parse(data);

      if (data.startsWith('404')) {
        throw new Error();
      }

      set(() => ({ ...initial, data, root }));
    } catch (error) {
      set(() => ({ ...initial, error }));
    }
  },
}));
