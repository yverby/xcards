import { AnchorProps, AnchorStylesParams } from '@mantine/core';

import { MantineComponentOverride } from '@src/theme/types';

export const Anchor: MantineComponentOverride<AnchorProps, '', AnchorStylesParams> = {
  defaultProps(theme) {
    return {
      target: '_blank',
      underline: false,
      color: theme.other.colors.success,
    };
  },
};
