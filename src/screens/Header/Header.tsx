import { useEffect } from 'react';

import { useContentStore } from '@src/stores';
import { select, shallow } from '@src/utils/store';

export function Header() {
  const content = useContentStore(select(['fetchRoot']), shallow);

  useEffect(() => {
    content.fetchRoot('EN');
  }, []);

  return null;
}
