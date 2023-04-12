import { rem, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  accordion: {
    borderWidth: rem(1),
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.other.colors.prism,
    fontSize: theme.fontSizes.sm,
  },
  item: {
    border: 'none',
  },
  control: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    cursor: 'pointer',
  },
  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-180deg)',
    },
  },
  content: {
    padding: theme.spacing.md,
    paddingTop: `calc(${theme.spacing.xs} / 4)`,
    pre: {
      borderRadius: theme.spacing.xs,
      backgroundColor: `${theme.other.colors.paper} !important`,
    },
    p: {
      margin: 0,
    },
  },
}));
