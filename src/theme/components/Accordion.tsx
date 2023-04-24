import { IconPlus } from '@tabler/icons-react';
import { rem, AccordionProps, AccordionStylesNames, AccordionStylesParams } from '@mantine/core';

import { MantineComponentOverride } from '@src/theme/types';

export const Accordion: MantineComponentOverride<
  AccordionProps,
  AccordionStylesNames,
  AccordionStylesParams
> = {
  defaultProps() {
    return {
      unstyled: true,
      transitionDuration: 350,
      chevron: <IconPlus size={rem(18)} />,
    };
  },
  styles(theme) {
    return {
      item: {
        borderWidth: rem(1),
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: theme.spacing.sm,
        backgroundColor: theme.other.colors.prism,
        fontSize: theme.fontSizes.sm,

        '&:not(:first-of-type)': {
          marginTop: theme.spacing.sm,
        },
      },
      control: {
        all: 'unset',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box',
        padding: `${rem(11)} ${theme.spacing.md}`,
        cursor: 'pointer',
      },
      label: {
        display: 'flex',
        alignItems: 'center',
      },
      chevron: {
        display: 'flex',
        transition: '150ms ease',
        opacity: 0.75,

        '&[data-rotate]': {
          transform: 'rotate(45deg)',
        },
      },
      content: {
        padding: theme.spacing.md,
        paddingTop: `calc(${theme.spacing.xs} / 4)`,
      },
    };
  },
};
