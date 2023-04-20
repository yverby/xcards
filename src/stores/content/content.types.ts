import { Root } from 'mdast';

import { API } from '@src/constants';

export interface ContentState {
  content: Root | null;
  error: any;
  loading: boolean;
}

export interface ContentActions {
  fetchContent: (locale: API.Locale) => void;
}
