import { shallow } from '@src/lib/store';

import { useCardsStore } from './cards.store';

export function useCardsStatus() {
  return useCardsStore(
    ({ list, cards, progress }) => ({
      hasList: !!list.length,
      hasFinish: !!cards.length && cards.length === Object.keys(progress).length,
    }),
    shallow
  );
}
