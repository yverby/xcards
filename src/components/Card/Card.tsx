import { ReactNode } from 'react';
import { Box, Selectors, DefaultProps } from '@mantine/core';

import { useStyles } from './Card.styles';

interface CardProps extends DefaultProps<Selectors<typeof useStyles>> {
  children: ReactNode;
}

export function Card({ styles, children, unstyled, className, classNames, ...props }: CardProps) {
  const { cx, classes } = useStyles(undefined, {
    name: 'Card',
    styles,
    unstyled,
    classNames,
  });

  return (
    <Box component="article" {...props} className={cx(classes.root, className)}>
      {children}
    </Box>
  );
}
