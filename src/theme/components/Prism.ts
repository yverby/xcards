import { PrismProps, PrismStylesNames, PrismStylesParams } from '@mantine/prism';

import { MantineComponentOverride } from '@src/theme/types';

export const Prism: MantineComponentOverride<PrismProps, PrismStylesNames, PrismStylesParams> = {
  styles(theme) {
    return {
      root: {
        borderRadius: theme.radius.md,
        backgroundColor: theme.other.colors.prism,
        overflow: 'hidden',

        pre: {
          backgroundColor: 'transparent !important',
        },
      },
    };
  },
};
