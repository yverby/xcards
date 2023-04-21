import { rem, ButtonProps, ButtonStylesNames, ButtonStylesParams } from '@mantine/core';

import { MantineComponentOverride } from '@src/theme/types';

export const Button: MantineComponentOverride<ButtonProps, ButtonStylesNames, ButtonStylesParams> =
  {
    variants: {
      primary: (theme) => ({
        root: {
          height: 'auto',
          padding: theme.spacing.sm,
          borderWidth: rem(1),
          borderStyle: 'solid',
          borderColor: 'transparent',
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
      secondary: (theme) => ({
        root: {
          height: 'auto',
          padding: theme.spacing.sm,
          borderWidth: rem(1),
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: theme.spacing.sm,
          backgroundColor: theme.other.colors.prism,
          lineHeight: 1.15,

          '&:disabled': {
            color: 'inherit',
            backgroundColor: theme.other.colors.prism,
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
