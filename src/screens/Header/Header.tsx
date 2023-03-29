import { useEffect } from 'react';

import { useContentStore } from '@src/stores';
import { select, shallow } from '@src/utils/store';

export function Header() {
  const content = useContentStore(select(['fetch']), shallow);

  useEffect(() => {
    content.fetch('EN');
  }, []);

  return null;
}
