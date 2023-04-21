import { ModalProps, ModalStylesNames } from '@mantine/core';

import { MantineComponentOverride } from '@src/theme/types';

export const Modal: MantineComponentOverride<ModalProps, ModalStylesNames, void> = {
  defaultProps() {
    return {
      centered: true,
      withCloseButton: false,
      transitionProps: { transition: 'slide-down' },
    };
  },
  styles(theme) {
    return {
      overlay: {
        backgroundColor: theme.fn.rgba(theme.other.colors.app, 0.9),
      },
      inner: {
        padding: theme.spacing.md,
      },
      content: {
        flex: 'auto',
        width: '100%',
        maxWidth: `calc(${theme.breakpoints.xs} - ${theme.spacing.xl} * 3)`,
        margin: '0 auto',
        boxShadow: 'none',
        backgroundColor: 'transparent',
      },
      body: {
        maxHeight: '100%',
        padding: 0,
        overflow: 'hidden',
      },
    };
  },
};
