import { BadgeProps, BadgeStylesNames, BadgeStylesParams } from '@mantine/core';

import { MantineComponentOverride } from '@src/theme/types';

export const Badge: MantineComponentOverride<BadgeProps, BadgeStylesNames, BadgeStylesParams> = {
  styles(theme) {
    return {
      root: {
        color: 'inherit',
        backgroundColor: theme.other.colors.prism,
      },
    };
  },
};
