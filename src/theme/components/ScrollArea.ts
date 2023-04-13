import { ScrollAreaProps, ScrollAreaStylesNames, ScrollAreaStylesParams } from '@mantine/core';

import { MantineComponentOverride } from '@src/theme/types';

export const ScrollArea: MantineComponentOverride<
  ScrollAreaProps,
  ScrollAreaStylesNames,
  ScrollAreaStylesParams
> = {
  defaultProps() {
    return {
      type: 'always',
      scrollbarSize: 9,
    };
  },
  styles(theme) {
    return {
      thumb: {
        backgroundColor: theme.other.colors.thumb,
      },
      scrollbar: {
        '&:hover': {
          backgroundColor: 'transparent',
        },

        '&[data-orientation=vertical]': {
          top: `${theme.spacing.sm} !important`,
          bottom: `${theme.spacing.sm} !important`,
        },

        '&[data-orientation=horizontal]': {
          left: `${theme.spacing.sm} !important`,
          right: `${theme.spacing.sm} !important`,
        },
      },
    };
  },
};
