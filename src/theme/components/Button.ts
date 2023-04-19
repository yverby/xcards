import { ButtonProps, ButtonStylesNames, ButtonStylesParams } from '@mantine/core';

import { MantineComponentOverride } from '@src/theme/types';

export const Button: MantineComponentOverride<ButtonProps, ButtonStylesNames, ButtonStylesParams> =
  {
    variants: {
      action: (theme) => ({
        root: {
          height: 'auto',
          padding: theme.spacing.sm,
          borderRadius: theme.spacing.sm,
          backgroundColor: theme.other.colors.paper,
          lineHeight: 1.15,

          '&:disabled': {
            color: 'inherit',
            backgroundColor: theme.other.colors.paper,
            opacity: 0.4,
          },
        },
        label: {
          overflow: 'inherit',
          whiteSpace: 'normal',
        },
      }),
    },
  };
